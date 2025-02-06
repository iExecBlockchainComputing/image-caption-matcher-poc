import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { cleanIExecSDKs, initIExecSDKs } from '../externals/iexecSdkClient.ts';
import useUserStore from '../stores/useUser.store.ts';

export function useWatchWagmiAccount() {
  const { connector, isConnected, status, address, chain } = useAccount();
  const { setConnector, setInitialized, setIsConnected, setAddress } =
    useUserStore();
  const queryClient = useQueryClient();

  useEffect(() => {
    // Update userStore
    setConnector(connector);
    setInitialized(status === 'connected' || status === 'disconnected');
    setIsConnected(isConnected);
    setAddress(address);

    // Update dataProtector client
    if (status === 'connected') {
      initIExecSDKs({ connector });
      return;
    }
    cleanIExecSDKs();

    queryClient.removeQueries();
  }, [connector, status, isConnected, address, chain]);
}
