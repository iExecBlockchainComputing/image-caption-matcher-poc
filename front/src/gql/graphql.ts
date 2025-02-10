/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: number; output: number; }
  Bytes: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  apps: Array<App>;
  balance: Scalars['BigDecimal']['output'];
  contributions: Array<Contribution>;
  datasets: Array<Dataset>;
  dealBeneficiary: Array<Deal>;
  dealCallback: Array<Deal>;
  dealRequester: Array<Deal>;
  events: Array<AccountEvent>;
  frozen: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  orderBeneficiary: Array<RequestOrder>;
  orderCallback: Array<RequestOrder>;
  orderRequester: Array<RequestOrder>;
  score: Scalars['BigInt']['output'];
  taskRequester: Array<Task>;
  transactions: Array<Transaction>;
  transfersFrom: Array<Transfer>;
  transfersTo: Array<Transfer>;
  workerpools: Array<Workerpool>;
};


export type AccountAppsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<App_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<App_Filter>;
};


export type AccountContributionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Contribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Contribution_Filter>;
};


export type AccountDatasetsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Dataset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Dataset_Filter>;
};


export type AccountDealBeneficiaryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};


export type AccountDealCallbackArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};


export type AccountDealRequesterArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};


export type AccountEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountEvent_Filter>;
};


export type AccountOrderBeneficiaryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestOrder_Filter>;
};


export type AccountOrderCallbackArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestOrder_Filter>;
};


export type AccountOrderRequesterArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestOrder_Filter>;
};


export type AccountTaskRequesterArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Task_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Task_Filter>;
};


export type AccountTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Transaction_Filter>;
};


export type AccountTransfersFromArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Transfer_Filter>;
};


export type AccountTransfersToArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Transfer_Filter>;
};


export type AccountWorkerpoolsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Workerpool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Workerpool_Filter>;
};

export type AccountEvent = {
  account: Account;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type AccountEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AccountEvent_OrderBy {
  Account = 'account',
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  apps_?: InputMaybe<App_Filter>;
  balance?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  contributions_?: InputMaybe<Contribution_Filter>;
  datasets_?: InputMaybe<Dataset_Filter>;
  dealBeneficiary_?: InputMaybe<Deal_Filter>;
  dealCallback_?: InputMaybe<Deal_Filter>;
  dealRequester_?: InputMaybe<Deal_Filter>;
  frozen?: InputMaybe<Scalars['BigDecimal']['input']>;
  frozen_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  frozen_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  frozen_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  frozen_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  frozen_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  frozen_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  frozen_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  orderBeneficiary_?: InputMaybe<RequestOrder_Filter>;
  orderCallback_?: InputMaybe<RequestOrder_Filter>;
  orderRequester_?: InputMaybe<RequestOrder_Filter>;
  score?: InputMaybe<Scalars['BigInt']['input']>;
  score_gt?: InputMaybe<Scalars['BigInt']['input']>;
  score_gte?: InputMaybe<Scalars['BigInt']['input']>;
  score_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  score_lt?: InputMaybe<Scalars['BigInt']['input']>;
  score_lte?: InputMaybe<Scalars['BigInt']['input']>;
  score_not?: InputMaybe<Scalars['BigInt']['input']>;
  score_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  taskRequester_?: InputMaybe<Task_Filter>;
  transactions_?: InputMaybe<Transaction_Filter>;
  transfersFrom_?: InputMaybe<Transfer_Filter>;
  transfersTo_?: InputMaybe<Transfer_Filter>;
  workerpools_?: InputMaybe<Workerpool_Filter>;
};

export enum Account_OrderBy {
  Apps = 'apps',
  Balance = 'balance',
  Contributions = 'contributions',
  Datasets = 'datasets',
  DealBeneficiary = 'dealBeneficiary',
  DealCallback = 'dealCallback',
  DealRequester = 'dealRequester',
  Events = 'events',
  Frozen = 'frozen',
  Id = 'id',
  OrderBeneficiary = 'orderBeneficiary',
  OrderCallback = 'orderCallback',
  OrderRequester = 'orderRequester',
  Score = 'score',
  TaskRequester = 'taskRequester',
  Transactions = 'transactions',
  TransfersFrom = 'transfersFrom',
  TransfersTo = 'transfersTo',
  Workerpools = 'workerpools'
}

export type AccurateContribution = AccountEvent & {
  __typename?: 'AccurateContribution';
  account: Account;
  contribution: Contribution;
  id: Scalars['ID']['output'];
  score: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type AccurateContribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution?: InputMaybe<Scalars['String']['input']>;
  contribution_?: InputMaybe<Contribution_Filter>;
  contribution_contains?: InputMaybe<Scalars['String']['input']>;
  contribution_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution_ends_with?: InputMaybe<Scalars['String']['input']>;
  contribution_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution_gt?: InputMaybe<Scalars['String']['input']>;
  contribution_gte?: InputMaybe<Scalars['String']['input']>;
  contribution_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contribution_lt?: InputMaybe<Scalars['String']['input']>;
  contribution_lte?: InputMaybe<Scalars['String']['input']>;
  contribution_not?: InputMaybe<Scalars['String']['input']>;
  contribution_not_contains?: InputMaybe<Scalars['String']['input']>;
  contribution_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contribution_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contribution_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contribution_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution_starts_with?: InputMaybe<Scalars['String']['input']>;
  contribution_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  score?: InputMaybe<Scalars['BigInt']['input']>;
  score_gt?: InputMaybe<Scalars['BigInt']['input']>;
  score_gte?: InputMaybe<Scalars['BigInt']['input']>;
  score_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  score_lt?: InputMaybe<Scalars['BigInt']['input']>;
  score_lte?: InputMaybe<Scalars['BigInt']['input']>;
  score_not?: InputMaybe<Scalars['BigInt']['input']>;
  score_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AccurateContribution_OrderBy {
  Account = 'account',
  Contribution = 'contribution',
  Id = 'id',
  Score = 'score',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type App = Ressource & {
  __typename?: 'App';
  checksum: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  mrenclave: Scalars['Bytes']['output'];
  multiaddr: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  orders: Array<AppOrder>;
  owner: Account;
  timestamp: Scalars['BigInt']['output'];
  transfers: Array<AppTransfer>;
  type: Scalars['String']['output'];
  usages: Array<Deal>;
};


export type AppOrdersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AppOrder_Filter>;
};


export type AppTransfersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AppTransfer_Filter>;
};


export type AppUsagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};

export type AppOrder = {
  __typename?: 'AppOrder';
  app: App;
  appprice: Scalars['BigDecimal']['output'];
  datasetrestrict?: Maybe<Scalars['Bytes']['output']>;
  deals: Array<Deal>;
  id: Scalars['ID']['output'];
  requesterrestrict?: Maybe<Scalars['Bytes']['output']>;
  salt?: Maybe<Scalars['Bytes']['output']>;
  sign?: Maybe<Scalars['Bytes']['output']>;
  tag?: Maybe<Scalars['Bytes']['output']>;
  volume?: Maybe<Scalars['BigInt']['output']>;
  workerpoolrestrict?: Maybe<Scalars['Bytes']['output']>;
};


export type AppOrderDealsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};

export type AppOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  app?: InputMaybe<Scalars['String']['input']>;
  app_?: InputMaybe<App_Filter>;
  app_contains?: InputMaybe<Scalars['String']['input']>;
  app_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  app_ends_with?: InputMaybe<Scalars['String']['input']>;
  app_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_gt?: InputMaybe<Scalars['String']['input']>;
  app_gte?: InputMaybe<Scalars['String']['input']>;
  app_in?: InputMaybe<Array<Scalars['String']['input']>>;
  app_lt?: InputMaybe<Scalars['String']['input']>;
  app_lte?: InputMaybe<Scalars['String']['input']>;
  app_not?: InputMaybe<Scalars['String']['input']>;
  app_not_contains?: InputMaybe<Scalars['String']['input']>;
  app_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  app_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  app_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  app_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  app_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_starts_with?: InputMaybe<Scalars['String']['input']>;
  app_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appprice?: InputMaybe<Scalars['BigDecimal']['input']>;
  appprice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  appprice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  appprice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  appprice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  appprice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  appprice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  appprice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  datasetrestrict?: InputMaybe<Scalars['Bytes']['input']>;
  datasetrestrict_contains?: InputMaybe<Scalars['Bytes']['input']>;
  datasetrestrict_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  datasetrestrict_not?: InputMaybe<Scalars['Bytes']['input']>;
  datasetrestrict_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  datasetrestrict_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  deals_?: InputMaybe<Deal_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  requesterrestrict?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requesterrestrict_not?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  salt?: InputMaybe<Scalars['Bytes']['input']>;
  salt_contains?: InputMaybe<Scalars['Bytes']['input']>;
  salt_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  salt_not?: InputMaybe<Scalars['Bytes']['input']>;
  salt_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  salt_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sign?: InputMaybe<Scalars['Bytes']['input']>;
  sign_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sign_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sign_not?: InputMaybe<Scalars['Bytes']['input']>;
  sign_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sign_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tag?: InputMaybe<Scalars['Bytes']['input']>;
  tag_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tag_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tag_not?: InputMaybe<Scalars['Bytes']['input']>;
  tag_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tag_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workerpoolrestrict?: InputMaybe<Scalars['Bytes']['input']>;
  workerpoolrestrict_contains?: InputMaybe<Scalars['Bytes']['input']>;
  workerpoolrestrict_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  workerpoolrestrict_not?: InputMaybe<Scalars['Bytes']['input']>;
  workerpoolrestrict_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  workerpoolrestrict_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AppOrder_OrderBy {
  App = 'app',
  Appprice = 'appprice',
  Datasetrestrict = 'datasetrestrict',
  Deals = 'deals',
  Id = 'id',
  Requesterrestrict = 'requesterrestrict',
  Salt = 'salt',
  Sign = 'sign',
  Tag = 'tag',
  Volume = 'volume',
  Workerpoolrestrict = 'workerpoolrestrict'
}

export type AppTransfer = RessourceTransferEvent & {
  __typename?: 'AppTransfer';
  app: App;
  from: Account;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Account;
  transaction: Transaction;
};

export type AppTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  app?: InputMaybe<Scalars['String']['input']>;
  app_?: InputMaybe<App_Filter>;
  app_contains?: InputMaybe<Scalars['String']['input']>;
  app_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  app_ends_with?: InputMaybe<Scalars['String']['input']>;
  app_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_gt?: InputMaybe<Scalars['String']['input']>;
  app_gte?: InputMaybe<Scalars['String']['input']>;
  app_in?: InputMaybe<Array<Scalars['String']['input']>>;
  app_lt?: InputMaybe<Scalars['String']['input']>;
  app_lte?: InputMaybe<Scalars['String']['input']>;
  app_not?: InputMaybe<Scalars['String']['input']>;
  app_not_contains?: InputMaybe<Scalars['String']['input']>;
  app_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  app_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  app_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  app_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  app_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_starts_with?: InputMaybe<Scalars['String']['input']>;
  app_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AppTransfer_OrderBy {
  App = 'app',
  From = 'from',
  Id = 'id',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction'
}

export type App_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  checksum?: InputMaybe<Scalars['Bytes']['input']>;
  checksum_contains?: InputMaybe<Scalars['Bytes']['input']>;
  checksum_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  checksum_not?: InputMaybe<Scalars['Bytes']['input']>;
  checksum_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  checksum_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  mrenclave?: InputMaybe<Scalars['Bytes']['input']>;
  mrenclave_contains?: InputMaybe<Scalars['Bytes']['input']>;
  mrenclave_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  mrenclave_not?: InputMaybe<Scalars['Bytes']['input']>;
  mrenclave_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  mrenclave_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  multiaddr?: InputMaybe<Scalars['Bytes']['input']>;
  multiaddr_contains?: InputMaybe<Scalars['Bytes']['input']>;
  multiaddr_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  multiaddr_not?: InputMaybe<Scalars['Bytes']['input']>;
  multiaddr_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  multiaddr_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  orders_?: InputMaybe<AppOrder_Filter>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transfers_?: InputMaybe<AppTransfer_Filter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  usages_?: InputMaybe<Deal_Filter>;
};

