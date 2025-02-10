import { request } from 'graphql-request';
import { Address } from 'viem';
import { App } from '@/gql/graphql.ts';
import { gql } from 'graphql-tag';

export type AppForClient = App;

export async function getAppUsages({
  appAddress,
  userAddress
}: {
  appAddress: Address;
  userAddress: Address;
}): Promise<Array<AppForClient>> {
  const appsQuery = gql(`
      query apps($appId: ID!, $usageRequesterId: String) {
        apps(where: {id: $appId}) {
          id
          usages(where: {requester: $usageRequesterId}) {
            tasks {
              id
            }
            params
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
    }
  );

  return apps;
}
