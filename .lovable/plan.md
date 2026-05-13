## Plan: Add 48x48 favicon variant

### Steps

1. **Generate `public/favicon-48.png`** — downscale the existing `public/favicon.png` (512×512 cream square + yellow "a") to 48×48 using ImageMagick. Keep `public/favicon.png` untouched as the 1024/512 master used by social meta tags.

2. **Update `index.html` favicon block** — add a new link tag for the 48×48 variant alongside the existing ones, bumping the cache-buster to `?v=4`:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico?v=4">
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=4">
   <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png?v=4">
   <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png?v=4">
   <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png?v=4">
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=4">
   ```

3. **Leave social meta tags alone** — `og:image` continues to point at `/favicon.png` (the 512px master). No changes there.

### Note on the href

Your example uses an absolute URL (`https://screenimage.co.za/favicon-48.png`) — that's a different domain. I'll host the file on this project at `/favicon-48.png` (served from `aloaccommodation.com`) and use a root-relative href. If you actually want to point to the screenimage.co.za URL, let me know and I'll use that string verbatim instead.

### Files

| File | Change |
|---|---|
| `public/favicon-48.png` | New — 48×48 downscale of `favicon.png` |
| `public/favicon.png` | Unchanged (kept as 512px master for social) |
| `index.html` | Add 48×48 link tag, bump cache-buster to `?v=4` |