export enum App_OrderBy {
  Checksum = 'checksum',
  Id = 'id',
  Mrenclave = 'mrenclave',
  Multiaddr = 'multiaddr',
  Name = 'name',
  Orders = 'orders',
  Owner = 'owner',
  Timestamp = 'timestamp',
  Transfers = 'transfers',
  Type = 'type',
  Usages = 'usages'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  __typename?: 'Category';
  deals: Array<Deal>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  workClockTimeRef: Scalars['BigInt']['output'];
};


export type CategoryDealsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};

export type Category_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deals_?: InputMaybe<Deal_Filter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workClockTimeRef?: InputMaybe<Scalars['BigInt']['input']>;
  workClockTimeRef_gt?: InputMaybe<Scalars['BigInt']['input']>;
  workClockTimeRef_gte?: InputMaybe<Scalars['BigInt']['input']>;
  workClockTimeRef_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workClockTimeRef_lt?: InputMaybe<Scalars['BigInt']['input']>;
  workClockTimeRef_lte?: InputMaybe<Scalars['BigInt']['input']>;
  workClockTimeRef_not?: InputMaybe<Scalars['BigInt']['input']>;
  workClockTimeRef_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Category_OrderBy {
  Deals = 'deals',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Timestamp = 'timestamp',
  WorkClockTimeRef = 'workClockTimeRef'
}

export type Contribution = {
  __typename?: 'Contribution';
  challenge: Scalars['Bytes']['output'];
  hash: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  seal: Scalars['Bytes']['output'];
  status: ContributionStatus;
  task: Task;
  timestamp: Scalars['Int']['output'];
  worker: Account;
};

export enum ContributionStatus {
  Contributed = 'CONTRIBUTED',
  Proved = 'PROVED',
  Rejected = 'REJECTED',
  Unset = 'UNSET'
}

export type Contribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  challenge?: InputMaybe<Scalars['Bytes']['input']>;
  challenge_contains?: InputMaybe<Scalars['Bytes']['input']>;
  challenge_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  challenge_not?: InputMaybe<Scalars['Bytes']['input']>;
  challenge_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  challenge_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  seal?: InputMaybe<Scalars['Bytes']['input']>;
  seal_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seal_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seal_not?: InputMaybe<Scalars['Bytes']['input']>;
  seal_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seal_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  status?: InputMaybe<ContributionStatus>;
  status_in?: InputMaybe<Array<ContributionStatus>>;
  status_not?: InputMaybe<ContributionStatus>;
  status_not_in?: InputMaybe<Array<ContributionStatus>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  worker?: InputMaybe<Scalars['String']['input']>;
  worker_?: InputMaybe<Account_Filter>;
  worker_contains?: InputMaybe<Scalars['String']['input']>;
  worker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_ends_with?: InputMaybe<Scalars['String']['input']>;
  worker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_gt?: InputMaybe<Scalars['String']['input']>;
  worker_gte?: InputMaybe<Scalars['String']['input']>;
  worker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  worker_lt?: InputMaybe<Scalars['String']['input']>;
  worker_lte?: InputMaybe<Scalars['String']['input']>;
  worker_not?: InputMaybe<Scalars['String']['input']>;
  worker_not_contains?: InputMaybe<Scalars['String']['input']>;
  worker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  worker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  worker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  worker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_starts_with?: InputMaybe<Scalars['String']['input']>;
  worker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Contribution_OrderBy {
  Challenge = 'challenge',
  Hash = 'hash',
  Id = 'id',
  Seal = 'seal',
  Status = 'status',
  Task = 'task',
  Timestamp = 'timestamp',
  Worker = 'worker'
}

export type Dataset = Ressource & {
  __typename?: 'Dataset';
  checksum: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  multiaddr: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  orders: Array<DatasetOrder>;
  owner: Account;
  timestamp: Scalars['BigInt']['output'];
  transfers: Array<DatasetTransfer>;
  usages: Array<Deal>;
};


export type DatasetOrdersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DatasetOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DatasetOrder_Filter>;
};


export type DatasetTransfersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DatasetTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DatasetTransfer_Filter>;
};


export type DatasetUsagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};

export type DatasetOrder = {
  __typename?: 'DatasetOrder';
  apprestrict?: Maybe<Scalars['Bytes']['output']>;
  dataset: Dataset;
  datasetprice: Scalars['BigDecimal']['output'];
  deals: Array<Deal>;
  id: Scalars['ID']['output'];
  requesterrestrict?: Maybe<Scalars['Bytes']['output']>;
  salt?: Maybe<Scalars['Bytes']['output']>;
  sign?: Maybe<Scalars['Bytes']['output']>;
  tag?: Maybe<Scalars['Bytes']['output']>;
  volume?: Maybe<Scalars['BigInt']['output']>;
  workerpoolrestrict?: Maybe<Scalars['Bytes']['output']>;
};


export type DatasetOrderDealsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};

export type DatasetOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  apprestrict?: InputMaybe<Scalars['Bytes']['input']>;
  apprestrict_contains?: InputMaybe<Scalars['Bytes']['input']>;
  apprestrict_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  apprestrict_not?: InputMaybe<Scalars['Bytes']['input']>;
  apprestrict_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  apprestrict_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  dataset?: InputMaybe<Scalars['String']['input']>;
  dataset_?: InputMaybe<Dataset_Filter>;
  dataset_contains?: InputMaybe<Scalars['String']['input']>;
  dataset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_ends_with?: InputMaybe<Scalars['String']['input']>;
  dataset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_gt?: InputMaybe<Scalars['String']['input']>;
  dataset_gte?: InputMaybe<Scalars['String']['input']>;
  dataset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dataset_lt?: InputMaybe<Scalars['String']['input']>;
  dataset_lte?: InputMaybe<Scalars['String']['input']>;
  dataset_not?: InputMaybe<Scalars['String']['input']>;
  dataset_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dataset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dataset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  dataset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_starts_with?: InputMaybe<Scalars['String']['input']>;
  dataset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetprice?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetprice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetprice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetprice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  datasetprice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetprice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetprice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetprice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deals_?: InputMaybe<Deal_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  requesterrestrict?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requesterrestrict_not?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  salt?: InputMaybe<Scalars['Bytes']['input']>;
  salt_contains?: InputMaybe<Scalars['Bytes']['input']>;
  salt_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  salt_not?: InputMaybe<Scalars['Bytes']['input']>;
  salt_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  salt_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sign?: InputMaybe<Scalars['Bytes']['input']>;
  sign_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sign_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sign_not?: InputMaybe<Scalars['Bytes']['input']>;
  sign_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sign_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tag?: InputMaybe<Scalars['Bytes']['input']>;
  tag_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tag_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tag_not?: InputMaybe<Scalars['Bytes']['input']>;
  tag_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tag_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workerpoolrestrict?: InputMaybe<Scalars['Bytes']['input']>;
  workerpoolrestrict_contains?: InputMaybe<Scalars['Bytes']['input']>;
  workerpoolrestrict_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  workerpoolrestrict_not?: InputMaybe<Scalars['Bytes']['input']>;
  workerpoolrestrict_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  workerpoolrestrict_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum DatasetOrder_OrderBy {
  Apprestrict = 'apprestrict',
  Dataset = 'dataset',
  Datasetprice = 'datasetprice',
  Deals = 'deals',
  Id = 'id',
  Requesterrestrict = 'requesterrestrict',
  Salt = 'salt',
  Sign = 'sign',
  Tag = 'tag',
  Volume = 'volume',
  Workerpoolrestrict = 'workerpoolrestrict'
}

export type DatasetTransfer = RessourceTransferEvent & {
  __typename?: 'DatasetTransfer';
  dataset: Dataset;
  from: Account;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Account;
  transaction: Transaction;
};

export type DatasetTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dataset?: InputMaybe<Scalars['String']['input']>;
  dataset_?: InputMaybe<Dataset_Filter>;
  dataset_contains?: InputMaybe<Scalars['String']['input']>;
  dataset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_ends_with?: InputMaybe<Scalars['String']['input']>;
  dataset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_gt?: InputMaybe<Scalars['String']['input']>;
  dataset_gte?: InputMaybe<Scalars['String']['input']>;
  dataset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dataset_lt?: InputMaybe<Scalars['String']['input']>;
  dataset_lte?: InputMaybe<Scalars['String']['input']>;
  dataset_not?: InputMaybe<Scalars['String']['input']>;
  dataset_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dataset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dataset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  dataset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_starts_with?: InputMaybe<Scalars['String']['input']>;
  dataset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum DatasetTransfer_OrderBy {
  Dataset = 'dataset',
  From = 'from',
  Id = 'id',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction'
}

export type Dataset_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  checksum?: InputMaybe<Scalars['Bytes']['input']>;
  checksum_contains?: InputMaybe<Scalars['Bytes']['input']>;
  checksum_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  checksum_not?: InputMaybe<Scalars['Bytes']['input']>;
  checksum_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  checksum_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  multiaddr?: InputMaybe<Scalars['Bytes']['input']>;
  multiaddr_contains?: InputMaybe<Scalars['Bytes']['input']>;
  multiaddr_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  multiaddr_not?: InputMaybe<Scalars['Bytes']['input']>;
  multiaddr_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  multiaddr_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  orders_?: InputMaybe<DatasetOrder_Filter>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transfers_?: InputMaybe<DatasetTransfer_Filter>;
  usages_?: InputMaybe<Deal_Filter>;
};

export enum Dataset_OrderBy {
  Checksum = 'checksum',
  Id = 'id',
  Multiaddr = 'multiaddr',
  Name = 'name',
  Orders = 'orders',
  Owner = 'owner',
  Timestamp = 'timestamp',
  Transfers = 'transfers',
  Usages = 'usages'
}

export type Deal = {
  __typename?: 'Deal';
  app: App;
  appOwner: Account;
  appPrice: Scalars['BigDecimal']['output'];
  apporder?: Maybe<AppOrder>;
  beneficiary: Account;
  botFirst: Scalars['BigInt']['output'];
  botSize: Scalars['BigInt']['output'];
  callback: Account;
  category: Category;
  claimedTasksCount: Scalars['BigInt']['output'];
  completedTasksCount: Scalars['BigInt']['output'];
  dataset?: Maybe<Dataset>;
  datasetOwner: Account;
  datasetPrice: Scalars['BigDecimal']['output'];
  datasetorder?: Maybe<DatasetOrder>;
  events: Array<DealEvent>;
  id: Scalars['ID']['output'];
  params: Scalars['String']['output'];
  requester: Account;
  requestorder?: Maybe<RequestOrder>;
  schedulerRewardRatio: Scalars['BigInt']['output'];
  startTime: Scalars['BigInt']['output'];
  tag: Scalars['Bytes']['output'];
  tasks: Array<Task>;
  timestamp: Scalars['BigInt']['output'];
  trust: Scalars['BigInt']['output'];
  workerStake: Scalars['BigInt']['output'];
  workerpool: Workerpool;
  workerpoolOwner: Account;
  workerpoolPrice: Scalars['BigDecimal']['output'];
  workerpoolorder?: Maybe<WorkerpoolOrder>;
};


export type DealEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DealEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DealEvent_Filter>;
};


export type DealTasksArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Task_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Task_Filter>;
};

