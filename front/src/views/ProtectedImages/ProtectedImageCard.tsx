import { Address } from '@/types';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import { getCardVisualNumber } from '@/utils/getCardVisualNumber';
import { truncateAddress } from '@/utils/truncateAddress';
import styles from './CardBackground.module.css';

export function ProtectedImageCard({ address }: { address: Address }) {
  const cardVisualBg = getCardVisualNumber({ address });
  const score = 80;
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';

  // run poco subgraph to find desc desc is arg of daps result

  // run dataprotector core const completedTaskResult = await dataProtectorCore.getResultFromCompletedTask({
  //   taskId: '0x7ac398...',
  // });

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
              score <= 35
                ? 'before:bg-danger-foreground'
                : score <= 75
                  ? 'before:bg-warning-foreground'
                  : 'before:bg-success-foreground'
            }
          >
            {score}
          </Button>
        </div>
        <div className="space-y-2.5">
          <h2>Description</h2>
          <p className="text-grey-500">{description}</p>
        </div>
        <Button className="mx-auto" variant="outline" size="sm">
          Edit
        </Button>
      </div>
    </div>
  );
}
