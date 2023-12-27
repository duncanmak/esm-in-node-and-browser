# A sample setup of an ES Module used in Node and Browser

This repository consists of three directories:

1. `library` - Library code
2. `client` - Node client
3. `browser` - Browser client using Vite

To build the `library`, run `npm run build`.

To build the `client`, run `npm run build`, to run, run `npm run client`.

To build `browser`, run `npm run dev`.

The `library` project first compiles the typescript source into the `build` directory and uses `rollup` to bundle everything into `dist/module.js`. Types are also generated.

The `library` project is also an ES Module, so when adding dependencies, it's best that we use the ES variants (see lodash-es vs lodash).

The `client` project is a bog-standard Node client, but it's important to note that `type: module` is specified in its `package.json`. This means that we're opting out of CommonJS.