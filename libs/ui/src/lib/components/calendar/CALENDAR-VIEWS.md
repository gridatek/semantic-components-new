# Calendar View System Documentation

## Overview

The calendar component now supports three view modes that allow users to navigate through years, months, and days using an inline grid interface (similar to iOS date pickers).

## Three View Modes

### 1. Day View (Default)

- **What it shows**: A traditional month calendar with individual days in a grid
- **Purpose**: Select specific dates
- **Grid**: 7 columns (weeks) × 5-6 rows (days)
- **Example**: Shows January 2025 with dates 1-31

### 2. Month View

- **What it shows**: All 12 months of the currently viewed year
- **Purpose**: Quickly jump to a different month in the same year
- **Grid**: 3 columns × 4 rows (12 months total)
- **Example**: Shows Jan, Feb, Mar... Dec for 2025

### 3. Year View

- **What it shows**: 12 years spanning a decade
- **Purpose**: Quickly jump to a different year
- **Grid**: 3 columns × 4 rows (12 years total)
- **Example**: Shows 2020, 2021, 2022... 2031

---

## Navigation Flow

### Current Implementation

```
┌─────────────┐
│  Day View   │ ◄── START HERE (default view)
│ (Jan 2025)  │
└──────┬──────┘
       │ Click header "January 2025"
       ▼
┌─────────────┐
│ Month View  │
│   (2025)    │
└──────┬──────┘
       │ Click header "2025"
       ▼
┌─────────────┐
│  Year View  │
│ (2020-2031) │
└─────────────┘
```

**Drilling Down (click header):**

