import { Address } from '@/types';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import { getCardVisualNumber } from '@/utils/getCardVisualNumber';
import { truncateAddress } from '@/utils/truncateAddress';
import styles from './CardBackground.module.css';

export function ProtectedImageCard({
  id,
  description,
  score,
}: {
  id: Address;
  description: string;
  score: number;
}) {
  const cardVisualBg = getCardVisualNumber({ address: id });

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
          <span className="text-grey-400">{truncateAddress(id)}</span>
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
