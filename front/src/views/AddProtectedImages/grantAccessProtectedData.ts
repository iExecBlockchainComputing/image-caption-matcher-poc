import { Address } from '@/types';
import { OnStatusUpdateFn } from '@iexec/dataprotector';
import { getDataProtectorCoreClient } from '@/externals/iexecSdkClient';

export const PROTECTED_DATA_TARGET_KEY = 'targetImageCaptionMatcherPoc';

type GrantAccessStatusUpdateFn = (params: {
  title: string;
  isDone: boolean;
  payload?: Record<string, string>;
}) => void;

export async function grantAccessProtectedData({
  protectedDataAddress,
  userAddress,
  onStatusUpdate,
}: {
  protectedDataAddress: Address;
  userAddress: Address;
  onStatusUpdate: GrantAccessStatusUpdateFn;
}) {
  const dataProtectorCore = await getDataProtectorCoreClient();

  onStatusUpdate({
    title: 'Grant access to iDapp',
    isDone: false,
  });

  return await dataProtectorCore.grantAccess({
    protectedData: protectedDataAddress,
    authorizedUser: userAddress,
    authorizedApp: '0xc8c5e295d2beda01d1fb8dd4d85a1cb769185a34',
    numberOfAccess: 100,
    onStatusUpdate: (status) => {
      keepInterestingStatusUpdates(onStatusUpdate, status);
    },
  });
}

function keepInterestingStatusUpdates(
  onStatusUpdate: GrantAccessStatusUpdateFn,
  status: OnStatusUpdateFn
) {
  if (status.title === 'CREATE_DATASET_ORDER' && status.isDone === true) {
    onStatusUpdate({
      title: 'Grant access to iDapp',
      isDone: true,
    });

    onStatusUpdate({
      title: 'PUBLISH_DATASET_ORDER',
      isDone: false,
    });
  }

  if (status.title === 'PUBLISH_DATASET_ORDER' && status.isDone === true) {
    onStatusUpdate({
      title: 'PUBLISH_DATASET_ORDER',
      isDone: true,
    });
  }
}
