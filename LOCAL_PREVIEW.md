# Local Preview Guide

Follow these steps to run the LooSkroo site on your machine without pushing anything to GitHub.

## 1. Install dependencies (first time only)
```bash
pnpm install
```

## 2. Start the development server
```bash
pnpm dev
```

The command prints a local URL (usually http://localhost:3000). Open it in your browser.

## 3. Preview on desktop & mobile
- Desktop: simply view the page in your browser.
- Mobile: open DevTools (F12 or right-click → Inspect) and toggle the device toolbar to emulate phones like iPhone 14 or Pixel 7.

## 4. Stop the server when finished
In the same terminal where `pnpm dev` is running, press `Ctrl+C`.

You can rerun steps 2–4 any time to preview new changes before publishing.
