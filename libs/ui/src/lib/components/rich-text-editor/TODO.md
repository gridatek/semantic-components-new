# Rich Text Editor Refactoring TODO

## Overview

Refactor the monolithic `ScRichTextEditor` component into a composable, declarative architecture following the library's design principles. The current implementation is a single 900+ line component that violates several architectural patterns used throughout the library.

## Current Issues

### 1. Monolithic Architecture

- **Problem**: All functionality in a single component (toolbar, editor content, state management)
- **Impact**: Not reusable, not customizable, difficult to maintain
- **Library Pattern**: Components should be composable (see carousel: ScCarousel → ScCarouselViewport → ScCarouselTrack)

### 2. Imperative Public Methods

- **Problem**: Exposes imperative methods: `setContent()`, `getContent()`, `clear()`, `focusEditor()`
- **Impact**: Violates declarative architecture principle
- **Library Pattern**: Use signals and inputs for state, avoid imperative methods (see declarative-architecture.md)

### 3. Inline SVG Icons

- **Problem**: All toolbar buttons use inline `<svg>` elements
- **Impact**: Inconsistent with library standards, not customizable, bloated template
- **Library Pattern**: Use `@semantic-icons/lucide-icons` (see carousel buttons)

### 4. No Content Projection

- **Problem**: Toolbar is completely fixed, users cannot customize or reorder buttons
- **Impact**: Not flexible, forces users to accept all-or-nothing toolbar
- **Library Pattern**: Use `<ng-content />` for user-provided content (see component-design-principles.md)

### 5. No Injection Token Pattern

- **Problem**: No shared state management between potential child components
- **Impact**: Cannot decompose into smaller components
- **Library Pattern**: Use injection tokens for parent-child communication (see composable-architecture.md)

### 6. Missing exportAs

- **Problem**: No `exportAs` property for template access
- **Impact**: Users cannot access component API from templates
- **Library Pattern**: Provide `exportAs` for legitimate template access needs

## Refactoring Plan

### Phase 1: Create Composable Structure

#### 1.1 Create ScRichTextEditor (Root Component)

**File**: `rich-text-editor.ts`

- Use `@Component` decorator (not `@Directive` - visible element)
- Selector: `div[sc-rich-text-editor]`
- Provide injection token for child components to access state
- Manage editor state (selection, formatting states)
- Remove imperative methods, use signals for all state
- Add `exportAs: 'scRichTextEditor'` for template access if needed

**State to manage**:

```typescript
// Signals for editor state
readonly isBold = signal(false);
readonly isItalic = signal(false);
readonly isUnderline = signal(false);
readonly isStrikethrough = signal(false);
readonly isOrderedList = signal(false);
readonly isUnorderedList = signal(false);
readonly isBlockquote = signal(false);
readonly alignment = signal<ScRichTextEditorAlignment>('left');
readonly currentHeading = signal<ScRichTextEditorHeading>('p');
readonly canUndo = signal(false);
readonly canRedo = signal(false);

// Methods for child components
execCommand(command: string, value?: string): void;
updateToolbarState(): void;
```

**Inputs**:

```typescript
readonly disabled = input(false);
readonly class = input<string>('');
```

#### 1.2 Create ScRichTextEditorContent

**File**: `rich-text-editor-content.ts`

- Selector: `div[sc-rich-text-editor-content]`
- Inject parent editor via injection token
- Handle contenteditable functionality
- Emit events to parent for state updates
- Use `viewChild` for element reference

**Inputs**:

```typescript
readonly value = model<string>('');
readonly placeholder = input<string>('Start typing...');
readonly minHeight = input<string>('150px');
readonly maxHeight = input<string>('400px');
readonly ariaLabel = input<string>('Rich text editor');
readonly ariaDescribedby = input<string>('');
readonly class = input<string>('');
```

**Outputs**:

```typescript
readonly focus = output<void>();
readonly blur = output<void>();
readonly selectionChange = output<Selection | null>();
```

#### 1.3 Create ScRichTextEditorToolbar

**File**: `rich-text-editor-toolbar.ts`

- Selector: `div[sc-rich-text-editor-toolbar]`
- Use `<ng-content />` for user-provided buttons
- Inject parent editor via injection token
- Provide default layout/styling

**Inputs**:

```typescript
readonly class = input<string>('');
```

**Template**:

```html
<div [class]="class()" role="toolbar" aria-label="Text formatting">
  <ng-content />
</div>
```

#### 1.4 Create Individual Toolbar Button Components

Create separate components for each toolbar action:

**Common Pattern** (using ScRichTextEditorBoldButton as example):

- **File**: `rich-text-editor-bold-button.ts`
- **Selector**: `button[sc-rich-text-editor-bold]`
- Template: `<ng-content />` (user provides icon + sr-only text)
- Inject parent editor
- Handle click to execute command
- Use computed signal for active state
- Disable based on parent disabled state

