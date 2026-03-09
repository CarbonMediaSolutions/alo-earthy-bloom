

## Fix SEO: Unique Meta Tags Per Page

### Problem
All pages share the same `<title>` and `<meta description>` from `index.html`, so Google shows identical descriptions for Rooms, About, and Contact sitelinks. Additionally, the site appears under the `lovable.app` domain — connecting a custom domain resolves that.

### Solution
Install `react-helmet-async` to set unique `<title>` and `<meta name="description">` per page.

### Changes

**1. Install `react-helmet-async`**

**2. Wrap app with `HelmetProvider`** in `src/main.tsx`

**3. Add `<Helmet>` to each page:**

| Page | Title | Description |
|------|-------|-------------|
| `Index.tsx` | Aló Accommodation \| Farm Stay in Durbanville, Western Cape | Nestled in the Farmlands of Durbanville. Aló Accommodation offers a tranquil stay in the heart of the Western Cape countryside. Book your farm stay today. |
| `Rooms.tsx` | Our Rooms \| Aló Accommodation | Explore 11 beautifully appointed rooms at Aló Accommodation. Each room offers comfort, scenic views, and a peaceful farm setting in Durbanville. |
| `About.tsx` | About Us \| Aló Accommodation | Learn about Aló Accommodation, our team, and Lichtenburg Farm in Durbanville. A warm, welcoming farm stay in the Western Cape. |
| `Contact.tsx` | Contact Us \| Aló Accommodation | Get in touch with Aló Accommodation. Located at Lichtenburg Farm, K11, R302, Klipheuwel Road, Durbanville. |
| `HouseRules.tsx` | House Rules \| Aló Accommodation | Read the house rules for your stay at Aló Accommodation. |
| `TermsAndConditions.tsx` | Terms & Conditions \| Aló Accommodation | Terms and conditions for booking at Aló Accommodation. |

**4. Custom Domain** — Connect `aloaccommodation.com` (or `.co.za`) via Settings → Domains to remove the `lovable.app` association from Google results. This is a settings change, not a code change.

### Files to Modify
| File | Change |
|------|--------|
| `src/main.tsx` | Add `HelmetProvider` wrapper |
| `src/pages/Index.tsx` | Add `<Helmet>` with unique title/description |
| `src/pages/Rooms.tsx` | Add `<Helmet>` with unique title/description |
| `src/pages/About.tsx` | Add `<Helmet>` with unique title/description |
| `src/pages/Contact.tsx` | Add `<Helmet>` with unique title/description |
| `src/pages/HouseRules.tsx` | Add `<Helmet>` with unique title/description |
| `src/pages/TermsAndConditions.tsx` | Add `<Helmet>` with unique title/description |

