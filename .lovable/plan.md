## Fix Favicon — Cream Background Version

### What you chose
Option C: yellow "a" on a soft cream rounded-square background — clean, neutral, visible on both light and dark browser tabs.

### What I'll do

1. **Generate a new favicon** (`public/favicon.png`, 512×512) that composites the existing yellow "a" mark onto a cream (#F2EEE0 — your brand's Dusty Clouds Light) rounded-square background with subtle padding so the letter breathes.
2. **Generate a true multi-resolution `favicon.ico`** (16/32/48 px) from the same artwork so Windows/older browsers render crisply instead of showing a broken tile.
3. **Generate `apple-touch-icon.png`** (180×180) with the same cream background — iOS home-screen icons don't support transparency cleanly, so this prevents a black square on iPhone bookmarks.
4. **Update `index.html`** to:
   - Add cache-busting query strings (`?v=2`) so browsers fetch the new files immediately instead of serving the old broken cache.
   - Add an explicit `apple-touch-icon` link pointing at the new 180×180 file.
   - Keep the existing `<link rel="icon" type="image/png" href="/favicon.png">` but bumped to `?v=2`.
   - Add `<link rel="icon" type="image/x-icon" href="/favicon.ico?v=2">` for legacy fallback.

### Technical notes

- I'll use ImageMagick (via `nix run nixpkgs#imagemagick`) to composite the new favicon. The source for the "a" mark is the existing `public/favicon.png`; I'll trim its transparent margins, then center it on a cream rounded-square canvas with ~12% padding.
- The `.ico` will be a real ICO container with 16/32/48 layers, not a renamed PNG.
- Cream chosen: `#F2EEE0` (matches `--cream` token in `src/index.css`, HSL 47 21% 92%).
- No code changes outside `index.html` and the three image files in `public/`.

### Files modified

| File | Change |
|------|--------|
| `public/favicon.png` | Replaced — yellow "a" centered on cream rounded square, 512×512 |
| `public/favicon.ico` | Replaced — true multi-res ICO (16/32/48) with cream background |
| `public/apple-touch-icon.png` | New — 180×180 cream-background version for iOS |
| `index.html` | Add `?v=2` cache-busters, add `.ico` and `apple-touch-icon` links |

### What you'll see
After deploy, hard-refresh the tab (Cmd/Ctrl+Shift+R). The browser tab, bookmarks bar, and iOS home-screen will all show the yellow "a" inside a soft cream rounded square — clearly visible on white, dark, and coloured tab backgrounds.