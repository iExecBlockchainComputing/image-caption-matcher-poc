# Image caption matcher poc

The Image caption matcher poc

## Deployments

**PROD:** (There is no prod version for now)
**DEV:** (There is no dev version for now)

## Install

(See `.nvmrc` for the node version)

```bash
npm install
```

### Environment variable

```js
VITE_REOWN_PROJECT_ID= // reown project id : https://cloud.reown.com/sign-in
VITE_ROLLBAR_ACCESS_TOKEN= // for prod only : https://app.rollbar.com/a/iex/projects
VITE_POCO_SUBGRAPH_URL="https://thegraph.bellecour.iex.ec/subgraphs/name/bellecour/poco-v5"
VITE_APP_ADDRESS=0xc8c5e295d2beda01d1fb8dd4d85a1cb769185a34
VITE_WORKERPOOL_ADDRESS=debug-v8-learn.main.pools.iexec.eth
```

## Development

To start the development server:

```bash
npm run dev
```

## Build for Production

To build the project for production:

```bash
npm run build
```

## Preview the Build

To preview the built project:

```bash
npm run preview
```

## Linting and Formatting

To lint the project:

```bash
npm run lint
```

To format the code:

```bash
npm run format
```

To check code format:

```bash
npm run check-format
```
