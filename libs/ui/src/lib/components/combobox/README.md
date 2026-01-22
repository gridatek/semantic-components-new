# Combobox

Autocomplete input and command palette with a list of suggestions.

## Usage

```typescript
options: ComboboxOption[] = [
  { value: 'next', label: 'Next.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
];
```

```html
<sc-combobox [(value)]="selected" [options]="options" placeholder="Select framework..." />
```

## Component

### ScCombobox

Searchable dropdown combining Popover and Command components.

**Selector:** `sc-combobox`

**Inputs:**

| Input               | Type               | Default               | Description               |
| ------------------- | ------------------ | --------------------- | ------------------------- |
| `options`           | `ComboboxOption[]` | `[]`                  | List of options           |
| `placeholder`       | `string`           | `'Select option...'`  | Placeholder text          |
| `searchPlaceholder` | `string`           | `'Search...'`         | Search input placeholder  |
| `emptyText`         | `string`           | `'No results found.'` | Text when no results      |
| `multiple`          | `boolean`          | `false`               | Enable multiple selection |
| `side`              | `PopoverSide`      | `'bottom'`            | Popover position side     |
| `align`             | `PopoverAlign`     | `'start'`             | Popover alignment         |
| `class`             | `string`           | `''`                  | Additional CSS classes    |

**Two-way Bindings:**

| Binding  | Type       | Description                     |
| -------- | ---------- | ------------------------------- |
| `value`  | `string`   | Selected value (single mode)    |
| `values` | `string[]` | Selected values (multiple mode) |
| `open`   | `boolean`  | Popover open state              |

**ComboboxOption Interface:**

```typescript
interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

## Examples

### Default

```html
<sc-combobox [(value)]="selected" [options]="options" placeholder="Select framework..." />
```

### Multiple Selection

```html
<sc-combobox [multiple]="true" [(values)]="selectedValues" [options]="options" />
```

### With Disabled Options

```typescript
options: ComboboxOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'archived', label: 'Archived', disabled: true },
];
```

```html
<sc-combobox [(value)]="status" [options]="options" />
```

### Custom Placeholders

```html
<sc-combobox [(value)]="country" [options]="countries" placeholder="Select country..." searchPlaceholder="Search countries..." emptyText="No country found." />
```

## Features

- **Search/Filter**: Type to filter options
- **Single Selection**: Select one option, auto-closes on selection
- **Multiple Selection**: Toggle multiple options
- **Disabled Options**: Individual options can be disabled
- **Check Mark**: Visual indicator for selected options
- **Keyboard Navigation**: Full keyboard support via Command component

## Accessibility

- `role="combobox"` on trigger button
- Uses Command component's listbox pattern
- Keyboard navigation within options
- Focus management between trigger and popover
