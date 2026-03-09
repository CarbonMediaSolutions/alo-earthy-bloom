

## Create sitemap.xml and update robots.txt

### Changes

**1. Create `public/sitemap.xml`**
- List all 6 public pages with the canonical domain `https://aloaccommodation.co.za`
- Pages: `/`, `/about`, `/rooms`, `/contact`, `/house-rules`, `/terms-and-conditions`
- Set priority values (1.0 for home, 0.8 for rooms/about/contact, 0.5 for house-rules/terms)

**2. Update `public/robots.txt`**
- Add `Sitemap: https://aloaccommodation.co.za/sitemap.xml` directive

### Files
| File | Change |
|------|--------|
| `public/sitemap.xml` | Create with all page URLs |
| `public/robots.txt` | Add Sitemap directive |

