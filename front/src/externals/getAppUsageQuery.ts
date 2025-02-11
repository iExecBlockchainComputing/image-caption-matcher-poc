import { App } from '@/gql/graphql.ts';
import { request } from 'graphql-request';
import { gql } from 'graphql-tag';
import { Address } from 'viem';

export type AppForClient = App;

export async function getAppUsage({
  appAddress,
  userAddress,
  protectedDataAddress,
}: {
  appAddress: Address;
  userAddress: Address;
  protectedDataAddress: Address;
}): Promise<Array<AppForClient>> {
  const appsQuery = gql(`
      query apps($appId: String, $usageRequesterId: String, $dataset: String) {
        apps(where: {id: $appId}) {
          id
          usages(
            where: {requester: $usageRequesterId, dataset: $dataset}
            orderBy: timestamp
            orderDirection: desc
          ) {
            tasks {
              id
            }
            params
            dataset {
              id
            }
          }
        }
      }
  `);

  const { apps } = await request(
    import.meta.env.VITE_POCO_SUBGRAPH_URL,
    appsQuery,
    {
      appId: appAddress,
      usageRequesterId: userAddress,
      dataset: protectedDataAddress,
    }
  );

  return apps;
}
