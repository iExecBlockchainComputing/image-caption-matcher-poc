import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { cleanIExecSDKs, initIExecSDKs } from '@/externals/iexecSdkClient.ts';
import useUserStore from '@/stores/useUser.store';

export function useWatchWagmiAccount() {
  const { connector, status, address, chain } = useAccount();
  const {
    setConnector,
    setIsConnected,
    setAddress,
    setChainId,
  } = useUserStore();

  useEffect(() => {
    // Update userStore
    setConnector(connector);
    setIsConnected(status === 'connected');
    setAddress(address);
    setChainId(chain?.id);

    // Update dataProtector client
    if (status === 'connected') {
      initIExecSDKs({ connector });
      return;
    }
    cleanIExecSDKs();
  }, [connector, status, address, chain]);
}
