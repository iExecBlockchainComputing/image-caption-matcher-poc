import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster.tsx';
// import RequireAuth from './components/RequireAuth.tsx';
import { useWatchWagmiAccount } from './hooks/useWatchWagmiAccount.ts';
import { Landing } from './views/Landing.tsx';

function App() {
  useWatchWagmiAccount();

  return (
    <BrowserRouter>
      {/* <ScrollToTop> */}
      <Routes>
        {/* <Route
            path="/overview"
            element={
              <RequireAuth>
                <Overview />
              </RequireAuth>
            }
          /> */}
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
      {/* </ScrollToTop> */}
    </BrowserRouter>
  );
}

export default App;
