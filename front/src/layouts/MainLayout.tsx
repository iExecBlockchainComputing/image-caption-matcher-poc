import { Outlet } from 'react-router-dom';
import { NavBar } from '@/components/NavBar/NavBar.tsx';
import { TopNavBar } from '@/components/NavBar/TopNavBar.tsx';
import ConnectWallet from '@/modules/ConnectWallet.tsx';
import useUserStore from '@/stores/useUser.store.ts';
import { Toaster } from '../components/ui/toaster.tsx';
import { useWatchWagmiAccount } from '../utils/watchWagmiAccount.ts';

export default function MainLayout() {
  useWatchWagmiAccount();
  const isConnected = useUserStore();

  return (
    <div className="flex">
      <NavBar />
      <div className="w-full px-10">
        <TopNavBar />
        <div className="mb-24 mt-10 max-w-[1260px] flex-1">
          {isConnected ? <ConnectWallet /> : <Outlet />}
        </div>
      </div>
      <Toaster />
    </div>
  );
}
