# trevorthewebdeveloper.com

Portfolio site for Trevor Brown — investigative journalist turned developer. Fifteen years covering elections, government and public policy across four states; now building production web applications and data pipelines.

Live at [trevorthewebdeveloper.com](https://trevorthewebdeveloper.com).

## What's on it

- **Projects** — civic-tech and newsroom tools, each with live links: [Delegation Decoded](https://delegationdecoded.org), [Open Cabinet](https://open-cabinet.org), [Capitol Releases](https://capitolreleases.com), [FOIA Tracker](https://foiatracker.org), [News Pulse](https://news-pulse.org), [Still in the Loop](https://www.stillintheloop.com) and a production dental practice site.
- **Journalism** — selected investigations and data visualizations from Oklahoma Watch and the Wyoming Tribune Eagle, with embedded Tableau and Datawrapper graphics.
- **About** — the full story of the newsroom-to-code transition, plus a rendered, printable resume.

## Stack

Next.js (App Router), React, Tailwind CSS. Deployed on Vercel. Project content is data-driven from `content/demos.js`; the embedded resume renders as a fixed letter-size document in `app/about/components/ResumePage.jsx`.

## Run it

```bash
pnpm install
pnpm dev
```
