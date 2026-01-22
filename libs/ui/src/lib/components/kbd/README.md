# Kbd

A component for displaying keyboard keys and shortcuts.

## Usage

```html
<kbd sc-kbd>⌘</kbd>
<kbd sc-kbd>K</kbd>
```

## Component

### ScKbd

Styled keyboard key element.

**Selector:** `[sc-kbd]`

**Inputs:**

| Input     | Type                        | Default     | Description            |
| --------- | --------------------------- | ----------- | ---------------------- |
| `variant` | `'default' \| 'outline'`    | `'default'` | Visual style variant   |
| `size`    | `'sm' \| 'default' \| 'lg'` | `'default'` | Size of the key        |
| `class`   | `string`                    | `''`        | Additional CSS classes |

## Examples

### Basic Keys

```html
<kbd sc-kbd>⌘</kbd>
<kbd sc-kbd>Shift</kbd>
<kbd sc-kbd>Enter</kbd>
```

### Keyboard Shortcut

```html
<kbd sc-kbd>⌘</kbd>
<span>+</span>
<kbd sc-kbd>K</kbd>
```

### Variants

```html
<!-- Default - with shadow -->
<kbd sc-kbd variant="default">⌘</kbd>

<!-- Outline - simple border -->
<kbd sc-kbd variant="outline">⌘</kbd>
```

### Sizes

```html
<kbd sc-kbd size="sm">⌘</kbd>
<kbd sc-kbd size="default">⌘</kbd>
<kbd sc-kbd size="lg">⌘</kbd>
```

### Inline in Text

```html
<p>
  Press
  <kbd sc-kbd size="sm">⌘</kbd>
  <kbd sc-kbd size="sm">K</kbd>
  to open the command palette.
</p>
```

### Arrow Keys

```html
<div class="flex flex-col items-center gap-1">
  <kbd sc-kbd>↑</kbd>
  <div class="flex gap-1">
    <kbd sc-kbd>←</kbd>
    <kbd sc-kbd>↓</kbd>
    <kbd sc-kbd>→</kbd>
  </div>
</div>
```

### Complex Shortcuts

```html
<kbd sc-kbd>⌘</kbd>
<span>+</span>
<kbd sc-kbd>Shift</kbd>
<span>+</span>
<kbd sc-kbd>P</kbd>
```

## Common Keys

| Symbol | Key        |
| ------ | ---------- |
| `⌘`    | Command    |
| `⌥`    | Option/Alt |
| `⇧`    | Shift      |
| `⌃`    | Control    |
| `↵`    | Enter      |
| `⎋`    | Escape     |
| `⇥`    | Tab        |
| `⌫`    | Backspace  |
| `↑↓←→` | Arrows     |

## Features

- **Variants**: Default (with shadow) and outline styles
- **Sizes**: Small, default, and large
- **Monospace Font**: Uses monospace for consistent key widths
- **Minimum Width**: Ensures single characters are well-proportioned
- **Inline Friendly**: Works well in paragraph text

## Accessibility

- Uses semantic `<kbd>` element
- High contrast text for readability
- Clear visual distinction from surrounding text