**Components to create**:

- `ScRichTextEditorBoldButton` - bold formatting
- `ScRichTextEditorItalicButton` - italic formatting
- `ScRichTextEditorUnderlineButton` - underline formatting
- `ScRichTextEditorStrikethroughButton` - strikethrough formatting
- `ScRichTextEditorUndoButton` - undo action
- `ScRichTextEditorRedoButton` - redo action
- `ScRichTextEditorAlignLeftButton` - align left
- `ScRichTextEditorAlignCenterButton` - align center
- `ScRichTextEditorAlignRightButton` - align right
- `ScRichTextEditorAlignJustifyButton` - justify
- `ScRichTextEditorBulletListButton` - unordered list
- `ScRichTextEditorNumberedListButton` - ordered list
- `ScRichTextEditorLinkButton` - insert link
- `ScRichTextEditorBlockquoteButton` - blockquote
- `ScRichTextEditorCodeButton` - inline code
- `ScRichTextEditorHorizontalRuleButton` - horizontal rule
- `ScRichTextEditorClearFormattingButton` - remove formatting

#### 1.5 Create ScRichTextEditorHeadingSelect

**File**: `rich-text-editor-heading-select.ts`

- Selector: `select[sc-rich-text-editor-heading]`
- Inject parent editor
- Handle heading changes
- Sync with parent's currentHeading signal

**Template**:

```html
<select [class]="class()" (change)="onChange($event)" [disabled]="disabled()">
  <option value="p">Paragraph</option>
  <option value="h1">Heading 1</option>
  <option value="h2">Heading 2</option>
  <option value="h3">Heading 3</option>
  <option value="h4">Heading 4</option>
  <option value="h5">Heading 5</option>
  <option value="h6">Heading 6</option>
</select>
```

#### 1.6 Create ScRichTextEditorSeparator

**File**: `rich-text-editor-separator.ts`

- Selector: `div[sc-rich-text-editor-separator]`
- Simple visual separator for toolbar
- No logic, just styling

**Template**:

```html
<div class="w-px h-6 bg-border mx-1"></div>
```

#### 1.7 Create ScRichTextEditorCount

**File**: `rich-text-editor-count.ts`

- Selector: `div[sc-rich-text-editor-count]`
- Inject parent editor
- Compute word/character counts from editor content
- Display statistics

**Template**:

```html
<div [class]="class()">
  <span>{{ wordCount() }} words</span>
  <span>{{ charCount() }} characters</span>
</div>
```

### Phase 2: Update Type Exports

Rename types to follow library conventions:

```typescript
// Before
export type TextAlignment = 'left' | 'center' | 'right' | 'justify';
export type HeadingLevel = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// After (add Sc prefix)
export type ScRichTextEditorAlignment = 'left' | 'center' | 'right' | 'justify';
export type ScRichTextEditorHeading = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
```

Remove `ToolbarConfig` interface (no longer needed with composable architecture).

### Phase 3: Create Injection Token

**File**: `rich-text-editor-token.ts`

```typescript
import { InjectionToken, Signal, WritableSignal } from '@angular/core';

export interface RichTextEditorContext {
  // State signals (readonly from children)
  readonly isBold: Signal<boolean>;
  readonly isItalic: Signal<boolean>;
  readonly isUnderline: Signal<boolean>;
  readonly isStrikethrough: Signal<boolean>;
  readonly isOrderedList: Signal<boolean>;
  readonly isUnorderedList: Signal<boolean>;
  readonly isBlockquote: Signal<boolean>;
  readonly alignment: Signal<ScRichTextEditorAlignment>;
  readonly currentHeading: Signal<ScRichTextEditorHeading>;
  readonly disabled: Signal<boolean>;

  // Methods for children to call
  execCommand(command: string, value?: string): void;
  updateToolbarState(): void;

  // Content reference
  readonly contentElement: Signal<HTMLElement | null>;
}

export const RICH_TEXT_EDITOR_TOKEN = new InjectionToken<RichTextEditorContext>('RichTextEditorContext');
```

### Phase 4: Update Index Exports

**File**: `index.ts`

