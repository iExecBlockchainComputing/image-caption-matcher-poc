import { Address } from '@/types';
import { OnStatusUpdateFn } from '@iexec/dataprotector';
import { getDataProtectorCoreClient } from '@/externals/iexecSdkClient';

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
  const trackedStatuses = new Set([
    'FETCH_PROTECTED_DATA_ORDERBOOK',
    'FETCH_APP_ORDERBOOK',
    'FETCH_WORKERPOOL_ORDERBOOK',
    'PUSH_REQUESTER_SECRET',
    'REQUEST_TO_PROCESS_PROTECTED_DATA',
    'CONSUME_TASK',
    'CONSUME_RESULT_DOWNLOAD',
    'CONSUME_RESULT_DECRYPT',
  ]);

  if (trackedStatuses.has(status.title)) {
    onStatusUpdate({
      title: status.title,
      isDone: status.isDone ?? false,
    });
  }
}
