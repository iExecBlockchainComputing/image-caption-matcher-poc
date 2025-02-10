import { WorkflowError } from '@iexec/dataprotector';
import { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react';
import { CheckCircle, UploadCloud, XCircle } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { create } from 'zustand';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Stepper } from '@/components/Stepper';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import useUserStore from '@/stores/useUser.store';
import './CreateNewContent.css';
import { createProtectedData } from './createProtectedData';
import { executeDapp } from './executeDapp';
import { grantAccessProtectedData } from './grantAccessProtectedData';

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
    set((state) => ({
      statuses: {
        ...state.statuses,
        [status.title]: {
          isDone: status.isDone,
          isError: status.isError ?? false,
          payload: status.payload,
        },
      },
    })),
  resetStatuses: () => set({ statuses: {} }),
}));

export function CreateNewContent() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { statuses, addOrUpdateStatusToStore, resetStatuses } =
    useStatusStore();
  const { address: userAddress } = useUserStore();

  const [protectedDataAddress, setProtectedDataAddress] = useState('');
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File>();
  const [isLoading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [description, setDescription] = useState('');

  const inputTypeFileRef = useRef<HTMLInputElement>(null);

  function handleError(err: unknown) {
    if (err instanceof WorkflowError) {
      console.error(`[Upload new content] ERROR ${err.cause}`, err);
    } else {
      console.error('[Upload new content] ERROR', err, err.data && err.data);
    }
  }

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
    await handleUploadImageStep();
  };

  async function handleUploadImageStep() {
    resetStatuses();
    setLoading(true);
    try {
      const { address: protectedDataAddress } = await createProtectedData({
        file: file!,
        onStatusUpdate: addOrUpdateStatusToStore,
      });
      setProtectedDataAddress(protectedDataAddress);
      await grantAccessProtectedData({
        protectedDataAddress,
        userAddress,
        onStatusUpdate: addOrUpdateStatusToStore,
      });
      setCurrentStep(1);
    } catch (err: unknown) {
      resetStatuses();
      handleError(err);
    } finally {
      setLoading(false);
      resetStatuses();
    }
  }

  function resetUploadForm() {
    setFile(undefined);
    setFileName('');
    inputTypeFileRef.current?.value && (inputTypeFileRef.current.value = '');
  }

  const onSubmitDescriptionForm: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    if (!description) {
      toast({
        variant: 'danger',
        title: 'Please enter a description.',
      });
      return;
    }

    setLoading(true);
    await handleDappExecutionStep();
    setLoading(false);
  };

  async function handleDappExecutionStep() {
    resetStatuses();
    setLoading(true);
    try {
      await executeDapp({
        protectedDataAddress: protectedDataAddress,
        description,
        onStatusUpdate: addOrUpdateStatusToStore,
      });
    } catch (err: unknown) {
      resetStatuses();
      handleError(err);
    } finally {
      setLoading(false);
      navigate('/protected-images');
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
        <div className="w-full space-y-5">
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
            {currentStep === 0 && (
              <div className="mt-6 text-center">
                <Button type="submit" isLoading={isLoading}>
                  Protect image
                </Button>
                <div className="mt-2 text-xs">
                  Expect it to take total ~1min
                </div>
              </div>
            )}
          </form>
          {currentStep === 1 && (
            <form
              onSubmit={onSubmitDescriptionForm}
              className="mx-auto grid max-w-[550px] gap-5"
            >
              <h2 className="mx-auto font-sans text-2xl font-bold">
                Describe your protected data
              </h2>
              <div className="space-y-1">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short example of a description text"
                  className="bg-grey-700 border-grey-600 w-full rounded-lg p-4"
                />
              </div>
              <div className="mt-6 text-center">
                <Button type="submit" isLoading={isLoading}>
                  Validate description
                </Button>
                <div className="mt-2 text-xs">
                  Expect it to take total ~5min
                </div>
              </div>
            </form>
          )}
          <div className="ml-1 mt-3 flex w-full max-w-[550px] flex-col gap-y-0.5 text-sm">
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
          </div>
        </div>
      </div>
    </div>
  );
}
