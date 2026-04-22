

## Remove Rates from Room Cards & Reword Booking Widget Message

### What you asked for

1. The "Explore Our Accommodation" cards on the **Rooms** page still show old rates (e.g. `R1,815`, `R1,210`). Remove these prices entirely so guests aren't confused or able to demand the old rate. The cards become **info-only summaries**. Only the live booking widget (which has the correct, current pricing) should ever display amounts.
2. The ResNova booking widget currently shows: *"Required rooms are not available for these dates. Please change your dates to continue"* when a room has actually been added to the basket. Replace that wording with: *"Room added to your basket"* so guests understand the room is reserved in their basket, not unavailable.

---

### Changes

**1. `src/pages/Rooms.tsx` — Remove price from summary cards**
- Remove the `price` prop from the `RoomCardProps` interface and from the `RoomCard` JSX (the `<span>` showing `{price}` next to the room name).
- Remove the `price` field from each of the 11 entries in the `rooms` array (keeps the data clean).
- Layout adjustment: the room title `<h3>` will fill the row that previously had the price beside it — no other styling changes.

Result: each card shows room name, sleeps, bed config, included icons (WiFi/parking/bathroom), description, and the "Check Availability" button. No prices anywhere on these cards.

**2. `src/pages/Rooms.tsx` — Replace ResNova widget message text**
The ResNova widget renders inside a Shadow DOM, so we can't simply edit a React string. We'll add a small `useEffect` that:
- Locates the `<rr-resnova>` element and its `shadowRoot`.
- Uses a `MutationObserver` to watch for any text node containing `"Required rooms are not available"` (the full sentence including "Please change your dates to continue").
- Replaces that text with `"Room added to your basket"` whenever it appears (re-runs on every widget re-render, e.g. after date changes).
- Cleans up the observer on unmount.

This is a safe, non-invasive override — it doesn't modify the third-party widget's behaviour, only the displayed copy. If ResNova ever changes the original wording, we'd just update the matched string.

---

### Files modified

| File | Change |
|------|--------|
| `src/pages/Rooms.tsx` | Strip `price` from `rooms` data array, `RoomCardProps`, and `RoomCard` JSX. Add `useEffect` with shadow-DOM `MutationObserver` to rewrite the unavailability message to "Room added to your basket". |

No other files need changes. The widget itself, pricing inside the widget, and all other pages remain untouched.

