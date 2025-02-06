import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '@/stores/useUser.store';

export function Index() {
  const { isConnected } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate('/overview');
    }
  }, [isConnected]);

  return <div className="sm:container"></div>;
}
