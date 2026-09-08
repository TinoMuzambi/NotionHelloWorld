# Notion Hello World

A small Next.js example that retrieves a Notion page through a server-side API
route. The Notion integration token is never exposed to the browser bundle.

## Setup

1. Install dependencies with `yarn`.
2. Copy `.env.example` to `.env.local`.
3. Add a Notion integration token and the ID of the single page to expose, then
   share that page with the integration.
4. Run `yarn dev`.

The token must remain server-only. Local environment files are ignored.
The API deliberately uses `/api/page/default` instead of accepting arbitrary
Notion page IDs, so other pages shared with the integration cannot be queried.

## Verification

```bash
yarn type-check
yarn build
```
