# Tokyo Monorepo

Based from Turborepo starter

## What's inside?

This monorepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

#### Apps

- `next-app`: Boilerplate [Next.js](https://nextjs.org) app
- `web`: Another [Next.js](https://nextjs.org) app
- `workers`: Node app for background job queueing using [graphile-workers](https://github.com/graphile/worker)

#### Packages

- `ui`: a stub React component library shared by both `web` and `docs` applications
- `ui-storybook`: storybook setup to allow component building/discoverability
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tw-config`: `shareable Tailwind config across multiple UI apps in the repo

### Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
- [TailwindCSS](https://tailwindcss.com) for UI styling
- [Supabase](https://supabase.com/) as backend

### Pre-requisites

- [Node 16.x](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-docker/)
- [Supabase CLI](https://github.com/supabase/cli)

### Quickstart

1. yarn
2. yarn run dev - Run all projects
3. yarn run storybook - Run UI storybook

### Missing CSS files?

- yarn run build - To safely initialize all CSS file locally
- yarn run dev

### Develop

1. Start Supabase instance

```
cd db/main
supabase start
```

2. Generating Types

```
yarn types
```

3. Run Storybook

```
yarn storybook
```

4. Run NextJS projects

```
yarn dev
```

### Build

To build all apps and packages, run the following command:

```
yarn run build
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
