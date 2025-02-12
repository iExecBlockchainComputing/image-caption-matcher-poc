import { Outlet } from 'react-router-dom';
import { NavBar } from '@/components/NavBar/NavBar.tsx';
import { TopNavBar } from '@/components/NavBar/TopNavBar.tsx';
import { useWatchAccount } from '@/hooks/useWatchAccount.ts';
import useUserStore from '@/stores/useUser.store.ts';
import { Toaster } from '../components/ui/toaster.tsx';
import ConnectWallet from './ConnectWallet.tsx';

export default function MainLayout() {
  useWatchAccount();
  const { isConnected } = useUserStore();

  return (
    <div className="flex">
      <NavBar />
      <div className="w-full px-10">
        <TopNavBar />
        <div className="mt-10 mb-24 max-w-[1260px] flex-1">
          {!isConnected ? <ConnectWallet /> : <Outlet />}
        </div>
      </div>
      <Toaster />
    </div>
  );
}
