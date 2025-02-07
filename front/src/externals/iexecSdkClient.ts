import {
  IExecDataProtector,
  IExecDataProtectorCore,
  IExecDataProtectorSharing,
} from '@iexec/dataprotector';
import { IExec, IExecConfig } from 'iexec';
import { type Connector } from 'wagmi';

let iExecDataProtectorCore: IExecDataProtectorCore | null = null;
let iExecDataProtectorSharing: IExecDataProtectorSharing | null = null;
let iExec: IExec | null = null;

// Basic promise queue for pending getDataProtectorCoreClient() requests
const DATA_PROTECTOR_CORE_CLIENT_RESOLVES: Array<
  Promise<IExecDataProtectorCore>
> = [];
// Basic promise queue for pending getDataProtectorCoreClient() requests
const DATA_PROTECTOR_SHARING_CLIENT_RESOLVES: Array<
  Promise<IExecDataProtectorSharing>
> = [];
// Basic promise queue for pending getIExec() requests
const IEXEC_CLIENT_RESOLVES: Array<Promise<IExec>> = [];

// Clean both SDKs
export function cleanIExecSDKs() {
  iExecDataProtectorCore = null;
  iExecDataProtectorSharing = null;
  iExec = null;
}

export async function initIExecSDKs({ connector }: { connector?: Connector }) {
  if (!connector || !connector.getProvider) {
    cleanIExecSDKs();
    return;
  }

  const provider = await connector.getProvider();
  if (!provider) {
    cleanIExecSDKs();
    return;
  }

  const dataProtectorParent = new IExecDataProtector(provider, {
    iexecOptions: {
      smsURL: 'https://sms.scone-debug.v8-bellecour.iex.ec/',
    },
  });

  iExecDataProtectorCore = dataProtectorParent.core;
  iExecDataProtectorSharing = dataProtectorParent.sharing;

  // Initialize
  const config = new IExecConfig({ ethProvider: provider });
  iExec = new IExec(config);

  DATA_PROTECTOR_CORE_CLIENT_RESOLVES.forEach((resolve) => {
    return resolve(iExecDataProtectorCore);
  });
  DATA_PROTECTOR_CORE_CLIENT_RESOLVES.length = 0;

  DATA_PROTECTOR_SHARING_CLIENT_RESOLVES.forEach((resolve) => {
    return resolve(iExecDataProtectorSharing);
  });
  DATA_PROTECTOR_SHARING_CLIENT_RESOLVES.length = 0;

  IEXEC_CLIENT_RESOLVES.forEach((resolve) => {
    return resolve(iExec);
  });
  IEXEC_CLIENT_RESOLVES.length = 0;
}

export async function getDataProtectorCoreClient(): Promise<IExecDataProtectorCore> {
  if (!iExecDataProtectorCore) {
    return new Promise((resolve) =>
      DATA_PROTECTOR_CORE_CLIENT_RESOLVES.push(resolve)
    );
  }
  return iExecDataProtectorCore;
}

export async function getDataProtectorSharingClient(): Promise<IExecDataProtectorSharing> {
  if (!iExecDataProtectorSharing) {
    return new Promise((resolve) =>
      DATA_PROTECTOR_SHARING_CLIENT_RESOLVES.push(resolve)
    );
  }
  return iExecDataProtectorSharing;
}

export function getIExec(): Promise<IExec> {
  if (!iExec) {
    return new Promise((resolve) => {
      IEXEC_CLIENT_RESOLVES.push(resolve);
    });
  }
  return Promise.resolve(iExec);
}
