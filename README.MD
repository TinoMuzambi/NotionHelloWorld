# Notion Hello World

A small Next.js example that retrieves a Notion page through a server-side API
route. The Notion integration token is never exposed to the browser bundle.

## Setup

1. Install dependencies with `yarn`.
2. Copy `.env.example` to `.env.local`.
3. Add a Notion integration token and share the page with that integration.
4. Run `yarn dev`.

The token must remain server-only. Local environment files are ignored.

## Verification

```bash
yarn type-check
yarn build
```
