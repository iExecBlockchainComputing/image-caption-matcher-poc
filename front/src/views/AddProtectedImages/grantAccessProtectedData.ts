import { Address } from '@/types';
import { OnStatusUpdateFn } from '@iexec/dataprotector';
import { getDataProtectorCoreClient } from '@/externals/iexecSdkClient';
import { getUserFriendlyStatues } from '@/utils/getUserFriendlyStatues';

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

  return await dataProtectorCore.grantAccess({
    protectedData: protectedDataAddress,
    authorizedUser: userAddress,
    authorizedApp: import.meta.env.VITE_APP_ADDRESS,
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
  const title = getUserFriendlyStatues(status.title);
  if (title !== 'Unknown status') {
    onStatusUpdate({
      title,
      isDone: status.isDone ?? false,
    });
  }
}