export type DealEvent = {
  deal: Deal;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type DealEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deal?: InputMaybe<Scalars['String']['input']>;
  deal_?: InputMaybe<Deal_Filter>;
  deal_contains?: InputMaybe<Scalars['String']['input']>;
  deal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_ends_with?: InputMaybe<Scalars['String']['input']>;
  deal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_gt?: InputMaybe<Scalars['String']['input']>;
  deal_gte?: InputMaybe<Scalars['String']['input']>;
  deal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deal_lt?: InputMaybe<Scalars['String']['input']>;
  deal_lte?: InputMaybe<Scalars['String']['input']>;
  deal_not?: InputMaybe<Scalars['String']['input']>;
  deal_not_contains?: InputMaybe<Scalars['String']['input']>;
  deal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_starts_with?: InputMaybe<Scalars['String']['input']>;
  deal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum DealEvent_OrderBy {
  Deal = 'deal',
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type Deal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  app?: InputMaybe<Scalars['String']['input']>;
  appOwner?: InputMaybe<Scalars['String']['input']>;
  appOwner_?: InputMaybe<Account_Filter>;
  appOwner_contains?: InputMaybe<Scalars['String']['input']>;
  appOwner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appOwner_ends_with?: InputMaybe<Scalars['String']['input']>;
  appOwner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appOwner_gt?: InputMaybe<Scalars['String']['input']>;
  appOwner_gte?: InputMaybe<Scalars['String']['input']>;
  appOwner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appOwner_lt?: InputMaybe<Scalars['String']['input']>;
  appOwner_lte?: InputMaybe<Scalars['String']['input']>;
  appOwner_not?: InputMaybe<Scalars['String']['input']>;
  appOwner_not_contains?: InputMaybe<Scalars['String']['input']>;
  appOwner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appOwner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  appOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appOwner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appOwner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  appOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appOwner_starts_with?: InputMaybe<Scalars['String']['input']>;
  appOwner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  appPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  appPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  appPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  appPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  appPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  appPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  appPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  app_?: InputMaybe<App_Filter>;
  app_contains?: InputMaybe<Scalars['String']['input']>;
  app_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  app_ends_with?: InputMaybe<Scalars['String']['input']>;
  app_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_gt?: InputMaybe<Scalars['String']['input']>;
  app_gte?: InputMaybe<Scalars['String']['input']>;
  app_in?: InputMaybe<Array<Scalars['String']['input']>>;
  app_lt?: InputMaybe<Scalars['String']['input']>;
  app_lte?: InputMaybe<Scalars['String']['input']>;
  app_not?: InputMaybe<Scalars['String']['input']>;
  app_not_contains?: InputMaybe<Scalars['String']['input']>;
  app_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  app_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  app_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  app_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  app_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_starts_with?: InputMaybe<Scalars['String']['input']>;
  app_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  apporder?: InputMaybe<Scalars['String']['input']>;
  apporder_?: InputMaybe<AppOrder_Filter>;
  apporder_contains?: InputMaybe<Scalars['String']['input']>;
  apporder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  apporder_ends_with?: InputMaybe<Scalars['String']['input']>;
  apporder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  apporder_gt?: InputMaybe<Scalars['String']['input']>;
  apporder_gte?: InputMaybe<Scalars['String']['input']>;
  apporder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  apporder_lt?: InputMaybe<Scalars['String']['input']>;
  apporder_lte?: InputMaybe<Scalars['String']['input']>;
  apporder_not?: InputMaybe<Scalars['String']['input']>;
  apporder_not_contains?: InputMaybe<Scalars['String']['input']>;
  apporder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  apporder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  apporder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  apporder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  apporder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  apporder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  apporder_starts_with?: InputMaybe<Scalars['String']['input']>;
  apporder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_?: InputMaybe<Account_Filter>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['String']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['String']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['String']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  botFirst?: InputMaybe<Scalars['BigInt']['input']>;
  botFirst_gt?: InputMaybe<Scalars['BigInt']['input']>;
  botFirst_gte?: InputMaybe<Scalars['BigInt']['input']>;
  botFirst_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  botFirst_lt?: InputMaybe<Scalars['BigInt']['input']>;
  botFirst_lte?: InputMaybe<Scalars['BigInt']['input']>;
  botFirst_not?: InputMaybe<Scalars['BigInt']['input']>;
  botFirst_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  botSize?: InputMaybe<Scalars['BigInt']['input']>;
  botSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  botSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  botSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  botSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  botSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  botSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  botSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  callback?: InputMaybe<Scalars['String']['input']>;
  callback_?: InputMaybe<Account_Filter>;
  callback_contains?: InputMaybe<Scalars['String']['input']>;
  callback_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  callback_ends_with?: InputMaybe<Scalars['String']['input']>;
  callback_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  callback_gt?: InputMaybe<Scalars['String']['input']>;
  callback_gte?: InputMaybe<Scalars['String']['input']>;
  callback_in?: InputMaybe<Array<Scalars['String']['input']>>;
  callback_lt?: InputMaybe<Scalars['String']['input']>;
  callback_lte?: InputMaybe<Scalars['String']['input']>;
  callback_not?: InputMaybe<Scalars['String']['input']>;
  callback_not_contains?: InputMaybe<Scalars['String']['input']>;
  callback_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  callback_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  callback_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  callback_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  callback_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  callback_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  callback_starts_with?: InputMaybe<Scalars['String']['input']>;
  callback_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_?: InputMaybe<Category_Filter>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_gt?: InputMaybe<Scalars['String']['input']>;
  category_gte?: InputMaybe<Scalars['String']['input']>;
  category_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_lt?: InputMaybe<Scalars['String']['input']>;
  category_lte?: InputMaybe<Scalars['String']['input']>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  claimedTasksCount?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedTasksCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  completedTasksCount?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  completedTasksCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dataset?: InputMaybe<Scalars['String']['input']>;
  datasetOwner?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_?: InputMaybe<Account_Filter>;
  datasetOwner_contains?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_ends_with?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_gt?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_gte?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  datasetOwner_lt?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_lte?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_not?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_not_contains?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  datasetOwner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_starts_with?: InputMaybe<Scalars['String']['input']>;
  datasetOwner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  datasetPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dataset_?: InputMaybe<Dataset_Filter>;
  dataset_contains?: InputMaybe<Scalars['String']['input']>;
  dataset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_ends_with?: InputMaybe<Scalars['String']['input']>;
  dataset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_gt?: InputMaybe<Scalars['String']['input']>;
  dataset_gte?: InputMaybe<Scalars['String']['input']>;
  dataset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dataset_lt?: InputMaybe<Scalars['String']['input']>;
  dataset_lte?: InputMaybe<Scalars['String']['input']>;
  dataset_not?: InputMaybe<Scalars['String']['input']>;
  dataset_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dataset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dataset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  dataset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_starts_with?: InputMaybe<Scalars['String']['input']>;
  dataset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetorder?: InputMaybe<Scalars['String']['input']>;
  datasetorder_?: InputMaybe<DatasetOrder_Filter>;
  datasetorder_contains?: InputMaybe<Scalars['String']['input']>;
  datasetorder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetorder_ends_with?: InputMaybe<Scalars['String']['input']>;
  datasetorder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetorder_gt?: InputMaybe<Scalars['String']['input']>;
  datasetorder_gte?: InputMaybe<Scalars['String']['input']>;
  datasetorder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  datasetorder_lt?: InputMaybe<Scalars['String']['input']>;
  datasetorder_lte?: InputMaybe<Scalars['String']['input']>;
  datasetorder_not?: InputMaybe<Scalars['String']['input']>;
  datasetorder_not_contains?: InputMaybe<Scalars['String']['input']>;
  datasetorder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetorder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  datasetorder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetorder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  datasetorder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  datasetorder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetorder_starts_with?: InputMaybe<Scalars['String']['input']>;
  datasetorder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  params?: InputMaybe<Scalars['String']['input']>;
  params_contains?: InputMaybe<Scalars['String']['input']>;
  params_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_gt?: InputMaybe<Scalars['String']['input']>;
  params_gte?: InputMaybe<Scalars['String']['input']>;
  params_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_lt?: InputMaybe<Scalars['String']['input']>;
  params_lte?: InputMaybe<Scalars['String']['input']>;
  params_not?: InputMaybe<Scalars['String']['input']>;
  params_not_contains?: InputMaybe<Scalars['String']['input']>;
  params_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester?: InputMaybe<Scalars['String']['input']>;
  requester_?: InputMaybe<Account_Filter>;
  requester_contains?: InputMaybe<Scalars['String']['input']>;
  requester_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_ends_with?: InputMaybe<Scalars['String']['input']>;
  requester_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_gt?: InputMaybe<Scalars['String']['input']>;
  requester_gte?: InputMaybe<Scalars['String']['input']>;
  requester_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requester_lt?: InputMaybe<Scalars['String']['input']>;
  requester_lte?: InputMaybe<Scalars['String']['input']>;
  requester_not?: InputMaybe<Scalars['String']['input']>;
  requester_not_contains?: InputMaybe<Scalars['String']['input']>;
  requester_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  requester_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requester_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  requester_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_starts_with?: InputMaybe<Scalars['String']['input']>;
  requester_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestorder?: InputMaybe<Scalars['String']['input']>;
  requestorder_?: InputMaybe<RequestOrder_Filter>;
  requestorder_contains?: InputMaybe<Scalars['String']['input']>;
  requestorder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestorder_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestorder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestorder_gt?: InputMaybe<Scalars['String']['input']>;
  requestorder_gte?: InputMaybe<Scalars['String']['input']>;
  requestorder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestorder_lt?: InputMaybe<Scalars['String']['input']>;
  requestorder_lte?: InputMaybe<Scalars['String']['input']>;
  requestorder_not?: InputMaybe<Scalars['String']['input']>;
  requestorder_not_contains?: InputMaybe<Scalars['String']['input']>;
  requestorder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestorder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestorder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestorder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestorder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestorder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestorder_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestorder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schedulerRewardRatio?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  schedulerRewardRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTime?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tag?: InputMaybe<Scalars['Bytes']['input']>;
  tag_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tag_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tag_not?: InputMaybe<Scalars['Bytes']['input']>;
  tag_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tag_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tasks_?: InputMaybe<Task_Filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trust?: InputMaybe<Scalars['BigInt']['input']>;
  trust_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trust_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trust_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trust_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trust_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trust_not?: InputMaybe<Scalars['BigInt']['input']>;
  trust_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workerStake?: InputMaybe<Scalars['BigInt']['input']>;
  workerStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  workerStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  workerStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workerStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  workerStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  workerStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  workerStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workerpool?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_?: InputMaybe<Account_Filter>;
  workerpoolOwner_contains?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_gt?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_gte?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpoolOwner_lt?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_lte?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_not?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_not_contains?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpoolOwner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpoolOwner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  workerpoolPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_gt?: InputMaybe<Scalars['String']['input']>;
  workerpool_gte?: InputMaybe<Scalars['String']['input']>;
  workerpool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_lt?: InputMaybe<Scalars['String']['input']>;
  workerpool_lte?: InputMaybe<Scalars['String']['input']>;
  workerpool_not?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_?: InputMaybe<WorkerpoolOrder_Filter>;
  workerpoolorder_contains?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_gt?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_gte?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpoolorder_lt?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_lte?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_not?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_not_contains?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpoolorder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpoolorder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Deal_OrderBy {
  App = 'app',
  AppOwner = 'appOwner',
  AppPrice = 'appPrice',
  Apporder = 'apporder',
  Beneficiary = 'beneficiary',
  BotFirst = 'botFirst',
  BotSize = 'botSize',
  Callback = 'callback',
  Category = 'category',
  ClaimedTasksCount = 'claimedTasksCount',
  CompletedTasksCount = 'completedTasksCount',
  Dataset = 'dataset',
  DatasetOwner = 'datasetOwner',
  DatasetPrice = 'datasetPrice',
  Datasetorder = 'datasetorder',
  Events = 'events',
  Id = 'id',
  Params = 'params',
  Requester = 'requester',
  Requestorder = 'requestorder',
  SchedulerRewardRatio = 'schedulerRewardRatio',
  StartTime = 'startTime',
  Tag = 'tag',
  Tasks = 'tasks',
  Timestamp = 'timestamp',
  Trust = 'trust',
  WorkerStake = 'workerStake',
  Workerpool = 'workerpool',
  WorkerpoolOwner = 'workerpoolOwner',
  WorkerpoolPrice = 'workerpoolPrice',
  Workerpoolorder = 'workerpoolorder'
}

export type Erc1538CommitMessage = Erc1538Event & {
  __typename?: 'ERC1538CommitMessage';
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type Erc1538CommitMessage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_contains?: InputMaybe<Scalars['String']['input']>;
  message_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  message_ends_with?: InputMaybe<Scalars['String']['input']>;
  message_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  message_gt?: InputMaybe<Scalars['String']['input']>;
  message_gte?: InputMaybe<Scalars['String']['input']>;
  message_in?: InputMaybe<Array<Scalars['String']['input']>>;
  message_lt?: InputMaybe<Scalars['String']['input']>;
  message_lte?: InputMaybe<Scalars['String']['input']>;
  message_not?: InputMaybe<Scalars['String']['input']>;
  message_not_contains?: InputMaybe<Scalars['String']['input']>;
  message_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  message_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  message_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  message_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  message_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  message_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  message_starts_with?: InputMaybe<Scalars['String']['input']>;
  message_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Erc1538CommitMessage_OrderBy {
  Id = 'id',
  Message = 'message',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type Erc1538Event = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type Erc1538Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Erc1538Event_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type Erc1538Function = {
  __typename?: 'ERC1538Function';
  id: Scalars['ID']['output'];
  module: Erc1538Module;
  name: Scalars['String']['output'];
  updates: Array<Erc1538FunctionUpdate>;
};


export type Erc1538FunctionUpdatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538FunctionUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1538FunctionUpdate_Filter>;
};

export type Erc1538FunctionUpdate = Erc1538Event & {
  __typename?: 'ERC1538FunctionUpdate';
  functionId: Erc1538Function;
  id: Scalars['ID']['output'];
  newmodule: Erc1538Module;
  oldmodule: Erc1538Module;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type Erc1538FunctionUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  functionId?: InputMaybe<Scalars['String']['input']>;
  functionId_?: InputMaybe<Erc1538Function_Filter>;
  functionId_contains?: InputMaybe<Scalars['String']['input']>;
  functionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  functionId_ends_with?: InputMaybe<Scalars['String']['input']>;
  functionId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  functionId_gt?: InputMaybe<Scalars['String']['input']>;
  functionId_gte?: InputMaybe<Scalars['String']['input']>;
  functionId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  functionId_lt?: InputMaybe<Scalars['String']['input']>;
  functionId_lte?: InputMaybe<Scalars['String']['input']>;
  functionId_not?: InputMaybe<Scalars['String']['input']>;
  functionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  functionId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  functionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  functionId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  functionId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  functionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  functionId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  functionId_starts_with?: InputMaybe<Scalars['String']['input']>;
  functionId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  newmodule?: InputMaybe<Scalars['String']['input']>;
  newmodule_?: InputMaybe<Erc1538Module_Filter>;
  newmodule_contains?: InputMaybe<Scalars['String']['input']>;
  newmodule_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newmodule_ends_with?: InputMaybe<Scalars['String']['input']>;
  newmodule_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newmodule_gt?: InputMaybe<Scalars['String']['input']>;
  newmodule_gte?: InputMaybe<Scalars['String']['input']>;
  newmodule_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newmodule_lt?: InputMaybe<Scalars['String']['input']>;
  newmodule_lte?: InputMaybe<Scalars['String']['input']>;
  newmodule_not?: InputMaybe<Scalars['String']['input']>;
  newmodule_not_contains?: InputMaybe<Scalars['String']['input']>;
  newmodule_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newmodule_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newmodule_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newmodule_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newmodule_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newmodule_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newmodule_starts_with?: InputMaybe<Scalars['String']['input']>;
  newmodule_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldmodule?: InputMaybe<Scalars['String']['input']>;
  oldmodule_?: InputMaybe<Erc1538Module_Filter>;
  oldmodule_contains?: InputMaybe<Scalars['String']['input']>;
  oldmodule_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldmodule_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldmodule_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldmodule_gt?: InputMaybe<Scalars['String']['input']>;
  oldmodule_gte?: InputMaybe<Scalars['String']['input']>;
  oldmodule_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldmodule_lt?: InputMaybe<Scalars['String']['input']>;
  oldmodule_lte?: InputMaybe<Scalars['String']['input']>;
  oldmodule_not?: InputMaybe<Scalars['String']['input']>;
  oldmodule_not_contains?: InputMaybe<Scalars['String']['input']>;
  oldmodule_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldmodule_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldmodule_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldmodule_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldmodule_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldmodule_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldmodule_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldmodule_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Erc1538FunctionUpdate_OrderBy {
  FunctionId = 'functionId',
  Id = 'id',
  Newmodule = 'newmodule',
  Oldmodule = 'oldmodule',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type Erc1538Function_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  module?: InputMaybe<Scalars['String']['input']>;
  module_?: InputMaybe<Erc1538Module_Filter>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_gt?: InputMaybe<Scalars['String']['input']>;
  module_gte?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_lt?: InputMaybe<Scalars['String']['input']>;
  module_lte?: InputMaybe<Scalars['String']['input']>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updates_?: InputMaybe<Erc1538FunctionUpdate_Filter>;
};

export enum Erc1538Function_OrderBy {
  Id = 'id',
  Module = 'module',
  Name = 'name',
  Updates = 'updates'
}

export type Erc1538Module = {
  __typename?: 'ERC1538Module';
  functions: Array<Erc1538Function>;
  id: Scalars['ID']['output'];
};


export type Erc1538ModuleFunctionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538Function_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1538Function_Filter>;
};

export type Erc1538Module_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  functions_?: InputMaybe<Erc1538Function_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum Erc1538Module_OrderBy {
  Functions = 'functions',
  Id = 'id'
}

export type FaultyContribution = AccountEvent & {
  __typename?: 'FaultyContribution';
  account: Account;
  contribution: Contribution;
  id: Scalars['ID']['output'];
  score: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type FaultyContribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution?: InputMaybe<Scalars['String']['input']>;
  contribution_?: InputMaybe<Contribution_Filter>;
  contribution_contains?: InputMaybe<Scalars['String']['input']>;
  contribution_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution_ends_with?: InputMaybe<Scalars['String']['input']>;
  contribution_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution_gt?: InputMaybe<Scalars['String']['input']>;
  contribution_gte?: InputMaybe<Scalars['String']['input']>;
  contribution_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contribution_lt?: InputMaybe<Scalars['String']['input']>;
  contribution_lte?: InputMaybe<Scalars['String']['input']>;
  contribution_not?: InputMaybe<Scalars['String']['input']>;
  contribution_not_contains?: InputMaybe<Scalars['String']['input']>;
  contribution_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contribution_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contribution_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contribution_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contribution_starts_with?: InputMaybe<Scalars['String']['input']>;
  contribution_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  score?: InputMaybe<Scalars['BigInt']['input']>;
  score_gt?: InputMaybe<Scalars['BigInt']['input']>;
  score_gte?: InputMaybe<Scalars['BigInt']['input']>;
  score_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  score_lt?: InputMaybe<Scalars['BigInt']['input']>;
  score_lte?: InputMaybe<Scalars['BigInt']['input']>;
  score_not?: InputMaybe<Scalars['BigInt']['input']>;
  score_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum FaultyContribution_OrderBy {
  Account = 'account',
  Contribution = 'contribution',
  Id = 'id',
  Score = 'score',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type Lock = AccountEvent & {
  __typename?: 'Lock';
  account: Account;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  value: Scalars['BigDecimal']['output'];
};

export type Lock_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Lock_OrderBy {
  Account = 'account',
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Value = 'value'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrdersMatched = DealEvent & {
  __typename?: 'OrdersMatched';
  deal: Deal;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type OrdersMatched_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deal?: InputMaybe<Scalars['String']['input']>;
  deal_?: InputMaybe<Deal_Filter>;
  deal_contains?: InputMaybe<Scalars['String']['input']>;
  deal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_ends_with?: InputMaybe<Scalars['String']['input']>;
  deal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_gt?: InputMaybe<Scalars['String']['input']>;
  deal_gte?: InputMaybe<Scalars['String']['input']>;
  deal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deal_lt?: InputMaybe<Scalars['String']['input']>;
  deal_lte?: InputMaybe<Scalars['String']['input']>;
  deal_not?: InputMaybe<Scalars['String']['input']>;
  deal_not_contains?: InputMaybe<Scalars['String']['input']>;
  deal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_starts_with?: InputMaybe<Scalars['String']['input']>;
  deal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum OrdersMatched_OrderBy {
  Deal = 'deal',
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type PolicyUpdate = WorkerpoolEvent & {
  __typename?: 'PolicyUpdate';
  id: Scalars['ID']['output'];
  newSchedulerRewardRatio: Scalars['BigInt']['output'];
  newWorkerStakeRatio: Scalars['BigInt']['output'];
  oldSchedulerRewardRatio: Scalars['BigInt']['output'];
  oldWorkerStakeRatio: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  workerpool: Workerpool;
};

export type PolicyUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  newSchedulerRewardRatio?: InputMaybe<Scalars['BigInt']['input']>;
  newSchedulerRewardRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newSchedulerRewardRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newSchedulerRewardRatio_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newSchedulerRewardRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newSchedulerRewardRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newSchedulerRewardRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  newSchedulerRewardRatio_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newWorkerStakeRatio?: InputMaybe<Scalars['BigInt']['input']>;
  newWorkerStakeRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newWorkerStakeRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newWorkerStakeRatio_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newWorkerStakeRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newWorkerStakeRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newWorkerStakeRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  newWorkerStakeRatio_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldSchedulerRewardRatio?: InputMaybe<Scalars['BigInt']['input']>;
  oldSchedulerRewardRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldSchedulerRewardRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldSchedulerRewardRatio_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldSchedulerRewardRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldSchedulerRewardRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldSchedulerRewardRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldSchedulerRewardRatio_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldWorkerStakeRatio?: InputMaybe<Scalars['BigInt']['input']>;
  oldWorkerStakeRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldWorkerStakeRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldWorkerStakeRatio_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldWorkerStakeRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldWorkerStakeRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldWorkerStakeRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldWorkerStakeRatio_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool?: InputMaybe<Scalars['String']['input']>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_gt?: InputMaybe<Scalars['String']['input']>;
  workerpool_gte?: InputMaybe<Scalars['String']['input']>;
  workerpool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_lt?: InputMaybe<Scalars['String']['input']>;
  workerpool_lte?: InputMaybe<Scalars['String']['input']>;
  workerpool_not?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PolicyUpdate_OrderBy {
  Id = 'id',
  NewSchedulerRewardRatio = 'newSchedulerRewardRatio',
  NewWorkerStakeRatio = 'newWorkerStakeRatio',
  OldSchedulerRewardRatio = 'oldSchedulerRewardRatio',
  OldWorkerStakeRatio = 'oldWorkerStakeRatio',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Workerpool = 'workerpool'
}

export type Protocol = {
  __typename?: 'Protocol';
  appsCount: Scalars['BigInt']['output'];
  categoriesCount: Scalars['BigInt']['output'];
  claimedTasksCount: Scalars['BigInt']['output'];
  completedTasksCount: Scalars['BigInt']['output'];
  datasetsCount: Scalars['BigInt']['output'];
  dealsCount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  tasksCount: Scalars['BigInt']['output'];
  tvl: Scalars['BigDecimal']['output'];
  workerpoolsCount: Scalars['BigInt']['output'];
};

export type Protocol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  appsCount?: InputMaybe<Scalars['BigInt']['input']>;
  appsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  appsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  appsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  appsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  appsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  appsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  appsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  categoriesCount?: InputMaybe<Scalars['BigInt']['input']>;
  categoriesCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  categoriesCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  categoriesCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  categoriesCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  categoriesCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  categoriesCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  categoriesCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedTasksCount?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedTasksCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  claimedTasksCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  completedTasksCount?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  completedTasksCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  completedTasksCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  datasetsCount?: InputMaybe<Scalars['BigInt']['input']>;
  datasetsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  datasetsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  datasetsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  datasetsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  datasetsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  datasetsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  datasetsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dealsCount?: InputMaybe<Scalars['BigInt']['input']>;
  dealsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dealsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dealsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dealsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dealsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dealsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  dealsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tasksCount?: InputMaybe<Scalars['BigInt']['input']>;
  tasksCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tasksCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tasksCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tasksCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tasksCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tasksCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  tasksCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tvl?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  workerpoolsCount?: InputMaybe<Scalars['BigInt']['input']>;
  workerpoolsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  workerpoolsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  workerpoolsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workerpoolsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  workerpoolsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  workerpoolsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  workerpoolsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Protocol_OrderBy {
  AppsCount = 'appsCount',
  CategoriesCount = 'categoriesCount',
  ClaimedTasksCount = 'claimedTasksCount',
  CompletedTasksCount = 'completedTasksCount',
  DatasetsCount = 'datasetsCount',
  DealsCount = 'dealsCount',
  Id = 'id',
  TasksCount = 'tasksCount',
  Tvl = 'tvl',
  WorkerpoolsCount = 'workerpoolsCount'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountEvent?: Maybe<AccountEvent>;
  accountEvents: Array<AccountEvent>;
  accounts: Array<Account>;
  accurateContribution?: Maybe<AccurateContribution>;
  accurateContributions: Array<AccurateContribution>;
  app?: Maybe<App>;
  appOrder?: Maybe<AppOrder>;
  appOrders: Array<AppOrder>;
  appTransfer?: Maybe<AppTransfer>;
  appTransfers: Array<AppTransfer>;
  apps: Array<App>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  contribution?: Maybe<Contribution>;
  contributions: Array<Contribution>;
  dataset?: Maybe<Dataset>;
  datasetOrder?: Maybe<DatasetOrder>;
  datasetOrders: Array<DatasetOrder>;
  datasetTransfer?: Maybe<DatasetTransfer>;
  datasetTransfers: Array<DatasetTransfer>;
  datasets: Array<Dataset>;
  deal?: Maybe<Deal>;
  dealEvent?: Maybe<DealEvent>;
  dealEvents: Array<DealEvent>;
  deals: Array<Deal>;
  erc1538CommitMessage?: Maybe<Erc1538CommitMessage>;
  erc1538CommitMessages: Array<Erc1538CommitMessage>;
  erc1538Event?: Maybe<Erc1538Event>;
  erc1538Events: Array<Erc1538Event>;
  erc1538Function?: Maybe<Erc1538Function>;
  erc1538FunctionUpdate?: Maybe<Erc1538FunctionUpdate>;
  erc1538FunctionUpdates: Array<Erc1538FunctionUpdate>;
  erc1538Functions: Array<Erc1538Function>;
  erc1538Module?: Maybe<Erc1538Module>;
  erc1538Modules: Array<Erc1538Module>;
  faultyContribution?: Maybe<FaultyContribution>;
  faultyContributions: Array<FaultyContribution>;
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  ordersMatched?: Maybe<OrdersMatched>;
  ordersMatcheds: Array<OrdersMatched>;
  policyUpdate?: Maybe<PolicyUpdate>;
  policyUpdates: Array<PolicyUpdate>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  requestOrder?: Maybe<RequestOrder>;
  requestOrders: Array<RequestOrder>;
  ressource?: Maybe<Ressource>;
  ressourceTransferEvent?: Maybe<RessourceTransferEvent>;
  ressourceTransferEvents: Array<RessourceTransferEvent>;
  ressources: Array<Ressource>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  schedulerNotice?: Maybe<SchedulerNotice>;
  schedulerNotices: Array<SchedulerNotice>;
  seize?: Maybe<Seize>;
  seizes: Array<Seize>;
  task?: Maybe<Task>;
  taskClaimed?: Maybe<TaskClaimed>;
  taskClaimeds: Array<TaskClaimed>;
  taskConsensus?: Maybe<TaskConsensus>;
  taskConsensuses: Array<TaskConsensus>;
  taskContribute?: Maybe<TaskContribute>;
  taskContributes: Array<TaskContribute>;
  taskEvent?: Maybe<TaskEvent>;
  taskEvents: Array<TaskEvent>;
  taskFinalize?: Maybe<TaskFinalize>;
  taskFinalizes: Array<TaskFinalize>;
  taskInitialize?: Maybe<TaskInitialize>;
  taskInitializes: Array<TaskInitialize>;
  taskReopen?: Maybe<TaskReopen>;
  taskReopens: Array<TaskReopen>;
  taskReveal?: Maybe<TaskReveal>;
  taskReveals: Array<TaskReveal>;
  tasks: Array<Task>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  unlock?: Maybe<Unlock>;
  unlocks: Array<Unlock>;
  workerpool?: Maybe<Workerpool>;
  workerpoolEvent?: Maybe<WorkerpoolEvent>;
  workerpoolEvents: Array<WorkerpoolEvent>;
  workerpoolOrder?: Maybe<WorkerpoolOrder>;
  workerpoolOrders: Array<WorkerpoolOrder>;
  workerpoolTransfer?: Maybe<WorkerpoolTransfer>;
  workerpoolTransfers: Array<WorkerpoolTransfer>;
  workerpools: Array<Workerpool>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountEvent_Filter>;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAccurateContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccurateContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccurateContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccurateContribution_Filter>;
};


export type QueryAppArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAppOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAppOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppOrder_Filter>;
};


export type QueryAppTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAppTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppTransfer_Filter>;
};


export type QueryAppsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<App_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<App_Filter>;
};


export type QueryCategoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Category_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Category_Filter>;
};


export type QueryCategoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Contribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contribution_Filter>;
};


export type QueryDatasetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDatasetOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDatasetOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DatasetOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DatasetOrder_Filter>;
};


export type QueryDatasetTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDatasetTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DatasetTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DatasetTransfer_Filter>;
};


export type QueryDatasetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Dataset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dataset_Filter>;
};


