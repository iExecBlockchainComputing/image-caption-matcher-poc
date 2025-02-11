import { Address } from '@/types';
import { WorkflowError } from '@iexec/dataprotector';
import { useQuery } from '@tanstack/react-query';
import { FormEventHandler, useState } from 'react';
import { CheckCircle, XCircle } from 'react-feather';
import { useNavigate, useParams } from 'react-router-dom';
import { create } from 'zustand';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Stepper } from '@/components/Stepper';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getAppUsage } from '@/externals/getAppUsageQuery';
import { executeDapp } from '@/modules/executeDapp';
import useUserStore from '@/stores/useUser.store';
import './CreateNewContent.css';

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
  const { protectedDataAddress } = useParams<{
    protectedDataAddress: Address;
  }>();

  const [isLoading, setLoading] = useState(false);
  const [description, setDescription] = useState('');

  const { data: appUsages } = useQuery({
    queryKey: ['appUsage', protectedDataAddress],
    queryFn: async () => {
      if (!userAddress || !protectedDataAddress) {
        return [];
      }
      const apps = await getAppUsage({
        appAddress: import.meta.env.VITE_APP_ADDRESS,
        userAddress,
        protectedDataAddress,
      });

      const app = apps[0];
      const appUsages =
        app?.usages.map((usage) => ({
          datasetId: usage.dataset?.id,
          taskId: usage.tasks[0].id,
          params: usage.params,
          iexecArgs: JSON.parse(usage.params)?.iexec_args ?? null,
        })) ?? [];

      return appUsages;
    },
    enabled: !!userAddress && !!protectedDataAddress,
  });

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
    await handleDappExecution();
    setLoading(false);
  };

  async function handleDappExecution() {
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
      if (err instanceof WorkflowError) {
        console.error(`[Upload new content] ERROR ${err.cause}`, err);
      } else {
        console.error('[Upload new content] ERROR', err, err.data && err.data);
      }
    } finally {
      setLoading(false);
      navigate('/protected-images');
    }
  }

  return (
    <div className="grid gap-10">
      <div className="bg-grey-800 rounded-3xl py-6">
        <Stepper
          currentStep={1}
          steps={['Upload image', 'Edit your protected data description']}
        />
      </div>
      <div className="flex gap-x-8">
        <div className="w-full space-y-5">
          <form
            onSubmit={onSubmitDescriptionForm}
            className="mx-auto grid max-w-[550px] gap-5"
          >
            <h2 className="mx-auto font-sans text-2xl font-bold">
              Edit your protected data description
            </h2>
            <div className="space-y-1">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Short example of a description text"
                className="bg-grey-700 border-grey-600 w-full rounded-lg p-4"
                defaultValue={
                  appUsages && appUsages.length > 0
                    ? appUsages[0].iexecArgs
                    : ''
                }
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <Button type="submit" isLoading={isLoading}>
                Validate description
              </Button>
              <div className="mt-2 text-xs">Expect it to take total ~5min</div>
            </div>
          </form>
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
