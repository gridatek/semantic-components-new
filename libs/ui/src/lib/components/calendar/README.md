# Calendar

A date picker component with support for single, multiple, and range selection.

## Usage

```html
<sc-calendar [(selected)]="date" />
```

## Component

### ScCalendar

Date picker component with month navigation and date selection.

**Selector:** `sc-calendar`

**Inputs:**

| Input      | Type                               | Default     | Description               |
| ---------- | ---------------------------------- | ----------- | ------------------------- |
| `mode`     | `'single' \| 'multiple'\| 'range'` | `'single'`  | Selection mode            |
| `disabled` | `Date[]`                           | `[]`        | Array of dates to disable |
| `minDate`  | `Date \| undefined`                | `undefined` | Minimum selectable date   |
| `maxDate`  | `Date \| undefined`                | `undefined` | Maximum selectable date   |
| `class`    | `string`                           | `''`        | Additional CSS classes    |

**Two-way Bindings:**

| Binding         | Type                | Description                    |
| --------------- | ------------------- | ------------------------------ |
| `selected`      | `Date \| undefined` | Selected date (single mode)    |
| `selectedDates` | `Date[]`            | Selected dates (multiple mode) |
| `selectedRange` | `DateRange`         | Selected range (range mode)    |

**DateRange Interface:**

```typescript
interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}
```

## Examples

### Single Date Selection

```html
<sc-calendar [(selected)]="selectedDate" />
```

### Multiple Date Selection

```html
<sc-calendar mode="multiple" [(selectedDates)]="selectedDates" />
```

### Date Range Selection

```html
<sc-calendar mode="range" [(selectedRange)]="selectedRange" />
```

### With Disabled Dates

```typescript
disabledDates = [new Date(2024, 0, 1), new Date(2024, 0, 15)];
```

```html
<sc-calendar [(selected)]="date" [disabled]="disabledDates" />
```

### With Min/Max Date

```typescript
minDate = new Date(); // Today
maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
```

```html
<sc-calendar [(selected)]="date" [minDate]="minDate" [maxDate]="maxDate" />
```

## Features

- **Single Selection**: Select a single date
- **Multiple Selection**: Select multiple dates (click to toggle)
- **Range Selection**: Select a date range (two clicks)
- **Disabled Dates**: Disable specific dates from selection
- **Min/Max Constraints**: Limit selectable date range
- **Month Navigation**: Previous/next month buttons
- **Today Highlight**: Current date is visually highlighted
- **Outside Days**: Shows days from adjacent months (dimmed)

## Keyboard Navigation

- `ArrowLeft`: Previous day
- `ArrowRight`: Next day
- `ArrowUp`: Same day previous week
- `ArrowDown`: Same day next week
- `Enter` / `Space`: Select focused date

## Accessibility

- Uses `role="application"` for calendar container
- Uses `role="grid"` for the calendar table
- `aria-label` on navigation buttons
- `aria-selected` on selected dates
- Focus management with visible focus ring