export type QueryDealArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDealEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDealEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DealEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DealEvent_Filter>;
};


export type QueryDealsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deal_Filter>;
};


export type QueryErc1538CommitMessageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1538CommitMessagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538CommitMessage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538CommitMessage_Filter>;
};


export type QueryErc1538EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1538EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Event_Filter>;
};


export type QueryErc1538FunctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1538FunctionUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1538FunctionUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538FunctionUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538FunctionUpdate_Filter>;
};


export type QueryErc1538FunctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538Function_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Function_Filter>;
};


export type QueryErc1538ModuleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1538ModulesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538Module_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Module_Filter>;
};


export type QueryFaultyContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFaultyContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FaultyContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FaultyContribution_Filter>;
};


export type QueryLockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Lock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Lock_Filter>;
};


export type QueryOrdersMatchedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOrdersMatchedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrdersMatched_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrdersMatched_Filter>;
};


export type QueryPolicyUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPolicyUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PolicyUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PolicyUpdate_Filter>;
};


export type QueryProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Protocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Protocol_Filter>;
};


export type QueryRequestOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRequestOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RequestOrder_Filter>;
};


export type QueryRessourceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRessourceTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRessourceTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RessourceTransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RessourceTransferEvent_Filter>;
};


export type QueryRessourcesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Ressource_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ressource_Filter>;
};


