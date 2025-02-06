import type { CollectionOwner } from '@iexec/dataprotector';
import { clsx } from 'clsx';
import { Check } from 'react-feather';
import { Link } from 'react-router-dom';
import avatarStyles from '@/modules/profile/profile.module.css';
import { useUserStore } from '@/stores/useUser.store';
import { getAvatarVisualNumber } from '@/utils/getAvatarVisualNumber.ts';
import { getCardVisualNumber } from '@/utils/getCardVisualNumber.ts';
import { nrlcToRlc } from '@/utils/nrlcToRlc.ts';
import { cn } from '@/utils/style.utils';
import { truncateAddress } from '@/utils/truncateAddress.ts';
import styles from './OneCreatorCard.module.css';

export function OneCreatorCard({
  creator,
  className,
  showSubscribedChip,
}: {
  creator: CollectionOwner;
  className?: string;
  showSubscribedChip?: boolean;
}) {
  const userAddress = useUserStore((state) => state.address);

  const cardVisualBg = getCardVisualNumber({
    address: creator.id,
  });

  const avatarVisualBg = getAvatarVisualNumber({
    address: creator.id,
  });

  const firstCollection = creator.collections[0];

  return (
    <div
      className={cn(
        'group/card border-grey-700 flex grow flex-col overflow-hidden rounded-3xl border',
        className
      )}
    >
      <Link
        to="/user/$profileAddress"
        params={{
          profileAddress: creator.id,
        }}
        className="group relative mx-auto flex aspect-[60/40] w-full items-center justify-center overflow-hidden transition-shadow hover:shadow-lg"
      >
        <div
          className={clsx(
            styles[cardVisualBg],
            'h-full w-full bg-cover bg-bottom'
          )}
        >
          &nbsp;
        </div>
      </Link>
      <div className="bg-grey-900 max-w-full grow px-6 py-6">
        <div className="flex">
          <div
            className={clsx(
              avatarStyles[avatarVisualBg],
              'relative mt-1 size-4 shrink-0 rounded-full bg-black bg-cover'
            )}
          />
          <div className="text-grey-50 group ml-2 truncate">
            <span className="inline group-hover:hidden">
              {truncateAddress(creator.id)}
            </span>
            <span className="hidden text-xs group-hover:inline">
              {creator.id}
            </span>
            {userAddress === creator.id && (
              <span className="text-grey-400 inline text-xs group-hover:hidden">
                &nbsp;(your account)
              </span>
            )}
          </div>
        </div>
        {firstCollection?.subscriptionParams && !showSubscribedChip ? (
          <div className="text-grey-500 group-hover/card:text-primary mt-1 font-bold duration-200">
            Subscription {nrlcToRlc(firstCollection.subscriptionParams.price)}{' '}
            RLC
          </div>
        ) : showSubscribedChip ? (
          <div className="text-grey-500 mt-1 inline-flex items-center font-bold">
            Subscribed
            <Check size="16" className="ml-1.5" />
          </div>
        ) : (
          <div className="text-grey-500 mt-1 font-bold">
            No subscription available
          </div>
        )}
        <Link
          to="/user/$profileAddress"
          params={{
            profileAddress: creator.id,
          }}
          className="rounded-30 bg-grey-800 mt-4 inline-flex w-full items-center justify-center px-6 py-2.5 font-semibold"
        >
          Show creator
        </Link>
      </div>
    </div>
  );
}
