import {
  createArrayBufferFromFile,
  type OneProtectDataStatus,
} from '@iexec/dataprotector';
import { getDataProtectorCoreClient } from '@/externals/iexecSdkClient';
import { getUserFriendlyStatues } from '@/utils/getUserFriendlyStatues';

export const PROTECTED_DATA_TARGET_KEY = 'targetImageCaptionMatcherPoc';

type CreateProtectedDataStatusUpdateFn = (params: {
  title: string;
  isDone: boolean;
  payload?: Record<string, string>;
}) => void;

export async function createProtectedData({
  file,
  onStatusUpdate,
}: {
  file: File;
  onStatusUpdate: CreateProtectedDataStatusUpdateFn;
}) {
  const dataProtectorCore = await getDataProtectorCoreClient();

  const fileAsArrayBuffer = await createArrayBufferFromFile(file);

  return dataProtectorCore.protectData({
    data: {
      image: fileAsArrayBuffer,
      targetImageCaptionMatcherPoc: true,
    },
    name: file.name,
    onStatusUpdate: (status) => {
      keepInterestingStatusUpdates(onStatusUpdate, status);
    },
  });
}

function keepInterestingStatusUpdates(
  onStatusUpdate: CreateProtectedDataStatusUpdateFn,
  status: OneProtectDataStatus
) {
  const title = getUserFriendlyStatues(status.title);
  if (title !== 'Unknown status') {
    onStatusUpdate({
      title,
      isDone: status.isDone ?? false,
    });
  }
}