export type QueryRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};


export type QuerySchedulerNoticeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySchedulerNoticesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SchedulerNotice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchedulerNotice_Filter>;
};


export type QuerySeizeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySeizesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Seize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Seize_Filter>;
};


export type QueryTaskArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTaskClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTaskClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskClaimed_Filter>;
};


export type QueryTaskConsensusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTaskConsensusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskConsensus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskConsensus_Filter>;
};


export type QueryTaskContributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTaskContributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskContribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskContribute_Filter>;
};


export type QueryTaskEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTaskEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskEvent_Filter>;
};


export type QueryTaskFinalizeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTaskFinalizesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskFinalize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskFinalize_Filter>;
};


export type QueryTaskInitializeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTaskInitializesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskInitialize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskInitialize_Filter>;
};


export type QueryTaskReopenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTaskReopensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskReopen_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskReopen_Filter>;
};


export type QueryTaskRevealArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTaskRevealsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskReveal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskReveal_Filter>;
};


export type QueryTasksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Task_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Task_Filter>;
};


export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};


export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type QueryUnlockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnlocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unlock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unlock_Filter>;
};


export type QueryWorkerpoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWorkerpoolEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWorkerpoolEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkerpoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolEvent_Filter>;
};


export type QueryWorkerpoolOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWorkerpoolOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkerpoolOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolOrder_Filter>;
};


export type QueryWorkerpoolTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWorkerpoolTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkerpoolTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolTransfer_Filter>;
};


export type QueryWorkerpoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Workerpool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Workerpool_Filter>;
};

export type RequestOrder = {
  __typename?: 'RequestOrder';
  app?: Maybe<App>;
  appmaxprice?: Maybe<Scalars['BigDecimal']['output']>;
  beneficiary?: Maybe<Account>;
  callback?: Maybe<Account>;
  category?: Maybe<Category>;
  dataset?: Maybe<Dataset>;
  datasetmaxprice?: Maybe<Scalars['BigDecimal']['output']>;
  deals: Array<Deal>;
  id: Scalars['ID']['output'];
  params?: Maybe<Scalars['String']['output']>;
  requester: Account;
  salt?: Maybe<Scalars['Bytes']['output']>;
  sign?: Maybe<Scalars['Bytes']['output']>;
  tag?: Maybe<Scalars['Bytes']['output']>;
  trust?: Maybe<Scalars['BigInt']['output']>;
  volume?: Maybe<Scalars['BigInt']['output']>;
  workerpool?: Maybe<Workerpool>;
  workerpoolmaxprice?: Maybe<Scalars['BigDecimal']['output']>;
};


export type RequestOrderDealsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};

