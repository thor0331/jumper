# JumperJunction Setup Notes

## GitHub

- Repo: `prashanthg05/JumperJunction`
- Fine-grained token permission:
  - `Contents: Read and write`

## Cloudflare Worker Vars

- `GITHUB_OWNER=prashanthg05`
- `GITHUB_REPO=JumperJunction`
- `GITHUB_BRANCH=main`
- `ALLOWED_ORIGIN=https://prashanthg05.github.io`

## Cloudflare Secrets

- `GITHUB_TOKEN`
- `ADMIN_API_KEY`

## Cloudflare KV Binding

- binding name: `VISITOR_STATS`

KV keys used:

- `site-total-visits-pending`
- `site-total-visits-last-sync`
- `developer-user:<username>`
- `developer-session:<uuid>`

## Public Site Metadata

In `projects.json` meta:

- `siteName`
- `siteUrl`
- `counterApiBase`
- `totalVisits`
- `visitsSyncedAt`

## Admin Defaults

- backend URL: `https://circuitlab-admin-backend.prashanthg0505.workers.dev`
- site origin: `https://prashanthg05.github.io`
- branch: `main`
