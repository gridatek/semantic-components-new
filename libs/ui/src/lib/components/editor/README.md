# Editor Component

Composable WYSIWYG editor built with [Tiptap](https://tiptap.dev/), a headless rich-text editor framework powered by ProseMirror.

## Installation

The editor component requires Tiptap packages as peer dependencies. Install them alongside `@semantic-components/ui`:

```bash
npm install @semantic-components/ui \
  @tiptap/core \
  @tiptap/starter-kit \
  @tiptap/extension-link \
  @tiptap/extension-underline \
  @tiptap/extension-text-align \
  @tiptap/extension-placeholder
```

Or if you already have `@semantic-components/ui` installed:

```bash
npm install @tiptap/core @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-underline @tiptap/extension-text-align @tiptap/extension-placeholder
```

## Features

- **Rich Text Editing**: Bold, italic, underline, strikethrough, headings, lists, blockquotes, code, links, and more
- **Keyboard Shortcuts**: Built-in shortcuts for all formatting commands (Ctrl+B, Ctrl+I, Ctrl+U, Ctrl+Z, Ctrl+Y, etc.)
- **Customizable Toolbar**: Composable architecture allows full control over toolbar layout
- **Two-Way Binding**: Seamless synchronization with Angular signals
- **Accessibility**: Full keyboard navigation and ARIA support
- **Extensible**: Built on Tiptap, allowing custom extensions and commands

## Implementation

The editor is powered by [Tiptap](https://tiptap.dev/), a headless rich-text editor framework built on ProseMirror. This provides:

- **Robust editing**: Industry-standard editing engine
- **Extensibility**: Add custom extensions and commands
- **Keyboard shortcuts**: Built-in shortcuts for all formatting
- **Better browser support**: Works consistently across modern browsers
- **Future-ready**: Foundation for collaboration, mentions, slash commands, etc.

### Extensions Included

The editor comes pre-configured with these Tiptap extensions:

- **StarterKit**: Bold, Italic, Strike, Code, Heading, Lists, Blockquote, History, HardBreak, Paragraph, Text
- **Link**: Link insertion and editing with configurable attributes
- **Underline**: Underline formatting (not included in StarterKit)
- **TextAlign**: Text alignment (left, center, right, justify)
- **Placeholder**: Customizable placeholder text

### Bundle Size

- **Total**: ~30 KB (minified)
- **Gzipped**: ~10 KB

This is an acceptable trade-off for the significant improvements in reliability, extensibility, and developer experience.

## Basic Usage

```typescript
import { Component, signal } from '@angular/core';
import { ScEditor, ScEditorContent, ScEditorToolbar, ScEditorToolbarGroup, ScEditorBoldButton, ScEditorItalicButton, ScEditorUnderlineButton, ScEditorFooter, ScEditorCount } from '@semantic-components/ui';

@Component({
  selector: 'app-example',
  imports: [ScEditor, ScEditorContent, ScEditorToolbar, ScEditorToolbarGroup, ScEditorBoldButton, ScEditorItalicButton, ScEditorUnderlineButton, ScEditorFooter, ScEditorCount],
  template: `
    <div sc-editor class="border rounded-lg overflow-hidden">
      <div sc-editor-toolbar>
        <div sc-editor-toolbar-group>
          <button sc-editor-bold>Bold</button>
          <button sc-editor-italic>Italic</button>
          <button sc-editor-underline>Underline</button>
        </div>
      </div>

      <div sc-editor-content [(value)]="content" placeholder="Start typing..."></div>

      <div sc-editor-footer>
        <div sc-editor-count></div>
      </div>
    </div>
  `,
})
export class ExampleComponent {
  readonly content = signal('');
}
```

## API

### ScEditor (Directive)

Root directive that manages editor state and provides context to child components.

**Selector**: `[sc-editor]`

**Inputs**:

- `disabled: boolean` - Disables the editor
- `readonly: boolean` - Makes the editor read-only

**Signals** (accessed via `inject(SC_EDITOR)`):

- `isBold()` - Whether bold is active
- `isItalic()` - Whether italic is active
- `isUnderline()` - Whether underline is active
- `isStrikethrough()` - Whether strikethrough is active
- `isOrderedList()` - Whether ordered list is active
- `isUnorderedList()` - Whether unordered list is active
- `isBlockquote()` - Whether blockquote is active
- `alignment()` - Current text alignment ('left' | 'center' | 'right' | 'justify')
- `currentHeading()` - Current heading level ('p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')
- `canUndo()` - Whether undo is available
- `canRedo()` - Whether redo is available
- `editorInstance()` - The Tiptap Editor instance (for advanced usage)

**Methods**:

- `execCommand(command: string, value?: string)` - Execute a formatting command
- `updateToolbarState()` - Update toolbar button states (called automatically)
- `initializeEditor(element: HTMLElement, content: string, placeholder: string)` - Initialize Tiptap (called automatically)
- `destroyEditor()` - Cleanup Tiptap instance (called automatically)

### ScEditorContent (Component)

Content area where text editing happens.

**Selector**: `div[sc-editor-content]`

**Inputs**:

- `value: string` - Two-way bindable HTML content (use with `[(value)]`)
- `placeholder: string` - Placeholder text (default: "Start typing...")
- `minHeight: string` - Minimum height (default: "150px")
- `maxHeight: string` - Maximum height (default: "400px")
- `ariaLabel: string` - ARIA label (default: "Rich text editor")

**Outputs**:

- `focus` - Emitted when editor gains focus
- `blur` - Emitted when editor loses focus

### Toolbar Components

All toolbar buttons inject `SC_EDITOR` and call the appropriate commands.

**Available Buttons**:

- `ScEditorBoldButton` - Toggle bold
- `ScEditorItalicButton` - Toggle italic
- `ScEditorUnderlineButton` - Toggle underline
- `ScEditorStrikethroughButton` - Toggle strikethrough
- `ScEditorCodeButton` - Toggle inline code
- `ScEditorLinkButton` - Insert/edit link (prompts for URL)
- `ScEditorBulletListButton` - Toggle bullet list
- `ScEditorNumberedListButton` - Toggle numbered list
- `ScEditorBlockquoteButton` - Toggle blockquote
- `ScEditorAlignLeftButton` - Align left
- `ScEditorAlignCenterButton` - Align center
- `ScEditorAlignRightButton` - Align right
- `ScEditorAlignJustifyButton` - Align justify
- `ScEditorUndoButton` - Undo last action
- `ScEditorRedoButton` - Redo last action
- `ScEditorClearFormattingButton` - Remove all formatting

**Containers**:

- `ScEditorToolbar` - Toolbar container
- `ScEditorToolbarGroup` - Group related buttons
- `ScEditorSeparator` - Visual separator between groups
- `ScEditorFooter` - Footer container
- `ScEditorHeader` - Header container

**Utilities**:

- `ScEditorCount` - Display word and character count
- `ScEditorHeadingSelect` - Dropdown to select heading level

## Keyboard Shortcuts

All standard keyboard shortcuts are handled by Tiptap:

- **Ctrl+B** / **Cmd+B** - Bold
- **Ctrl+I** / **Cmd+I** - Italic
- **Ctrl+U** / **Cmd+U** - Underline
- **Ctrl+Z** / **Cmd+Z** - Undo
- **Ctrl+Shift+Z** / **Cmd+Shift+Z** - Redo
- **Ctrl+Y** / **Cmd+Y** - Redo
- **Ctrl+E** / **Cmd+E** - Inline code

## Advanced Usage

### Accessing the Tiptap Editor Instance

For advanced use cases, you can access the underlying Tiptap editor:

```typescript
import { inject, effect } from '@angular/core';
import { SC_EDITOR } from '@semantic-components/ui';

export class MyComponent {
  readonly editor = inject(SC_EDITOR);

  constructor() {
    effect(() => {
      const instance = this.editor.editorInstance();
      if (instance) {
        // Access Tiptap API
        console.log(instance.getJSON()); // Get content as JSON
        console.log(instance.getHTML()); // Get content as HTML
        console.log(instance.getText()); // Get plain text

        // Execute custom commands
        instance.chain().focus().toggleBold().run();
      }
    });
  }
}
```

### Custom Commands

You can execute any Tiptap command via the editor instance:

```typescript
this.editor.editorInstance()?.chain().focus().setHeading({ level: 2 }).insertContent('Hello world!').run();
```

## Migration from execCommand

Previous versions used the deprecated `document.execCommand()` API. The current version uses Tiptap internally while maintaining the same external API for backwards compatibility.

**Breaking Changes**: None! The external API remains identical.

**Advanced Users**: If you directly accessed `contentElement()` for DOM manipulation, you should now use `editorInstance()` to interact with the editor via Tiptap's API.

## Future Enhancements

Built on Tiptap, these features can be easily added in the future:

1. **Collaboration** - Real-time co-editing with `@tiptap/extension-collaboration`
2. **Mentions** - @-mentions with autocomplete
3. **Slash Commands** - `/` for quick formatting
4. **Tables** - Rich table support
5. **Images** - Drag-and-drop image upload
6. **Custom Extensions** - Domain-specific formatting
7. **Markdown Support** - Input/output markdown
8. **Character Limits** - Built-in extension for content limits

## Styling

The editor uses Tailwind CSS with CSS variables for theming. All styles respect the current theme (light/dark mode).

**CSS Variables Used**:

- `--border` - Border color
- `--muted` - Muted background (code, pre)
- `--muted-foreground` - Muted text (placeholder, blockquote)
- `--primary` - Primary color (links)

**Customization**:

```html
<div sc-editor-content class="font-serif text-lg"></div>
```

## Accessibility

The editor follows WCAG AA standards:

- Full keyboard navigation
- ARIA labels on all buttons
- Focus management
- Screen reader support
- High contrast mode support

## Browser Support

Works in all modern browsers that support ES2015+ and ProseMirror:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

MIT
