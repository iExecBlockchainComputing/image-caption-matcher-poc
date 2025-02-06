import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar/NavBar';
import useUserStore from '@/stores/useUser.store';

export function Landing() {
  const { isConnected } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate('/overview');
    }
  }, [isConnected]);

  return (
    <div className="sm:container">
      <NavBar />

      <Footer />
    </div>
  );
}
