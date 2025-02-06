import '@fontsource-variable/anybody/wdth.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/mulish/latin-200.css';
import '@fontsource/mulish/latin-400.css';
import '@fontsource/mulish/latin-500.css';
import '@fontsource/mulish/latin-600.css';
import '@fontsource/mulish/latin-700.css';
import '@fontsource/mulish/latin-800.css';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { ConditionalRollbarWrapper } from '@/components/ConditionalRollbarWrapper.tsx';
import { initQueryClient } from '@/utils/initQueryClient.ts';
import { initRollbarAlerting } from '@/utils/initRollbarAlerting.ts';
import { Toaster } from './components/ui/toaster.tsx';
import './index.css';
import { router } from './router.tsx';
import { wagmiAdapter } from './utils/wagmiConfig.ts';

const { rollbar, rollbarConfig } = initRollbarAlerting();

const queryClient = initQueryClient({ rollbar });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConditionalRollbarWrapper
          rollbar={rollbar}
          rollbarConfig={rollbarConfig}
        >
          <RouterProvider router={router} />
        </ConditionalRollbarWrapper>
      </QueryClientProvider>
    </WagmiProvider>
    <Toaster />
  </React.StrictMode>
);
