# Empty State

A placeholder component for empty content with customizable icon, title, description, and action buttons.

## Installation

```typescript
import { ScEmptyState } from '@/ui/empty-state';
import type { EmptyStateAction, EmptyStateSize } from '@/ui/empty-state';
```

## Usage

### Basic Usage

```html
<sc-empty-state title="No results found" description="Try adjusting your search or filter." [icon]="searchIcon" />
```

### With Actions

```html
<sc-empty-state title="No projects yet" description="Get started by creating your first project." [icon]="folderIcon" [actions]="actions" (actionClick)="onAction($event)" />
```

```typescript
actions: EmptyStateAction[] = [
  { label: 'Create Project', variant: 'default' },
  { label: 'Import', variant: 'outline' },
];
```

### Size Variants

```html
<sc-empty-state title="Small" description="Compact display" size="sm" />
<sc-empty-state title="Medium" description="Default size" size="md" />
<sc-empty-state title="Large" description="Prominent display" size="lg" />
```

### With Custom Content

```html
<sc-empty-state title="Custom Content" [icon]="icon">
  <p class="mt-4 text-sm">Your custom content here</p>
</sc-empty-state>
```

## API Reference

### Inputs

| Input         | Type                   | Default     | Description            |
| ------------- | ---------------------- | ----------- | ---------------------- |
| `title`       | `string`               | `undefined` | Main heading           |
| `description` | `string`               | `undefined` | Description text       |
| `icon`        | `string`               | `undefined` | HTML icon              |
| `actions`     | `EmptyStateAction[]`   | `[]`        | Action buttons         |
| `size`        | `'sm' \| 'md' \| 'lg'` | `'md'`      | Component size         |
| `class`       | `string`               | `''`        | Additional CSS classes |

### Outputs

| Output        | Type               | Description                 |
| ------------- | ------------------ | --------------------------- |
| `actionClick` | `EmptyStateAction` | Emitted when action clicked |

## Type Definitions

```typescript
type EmptyStateSize = 'sm' | 'md' | 'lg';

interface EmptyStateAction {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'default' | 'outline' | 'ghost';
}
```

## Features

- Customizable icon
- Title and description
- Multiple action buttons
- Action button variants
- Size variants
- Content projection for custom content
- Centered layout
- Responsive design
