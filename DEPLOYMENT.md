# Cut a Rock deployment

Source: `I:\游戏站\cut-a-rock`

Repository: https://github.com/baconwisdom-crypto/cut-a-rock-guide

Production branch: `main`. Push this branch to trigger Cloudflare Pages. Build command: `npm run verify`. Output: `out`. Node: `22.18.0`.

Canonical host: https://www.cutarock.wiki

Cloudflare Pages project: `cut-a-rock-guide`. Project and deployment preview hosts carry `X-Robots-Tag: noindex, nofollow, noarchive`. The custom production host allows indexing.

The source includes only compact video bindings and optimized assets. `research`, raw video, dependencies, generated output and credential material are excluded from Git. Local dependency junctions are development-only. CI installs the lockfile without the research directory.

Local Windows validation uses Node 22.18.0 and `GAME_GUIDE_LOCAL_DEPENDENCY_ROOT=I:\游戏站` because the development dependencies are a junction. Do not set that override in Cloudflare.

Advertising has no approved domain-specific code yet. Production renders no empty ad containers or reserved rail. The preview commit demonstrated the 160 by 600 placeholder configuration, with a 192px desktop rail and mobile hiding. Browser measurements remain pending.

GA4: `G-DWVMBXMF1L`. Configuration and real event reception must be checked separately.

GSC domain ownership is verified. Sitemap submission, sitemap processing and indexing have separate receipts in the ignored research directory.

DNS: www uses Pages with Spaceship DNS. The Cloudflare zone is prepared with apex and www records plus a canonical redirect rule. Existing registrar nameservers and signed DS remain unchanged while registrar UI and DNSSEC migration are pending. Do not switch nameservers with the old DS still present.

Rollback: use a previous successful Pages deployment for source regressions. DNS snapshot and current zone receipts are in `research/release`. DNSSEC migration requires withdrawal and restoration windows documented in the shared publishing skill.
