import { Address } from '@/types.ts';
import type { Connector } from 'wagmi';
import { create } from 'zustand';

type UserState = {
  connector: Connector | undefined;
  setConnector: (param: Connector | undefined) => void;
  isConnected: boolean;
  setIsConnected: (param: boolean) => void;
  isInitialized: boolean;
  setInitialized: (isInitialized: boolean) => void;
  address: Address | undefined;
  setAddress: (param: Address | undefined) => void;
  chainId: number | undefined;
  setChainId: (param: number | undefined) => void;
};

const useUserStore = create<UserState>((set) => ({
  connector: undefined,
  setConnector: (connector: Connector | undefined) => set({ connector }),
  isConnected: false,
  setIsConnected: (isConnected: boolean) => set({ isConnected }),
  isInitialized: false,
  setInitialized: (isInitialized) => set({ isInitialized }),
  address: undefined,
  setAddress: (address: Address | undefined) => {
    set({ address: address?.toLowerCase() as Address });
  },
  chainId: undefined,
  setChainId: (chainId: number | undefined) => {
    set({ chainId: chainId });
  },
}));

export default useUserStore;
