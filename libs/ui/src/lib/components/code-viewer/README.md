# ScCodeViewer

A read-only code display component with syntax highlighting powered by [Shiki](https://shiki.style/) and shadcn/ui styling.

## Architecture

The component uses Shiki's `codeToHtml` function to produce highlighted HTML at runtime. A fallback plain `<pre><code>` block is rendered while Shiki loads or if highlighting fails.

```
ScCodeViewer
├── Header (filename/language label + copy button)
└── Content (Shiki-highlighted <pre> or plain fallback)
```

## Inputs

| Input             | Type                 | Default         | Description                              |
| ----------------- | -------------------- | --------------- | ---------------------------------------- |
| `code`            | `string`             | **required**    | The source code to display               |
| `language`        | `CodeViewerLanguage` | `'plaintext'`   | Language for syntax highlighting         |
| `theme`           | `CodeViewerTheme`    | `'github-dark'` | Shiki color theme                        |
| `filename`        | `string`             | `''`            | Filename shown in the header             |
| `showHeader`      | `boolean`            | `true`          | Whether to show the header bar           |
| `showCopyButton`  | `boolean`            | `true`          | Whether to show the copy button          |
| `showLineNumbers` | `boolean`            | `false`         | Whether to show line numbers             |
| `maxHeight`       | `string`             | `''`            | Max height with overflow scroll          |
| `class`           | `string`             | `''`            | Additional CSS classes for the container |

## Supported Languages

`typescript` | `javascript` | `html` | `css` | `json` | `python` | `bash` | `shell` | `markdown` | `yaml` | `sql` | `go` | `rust` | `java` | `plaintext`

## Supported Themes

`github-dark` | `github-light`

## Usage

### Basic

```html
<sc-code-viewer [code]="tsCode" language="typescript" />
```

### With Filename

```html
<sc-code-viewer [code]="code" language="typescript" filename="app.component.ts" />
```

### With Line Numbers

```html
<sc-code-viewer [code]="code" language="typescript" [showLineNumbers]="true" />
```

### Light Theme

```html
<sc-code-viewer [code]="code" language="html" theme="github-light" />
```

### Without Header

```html
<sc-code-viewer [code]="code" language="json" [showHeader]="false" />
```

### With Max Height

```html
<sc-code-viewer [code]="longCode" language="typescript" maxHeight="300px" />
```

### Custom Styling

```html
<sc-code-viewer [code]="code" language="css" class="shadow-lg" />
```

## Styling

The component uses Tailwind CSS with shadcn/ui design tokens:

- Container: `rounded-lg border border-border bg-muted/50`
- Header: `border-b border-border` with muted foreground text
- Copy button: accent hover, ring focus state
- Code font: system monospace stack (`ui-monospace, SFMono-Regular, ...`)

Shiki's inline theme colors are preserved, with the `<pre>` background set to transparent so the container background shows through.
