# React + TypeScript + Vite + Biome (Watch Mode)

A simple project showing how to run [Biome](https://biomejs.dev/) in watch mode.

## Why?

It's just another way to run Biome. Besides using the Biome CLI or IDE extension, you can run it as part of your dev server flow.

## Setup

1. Install Node.js LTS
1. Install dependencies: `npm i`
1. Run dev mode: `npm run dev`

## How it Works

The `dev` script calls [npm-run-all](https://github.com/mysticatea/npm-run-all) with a list of scripts to run in parallel:

- `dev:typecheck`: the TypeScript check
- `dev:server`: the Vite dev server
- `dev:biome`: the Biome check

Each script runs in watch mode, so changes to source files like `src/App.tsx` will trigger restarts.

In particular, `dev:biome` runs [`biome-dev.mjs`](biome-dev.mjs) with [Node.js's watch mode](https://nodejs.org/docs/latest/api/cli.html#--watch).

## Notes

- Created with [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) and the `react-ts` template
- Inspired by [Build a Node App With TypeScript & ESBuild](https://www.totaltypescript.com/build-a-node-app-with-typescript-and-esbuild)

## Discussions

- https://github.com/biomejs/biome/discussions/5475
