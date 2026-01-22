# Code Editor

Syntax-highlighted code editor with line numbers, auto-indent, and multiple language support.

## Usage

```html
<sc-code-editor [(value)]="code" [language]="'typescript'" [filename]="'example.ts'" />
```

## API

### ScCodeEditor

| Input                 | Type              | Default       | Description                  |
| --------------------- | ----------------- | ------------- | ---------------------------- |
| `value`               | `string`          | `''`          | Code content (two-way)       |
| `language`            | `Language`        | `'plaintext'` | Syntax highlighting language |
| `filename`            | `string`          | `''`          | Display filename in header   |
| `theme`               | `CodeEditorTheme` | dark theme    | Color theme object           |
| `placeholder`         | `string`          | `''`          | Placeholder text             |
| `disabled`            | `boolean`         | `false`       | Disable the editor           |
| `readonly`            | `boolean`         | `false`       | Make editor readonly         |
| `showLineNumbers`     | `boolean`         | `true`        | Show line numbers            |
| `showHeader`          | `boolean`         | `true`        | Show header bar              |
| `showFooter`          | `boolean`         | `true`        | Show footer with stats       |
| `showCopyButton`      | `boolean`         | `true`        | Show copy button             |
| `tabSize`             | `number`          | `2`           | Spaces per tab               |
| `insertSpaces`        | `boolean`         | `true`        | Use spaces instead of tabs   |
| `wordWrap`            | `boolean`         | `false`       | Enable word wrapping         |
| `maxHeight`           | `string`          | `'500px'`     | Maximum editor height        |
| `minHeight`           | `string`          | `'200px'`     | Minimum editor height        |
| `autoDetectLanguage`  | `boolean`         | `false`       | Auto-detect language         |
| `highlightActiveLine` | `boolean`         | `true`        | Highlight active line        |

| Output             | Type                               | Description             |
| ------------------ | ---------------------------------- | ----------------------- |
| `valueChange`      | `string`                           | Emits on code change    |
| `languageDetected` | `Language`                         | Emits detected language |
| `cursorChange`     | `{ line: number; column: number }` | Emits cursor position   |

### Language

Supported languages:

- `javascript` - JavaScript (.js, .mjs, .cjs, .jsx)
- `typescript` - TypeScript (.ts, .tsx, .mts, .cts)
- `html` - HTML (.html, .htm)
- `css` - CSS (.css, .scss, .sass, .less)
- `json` - JSON (.json)
- `python` - Python (.py, .pyw)
- `sql` - SQL (.sql)
- `markdown` - Markdown (.md)
- `plaintext` - Plain text

### CodeEditorTheme

```typescript
interface CodeEditorTheme {
  background: string;
  foreground: string;
  lineNumbers: string;
  lineNumbersActive: string;
  selection: string;
  cursor: string;
  activeLine: string;
  keyword: string;
  string: string;
  number: string;
  comment: string;
  function: string;
  operator: string;
  punctuation: string;
  property: string;
  tag: string;
  attribute: string;
  selector: string;
  variable: string;
  builtin: string;
}
```

Built-in themes: `THEMES['dark']`, `THEMES['light']`

## Examples

### Basic Editor

```html
<sc-code-editor [(value)]="code" [language]="'javascript'" [filename]="'script.js'" />
```

### Light Theme

```typescript
import { THEMES } from './ui/code-editor';

lightTheme = THEMES['light'];
```

```html
<sc-code-editor [(value)]="code" [language]="'typescript'" [theme]="lightTheme" />
```

### Readonly Mode

```html
<sc-code-editor [value]="code" [language]="'json'" [readonly]="true" />
```

### Minimal (No Header/Footer)

```html
<sc-code-editor [(value)]="code" [language]="'html'" [showHeader]="false" [showFooter]="false" [showLineNumbers]="false" />
```

### Word Wrap

```html
<sc-code-editor [(value)]="code" [language]="'markdown'" [wordWrap]="true" />
```

### Auto-detect Language

```html
<sc-code-editor [(value)]="code" [autoDetectLanguage]="true" (languageDetected)="onLanguageDetected($event)" />
```

## Keyboard Shortcuts

| Key         | Action                        |
| ----------- | ----------------------------- |
| `Tab`       | Insert indent                 |
| `Shift+Tab` | Remove indent (outdent)       |
| `Enter`     | New line with auto-indent     |
| `}`/`]`/`)` | Auto-outdent closing brackets |

## Features

- Syntax highlighting for 9 languages
- Line numbers with active line indicator
- Auto-indentation on Enter key
- Tab/Shift+Tab for indent/outdent
- Smart bracket handling
- Copy code button
- Cursor position display (line/column)
- Character and line count
- Light and dark themes
- Word wrap support
- Readonly and disabled modes
- Auto language detection
- Customizable themes

## Utilities

### highlightCode

Highlight code string to HTML:

```typescript
import { highlightCode } from './ui/code-editor';

const html = highlightCode('const x = 1;', 'javascript');
```

### detectLanguage

Auto-detect language from code content:

```typescript
import { detectLanguage } from './ui/code-editor';

const lang = detectLanguage(code, 'file.ts'); // 'typescript'
```

## Accessibility

- Proper ARIA labels
- Keyboard navigable
- Screen reader friendly
- Focus indicators
