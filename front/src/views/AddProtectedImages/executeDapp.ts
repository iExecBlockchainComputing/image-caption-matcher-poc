import { getDataProtectorCoreClient } from '@/externals/iexecSdkClient';
import { Address } from '@/types';
import {
  OnStatusUpdateFn,
} from '@iexec/dataprotector';
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

  onStatusUpdate({
    title: 'Grant access to iDapp',
    isDone: false,
  });

  return await dataProtectorCore.processProtectedData({  
    protectedData: protectedDataAddress,  
    app: '0xc8c5e295d2beda01d1fb8dd4d85a1cb769185a34',  
    workerpool: 'debug-v8-learn.main.pools.iexec.eth',  
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

  'FETCH_PROTECTED_DATA_ORDERBOOK';
  'FETCH_APP_ORDERBOOK';
  'FETCH_WORKERPOOL_ORDERBOOK';
  'PUSH_REQUESTER_SECRET';
  'REQUEST_TO_PROCESS_PROTECTED_DATA';
  'CONSUME_TASK';
  'CONSUME_RESULT_DOWNLOAD';
  'CONSUME_RESULT_DECRYPT';
  // TODO use these status to update the UI

  if (status.title === 'CREATE_DATASET_ORDER' && status.isDone === true) {
    onStatusUpdate({
      title: 'Grant access to iDapp',
      isDone: true,
      // payload: status.payload,
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
