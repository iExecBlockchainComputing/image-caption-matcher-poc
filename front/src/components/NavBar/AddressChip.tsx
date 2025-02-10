import { clsx } from 'clsx';
import { getAvatarVisualNumber } from '@/utils/getAvatarVisualNumber.ts';
import { cn } from '@/utils/style.utils.ts';
import { truncateAddress } from '@/utils/truncateAddress.ts';
import { useToast } from '../ui/use-toast.ts';
import avatarStyles from './profile.module.css';

type AddressForNavBarProps = {
  address: string;
  className?: string;
};

export function AddressChip(props: AddressForNavBarProps) {
  const { address, className } = props;

  const { toast } = useToast();

  const avatarVisualBg = getAvatarVisualNumber({
    address,
  });

  const displayAddress = truncateAddress(address);

  return (
    <div
      className={cn(
        'bg-grey-700 flex shrink-0 items-center rounded-[30px] px-3 py-2',
        className
      )}
    >
      <div className="text-primary text-sm font-medium">{displayAddress}</div>
      <button
        className="bg-grey-700 -my-0.5 -mr-0.5 ml-1.5 shrink-0 px-0.5 py-0.5"
        onClick={() => {
          navigator.clipboard.writeText(address.toLowerCase());
          toast({
            title: 'Address copied!',
            duration: 1200,
          });
        }}
      >
        <div
          className={clsx(
            avatarStyles[avatarVisualBg],
            'relative z-10 size-4 rounded-full bg-black bg-cover'
          )}
        />
      </button>
    </div>
  );
}
