import { WorkflowError } from '@iexec/dataprotector';
import { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react';
import { UploadCloud, XCircle } from 'react-feather';
import { create } from 'zustand';
import { Stepper } from '@/components/Stepper';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import useUserStore from '@/stores/useUser.store';
import './CreateNewContent.css';
import { createProtectedData } from './createProtectedData';
import { executeDapp } from './executeDapp';
import { grantAccessProtectedData } from './grantAccessProtectedData';

// const FILE_SIZE_LIMIT_IN_KB = 500;
const FILE_SIZE_LIMIT_IN_KB = 10_000;

// TODO move that to store folder
type OneStatus = {
  title: string;
  isDone?: boolean;
  isError?: boolean;
  payload?: Record<string, string>;
};

type StatusState = {
  statuses: Record<
    string,
    { isDone?: boolean; isError?: boolean; payload?: Record<string, string> }
  >;
  addOrUpdateStatusToStore: (status: OneStatus) => void;
  resetStatuses: () => void;
};

const useStatusStore = create<StatusState>((set) => ({
  statuses: {},
  addOrUpdateStatusToStore: (status) =>
    set((state) => {
      const updatedStatuses = { ...state.statuses };
      updatedStatuses[status.title] = {
        isDone: status.isDone,
        isError: status.isError || false,
        payload: status.payload,
      };
      return { statuses: updatedStatuses };
    }),
  resetStatuses: () => set({ statuses: {} }),
}));

export function CreateNewContent() {
  const { toast } = useToast();
  const { statuses, addOrUpdateStatusToStore, resetStatuses } =
    useStatusStore();
  const { address: userAddress } = useUserStore();

  const [protectedDataAddress, setProtectedDataAddress] = useState('');
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File>();
  const [isLoading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const inputTypeFileRef = useRef<HTMLInputElement>(null);

  const onFileSelected: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const selectedFile = event?.target?.files?.[0];

    if (!selectedFile) {
      return;
    }

    setFileName(selectedFile.name);
    setFile(selectedFile);
  };

  const onSubmitFileForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (!file) {
      toast({
        variant: 'danger',
        title: 'Please upload a file.',
      });
      return;
    }

    const fileSizeInKb = file.size / 1024;
    if (fileSizeInKb > FILE_SIZE_LIMIT_IN_KB) {
      toast({
        variant: 'danger',
        title: 'File is too big',
        description: `Selected file is ${Math.round(fileSizeInKb / 1000)} Mb, should be less than ${FILE_SIZE_LIMIT_IN_KB / 1000} Mb.`,
      });
      return;
    }

    setLoading(true);
    await handleUploadImageStep();
    setLoading(false);
  };

  async function handleUploadImageStep() {
    resetStatuses();

    try {
      const { address: protectedDataAddress } = await createProtectedData({
        file: file!,
        onStatusUpdate: addOrUpdateStatusToStore,
      });
      setProtectedDataAddress(protectedDataAddress);
      await grantAccessProtectedData({
        protectedDataAddress: protectedDataAddress,
        userAddress: userAddress,
        onStatusUpdate: addOrUpdateStatusToStore,
      });
      setCurrentStep(1);
      // resetUploadForm();
    } catch (err: unknown) {
      resetStatuses();

      if (err instanceof WorkflowError) {
        console.error(`[Upload new content] ERROR ${err.cause}`, err);
        return;
      }
      console.error('[Upload new content] ERROR', err, err.data && err.data);
    }
  }

  function resetUploadForm() {
    setFile(undefined);
    setFileName('');
    inputTypeFileRef.current?.value && (inputTypeFileRef.current.value = '');
  }

  async function handleDappExecutionStep() {
    try {
      await executeDapp({
        protectedDataAddress: protectedDataAddress,
        description: 'description',
        onStatusUpdate: addOrUpdateStatusToStore,
      });
    } catch (err: unknown) {
      resetStatuses();

      if (err instanceof WorkflowError) {
        console.error(`[Upload new content] ERROR ${err.cause}`, err);
        return;
      }
      console.error('[Upload new content] ERROR', err, err.data && err.data);
    }
  }

  return (
    <div className="grid gap-10">
      <div className="bg-grey-800 rounded-3xl py-6">
        <Stepper
          currentStep={currentStep}
          steps={['Upload image', 'Describe your protected data']}
        />
      </div>
      <div className="flex gap-x-8">
        <div className="w-full">
          <form
            noValidate
            className="flex w-full flex-col items-center"
            onSubmit={onSubmitFileForm}
          >
            <label className="flex w-full max-w-[550px] items-center justify-center hover:cursor-pointer">
              <input type="file" className="hidden" onChange={onFileSelected} />
              <div className="border-grey-700 bg-grey-700 relative flex min-h-[300px] flex-1 flex-col items-center justify-center rounded-3xl border text-xl text-white">
                <UploadCloud
                  size="58"
                  strokeWidth="1px"
                  className="pointer-events-none"
                />
                <span className="pointer-events-none mt-2 text-lg">
                  Upload file
                </span>
                {!fileName && (
                  <>
                    <span className="pointer-events-none mt-8 text-xs">
                      Drag and drop a file here
                    </span>
                    <span className="text-grey-400 pointer-events-none mt-3 text-xs">
                      JPG, PNG or PDF, file size no more than{' '}
                      {FILE_SIZE_LIMIT_IN_KB / 1000} Mb
                    </span>
                  </>
                )}
                {fileName && (
                  <>
                    <div className="mt-8 flex w-11/12 items-center justify-center gap-x-1.5">
                      <span className="max-w-[80%] truncate text-sm">
                        {fileName}
                      </span>
                      {!isLoading && (
                        <button
                          type="button"
                          className="p-1 text-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            resetUploadForm();
                          }}
                        >
                          <XCircle size="18" />
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </label>

            <div className="mt-6 text-center">
              <Button type="submit" isLoading={isLoading}>
                Continue
              </Button>
              <div className="mt-2 text-xs">Expect it to take total ~1min</div>
            </div>

            {/* <div className="ml-1 mt-3 flex w-full max-w-[550px] flex-col gap-y-0.5 text-sm">
            {Object.keys(statuses).length > 0 && (
              <div className="mt-6">
                {Object.entries(statuses).map(
                  ([message, { isDone, isError }]) => (
                    <div
                      key={message}
                      className={`ml-2 mt-2 flex items-center gap-x-2 px-2 text-left ${isDone ? 'text-grey-500' : isError ? 'text-red-500' : 'text-white'}`}
                    >
                      {isError ? (
                        <XCircle size="20" />
                      ) : isDone ? (
                        <CheckCircle size="20" className="text-primary" />
                      ) : (
                        <LoadingSpinner className="text-primary size-5" />
                      )}
                      {message}
                    </div>
                  )
                )}
              </div>
            )}
          </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}
