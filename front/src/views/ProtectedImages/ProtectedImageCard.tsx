import { Address } from '@/types';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import { getDataProtectorCoreClient } from '@/externals/iexecSdkClient';
import { getCardVisualNumber } from '@/utils/getCardVisualNumber';
import { truncateAddress } from '@/utils/truncateAddress';
import styles from './CardBackground.module.css';

export function ProtectedImageCard({
  address,
  description,
  taskId,
}: {
  address: Address;
  description: string;
  taskId: string;
}) {
  const cardVisualBg = getCardVisualNumber({ address });

  const { data: taskScore } = useQuery({
    queryKey: ['getScore', taskId],
    queryFn: async () => {
      console.log('taskId', taskId);

      const dataProtectorCore = await getDataProtectorCoreClient();
      const { result: taskResult } =
        await dataProtectorCore.getResultFromCompletedTask({
          taskId,
          path: 'result.txt',
        });
      if (!taskResult) {
        return;
      }

      const decoder = new TextDecoder('utf-8');
      const taskScore = decoder.decode(taskResult);

      return Number(taskScore);
    },
    enabled: !!taskId,
  });

  return (
    <div className="bg-grey-900 border-grey-800 flex flex-col overflow-hidden rounded-3xl border">
      <div
        className={clsx(
          styles[cardVisualBg],
          'aspect-10/6 flex grow items-center justify-center bg-cover bg-bottom'
        )}
      />
      <div className="flex flex-col items-center space-y-4 px-4 py-6">
        <div className="flex w-full items-center justify-between gap-2">
          <span className="text-grey-400">{truncateAddress(address)}</span>
          <Button
            variant="chip"
            size="sm"
            className={
              taskScore === undefined
                ? 'before:bg-default-foreground'
                : taskScore <= 35
                  ? 'before:bg-danger-foreground'
                  : taskScore <= 75
                    ? 'before:bg-warning-foreground'
                    : 'before:bg-success-foreground'
            }
          >
            {taskScore != null ? taskScore : '...'}
          </Button>
        </div>
        {description && (
          <div className="w-full space-y-2.5">
            <h2>Description</h2>
            <p className="text-grey-500">{description}</p>
          </div>
        )}
        <Button className="mx-auto" variant="outline" size="sm">
          Edit
        </Button>
      </div>
    </div>
  );
}
