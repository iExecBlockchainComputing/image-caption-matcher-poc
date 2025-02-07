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
  const images = [
    {
      id: '0x908ab1ca1fb0179253534d8b5f7777b8499b34f2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      score: 80,
    },
    {
      id: '0x908ab1ca1fb0179253534d8b5f7777b8499b34f2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      score: 50,
    },
    {
      id: '0x908ab1ca1fb0179253534d8b5f7777b8499b34f2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      score: 10,
    },
    {
      id: '0x908ab1ca1fb0179253534d8b5f7777b8499b34f2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      score: 25,
    },
  ];

  return (
    <div className="grid gap-10">
      <div className="flex justify-between">
        <h1>My Protected Images</h1>
        {images.length !== 0 && (
          <Button asChild size="lg">
            <Link to="/protected-images/new">
              Protect new image
              <Plus />
            </Link>
          </Button>
        )}
      </div>
      <div className="">
        {images.length === 0 ? (
          <div className="bg-grey-700 grid gap-10 py-10">
            No protected images yet
            <Button>Protect new image</Button>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] gap-5">
            {images.map((image) => (
              <ProtectedImageCard {...image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