1. Day View → Click "January 2025" → Month View
2. Month View → Click "2025" → Year View
3. Year View → (can't go further)

**Selecting & Going Back (click item):**

1. Year View → Click "2024" → Month View (for 2024)
2. Month View → Click "March" → Day View (for March 2024)

---

## User Interaction Guide

### Clicking the Header

The header (month/year label) acts as a **drill-down button**:

| Current View | Header Shows   | Click Action       |
| ------------ | -------------- | ------------------ |
| Day          | "January 2025" | → Go to Month View |
| Month        | "2025"         | → Go to Year View  |
| Year         | "2020 - 2031"  | → (no action)      |

### Clicking Previous/Next Buttons

The previous/next arrow buttons are **context-aware**:

| Current View | Buttons Navigate                    |
| ------------ | ----------------------------------- |
| Day          | Previous/Next **Month**             |
| Month        | Previous/Next **Year**              |
| Year         | Previous/Next **Decade** (12 years) |

### Selecting Items

Clicking an item **selects it and returns to the previous view**:

| Current View | Click Action  | Result                                  |
| ------------ | ------------- | --------------------------------------- |
| Year View    | Click "2024"  | → Goes to Month View for 2024           |
| Month View   | Click "March" | → Goes to Day View for March            |
| Day View     | Click a date  | → Selects that date (stays in Day View) |

---

## Example User Flows

### Flow 1: Jump to a Different Month

```
Starting: Day View (January 2025)
Goal: Jump to March 2025

1. Click header "January 2025" → Month View appears
2. Click "Mar" → Back to Day View showing March 2025
```

### Flow 2: Jump to a Different Year

```
Starting: Day View (January 2025)
Goal: Jump to June 2027

1. Click header "January 2025" → Month View (2025)
2. Click header "2025" → Year View (2020-2031)
3. Click "2027" → Month View (2027)
4. Click "Jun" → Day View (June 2027)
```

### Flow 3: Jump Far Back in Time

```
Starting: Day View (January 2025)
Goal: Jump to March 1995

1. Click header "January 2025" → Month View (2025)
2. Click header "2025" → Year View (2020-2031)
3. Click "Previous" 2 times → Year View shows 1996-2007
4. Click "1995" → Oops! Need to click Previous one more time
5. Click "Previous" → Year View shows 1984-1995
6. Click "1995" → Month View (1995)
7. Click "Mar" → Day View (March 1995)
```

---

## Keyboard Navigation

### Day View

- **Arrow Keys**: Navigate between dates
  - Left/Right: Previous/Next day
  - Up/Down: Previous/Next week (±7 days)
- **Enter/Space**: Select the focused date
- **Escape**: (no action in day view)

### Month View (Future Enhancement)

- **Escape**: Go back to Day View
- **Arrow Keys**: Navigate between months
- **Enter/Space**: Select the focused month

### Year View (Future Enhancement)

- **Escape**: Go back to Month View
- **Arrow Keys**: Navigate between years
- **Enter/Space**: Select the focused year

---

## Visual States

### Highlighting

Each view mode highlights relevant items:

| View Mode | Highlighted Items                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| Day       | • **Today's date** (accent color)<br>• **Selected date(s)** (primary color)<br>• Outside month days (dimmed) |
| Month     | • **Current month** (accent color)<br>• **Displayed month** (primary color)                                  |
| Year      | • **Current year** (accent color)<br>• **Displayed year** (primary color)                                    |

---

## Accessibility

### ARIA Labels

The component provides context-aware ARIA labels:

- **Header button**:
  - Day view: "Switch to month view"
  - Month view: "Switch to year view"
  - Year view: "Year view - select a year"

- **Previous button**:
  - Day view: "Go to previous month"
  - Month view: "Go to previous year"
  - Year view: "Go to previous decade"

- **Next button**:
  - Day view: "Go to next month"
  - Month view: "Go to next year"
  - Year view: "Go to next decade"

### ARIA Attributes

- `role="grid"` on all calendar grids
- `role="gridcell"` on all date/month/year buttons
- `aria-current="date"` on today's date/current month/current year
- `aria-expanded` on header button (true when not in day view)

---

## Technical Details

### State Management

The component uses Angular signals for reactive state:

```typescript
viewMode: Signal<'day' | 'month' | 'year'>; // Current view mode
viewDate: Signal<Date>; // Currently displayed month/year
decadeStart: Signal<number>; // Starting year for year view
```

### Computed Grids

Each view mode has a computed grid:

- **Day View**: `weeks()` - 2D array of day objects
- **Month View**: `months()` - Array of 12 month objects
- **Year View**: `years()` - Array of 12 year objects

---

## Design Decisions

### Why Month View Comes Before Year View?

The current implementation follows a **zoom out** pattern:

1. **Day View**: Most detailed (individual days)
2. **Month View**: Medium zoom (12 months)
3. **Year View**: Most zoomed out (12 years)

This is similar to how map applications work - you zoom out progressively.

### Alternative: Year First

Some users might prefer selecting year first, then month:

1. **Day View** → **Year View** (select year)
2. **Year View** → **Month View** (select month)
3. **Month View** → **Day View** (select day)

This is more of a **drill down** pattern and might be more intuitive for date selection.

**Current**: Zoom out (Day → Month → Year)
**Alternative**: Drill down (Day → Year → Month)

---

## Future Enhancements

Potential improvements to consider:

1. **Configurable Navigation Flow**: Allow users to choose Day→Month→Year vs Day→Year→Month
2. **Keyboard Navigation**: Full arrow key support for month/year grids
3. **Animation Transitions**: Smooth fade/slide transitions between views
4. **Gesture Support**: Swipe to change months/years on touch devices
5. **Quick Jump**: Type to jump (e.g., type "2020" to jump to that year)
6. **Min/Max Date Constraints**: Disable unavailable years/months
7. **View Mode Input**: Allow programmatic control of initial view mode

---

## Questions to Consider

Before finalizing the navigation pattern, consider:

1. **What is the primary use case?**
   - Quick month changes → Month view first makes sense
   - Jumping across years → Year view first makes sense

2. **What do users expect?**
   - Desktop calendar apps often use Month → Year pattern
   - iOS date pickers use Year → Month → Day pattern
   - Material Design uses Year first for date pickers

3. **What feels more natural?**
   - Test with users to see which flow is more intuitive

---

## Summary

The calendar now supports three view modes with inline grids:

- ✅ Click header to navigate between views
- ✅ Context-aware previous/next buttons
- ✅ Visual feedback for current/selected items
- ✅ Full accessibility support
- ✅ Keyboard navigation (partial)

**Current Flow**: Day → Month → Year (zoom out pattern)
**Alternative Flow**: Day → Year → Month (drill down pattern)

Read this document and let me know if the current flow works for your use case or if you'd prefer the alternative navigation pattern!
