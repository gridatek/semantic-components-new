# Stat Card

A component for displaying statistics and metrics with optional trends, icons, and descriptions.

## Installation

```typescript
import { ScStatCard } from '@/ui/stat-card';
import type { StatCardTrend, StatCardVariant, StatCardSize } from '@/ui/stat-card';
```

## Usage

### Basic Usage

```html
<sc-stat-card label="Total Revenue" value="$45,231.89" [change]="20.1" changeLabel="from last month" trend="up" />
```

### With Icon

```html
<sc-stat-card label="Active Users" value="2,350" [change]="-5.2" trend="down" [icon]="usersIcon" />
```

### Variant Styles

```html
<sc-stat-card label="Default" value="1,234" variant="default" />
<sc-stat-card label="Outline" value="5,678" variant="outline" />
<sc-stat-card label="Filled" value="9,012" variant="filled" />
```

### Size Variants

```html
<sc-stat-card label="Small" value="1,234" size="sm" />
<sc-stat-card label="Medium" value="5,678" size="md" />
<sc-stat-card label="Large" value="9,012" size="lg" />
```

## API Reference

### Inputs

| Input         | Type                                 | Default     | Description            |
| ------------- | ------------------------------------ | ----------- | ---------------------- |
| `label`       | `string`                             | (required)  | Stat label             |
| `value`       | `string \| number`                   | (required)  | Stat value             |
| `change`      | `number`                             | `undefined` | Percentage change      |
| `changeLabel` | `string`                             | `undefined` | Change context label   |
| `trend`       | `'up' \| 'down' \| 'neutral'`        | `'neutral'` | Trend direction        |
| `icon`        | `string`                             | `undefined` | HTML icon              |
| `description` | `string`                             | `undefined` | Additional description |
| `variant`     | `'default' \| 'outline' \| 'filled'` | `'default'` | Card style variant     |
| `size`        | `'sm' \| 'md' \| 'lg'`               | `'md'`      | Card size              |
| `class`       | `string`                             | `''`        | Additional CSS classes |

## Type Definitions

```typescript
type StatCardTrend = 'up' | 'down' | 'neutral';
type StatCardVariant = 'default' | 'outline' | 'filled';
type StatCardSize = 'sm' | 'md' | 'lg';

interface StatCardData {
  label: string;
  value: string | number;
  previousValue?: string | number;
  change?: number;
  changeLabel?: string;
  trend?: StatCardTrend;
  icon?: string;
  description?: string;
}
```

## Features

- Trend indicators with arrows
- Percentage change display
- Multiple style variants
- Multiple size options
- Optional icon display
- Description text support
- Automatic number formatting
- Responsive design
