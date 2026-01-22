# Rich Text Editor

WYSIWYG editor with formatting toolbar, keyboard shortcuts, and HTML output.

## Usage

```html
<sc-rich-text-editor [(value)]="htmlContent" [placeholder]="'Start typing...'" />
```

## API

### ScRichTextEditor

| Input         | Type            | Default             | Description               |
| ------------- | --------------- | ------------------- | ------------------------- |
| `value`       | `string`        | `''`                | HTML content (two-way)    |
| `placeholder` | `string`        | `'Start typing...'` | Placeholder text          |
| `disabled`    | `boolean`       | `false`             | Disable editor            |
| `readonly`    | `boolean`       | `false`             | Readonly mode             |
| `showToolbar` | `boolean`       | `true`              | Show formatting toolbar   |
| `showCount`   | `boolean`       | `true`              | Show word/char count      |
| `toolbar`     | `ToolbarConfig` | all enabled         | Configure toolbar buttons |
| `minHeight`   | `string`        | `'150px'`           | Minimum editor height     |
| `maxHeight`   | `string`        | `'400px'`           | Maximum editor height     |
| `ariaLabel`   | `string`        | `''`                | ARIA label                |

| Output            | Type        | Description             |
| ----------------- | ----------- | ----------------------- |
| `valueChange`     | `string`    | Emits on content change |
| `focus`           | `void`      | Emits on focus          |
| `blur`            | `void`      | Emits on blur           |
| `selectionChange` | `Selection` | Emits on selection      |

| Method        | Type                    | Description            |
| ------------- | ----------------------- | ---------------------- |
| `setContent`  | `(html: string)`        | Set editor content     |
| `getContent`  | `() => string`          | Get HTML content       |
| `clear`       | `() => void`            | Clear all content      |
| `focusEditor` | `() => void`            | Focus the editor       |
| `execCommand` | `(cmd, value?) => void` | Execute format command |

### ToolbarConfig

```typescript
interface ToolbarConfig {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  headings?: boolean;
  alignment?: boolean;
  lists?: boolean;
  link?: boolean;
  blockquote?: boolean;
  code?: boolean;
  horizontalRule?: boolean;
  undo?: boolean;
  redo?: boolean;
  clearFormatting?: boolean;
}
```

## Examples

### Basic Editor

```html
<sc-rich-text-editor [(value)]="content" [placeholder]="'Write your article...'" />
```

### Custom Toolbar

```typescript
minimalToolbar: ToolbarConfig = {
  bold: true,
  italic: true,
  underline: true,
  link: true,
  undo: true,
  redo: true,
};
```

```html
<sc-rich-text-editor [(value)]="content" [toolbar]="minimalToolbar" />
```

### Readonly Mode

```html
<sc-rich-text-editor [value]="content" [readonly]="true" [showToolbar]="false" />
```

### Without Word Count

```html
<sc-rich-text-editor [(value)]="content" [showCount]="false" />
```

### Custom Height

```html
<sc-rich-text-editor [(value)]="content" [minHeight]="'300px'" [maxHeight]="'600px'" />
```

## Keyboard Shortcuts

| Shortcut | Action      |
| -------- | ----------- |
| `Ctrl+B` | Bold        |
| `Ctrl+I` | Italic      |
| `Ctrl+U` | Underline   |
| `Ctrl+K` | Insert link |
| `Ctrl+Z` | Undo        |
| `Ctrl+Y` | Redo        |

## Toolbar Features

- **Text Formatting**: Bold, italic, underline, strikethrough
- **Headings**: Paragraph, H1, H2, H3, H4
- **Alignment**: Left, center, right, justify
- **Lists**: Ordered and unordered lists
- **Insert**: Links, inline code, horizontal rule
- **Blockquote**: Quote formatting
- **History**: Undo/redo support
- **Clear**: Remove all formatting

## Styling

The editor supports custom CSS styling for content:

- Headings (h1-h4) with appropriate sizes
- Blockquotes with left border
- Inline code with monospace font
- Links with primary color
- Lists with proper indentation
- Horizontal rules

## Output Format

The editor outputs clean HTML:

```html
<h1>Title</h1>
<p>
  Paragraph with
  <strong>bold</strong>
  and
  <em>italic</em>
  text.
</p>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
<blockquote>A quote</blockquote>
```

## Accessibility

- ARIA toolbar role for formatting controls
- Keyboard navigable
- Proper focus management
- Screen reader friendly labels
