# ScCodeViewer

A read-only code display component with syntax highlighting powered by [Shiki](https://shiki.style/) and shadcn/ui styling. Automatically follows the app's light/dark theme.

## Architecture

The component uses Shiki's dual-theme feature (`github-light` + `github-dark`) with `defaultColor: false` to generate CSS variable-based output. The CSS switches between `--shiki-light` and `--shiki-dark` variables based on the `.dark` class on the document root.

```
ScCodeViewer
├── Header (filename/language label + copy button)
└── Content (Shiki-highlighted <pre> or plain fallback)
```

## Inputs

| Input             | Type                 | Default       | Description                              |
| ----------------- | -------------------- | ------------- | ---------------------------------------- |
| `code`            | `string`             | **required**  | The source code to display               |
| `language`        | `CodeViewerLanguage` | `'plaintext'` | Language for syntax highlighting         |
| `filename`        | `string`             | `''`          | Filename shown in the header             |
| `showHeader`      | `boolean`            | `true`        | Whether to show the header bar           |
| `showCopyButton`  | `boolean`            | `true`        | Whether to show the copy button          |
| `showLineNumbers` | `boolean`            | `false`       | Whether to show line numbers             |
| `maxHeight`       | `string`             | `''`          | Max height with overflow scroll          |
| `class`           | `string`             | `''`          | Additional CSS classes for the container |

## Supported Languages

`angular-ts` | `typescript` | `javascript` | `html` | `css` | `json` | `python` | `bash` | `shell` | `markdown` | `yaml` | `sql` | `go` | `rust` | `java` | `plaintext`

## Usage

### Basic

```html
<sc-code-viewer [code]="tsCode" language="typescript" />
```

### Angular Component File

```html
<sc-code-viewer [code]="componentCode" language="angular-ts" />
```

### With Filename and Line Numbers

```html
<sc-code-viewer [code]="code" language="typescript" filename="app.component.ts" [showLineNumbers]="true" />
```

### Without Header

```html
<sc-code-viewer [code]="code" language="json" [showHeader]="false" />
```

### With Max Height

```html
<sc-code-viewer [code]="longCode" language="typescript" maxHeight="300px" />
```

## Theming

The component automatically follows the app's theme:

- **Light mode**: Uses `github-light` Shiki theme
- **Dark mode**: Uses `github-dark` Shiki theme (activated by `.dark` class on `<html>`)

No manual theme configuration is needed. The component renders both theme colors as CSS variables and switches between them with CSS.

## Styling

The component uses Tailwind CSS with shadcn/ui design tokens:

- Container: `rounded-lg border border-border overflow-hidden`
- Header: `border-b border-border` with muted foreground text
- Copy button: accent hover, ring focus state
- Code font: system monospace stack (`ui-monospace, SFMono-Regular, ...`)
- Line numbers: muted foreground at 50% opacity, non-selectable
