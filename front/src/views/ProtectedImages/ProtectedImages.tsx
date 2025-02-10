import { useQuery } from '@tanstack/react-query';
import { Plus } from 'react-feather';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getDataProtectorCoreClient } from '@/externals/iexecSdkClient';
import useUserStore from '@/stores/useUser.store';
import { ProtectedImageCard } from './ProtectedImageCard';

export function ProtectedImages() {
  const { address } = useUserStore();

  const {
    isLoading,
    isError,
    error,
    data: protectedDatas,
  } = useQuery({
    queryKey: ['latestContent'],
    queryFn: async () => {
      const dataProtectorCore = await getDataProtectorCoreClient();
      const protectedDatas = await dataProtectorCore.getProtectedData({
        owner: address,
        requiredSchema: {
          targetImageCaptionMatcherPoc: 'bool',
        },
      });
      console.log('protectedData', protectedDatas);
      // Need to add the score to the protectedData
      return protectedDatas;
    },
  });

  return (
    <div className="grid gap-10">
      <div className="flex justify-between">
        <h1>My Protected Images</h1>
        {protectedDatas && protectedDatas.length !== 0 && (
          <Button asChild size="lg">
            <Link to="/protected-images/new">
              Protect new image
              <Plus />
            </Link>
          </Button>
        )}
      </div>
      <div className="">
        {!protectedDatas || protectedDatas.length === 0 ? (
          <div className="bg-grey-700 grid items-center justify-center gap-10 rounded-3xl py-10">
            No protected images yet
            <Button asChild>
              <Link to="/protected-images/new">Protect new image</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] gap-5">
            {protectedDatas.map((protectedData) => (
              <ProtectedImageCard
                key={protectedData.address}
                address={protectedData.address}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