```typescript
// Main components
export { ScRichTextEditor } from './rich-text-editor';
export { ScRichTextEditorContent } from './rich-text-editor-content';
export { ScRichTextEditorToolbar } from './rich-text-editor-toolbar';

// Toolbar buttons
export { ScRichTextEditorBoldButton } from './rich-text-editor-bold-button';
export { ScRichTextEditorItalicButton } from './rich-text-editor-italic-button';
export { ScRichTextEditorUnderlineButton } from './rich-text-editor-underline-button';
export { ScRichTextEditorStrikethroughButton } from './rich-text-editor-strikethrough-button';
export { ScRichTextEditorUndoButton } from './rich-text-editor-undo-button';
export { ScRichTextEditorRedoButton } from './rich-text-editor-redo-button';
export { ScRichTextEditorAlignLeftButton } from './rich-text-editor-align-left-button';
export { ScRichTextEditorAlignCenterButton } from './rich-text-editor-align-center-button';
export { ScRichTextEditorAlignRightButton } from './rich-text-editor-align-right-button';
export { ScRichTextEditorAlignJustifyButton } from './rich-text-editor-align-justify-button';
export { ScRichTextEditorBulletListButton } from './rich-text-editor-bullet-list-button';
export { ScRichTextEditorNumberedListButton } from './rich-text-editor-numbered-list-button';
export { ScRichTextEditorLinkButton } from './rich-text-editor-link-button';
export { ScRichTextEditorBlockquoteButton } from './rich-text-editor-blockquote-button';
export { ScRichTextEditorCodeButton } from './rich-text-editor-code-button';
export { ScRichTextEditorHorizontalRuleButton } from './rich-text-editor-horizontal-rule-button';
export { ScRichTextEditorClearFormattingButton } from './rich-text-editor-clear-formatting-button';

// Other components
export { ScRichTextEditorHeadingSelect } from './rich-text-editor-heading-select';
export { ScRichTextEditorSeparator } from './rich-text-editor-separator';
export { ScRichTextEditorCount } from './rich-text-editor-count';

// Types
export type { ScRichTextEditorAlignment } from './rich-text-editor';
export type { ScRichTextEditorHeading } from './rich-text-editor';
export type { RichTextEditorContext } from './rich-text-editor-token';
```

### Phase 5: Update Documentation

#### 5.1 Update README.md

Show new composable architecture with examples:

**Default Example**:

```html
<div sc-rich-text-editor>
  <div sc-rich-text-editor-toolbar>
    <button sc-rich-text-editor-undo>
      <svg si-undo-icon></svg>
      <span class="sr-only">Undo</span>
    </button>
    <button sc-rich-text-editor-redo>
      <svg si-redo-icon></svg>
      <span class="sr-only">Redo</span>
    </button>

    <div sc-rich-text-editor-separator></div>

    <button sc-rich-text-editor-bold>
      <svg si-bold-icon></svg>
      <span class="sr-only">Bold</span>
    </button>
    <button sc-rich-text-editor-italic>
      <svg si-italic-icon></svg>
      <span class="sr-only">Italic</span>
    </button>

    <!-- More buttons... -->
  </div>

  <div sc-rich-text-editor-content [(value)]="content" placeholder="Start typing..."></div>

  <div sc-rich-text-editor-count></div>
</div>
```

**Minimal Example** (no toolbar):

```html
<div sc-rich-text-editor>
  <div sc-rich-text-editor-content [(value)]="content"></div>
</div>
```

**Custom Toolbar Example**:

```html
<div sc-rich-text-editor>
  <div sc-rich-text-editor-toolbar>
    <!-- Only bold and italic -->
    <button sc-rich-text-editor-bold>
      <svg si-bold-icon></svg>
    </button>
    <button sc-rich-text-editor-italic>
      <svg si-italic-icon></svg>
    </button>

    <!-- Custom button -->
    <button (click)="customAction()">
      <svg si-custom-icon></svg>
    </button>
  </div>

  <div sc-rich-text-editor-content [(value)]="content"></div>
</div>
```

#### 5.2 Document Architecture

Add architecture section explaining the composable structure:

```markdown
## Architecture

The rich text editor uses a multi-component composable structure:

1. **ScRichTextEditor** - Root container managing state and providing context
2. **ScRichTextEditorToolbar** - Toolbar container for formatting buttons
3. **ScRichTextEditorContent** - The contenteditable area
4. **Toolbar Buttons** - Individual button components for each action
5. **ScRichTextEditorHeadingSelect** - Dropdown for heading levels
6. **ScRichTextEditorSeparator** - Visual separator for toolbar groups
7. **ScRichTextEditorCount** - Word and character count display

Components communicate via an injection token, allowing complete customization
while maintaining state synchronization.
```

### Phase 6: Update Demos

#### 6.1 Create Default Demo

Show full-featured editor with all toolbar buttons using semantic icons.

#### 6.2 Create Minimal Demo

Show editor without toolbar for simple use cases.

#### 6.3 Create Custom Toolbar Demo

Show user-defined toolbar with only selected buttons.

#### 6.4 Create Readonly Demo

Show readonly mode for displaying formatted content.

### Phase 7: Migration Guide

Create `MIGRATION.md` to help users upgrade from old API:

