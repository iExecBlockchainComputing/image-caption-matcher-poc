import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://thegraph.bellecour.iex.ec/subgraphs/name/bellecour/poco-v5',
  documents: ['src/**/*.ts'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
      config: {
        scalars: {
          BigInt: 'number',
        },
      },
    },
    './src/npm gql/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
