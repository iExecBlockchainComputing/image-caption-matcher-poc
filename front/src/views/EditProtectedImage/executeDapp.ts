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

export async function executeDapp({
  protectedDataAddress,
  description,
  onStatusUpdate,
}: {
  protectedDataAddress: Address;
  description: string;
  onStatusUpdate: GrantAccessStatusUpdateFn;
}) {
  const dataProtectorCore = await getDataProtectorCoreClient();

  return await dataProtectorCore.processProtectedData({
    protectedData: protectedDataAddress,
    app: import.meta.env.VITE_APP_ADDRESS,
    workerpool: import.meta.env.VITE_WORKERPOOL_ADDRESS,
    args: description,
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
