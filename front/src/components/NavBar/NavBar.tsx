import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import { LogOut } from 'react-feather';
import { Link } from 'react-router-dom';
import useUserStore from '@/stores/useUser.store.ts';
import { cn } from '@/utils/style.utils.ts';
import iExecLogo from '../../assets/iexec-logo.svg';
import { useLoginLogout } from '../../hooks/useLoginLogout.ts';
import { Button } from '../ui/button.tsx';
import { AddressChip } from './AddressChip.tsx';

export function NavBar({ className }: { className?: string }) {
  const { isConnected, address } = useUserStore();
  const { login, logout } = useLoginLogout();

  return (
    <header
      className={cn(
        'bg-grey-900 sticky top-0 z-20 flex h-[64px] items-center justify-between px-2 text-white drop-shadow-[0_0_10px_rgb(0,0,0)] sm:px-8',
        className
      )}
    >
      <div className="py-2">
        <div className="-mx-2 flex h-full items-center p-2">
          <Link to={'/'} className="shrink-0">
            <img src={iExecLogo} width="25" height="30" alt="iExec logo" />
          </Link>

          <div className="ml-3">
            <Link to={'/'}>
              <div className="font-mono font-bold leading-5">
                Content Creator
              </div>
            </Link>
            <div className="border-primary text-primary mt-1 rounded-xl border px-2.5 py-px text-xs">
              <span className="font-bold">DEMO APP</span> for{' '}
              <a
                href="https://beta.tools.docs.iex.ec/tools/dataProtector.html"
                target="_blank"
                className="inline-flex items-center hover:underline"
              >
                dataprotector-sdk
              </a>
            </div>
          </div>
        </div>
      </div>

      {isConnected ? (
        <div className="mb-16 hidden flex-1 flex-col justify-center gap-y-4 pl-4 group-has-[:checked]:flex md:mb-0 md:flex md:translate-y-0 md:flex-row md:items-center md:justify-end lg:ml-4">
          <div className="flex flex-col gap-y-4 md:mx-2 md:flex-row md:items-start md:gap-x-2 md:text-base lg:ml-6 lg:mr-8 lg:gap-x-5 xl:mr-20 xl:gap-x-16">
            <Link to={'/explore'} className="hover:drop-shadow-link-hover p-1">
              Explore
            </Link>
            <Link to={'/rent'} className="hover:drop-shadow-link-hover p-1">
              Rent
            </Link>
            <Link
              to={'/subscribe'}
              className="hover:drop-shadow-link-hover p-1"
            >
              Subscribe
            </Link>
            <Link
              to={'/my-content'}
              className="hover:drop-shadow-link-hover p-1"
            >
              Manage
            </Link>
          </div>

          <div className="-order-1 mb-4 flex md:order-none md:mb-0">
            <AddressChip className="md:hidden lg:flex" address={address!} />
            <button
              type="button"
              className="hover:drop-shadow-link-hover -mr-2 ml-2 p-1"
              onClick={() => logout()}
            >
              <LogOut size="25" />
            </button>
          </div>
          <div className="bg-grey-700 mx-4 hidden h-[36px] w-px md:block"></div>
        </div>
      ) : (
        <div className="items-center">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              login();
            }}
          >
            Connect wallet
          </Button>
        </div>
      )}
    </header>
  );
}
