

## Add Booking Fallback Contact + Diagnostics

### Problem Summary
International guests (USA, Germany, Canada) experience infinite loading when trying to complete bookings through the ResNova widget. The issue occurs at the "Add booking" or checkout stage and is a ResNova/ResRequest backend issue that cannot be fixed on the website.

### What We Will Implement

#### 1. Add "Having Trouble Booking?" Contact Block
Add a visible help section below the booking widget with contact options for guests who encounter issues.

**File:** `src/pages/Rooms.tsx`

**Changes:**
- Add a styled box below the ResNova widget with:
  - Heading: "Having trouble booking?"
  - Subtext: "If the online booking isn't loading or you're having issues, please contact us directly:"
  - Email link: reservations@aloaccommodation.com (click-to-email)
  - Phone link: (+27) 84 506 3119 (click-to-call)

**Location:** After line 436 (below the `<rr-resnova>` widget element)

#### 2. Add Console Diagnostics for ResNova Widget
Add logging to help trace when the widget loads successfully or fails, which can be shared with ResRequest for debugging.

**File:** `src/pages/Rooms.tsx`

**Changes in the useEffect block** (lines 321-328):
- Log when the page loads
- Log when the ResNova widget script is detected
- Log when the custom element is defined (or not)
- Add a check to see if the widget renders after a timeout

This creates a paper trail that can be screenshotted and sent to ResRequest.

---

### Technical Implementation Details

**Contact Block Component** (inline in Rooms.tsx, around line 437):

```text
+---------------------------------------------+
|        Having trouble booking?              |
|                                             |
|  If the online booking isn't loading or     |
|  you're having issues, please contact us:   |
|                                             |
|  [Mail Icon] reservations@aloaccommodation.com  |
|  [Phone Icon] (+27) 84 506 3119             |
+---------------------------------------------+
```

**Diagnostic Console Logs** (in useEffect):
- "ResNova: Page loaded, checking widget..."
- "ResNova: Widget script detected/not detected"
- "ResNova: Custom element defined successfully"
- "ResNova: Widget render check after 5 seconds"

These logs will appear in the browser console when guests report issues, making it easier to diagnose at what stage the widget is failing.

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Rooms.tsx` | Add contact fallback block below widget; enhance useEffect with diagnostic logging |

---

### What This Does NOT Fix

The following issues require ResRequest/Sharon to investigate on their end:

1. **Payment gateway geographic restrictions** - Their payment provider may block non-South African cards or IPs
2. **API timeout for international requests** - Their server response times for overseas connections
3. **Widget JavaScript errors** - Any bugs in the ResNova widget code itself
4. **Basket/checkout flow logic** - The internal widget flow that processes room selection

I recommend forwarding the diagnostic logs (once implemented) to Sharon along with the guest complaint details so ResRequest can trace the exact failure point in their system.

