## Favicon Audit Report — Google Search Compatibility

### Step 1: index.html `<head>` audit

Current tags:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico?v=2">
<link rel="icon" type="image/png" sizes="512x512" href="/favicon.png?v=2">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2">
```

- All three href paths exist in `public/`. No broken paths.
- No duplicates.
- Missing: a 32x32 PNG and an explicit 192x192 PNG (Google's recommended baseline). Google Search specifically looks for a multiple-of-48 square icon and prefers `192x192`. We currently only declare `512x512`, which Google accepts but is less reliable.

### Step 2: favicon files audit

| File | Dimensions | Square? | Notes |
|---|---|---|---|
| `public/favicon.png` | 512×512 | Yes | Good — meets Google's "multiples of 48" rule |
| `public/favicon.ico` | 48 + 32 + 16 multi-res | Yes | True multi-resolution ICO, correct |
| `public/apple-touch-icon.png` | 180×180 | Yes | Correct iOS size |

- Missing for full Google coverage: dedicated `favicon-32.png` and `favicon-192.png`. The 512 PNG technically works, but having a 192 explicitly declared matches Google's documented preference and improves crawler reliability.

### Step 3: robots.txt audit

- No `Disallow` rules anywhere — all paths (including `/favicon.*`) are open.
- Googlebot and Googlebot-Image are not blocked. (Googlebot-Image is implicitly covered by `User-agent: *  Allow: /`.)
- Sitemap correctly declared.

Verdict: robots.txt is clean, no changes needed.

### Step 4: Fixes to apply

1. Generate `public/favicon-32.png` (32×32) by downscaling `favicon.png` with ImageMagick, preserving the cream square + yellow "a".
2. Generate `public/favicon-192.png` (192×192) the same way.
3. Generate `public/favicon-512.png` (512×512) — a renamed/explicit copy of the existing 512 master, so the `<link sizes="512x512">` href matches the filename Google's docs use.
4. Update `index.html` `<head>` to declare the full standard set, bumping cache-buster to `?v=3`:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico?v=3">
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=3">
   <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png?v=3">
   <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png?v=3">
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3">
   ```
5. Keep the existing `favicon.png` in place (legacy fallback for any tool that requests `/favicon.png` without a sized hint).

### Step 5: Verification

After applying, I'll re-run `identify` on every referenced file to confirm dimensions match the declared `sizes` attributes, and list the final `<head>` block.

### Files to modify

| File | Change |
|---|---|
| `public/favicon-32.png` | New — 32×32 downscale |
| `public/favicon-192.png` | New — 192×192 downscale |
| `public/favicon-512.png` | New — explicit 512×512 copy |
| `index.html` | Replace favicon link block with full Google-recommended set, bump to `?v=3` |

No changes to `robots.txt`, `favicon.ico`, `favicon.png`, or `apple-touch-icon.png` — they're already correct.