export type RequestOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  app?: InputMaybe<Scalars['String']['input']>;
  app_?: InputMaybe<App_Filter>;
  app_contains?: InputMaybe<Scalars['String']['input']>;
  app_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  app_ends_with?: InputMaybe<Scalars['String']['input']>;
  app_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_gt?: InputMaybe<Scalars['String']['input']>;
  app_gte?: InputMaybe<Scalars['String']['input']>;
  app_in?: InputMaybe<Array<Scalars['String']['input']>>;
  app_lt?: InputMaybe<Scalars['String']['input']>;
  app_lte?: InputMaybe<Scalars['String']['input']>;
  app_not?: InputMaybe<Scalars['String']['input']>;
  app_not_contains?: InputMaybe<Scalars['String']['input']>;
  app_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  app_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  app_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  app_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  app_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  app_starts_with?: InputMaybe<Scalars['String']['input']>;
  app_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appmaxprice?: InputMaybe<Scalars['BigDecimal']['input']>;
  appmaxprice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  appmaxprice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  appmaxprice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  appmaxprice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  appmaxprice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  appmaxprice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  appmaxprice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_?: InputMaybe<Account_Filter>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['String']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['String']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['String']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  callback?: InputMaybe<Scalars['String']['input']>;
  callback_?: InputMaybe<Account_Filter>;
  callback_contains?: InputMaybe<Scalars['String']['input']>;
  callback_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  callback_ends_with?: InputMaybe<Scalars['String']['input']>;
  callback_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  callback_gt?: InputMaybe<Scalars['String']['input']>;
  callback_gte?: InputMaybe<Scalars['String']['input']>;
  callback_in?: InputMaybe<Array<Scalars['String']['input']>>;
  callback_lt?: InputMaybe<Scalars['String']['input']>;
  callback_lte?: InputMaybe<Scalars['String']['input']>;
  callback_not?: InputMaybe<Scalars['String']['input']>;
  callback_not_contains?: InputMaybe<Scalars['String']['input']>;
  callback_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  callback_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  callback_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  callback_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  callback_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  callback_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  callback_starts_with?: InputMaybe<Scalars['String']['input']>;
  callback_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_?: InputMaybe<Category_Filter>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_gt?: InputMaybe<Scalars['String']['input']>;
  category_gte?: InputMaybe<Scalars['String']['input']>;
  category_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_lt?: InputMaybe<Scalars['String']['input']>;
  category_lte?: InputMaybe<Scalars['String']['input']>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset?: InputMaybe<Scalars['String']['input']>;
  dataset_?: InputMaybe<Dataset_Filter>;
  dataset_contains?: InputMaybe<Scalars['String']['input']>;
  dataset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_ends_with?: InputMaybe<Scalars['String']['input']>;
  dataset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_gt?: InputMaybe<Scalars['String']['input']>;
  dataset_gte?: InputMaybe<Scalars['String']['input']>;
  dataset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dataset_lt?: InputMaybe<Scalars['String']['input']>;
  dataset_lte?: InputMaybe<Scalars['String']['input']>;
  dataset_not?: InputMaybe<Scalars['String']['input']>;
  dataset_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dataset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dataset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  dataset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dataset_starts_with?: InputMaybe<Scalars['String']['input']>;
  dataset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetmaxprice?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetmaxprice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetmaxprice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetmaxprice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  datasetmaxprice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetmaxprice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetmaxprice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  datasetmaxprice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  deals_?: InputMaybe<Deal_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  params?: InputMaybe<Scalars['String']['input']>;
  params_contains?: InputMaybe<Scalars['String']['input']>;
  params_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_gt?: InputMaybe<Scalars['String']['input']>;
  params_gte?: InputMaybe<Scalars['String']['input']>;
  params_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_lt?: InputMaybe<Scalars['String']['input']>;
  params_lte?: InputMaybe<Scalars['String']['input']>;
  params_not?: InputMaybe<Scalars['String']['input']>;
  params_not_contains?: InputMaybe<Scalars['String']['input']>;
  params_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester?: InputMaybe<Scalars['String']['input']>;
  requester_?: InputMaybe<Account_Filter>;
  requester_contains?: InputMaybe<Scalars['String']['input']>;
  requester_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_ends_with?: InputMaybe<Scalars['String']['input']>;
  requester_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_gt?: InputMaybe<Scalars['String']['input']>;
  requester_gte?: InputMaybe<Scalars['String']['input']>;
  requester_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requester_lt?: InputMaybe<Scalars['String']['input']>;
  requester_lte?: InputMaybe<Scalars['String']['input']>;
  requester_not?: InputMaybe<Scalars['String']['input']>;
  requester_not_contains?: InputMaybe<Scalars['String']['input']>;
  requester_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  requester_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requester_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  requester_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_starts_with?: InputMaybe<Scalars['String']['input']>;
  requester_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['Bytes']['input']>;
  salt_contains?: InputMaybe<Scalars['Bytes']['input']>;
  salt_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  salt_not?: InputMaybe<Scalars['Bytes']['input']>;
  salt_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  salt_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sign?: InputMaybe<Scalars['Bytes']['input']>;
  sign_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sign_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sign_not?: InputMaybe<Scalars['Bytes']['input']>;
  sign_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sign_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tag?: InputMaybe<Scalars['Bytes']['input']>;
  tag_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tag_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tag_not?: InputMaybe<Scalars['Bytes']['input']>;
  tag_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tag_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  trust?: InputMaybe<Scalars['BigInt']['input']>;
  trust_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trust_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trust_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trust_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trust_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trust_not?: InputMaybe<Scalars['BigInt']['input']>;
  trust_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workerpool?: InputMaybe<Scalars['String']['input']>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_gt?: InputMaybe<Scalars['String']['input']>;
  workerpool_gte?: InputMaybe<Scalars['String']['input']>;
  workerpool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_lt?: InputMaybe<Scalars['String']['input']>;
  workerpool_lte?: InputMaybe<Scalars['String']['input']>;
  workerpool_not?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolmaxprice?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolmaxprice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolmaxprice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolmaxprice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  workerpoolmaxprice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolmaxprice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolmaxprice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolmaxprice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum RequestOrder_OrderBy {
  App = 'app',
  Appmaxprice = 'appmaxprice',
  Beneficiary = 'beneficiary',
  Callback = 'callback',
  Category = 'category',
  Dataset = 'dataset',
  Datasetmaxprice = 'datasetmaxprice',
  Deals = 'deals',
  Id = 'id',
  Params = 'params',
  Requester = 'requester',
  Salt = 'salt',
  Sign = 'sign',
  Tag = 'tag',
  Trust = 'trust',
  Volume = 'volume',
  Workerpool = 'workerpool',
  Workerpoolmaxprice = 'workerpoolmaxprice'
}

export type Ressource = {
  id: Scalars['ID']['output'];
  owner: Account;
};

export type RessourceTransferEvent = {
  from: Account;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Account;
  transaction: Transaction;
};

export type RessourceTransferEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum RessourceTransferEvent_OrderBy {
  From = 'from',
  Id = 'id',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction'
}

export type Ressource_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Ressource_OrderBy {
  Id = 'id',
  Owner = 'owner'
}

export type Reward = AccountEvent & {
  __typename?: 'Reward';
  account: Account;
  id: Scalars['ID']['output'];
  task: Task;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  value: Scalars['BigDecimal']['output'];
};

export type Reward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Reward_OrderBy {
  Account = 'account',
  Id = 'id',
  Task = 'task',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Value = 'value'
}

export type SchedulerNotice = WorkerpoolEvent & {
  __typename?: 'SchedulerNotice';
  deal: Deal;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  workerpool: Workerpool;
};

export type SchedulerNotice_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deal?: InputMaybe<Scalars['String']['input']>;
  deal_?: InputMaybe<Deal_Filter>;
  deal_contains?: InputMaybe<Scalars['String']['input']>;
  deal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_ends_with?: InputMaybe<Scalars['String']['input']>;
  deal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_gt?: InputMaybe<Scalars['String']['input']>;
  deal_gte?: InputMaybe<Scalars['String']['input']>;
  deal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deal_lt?: InputMaybe<Scalars['String']['input']>;
  deal_lte?: InputMaybe<Scalars['String']['input']>;
  deal_not?: InputMaybe<Scalars['String']['input']>;
  deal_not_contains?: InputMaybe<Scalars['String']['input']>;
  deal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_starts_with?: InputMaybe<Scalars['String']['input']>;
  deal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool?: InputMaybe<Scalars['String']['input']>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_gt?: InputMaybe<Scalars['String']['input']>;
  workerpool_gte?: InputMaybe<Scalars['String']['input']>;
  workerpool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_lt?: InputMaybe<Scalars['String']['input']>;
  workerpool_lte?: InputMaybe<Scalars['String']['input']>;
  workerpool_not?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum SchedulerNotice_OrderBy {
  Deal = 'deal',
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Workerpool = 'workerpool'
}

export type Seize = AccountEvent & {
  __typename?: 'Seize';
  account: Account;
  id: Scalars['ID']['output'];
  task: Task;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  value: Scalars['BigDecimal']['output'];
};

export type Seize_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Seize_OrderBy {
  Account = 'account',
  Id = 'id',
  Task = 'task',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Value = 'value'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountEvent?: Maybe<AccountEvent>;
  accountEvents: Array<AccountEvent>;
  accounts: Array<Account>;
  accurateContribution?: Maybe<AccurateContribution>;
  accurateContributions: Array<AccurateContribution>;
  app?: Maybe<App>;
  appOrder?: Maybe<AppOrder>;
  appOrders: Array<AppOrder>;
  appTransfer?: Maybe<AppTransfer>;
  appTransfers: Array<AppTransfer>;
  apps: Array<App>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  contribution?: Maybe<Contribution>;
  contributions: Array<Contribution>;
  dataset?: Maybe<Dataset>;
  datasetOrder?: Maybe<DatasetOrder>;
  datasetOrders: Array<DatasetOrder>;
  datasetTransfer?: Maybe<DatasetTransfer>;
  datasetTransfers: Array<DatasetTransfer>;
  datasets: Array<Dataset>;
  deal?: Maybe<Deal>;
  dealEvent?: Maybe<DealEvent>;
  dealEvents: Array<DealEvent>;
  deals: Array<Deal>;
  erc1538CommitMessage?: Maybe<Erc1538CommitMessage>;
  erc1538CommitMessages: Array<Erc1538CommitMessage>;
  erc1538Event?: Maybe<Erc1538Event>;
  erc1538Events: Array<Erc1538Event>;
  erc1538Function?: Maybe<Erc1538Function>;
  erc1538FunctionUpdate?: Maybe<Erc1538FunctionUpdate>;
  erc1538FunctionUpdates: Array<Erc1538FunctionUpdate>;
  erc1538Functions: Array<Erc1538Function>;
  erc1538Module?: Maybe<Erc1538Module>;
  erc1538Modules: Array<Erc1538Module>;
  faultyContribution?: Maybe<FaultyContribution>;
  faultyContributions: Array<FaultyContribution>;
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  ordersMatched?: Maybe<OrdersMatched>;
  ordersMatcheds: Array<OrdersMatched>;
  policyUpdate?: Maybe<PolicyUpdate>;
  policyUpdates: Array<PolicyUpdate>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  requestOrder?: Maybe<RequestOrder>;
  requestOrders: Array<RequestOrder>;
  ressource?: Maybe<Ressource>;
  ressourceTransferEvent?: Maybe<RessourceTransferEvent>;
  ressourceTransferEvents: Array<RessourceTransferEvent>;
  ressources: Array<Ressource>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  schedulerNotice?: Maybe<SchedulerNotice>;
  schedulerNotices: Array<SchedulerNotice>;
  seize?: Maybe<Seize>;
  seizes: Array<Seize>;
  task?: Maybe<Task>;
  taskClaimed?: Maybe<TaskClaimed>;
  taskClaimeds: Array<TaskClaimed>;
  taskConsensus?: Maybe<TaskConsensus>;
  taskConsensuses: Array<TaskConsensus>;
  taskContribute?: Maybe<TaskContribute>;
  taskContributes: Array<TaskContribute>;
  taskEvent?: Maybe<TaskEvent>;
  taskEvents: Array<TaskEvent>;
  taskFinalize?: Maybe<TaskFinalize>;
  taskFinalizes: Array<TaskFinalize>;
  taskInitialize?: Maybe<TaskInitialize>;
  taskInitializes: Array<TaskInitialize>;
  taskReopen?: Maybe<TaskReopen>;
  taskReopens: Array<TaskReopen>;
  taskReveal?: Maybe<TaskReveal>;
  taskReveals: Array<TaskReveal>;
  tasks: Array<Task>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  unlock?: Maybe<Unlock>;
  unlocks: Array<Unlock>;
  workerpool?: Maybe<Workerpool>;
  workerpoolEvent?: Maybe<WorkerpoolEvent>;
  workerpoolEvents: Array<WorkerpoolEvent>;
  workerpoolOrder?: Maybe<WorkerpoolOrder>;
  workerpoolOrders: Array<WorkerpoolOrder>;
  workerpoolTransfer?: Maybe<WorkerpoolTransfer>;
  workerpoolTransfers: Array<WorkerpoolTransfer>;
  workerpools: Array<Workerpool>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountEvent_Filter>;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionAccurateContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccurateContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccurateContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccurateContribution_Filter>;
};


export type SubscriptionAppArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAppOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAppOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppOrder_Filter>;
};


export type SubscriptionAppTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAppTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AppTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppTransfer_Filter>;
};


export type SubscriptionAppsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<App_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<App_Filter>;
};


export type SubscriptionCategoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Category_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Category_Filter>;
};


export type SubscriptionCategoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Contribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contribution_Filter>;
};


export type SubscriptionDatasetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDatasetOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDatasetOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DatasetOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DatasetOrder_Filter>;
};


export type SubscriptionDatasetTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDatasetTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DatasetTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DatasetTransfer_Filter>;
};


export type SubscriptionDatasetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Dataset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dataset_Filter>;
};


export type SubscriptionDealArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDealEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDealEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DealEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DealEvent_Filter>;
};


export type SubscriptionDealsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deal_Filter>;
};


export type SubscriptionErc1538CommitMessageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1538CommitMessagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538CommitMessage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538CommitMessage_Filter>;
};


export type SubscriptionErc1538EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1538EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Event_Filter>;
};


export type SubscriptionErc1538FunctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1538FunctionUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1538FunctionUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538FunctionUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538FunctionUpdate_Filter>;
};


export type SubscriptionErc1538FunctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538Function_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Function_Filter>;
};


export type SubscriptionErc1538ModuleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1538ModulesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538Module_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Module_Filter>;
};


export type SubscriptionFaultyContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFaultyContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FaultyContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FaultyContribution_Filter>;
};


export type SubscriptionLockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Lock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Lock_Filter>;
};


export type SubscriptionOrdersMatchedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOrdersMatchedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrdersMatched_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrdersMatched_Filter>;
};


export type SubscriptionPolicyUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPolicyUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PolicyUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PolicyUpdate_Filter>;
};


export type SubscriptionProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Protocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Protocol_Filter>;
};


export type SubscriptionRequestOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRequestOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RequestOrder_Filter>;
};