````markdown
# Migration Guide: v1 to v2

## Breaking Changes

### Removed ToolbarConfig

**Before (v1)**:

```typescript
<sc-rich-text-editor
  [toolbar]="{ bold: true, italic: true }"
  [(value)]="content"
/>
```
````

**After (v2)**:

```html
<div sc-rich-text-editor>
  <div sc-rich-text-editor-toolbar>
    <button sc-rich-text-editor-bold>
      <svg si-bold-icon></svg>
      <span class="sr-only">Bold</span>
    </button>
    <button sc-rich-text-editor-italic>
      <svg si-italic-icon></svg>
      <span class="sr-only">Italic</span>
    </button>
  </div>
  <div sc-rich-text-editor-content [(value)]="content"></div>
</div>
```

### Removed Imperative Methods

**Before (v1)**:

```typescript
@ViewChild(ScRichTextEditor) editor!: ScRichTextEditor;

ngOnInit() {
  this.editor.setContent('<p>Hello</p>');
  this.editor.clear();
}
```

**After (v2)**:

```typescript
content = signal('<p>Hello</p>');

clearContent() {
  this.content.set('');
}
```

### Renamed Types

- `TextAlignment` → `ScRichTextEditorAlignment`
- `HeadingLevel` → `ScRichTextEditorHeading`
- Removed `ToolbarConfig` interface

### Changed Selector

- Before: `<sc-rich-text-editor>`
- After: `<div sc-rich-text-editor>`

```

## Implementation Checklist

### Core Architecture
- [ ] Create injection token (`rich-text-editor-token.ts`)
- [ ] Refactor `ScRichTextEditor` to be composable root
- [ ] Create `ScRichTextEditorContent` component
- [ ] Create `ScRichTextEditorToolbar` component

### Toolbar Buttons (17 components)
- [ ] `ScRichTextEditorBoldButton`
- [ ] `ScRichTextEditorItalicButton`
- [ ] `ScRichTextEditorUnderlineButton`
- [ ] `ScRichTextEditorStrikethroughButton`
- [ ] `ScRichTextEditorUndoButton`
- [ ] `ScRichTextEditorRedoButton`
- [ ] `ScRichTextEditorAlignLeftButton`
- [ ] `ScRichTextEditorAlignCenterButton`
- [ ] `ScRichTextEditorAlignRightButton`
- [ ] `ScRichTextEditorAlignJustifyButton`
- [ ] `ScRichTextEditorBulletListButton`
- [ ] `ScRichTextEditorNumberedListButton`
- [ ] `ScRichTextEditorLinkButton`
- [ ] `ScRichTextEditorBlockquoteButton`
- [ ] `ScRichTextEditorCodeButton`
- [ ] `ScRichTextEditorHorizontalRuleButton`
- [ ] `ScRichTextEditorClearFormattingButton`

### Other Components
- [ ] `ScRichTextEditorHeadingSelect`
- [ ] `ScRichTextEditorSeparator`
- [ ] `ScRichTextEditorCount`

### Icons
- [ ] Replace all inline SVGs with `@semantic-icons/lucide-icons`
- [ ] Update demos to show icon usage

### Types and Exports
- [ ] Rename `TextAlignment` → `ScRichTextEditorAlignment`
- [ ] Rename `HeadingLevel` → `ScRichTextEditorHeading`
- [ ] Remove `ToolbarConfig` interface
- [ ] Update `index.ts` with all new exports

### Documentation
- [ ] Update README.md with new API
- [ ] Add architecture documentation
- [ ] Document all component inputs/outputs
- [ ] Add usage examples
- [ ] Create MIGRATION.md

### Demos
- [ ] Create default demo (full toolbar)
- [ ] Create minimal demo (no toolbar)
- [ ] Create custom toolbar demo
- [ ] Create readonly demo
- [ ] Update demo containers with new code examples

### Testing
- [ ] Test all toolbar buttons work correctly
- [ ] Test keyboard shortcuts (Ctrl+B, Ctrl+I, etc.)
- [ ] Test state synchronization between components
- [ ] Test disabled state propagation
- [ ] Test readonly mode
- [ ] Test content binding (two-way)
- [ ] Test accessibility (ARIA roles, keyboard navigation)
- [ ] Test word/character count accuracy

## Success Criteria

- ✅ Component follows composable architecture pattern
- ✅ Uses injection token for parent-child communication
- ✅ All toolbar buttons use semantic icons
- ✅ Users can customize toolbar by composing buttons
- ✅ No imperative methods (declarative API only)
- ✅ All types prefixed with "Sc"
- ✅ Full documentation with examples
- ✅ Migration guide for existing users
- ✅ Passes all accessibility checks
- ✅ Follows library coding standards (CLAUDE.md)
```
