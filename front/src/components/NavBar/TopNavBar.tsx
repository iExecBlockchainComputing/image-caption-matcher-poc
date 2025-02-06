import { LogOut } from 'react-feather';
import { useLoginLogout } from '@/hooks/useLoginLogout';
import useUserStore from '@/stores/useUser.store';
import { AddressChip } from './AddressChip';

// import { Imitate } from './NavBar/Imitate.tsx';

export function TopNavBar() {
  const { isConnected, address } = useUserStore();
  const { logout } = useLoginLogout();

  return (
    <>
      {isConnected && (
        <div className="flex w-full max-w-[1260px] items-center justify-end pr-9 pt-5 lg:pr-0 lg:pt-10">
          <AddressChip address={address!} className="ml-6" />
          <button
            type="button"
            className="hover:drop-shadow-link-hover -mr-1 ml-2 p-1"
            onClick={() => logout()}
          >
            <LogOut size="20" />
          </button>
        </div>
      )}
    </>
  );
}