export type SubscriptionRessourceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRessourceTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRessourceTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RessourceTransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RessourceTransferEvent_Filter>;
};


export type SubscriptionRessourcesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Ressource_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ressource_Filter>;
};


export type SubscriptionRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};


export type SubscriptionSchedulerNoticeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSchedulerNoticesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SchedulerNotice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchedulerNotice_Filter>;
};


export type SubscriptionSeizeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSeizesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Seize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Seize_Filter>;
};


export type SubscriptionTaskArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTaskClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTaskClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskClaimed_Filter>;
};


export type SubscriptionTaskConsensusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTaskConsensusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskConsensus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskConsensus_Filter>;
};


export type SubscriptionTaskContributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTaskContributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskContribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskContribute_Filter>;
};


export type SubscriptionTaskEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTaskEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskEvent_Filter>;
};


export type SubscriptionTaskFinalizeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTaskFinalizesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskFinalize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskFinalize_Filter>;
};


export type SubscriptionTaskInitializeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTaskInitializesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskInitialize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskInitialize_Filter>;
};


export type SubscriptionTaskReopenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTaskReopensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskReopen_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskReopen_Filter>;
};


export type SubscriptionTaskRevealArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTaskRevealsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskReveal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskReveal_Filter>;
};


export type SubscriptionTasksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Task_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Task_Filter>;
};


export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};


export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type SubscriptionUnlockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUnlocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unlock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unlock_Filter>;
};


export type SubscriptionWorkerpoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWorkerpoolEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWorkerpoolEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkerpoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolEvent_Filter>;
};


export type SubscriptionWorkerpoolOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWorkerpoolOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkerpoolOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolOrder_Filter>;
};


export type SubscriptionWorkerpoolTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWorkerpoolTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkerpoolTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolTransfer_Filter>;
};


export type SubscriptionWorkerpoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Workerpool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Workerpool_Filter>;
};

export type Task = {
  __typename?: 'Task';
  consensus?: Maybe<Scalars['Bytes']['output']>;
  contributionDeadline: Scalars['BigInt']['output'];
  contributions: Array<Contribution>;
  deal: Deal;
  events: Array<TaskEvent>;
  finalDeadline: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['BigInt']['output'];
  requester: Account;
  resultDigest?: Maybe<Scalars['Bytes']['output']>;
  results?: Maybe<Scalars['String']['output']>;
  resultsCallback?: Maybe<Scalars['String']['output']>;
  revealDeadline?: Maybe<Scalars['BigInt']['output']>;
  rewards: Array<Reward>;
  seizes: Array<Seize>;
  status: TaskStatus;
  timestamp: Scalars['BigInt']['output'];
};


export type TaskContributionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Contribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Contribution_Filter>;
};


export type TaskEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskEvent_Filter>;
};


export type TaskRewardsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Reward_Filter>;
};


export type TaskSeizesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Seize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Seize_Filter>;
};

export type TaskClaimed = TaskEvent & {
  __typename?: 'TaskClaimed';
  id: Scalars['ID']['output'];
  task: Task;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type TaskClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TaskClaimed_OrderBy {
  Id = 'id',
  Task = 'task',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type TaskConsensus = TaskEvent & {
  __typename?: 'TaskConsensus';
  consensus: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  task: Task;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type TaskConsensus_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  consensus?: InputMaybe<Scalars['Bytes']['input']>;
  consensus_contains?: InputMaybe<Scalars['Bytes']['input']>;
  consensus_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  consensus_not?: InputMaybe<Scalars['Bytes']['input']>;
  consensus_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  consensus_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TaskConsensus_OrderBy {
  Consensus = 'consensus',
  Id = 'id',
  Task = 'task',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type TaskContribute = TaskEvent & {
  __typename?: 'TaskContribute';
  hash: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  task: Task;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  worker: Account;
};

export type TaskContribute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker?: InputMaybe<Scalars['String']['input']>;
  worker_?: InputMaybe<Account_Filter>;
  worker_contains?: InputMaybe<Scalars['String']['input']>;
  worker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_ends_with?: InputMaybe<Scalars['String']['input']>;
  worker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_gt?: InputMaybe<Scalars['String']['input']>;
  worker_gte?: InputMaybe<Scalars['String']['input']>;
  worker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  worker_lt?: InputMaybe<Scalars['String']['input']>;
  worker_lte?: InputMaybe<Scalars['String']['input']>;
  worker_not?: InputMaybe<Scalars['String']['input']>;
  worker_not_contains?: InputMaybe<Scalars['String']['input']>;
  worker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  worker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  worker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  worker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_starts_with?: InputMaybe<Scalars['String']['input']>;
  worker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TaskContribute_OrderBy {
  Hash = 'hash',
  Id = 'id',
  Task = 'task',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Worker = 'worker'
}

export type TaskEvent = {
  id: Scalars['ID']['output'];
  task: Task;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type TaskEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TaskEvent_OrderBy {
  Id = 'id',
  Task = 'task',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type TaskFinalize = TaskEvent & {
  __typename?: 'TaskFinalize';
  id: Scalars['ID']['output'];
  results: Scalars['Bytes']['output'];
  task: Task;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type TaskFinalize_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  results?: InputMaybe<Scalars['Bytes']['input']>;
  results_contains?: InputMaybe<Scalars['Bytes']['input']>;
  results_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  results_not?: InputMaybe<Scalars['Bytes']['input']>;
  results_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  results_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TaskFinalize_OrderBy {
  Id = 'id',
  Results = 'results',
  Task = 'task',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type TaskInitialize = TaskEvent & {
  __typename?: 'TaskInitialize';
  id: Scalars['ID']['output'];
  task: Task;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  workerpool: Workerpool;
};

export type TaskInitialize_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool?: InputMaybe<Scalars['String']['input']>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_gt?: InputMaybe<Scalars['String']['input']>;
  workerpool_gte?: InputMaybe<Scalars['String']['input']>;
  workerpool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_lt?: InputMaybe<Scalars['String']['input']>;
  workerpool_lte?: InputMaybe<Scalars['String']['input']>;
  workerpool_not?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TaskInitialize_OrderBy {
  Id = 'id',
  Task = 'task',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Workerpool = 'workerpool'
}

export type TaskReopen = TaskEvent & {
  __typename?: 'TaskReopen';
  id: Scalars['ID']['output'];
  task: Task;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type TaskReopen_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TaskReopen_OrderBy {
  Id = 'id',
  Task = 'task',
  Timestamp = 'timestamp',
  Transaction = 'transaction'
}

export type TaskReveal = TaskEvent & {
  __typename?: 'TaskReveal';
  digest: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  task: Task;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  worker: Account;
};

export type TaskReveal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  digest?: InputMaybe<Scalars['Bytes']['input']>;
  digest_contains?: InputMaybe<Scalars['Bytes']['input']>;
  digest_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  digest_not?: InputMaybe<Scalars['Bytes']['input']>;
  digest_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  digest_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  task?: InputMaybe<Scalars['String']['input']>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars['String']['input']>;
  task_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_gt?: InputMaybe<Scalars['String']['input']>;
  task_gte?: InputMaybe<Scalars['String']['input']>;
  task_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_lt?: InputMaybe<Scalars['String']['input']>;
  task_lte?: InputMaybe<Scalars['String']['input']>;
  task_not?: InputMaybe<Scalars['String']['input']>;
  task_not_contains?: InputMaybe<Scalars['String']['input']>;
  task_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  task_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  task_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  task_starts_with?: InputMaybe<Scalars['String']['input']>;
  task_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker?: InputMaybe<Scalars['String']['input']>;
  worker_?: InputMaybe<Account_Filter>;
  worker_contains?: InputMaybe<Scalars['String']['input']>;
  worker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_ends_with?: InputMaybe<Scalars['String']['input']>;
  worker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_gt?: InputMaybe<Scalars['String']['input']>;
  worker_gte?: InputMaybe<Scalars['String']['input']>;
  worker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  worker_lt?: InputMaybe<Scalars['String']['input']>;
  worker_lte?: InputMaybe<Scalars['String']['input']>;
  worker_not?: InputMaybe<Scalars['String']['input']>;
  worker_not_contains?: InputMaybe<Scalars['String']['input']>;
  worker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  worker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  worker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  worker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  worker_starts_with?: InputMaybe<Scalars['String']['input']>;
  worker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TaskReveal_OrderBy {
  Digest = 'digest',
  Id = 'id',
  Task = 'task',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Worker = 'worker'
}

export enum TaskStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Failled = 'FAILLED',
  Revealing = 'REVEALING',
  Unset = 'UNSET'
}

export type Task_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  consensus?: InputMaybe<Scalars['Bytes']['input']>;
  consensus_contains?: InputMaybe<Scalars['Bytes']['input']>;
  consensus_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  consensus_not?: InputMaybe<Scalars['Bytes']['input']>;
  consensus_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  consensus_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  contributionDeadline?: InputMaybe<Scalars['BigInt']['input']>;
  contributionDeadline_gt?: InputMaybe<Scalars['BigInt']['input']>;
  contributionDeadline_gte?: InputMaybe<Scalars['BigInt']['input']>;
  contributionDeadline_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contributionDeadline_lt?: InputMaybe<Scalars['BigInt']['input']>;
  contributionDeadline_lte?: InputMaybe<Scalars['BigInt']['input']>;
  contributionDeadline_not?: InputMaybe<Scalars['BigInt']['input']>;
  contributionDeadline_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contributions?: InputMaybe<Array<Scalars['String']['input']>>;
  contributions_?: InputMaybe<Contribution_Filter>;
  contributions_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  contributions_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  contributions_not?: InputMaybe<Array<Scalars['String']['input']>>;
  contributions_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  contributions_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  deal?: InputMaybe<Scalars['String']['input']>;
  deal_?: InputMaybe<Deal_Filter>;
  deal_contains?: InputMaybe<Scalars['String']['input']>;
  deal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_ends_with?: InputMaybe<Scalars['String']['input']>;
  deal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_gt?: InputMaybe<Scalars['String']['input']>;
  deal_gte?: InputMaybe<Scalars['String']['input']>;
  deal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deal_lt?: InputMaybe<Scalars['String']['input']>;
  deal_lte?: InputMaybe<Scalars['String']['input']>;
  deal_not?: InputMaybe<Scalars['String']['input']>;
  deal_not_contains?: InputMaybe<Scalars['String']['input']>;
  deal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deal_starts_with?: InputMaybe<Scalars['String']['input']>;
  deal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  finalDeadline?: InputMaybe<Scalars['BigInt']['input']>;
  finalDeadline_gt?: InputMaybe<Scalars['BigInt']['input']>;
  finalDeadline_gte?: InputMaybe<Scalars['BigInt']['input']>;
  finalDeadline_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  finalDeadline_lt?: InputMaybe<Scalars['BigInt']['input']>;
  finalDeadline_lte?: InputMaybe<Scalars['BigInt']['input']>;
  finalDeadline_not?: InputMaybe<Scalars['BigInt']['input']>;
  finalDeadline_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  index_not?: InputMaybe<Scalars['BigInt']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requester?: InputMaybe<Scalars['String']['input']>;
  requester_?: InputMaybe<Account_Filter>;
  requester_contains?: InputMaybe<Scalars['String']['input']>;
  requester_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_ends_with?: InputMaybe<Scalars['String']['input']>;
  requester_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_gt?: InputMaybe<Scalars['String']['input']>;
  requester_gte?: InputMaybe<Scalars['String']['input']>;
  requester_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requester_lt?: InputMaybe<Scalars['String']['input']>;
  requester_lte?: InputMaybe<Scalars['String']['input']>;
  requester_not?: InputMaybe<Scalars['String']['input']>;
  requester_not_contains?: InputMaybe<Scalars['String']['input']>;
  requester_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  requester_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requester_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  requester_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requester_starts_with?: InputMaybe<Scalars['String']['input']>;
  requester_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resultDigest?: InputMaybe<Scalars['Bytes']['input']>;
  resultDigest_contains?: InputMaybe<Scalars['Bytes']['input']>;
  resultDigest_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  resultDigest_not?: InputMaybe<Scalars['Bytes']['input']>;
  resultDigest_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  resultDigest_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  results?: InputMaybe<Scalars['String']['input']>;
  resultsCallback?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_contains?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_ends_with?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_gt?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_gte?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_in?: InputMaybe<Array<Scalars['String']['input']>>;
  resultsCallback_lt?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_lte?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_not?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_not_contains?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  resultsCallback_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_starts_with?: InputMaybe<Scalars['String']['input']>;
  resultsCallback_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  results_contains?: InputMaybe<Scalars['String']['input']>;
  results_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  results_ends_with?: InputMaybe<Scalars['String']['input']>;
  results_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  results_gt?: InputMaybe<Scalars['String']['input']>;
  results_gte?: InputMaybe<Scalars['String']['input']>;
  results_in?: InputMaybe<Array<Scalars['String']['input']>>;
  results_lt?: InputMaybe<Scalars['String']['input']>;
  results_lte?: InputMaybe<Scalars['String']['input']>;
  results_not?: InputMaybe<Scalars['String']['input']>;
  results_not_contains?: InputMaybe<Scalars['String']['input']>;
  results_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  results_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  results_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  results_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  results_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  results_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  results_starts_with?: InputMaybe<Scalars['String']['input']>;
  results_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  revealDeadline?: InputMaybe<Scalars['BigInt']['input']>;
  revealDeadline_gt?: InputMaybe<Scalars['BigInt']['input']>;
  revealDeadline_gte?: InputMaybe<Scalars['BigInt']['input']>;
  revealDeadline_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revealDeadline_lt?: InputMaybe<Scalars['BigInt']['input']>;
  revealDeadline_lte?: InputMaybe<Scalars['BigInt']['input']>;
  revealDeadline_not?: InputMaybe<Scalars['BigInt']['input']>;
  revealDeadline_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewards_?: InputMaybe<Reward_Filter>;
  seizes_?: InputMaybe<Seize_Filter>;
  status?: InputMaybe<TaskStatus>;
  status_in?: InputMaybe<Array<TaskStatus>>;
  status_not?: InputMaybe<TaskStatus>;
  status_not_in?: InputMaybe<Array<TaskStatus>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Task_OrderBy {
  Consensus = 'consensus',
  ContributionDeadline = 'contributionDeadline',
  Contributions = 'contributions',
  Deal = 'deal',
  Events = 'events',
  FinalDeadline = 'finalDeadline',
  Id = 'id',
  Index = 'index',
  Requester = 'requester',
  ResultDigest = 'resultDigest',
  Results = 'results',
  ResultsCallback = 'resultsCallback',
  RevealDeadline = 'revealDeadline',
  Rewards = 'rewards',
  Seizes = 'seizes',
  Status = 'status',
  Timestamp = 'timestamp'
}

export type Transaction = {
  __typename?: 'Transaction';
  accountEvents: Array<AccountEvent>;
  blockNumber: Scalars['BigInt']['output'];
  erc1538Events: Array<Erc1538Event>;
  from?: Maybe<Account>;
  gasLimit: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  ressourceTransferEvent: Array<RessourceTransferEvent>;
  taskEvents: Array<TaskEvent>;
  timestamp: Scalars['BigInt']['output'];
  to?: Maybe<Account>;
  value: Scalars['BigInt']['output'];
  workerpoolEvents: Array<WorkerpoolEvent>;
};


export type TransactionAccountEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountEvent_Filter>;
};


export type TransactionErc1538EventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1538Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1538Event_Filter>;
};


export type TransactionRessourceTransferEventArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RessourceTransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RessourceTransferEvent_Filter>;
};


export type TransactionTaskEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskEvent_Filter>;
};


export type TransactionWorkerpoolEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkerpoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkerpoolEvent_Filter>;
};

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gasLimit?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Transaction_OrderBy {
  AccountEvents = 'accountEvents',
  BlockNumber = 'blockNumber',
  Erc1538Events = 'erc1538Events',
  From = 'from',
  GasLimit = 'gasLimit',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  RessourceTransferEvent = 'ressourceTransferEvent',
  TaskEvents = 'taskEvents',
  Timestamp = 'timestamp',
  To = 'to',
  Value = 'value',
  WorkerpoolEvents = 'workerpoolEvents'
}

export type Transfer = {
  __typename?: 'Transfer';
  from: Account;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Account;
  transaction: Transaction;
  value: Scalars['BigDecimal']['output'];
};

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Transfer_OrderBy {
  From = 'from',
  Id = 'id',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction',
  Value = 'value'
}

export type Unlock = AccountEvent & {
  __typename?: 'Unlock';
  account: Account;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  value: Scalars['BigDecimal']['output'];
};

export type Unlock_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Unlock_OrderBy {
  Account = 'account',
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Value = 'value'
}

export type Workerpool = Ressource & {
  __typename?: 'Workerpool';
  description: Scalars['String']['output'];
  events: Array<WorkerpoolEvent>;
  id: Scalars['ID']['output'];
  orders: Array<WorkerpoolOrder>;
  owner: Account;
  schedulerRewardRatio: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transfers: Array<WorkerpoolTransfer>;
  usages: Array<Deal>;
  workerStakeRatio: Scalars['BigInt']['output'];
};


export type WorkerpoolEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkerpoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkerpoolEvent_Filter>;
};


export type WorkerpoolOrdersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkerpoolOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkerpoolOrder_Filter>;
};


export type WorkerpoolTransfersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkerpoolTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkerpoolTransfer_Filter>;
};


