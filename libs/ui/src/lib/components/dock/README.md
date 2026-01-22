# Dock

A macOS-style icon dock with magnification effect on hover, perfect for application launchers or navigation.

## Installation

```typescript
import { ScDock } from '@/ui/dock';
import type { DockItem, DockPosition, DockSize } from '@/ui/dock';
```

## Usage

### Basic Usage

```html
<sc-dock [items]="items" (itemClick)="onItemClick($event)" />
```

```typescript
items: DockItem[] = [
  { id: 'home', label: 'Home', icon: '<svg>...</svg>' },
  { id: 'mail', label: 'Mail', icon: '<svg>...</svg>' },
  { id: 'settings', label: 'Settings', icon: '<svg>...</svg>' },
];

onItemClick(item: DockItem): void {
  console.log('Clicked:', item.label);
}
```

### With Badges

```html
<sc-dock [items]="itemsWithBadges" />
```

```typescript
itemsWithBadges: DockItem[] = [
  { id: 'mail', label: 'Mail', icon: '...', badge: 5 },
  { id: 'notifications', label: 'Notifications', icon: '...', badge: '!' },
];
```

### Without Magnification

```html
<sc-dock [items]="items" [magnification]="false" />
```

### Custom Magnification Scale

```html
<sc-dock [items]="items" [magnificationScale]="2" />
```

### Size Variants

```html
<sc-dock [items]="items" size="sm" />
<sc-dock [items]="items" size="md" />
<sc-dock [items]="items" size="lg" />
```

## API Reference

### Inputs

| Input                | Type                            | Default              | Description             |
| -------------------- | ------------------------------- | -------------------- | ----------------------- |
| `items`              | `DockItem[]`                    | `[]`                 | Dock items array        |
| `position`           | `'bottom' \| 'left' \| 'right'` | `'bottom'`           | Dock position           |
| `size`               | `'sm' \| 'md' \| 'lg'`          | `'md'`               | Icon size               |
| `magnification`      | `boolean`                       | `true`               | Enable magnification    |
| `magnificationScale` | `number`                        | `1.5`                | Max magnification scale |
| `ariaLabel`          | `string`                        | `'Application dock'` | Accessible label        |
| `class`              | `string`                        | `''`                 | Additional CSS classes  |

### Outputs

| Output      | Type       | Description                  |
| ----------- | ---------- | ---------------------------- |
| `itemClick` | `DockItem` | Emitted when item is clicked |

## Type Definitions

```typescript
interface DockItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
  badge?: number | string;
  disabled?: boolean;
}

type DockPosition = 'bottom' | 'left' | 'right';
type DockSize = 'sm' | 'md' | 'lg';
```

## Features

- macOS-style magnification effect on hover
- Smooth scale transitions
- Badge support for notifications
- Multiple size variants
- Disabled state support
- Glassmorphism styling
- Keyboard accessible
- Touch-friendly
- Customizable magnification scale
