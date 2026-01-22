# Theme Toggle

A component for switching between light and dark themes with system preference support.

## Usage

### Basic Toggle Button

```html
<button sc-theme-toggle></button>
```

### With Variants

```html
<button sc-theme-toggle variant="outline"></button>
<button sc-theme-toggle variant="ghost"></button>
```

### Theme Select Dropdown

```html
<sc-theme-select></sc-theme-select>
```

### Using the Service Directly

```typescript
import { ScThemeService } from './ui/theme-toggle';

export class MyComponent {
  private themeService = inject(ScThemeService);

  // Read the current theme
  currentTheme = this.themeService.theme;

  // Check if dark mode is active
  isDark = this.themeService.isDark;

  // Set a specific theme
  setDark() {
    this.themeService.setTheme('dark');
  }

  // Toggle between light and dark
  toggle() {
    this.themeService.toggleTheme();
  }
}
```

## Components

### ScThemeToggle

A button that toggles between light and dark themes.

**Selector:** `button[sc-theme-toggle]`

**Inputs:**

| Input     | Type                 | Default   | Description            |
| --------- | -------------------- | --------- | ---------------------- |
| `variant` | `ThemeToggleVariant` | `'ghost'` | Visual style variant   |
| `size`    | `ThemeToggleSize`    | `'icon'`  | Button size            |
| `class`   | `string`             | `''`      | Additional CSS classes |

**Variants:** `'default'` | `'outline'` | `'ghost'`

**Sizes:** `'default'` | `'sm'` | `'lg'` | `'icon'`

### ScThemeSelect

A dropdown select for choosing between light, dark, and system themes.

**Selector:** `sc-theme-select`

**Inputs:**

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

## Service: ScThemeService

A singleton service for managing theme state.

**Properties:**

| Property        | Type                        | Description                                       |
| --------------- | --------------------------- | ------------------------------------------------- |
| `theme`         | `Signal<Theme>`             | Current theme setting ('light', 'dark', 'system') |
| `resolvedTheme` | `Signal<'light' \| 'dark'>` | Actual applied theme (resolves 'system')          |
| `isDark`        | `Signal<boolean>`           | Whether dark theme is currently active            |

**Methods:**

| Method        | Parameters     | Description                   |
| ------------- | -------------- | ----------------------------- |
| `setTheme`    | `theme: Theme` | Set the theme explicitly      |
| `toggleTheme` | none           | Toggle between light and dark |

## Accessibility

- The toggle button uses `aria-label` to describe the action
- The toggle button uses `aria-pressed` to indicate the current state
- The select dropdown includes a screen-reader-only label
- Icons are marked with `aria-hidden="true"`
- Full keyboard navigation support

## Persistence

The theme preference is automatically persisted to `localStorage` under the key `sc-theme` and restored on page load.