export type WorkerpoolUsagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};

export type WorkerpoolEvent = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  workerpool: Workerpool;
};

export type WorkerpoolEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool?: InputMaybe<Scalars['String']['input']>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_gt?: InputMaybe<Scalars['String']['input']>;
  workerpool_gte?: InputMaybe<Scalars['String']['input']>;
  workerpool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_lt?: InputMaybe<Scalars['String']['input']>;
  workerpool_lte?: InputMaybe<Scalars['String']['input']>;
  workerpool_not?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum WorkerpoolEvent_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Workerpool = 'workerpool'
}

export type WorkerpoolOrder = {
  __typename?: 'WorkerpoolOrder';
  apprestrict?: Maybe<Scalars['Bytes']['output']>;
  category?: Maybe<Category>;
  datasetrestrict?: Maybe<Scalars['Bytes']['output']>;
  deals: Array<Deal>;
  id: Scalars['ID']['output'];
  requesterrestrict?: Maybe<Scalars['Bytes']['output']>;
  salt?: Maybe<Scalars['Bytes']['output']>;
  sign?: Maybe<Scalars['Bytes']['output']>;
  tag?: Maybe<Scalars['Bytes']['output']>;
  trust?: Maybe<Scalars['BigInt']['output']>;
  volume?: Maybe<Scalars['BigInt']['output']>;
  workerpool: Workerpool;
  workerpoolprice: Scalars['BigDecimal']['output'];
};


export type WorkerpoolOrderDealsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Deal_Filter>;
};

export type WorkerpoolOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  apprestrict?: InputMaybe<Scalars['Bytes']['input']>;
  apprestrict_contains?: InputMaybe<Scalars['Bytes']['input']>;
  apprestrict_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  apprestrict_not?: InputMaybe<Scalars['Bytes']['input']>;
  apprestrict_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  apprestrict_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_?: InputMaybe<Category_Filter>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_gt?: InputMaybe<Scalars['String']['input']>;
  category_gte?: InputMaybe<Scalars['String']['input']>;
  category_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_lt?: InputMaybe<Scalars['String']['input']>;
  category_lte?: InputMaybe<Scalars['String']['input']>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datasetrestrict?: InputMaybe<Scalars['Bytes']['input']>;
  datasetrestrict_contains?: InputMaybe<Scalars['Bytes']['input']>;
  datasetrestrict_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  datasetrestrict_not?: InputMaybe<Scalars['Bytes']['input']>;
  datasetrestrict_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  datasetrestrict_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  deals_?: InputMaybe<Deal_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  requesterrestrict?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requesterrestrict_not?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requesterrestrict_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  salt?: InputMaybe<Scalars['Bytes']['input']>;
  salt_contains?: InputMaybe<Scalars['Bytes']['input']>;
  salt_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  salt_not?: InputMaybe<Scalars['Bytes']['input']>;
  salt_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  salt_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sign?: InputMaybe<Scalars['Bytes']['input']>;
  sign_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sign_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sign_not?: InputMaybe<Scalars['Bytes']['input']>;
  sign_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sign_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tag?: InputMaybe<Scalars['Bytes']['input']>;
  tag_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tag_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tag_not?: InputMaybe<Scalars['Bytes']['input']>;
  tag_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tag_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  trust?: InputMaybe<Scalars['BigInt']['input']>;
  trust_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trust_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trust_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trust_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trust_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trust_not?: InputMaybe<Scalars['BigInt']['input']>;
  trust_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workerpool?: InputMaybe<Scalars['String']['input']>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_gt?: InputMaybe<Scalars['String']['input']>;
  workerpool_gte?: InputMaybe<Scalars['String']['input']>;
  workerpool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_lt?: InputMaybe<Scalars['String']['input']>;
  workerpool_lte?: InputMaybe<Scalars['String']['input']>;
  workerpool_not?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpoolprice?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolprice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolprice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolprice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  workerpoolprice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolprice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolprice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  workerpoolprice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum WorkerpoolOrder_OrderBy {
  Apprestrict = 'apprestrict',
  Category = 'category',
  Datasetrestrict = 'datasetrestrict',
  Deals = 'deals',
  Id = 'id',
  Requesterrestrict = 'requesterrestrict',
  Salt = 'salt',
  Sign = 'sign',
  Tag = 'tag',
  Trust = 'trust',
  Volume = 'volume',
  Workerpool = 'workerpool',
  Workerpoolprice = 'workerpoolprice'
}

export type WorkerpoolTransfer = RessourceTransferEvent & {
  __typename?: 'WorkerpoolTransfer';
  from: Account;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Account;
  transaction: Transaction;
  workerpool: Workerpool;
};

export type WorkerpoolTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool?: InputMaybe<Scalars['String']['input']>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_gt?: InputMaybe<Scalars['String']['input']>;
  workerpool_gte?: InputMaybe<Scalars['String']['input']>;
  workerpool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_lt?: InputMaybe<Scalars['String']['input']>;
  workerpool_lte?: InputMaybe<Scalars['String']['input']>;
  workerpool_not?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  workerpool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with?: InputMaybe<Scalars['String']['input']>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum WorkerpoolTransfer_OrderBy {
  From = 'from',
  Id = 'id',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction',
  Workerpool = 'workerpool'
}

export type Workerpool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  orders_?: InputMaybe<WorkerpoolOrder_Filter>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schedulerRewardRatio?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  schedulerRewardRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  schedulerRewardRatio_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transfers_?: InputMaybe<WorkerpoolTransfer_Filter>;
  usages_?: InputMaybe<Deal_Filter>;
  workerStakeRatio?: InputMaybe<Scalars['BigInt']['input']>;
  workerStakeRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  workerStakeRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  workerStakeRatio_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  workerStakeRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  workerStakeRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  workerStakeRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  workerStakeRatio_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Workerpool_OrderBy {
  Description = 'description',
  Events = 'events',
  Id = 'id',
  Orders = 'orders',
  Owner = 'owner',
  SchedulerRewardRatio = 'schedulerRewardRatio',
  Timestamp = 'timestamp',
  Transfers = 'transfers',
  Usages = 'usages',
  WorkerStakeRatio = 'workerStakeRatio'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type AppsQueryVariables = Exact<{
  appId: Scalars['ID']['input'];
  usageRequesterId?: InputMaybe<Scalars['String']['input']>;
}>;


export type AppsQuery = { __typename?: 'Query', apps: Array<{ __typename?: 'App', id: string, usages: Array<{ __typename?: 'Deal', params: string, tasks: Array<{ __typename?: 'Task', id: string }>, dataset?: { __typename?: 'Dataset', id: string } | null }> }> };


export const AppsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"apps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"appId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"usageRequesterId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"appId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"usages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"requester"},"value":{"kind":"Variable","name":{"kind":"Name","value":"usageRequesterId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"params"}},{"kind":"Field","name":{"kind":"Name","value":"dataset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AppsQuery, AppsQueryVariables>;