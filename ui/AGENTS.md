# UI Workspace - React Router + Mantine + Apollo

## Tech Stack

- **Framework**: React Router 7 with SSR
- **UI**: Mantine (add packages as needed: `@mantine/dates`, `@mantine/form`, etc.)
- **Data**: Apollo Client for GraphQL state management
- **Styling**: Tailwind CSS v4 + PostCSS with `postcss-preset-mantine`
- **Build**: Vite 7 with `@cloudflare/vite-plugin`

## Key Files

| File | Purpose |
|------|---------|
| `app/root.tsx` | Root layout, providers (Apollo, Mantine) |
| `app/routes/` | File-based routing |
| `app/gql/` | Generated GraphQL types (from codegen) |
| `vite.config.ts` | Vite + Cloudflare + Tailwind config |
| `postcss.config.cjs` | Mantine PostCSS preset |

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server with HMR (port 5173) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build + deploy to Cloudflare |
| `npm run codegen` | GraphQL codegen (watch mode) |
| `npm run typecheck` | Full TypeScript check |

## GraphQL Integration

- Schema fetched from `http://localhost:8787/graphql` (server workspace)
- Documents: `app/**/*.tsx` files with gql queries
- Output: `app/gql/` (client preset)

## Mantine Usage

Add packages as needed:
```bash
npm install @mantine/form @mantine/dates
```

Use `postcss-preset-mantine` for styling - already configured in `postcss.config.cjs`.

## Cloudflare Deployment

- Uses `wrangler.jsonc` for configuration
- `wrangler types` generates `worker-configuration.d.ts`
- Run `npm run cf-typegen` after changing bindings
