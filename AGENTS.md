# Reviewabl Project Context

## Project Overview

Reviewabl is an NPM monorepo with two workspaces targeting Cloudflare Workers deployment.

## Workspaces

### `server/` - Backend API

- **Framework**: Hono with Apollo Server middleware
- **GraphQL**: Apollo Server with `@as-integrations/cloudflare-workers`
- **Auth**: REST endpoints via Hono (planned)
- **Database**: D1 (Cloudflare SQL) - possibly KV for caching
- **Key deps**: `hono`, `@apollo/server`, `graphql`

### `ui/` - Frontend App

- **Framework**: React Router 7 with SSR
- **UI Library**: Mantine (expand packages as needed: forms, dates, etc.)
- **State/Data**: Apollo Client for GraphQL
- **Styling**: Tailwind CSS + PostCSS with Mantine preset
- **Key deps**: `react-router`, `@mantine/core`, `@mantine/hooks`, `@apollo/client`

## Development Commands

| Workspace | Command | Purpose |
|-----------|---------|---------|
| server | `npm run dev` | Wrangler dev server |
| server | `npm run codegen` | GraphQL codegen |
| ui | `npm run dev` | React Router dev with HMR |
| ui | `npm run codegen` | GraphQL codegen (watch mode) |
| root | `npx biome check --write .` | Format/lint |

## Architecture Notes

- Both workspaces use `wrangler` for Cloudflare Workers deployment
- GraphQL codegen configured in each workspace (`codegen.ts`)
- TypeScript strict mode enabled
- Biome for linting/formatting at root level
