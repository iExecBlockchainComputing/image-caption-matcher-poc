export function getUserFriendlyStatues(status: string) {
  const statusMessages = {
    DEPLOY_PROTECTED_DATA:
      'Create protected data into DataProtector registry smart-contract',
    PUSH_SECRET_TO_SMS: 'Push protected data encryption key to iExec SMS',
    CREATE_DATASET_ORDER: 'Grant access to iDapp',
    PUBLISH_DATASET_ORDER: 'Publishing dataset order',
    // FETCH_PROTECTED_DATA_ORDERBOOK: 'Fetching protected data orderbook',
    // FETCH_APP_ORDERBOOK: 'Fetching app orderbook',
    // FETCH_WORKERPOOL_ORDERBOOK: 'Fetching workerpool orderbook',
    // PUSH_REQUESTER_SECRET: 'Pushing requester secret',
    REQUEST_TO_PROCESS_PROTECTED_DATA: 'Requesting to process protected data',
    CONSUME_TASK: 'Running iDapp in enclave (Expect it to take ~5min)',
    CONSUME_RESULT_DOWNLOAD: 'Downloading results',
    CONSUME_RESULT_DECRYPT: 'Decrypting results',
  };

  return statusMessages[status] || 'Unknown status';
}
