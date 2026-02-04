# Checkbox

A control that allows the user to toggle between checked and not checked.

## Components

- `ScCheckboxField` (selector: `[sc-checkbox-field]`) - Coordinator directive that observes input state and provides it to child components
- `ScCheckbox` - Directive for native input styling (applied to input[type="checkbox"])
- `ScCheckboxIndicator` - Directive for styling the visual checkbox box (applied to span)
- `ScVisualCheckbox` - Component for visual representation (applied to span)

## Usage

```html
<div class="flex items-center space-x-2">
  <div sc-checkbox-field>
    <input type="checkbox" sc-checkbox [(ngModel)]="accepted" id="terms" />
    <span sc-visual-checkbox></span>
  </div>
  <label for="terms">Accept terms and conditions</label>
</div>
```

## With Description

```html
<div class="items-top flex space-x-2">
  <div sc-checkbox-field>
    <input type="checkbox" sc-checkbox [(ngModel)]="marketing" id="marketing" />
    <span sc-visual-checkbox></span>
  </div>
  <div class="grid gap-1.5 leading-none">
    <label for="marketing">Marketing emails</label>
    <p class="text-sm text-muted-foreground">Receive emails about new products, features, and more.</p>
  </div>
</div>
```

## With Signal Forms

`ScCheckbox` implements `FormCheckboxControl` and works seamlessly with Angular Signal Forms:

```typescript
import { signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { required } from '@angular/forms/signals';

readonly formModel = signal({ acceptTerms: false });
readonly myForm = form(this.formModel, (schemaPath) => {
  required(schemaPath.acceptTerms);
});
```

```html
<div sc-checkbox-field>
  <input type="checkbox" sc-checkbox [formField]="myForm.acceptTerms" id="terms" />
  <span sc-visual-checkbox></span>
</div>
<label for="terms">Accept terms and conditions</label>
```

Note: Add `FormField` to your component's `imports` array to use the `[formField]` directive. When using `[formField]`, you cannot use other property bindings like `[checked]` on the same element.

## Indeterminate State

```html
<div sc-checkbox-field>
  <input type="checkbox" sc-checkbox [(ngModel)]="allSelected" [indeterminate]="someSelected" />
  <span sc-visual-checkbox></span>
</div>
```

## Disabled

```html
<div sc-checkbox-field>
  <input type="checkbox" sc-checkbox [disabled]="true" />
  <span sc-visual-checkbox></span>
</div>

<div sc-checkbox-field>
  <input type="checkbox" sc-checkbox [(ngModel)]="checked" [disabled]="true" />
  <span sc-visual-checkbox></span>
</div>
```

## Advanced: Custom Checkbox Indicator

For advanced customization, you can use the directives directly with custom visuals:

```html
<div sc-checkbox-field class="relative inline-flex h-6 w-6">
  <input type="checkbox" sc-checkbox [(ngModel)]="checked" />
  <span sc-checkbox-indicator [state]="checked ? 'checked' : 'unchecked'" class="h-6 w-6 rounded-full">
    <!-- Your custom icon -->
  </span>
</div>
```

Or inject the checkbox context to build completely custom visuals:

```typescript
import { inject } from '@angular/core';
import { SC_CHECKBOX_FIELD } from '@semantic-components/ui';

export class MyCustomCheckboxVisual {
  readonly checkbox = inject(SC_CHECKBOX_FIELD);

  // Use checkbox.checked(), checkbox.disabled(), checkbox.indeterminate(), checkbox.dataState()
}
```

## Custom Theme

Customize colors using CSS variables:

```html
<div style="--primary: oklch(0.6 0.25 280); --primary-foreground: oklch(0.985 0 0);">
  <div sc-checkbox-field>
    <input type="checkbox" sc-checkbox [(ngModel)]="purple" id="purple" />
    <span sc-visual-checkbox></span>
  </div>
  <label for="purple">Purple checkbox</label>
</div>
```

Available CSS variables:

- `--primary` - Border and background color when checked (OKLCH format: `oklch(lightness chroma hue)`)
- `--primary-foreground` - Checkmark color (OKLCH format: `oklch(lightness chroma hue)`)
- `--ring` - Focus ring color (OKLCH format: `oklch(lightness chroma hue)`)
- `--ring-offset-background` - Focus ring offset color

OKLCH format parameters:

- **Lightness**: 0 (black) to 1 (white)
- **Chroma**: 0 (gray) to ~0.4 (vivid color)
- **Hue**: 0-360 (color angle)

## Inputs

### ScCheckboxField (`[sc-checkbox-field]`)

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

### ScCheckbox (`sc-checkbox`)

| Input           | Type      | Default | Description                       |
| --------------- | --------- | ------- | --------------------------------- |
| `indeterminate` | `boolean` | `false` | Whether checkbox is indeterminate |
| `class`         | `string`  | `''`    | Additional CSS classes            |

Note: Standard input attributes (`id`, `name`, `checked`, `disabled`) are set directly on the native input element.

### ScVisualCheckbox (`sc-visual-checkbox`)

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

## Context API

The `sc-checkbox-field` directive provides a context via dependency injection that child components can access:

```typescript
export interface ScCheckboxContext {
  checked: () => boolean;
  disabled: () => boolean;
  indeterminate: () => boolean;
  dataState: () => 'checked' | 'unchecked' | 'indeterminate';
}
```

Inject using `SC_CHECKBOX_FIELD` token:

```typescript
import { inject } from '@angular/core';
import { SC_CHECKBOX_FIELD } from '@semantic-components/ui';

readonly checkbox = inject(SC_CHECKBOX_FIELD);
```

## Data Attributes

| Attribute       | Values                                      | Description    |
| --------------- | ------------------------------------------- | -------------- |
| `data-state`    | `checked` \| `unchecked` \| `indeterminate` | Current state  |
| `data-disabled` | present when disabled                       | Disabled state |

## Accessibility

- Uses a native `<input type="checkbox">` with `opacity: 0` for full accessibility
- Native checkbox provides all semantic roles and ARIA attributes automatically
- Keyboard accessible via native browser behavior (Space/Enter to toggle)
- Focus ring styled via `peer-focus-visible` CSS classes
- Works seamlessly with associated `<label>` elements via `id` attribute
- Full native form integration (submission, validation, autofill)
- Visual representation is marked with `aria-hidden="true"` (decorative only)
- Compatible with all screen readers (NVDA, JAWS, VoiceOver, TalkBack)
- Indeterminate state synced to native input element

## Architecture

The checkbox uses a composable directive-based architecture:

### Component Structure

```
[sc-checkbox-field] (component - observes input state, provides context)
├── <ng-content /> (projected: input[sc-checkbox])
└── span[sc-visual-checkbox] (visual wrapper, injects context)
    └── span[sc-checkbox-indicator] (visual box)
        ├── <svg si-check-icon> (checkmark icon)
        └── <svg si-minus-icon> (indeterminate icon)
```

**Usage in HTML:**

```html
<div sc-checkbox-field>
  <input type="checkbox" sc-checkbox [(ngModel)]="value" />
  <span sc-visual-checkbox></span>
</div>
```

### Layout & Styling

The components use layered positioning for proper interaction and visual display:

```
┌─ ScCheckboxField (relative positioning, flexible size) ──────┐
│                                                               │
│  ┌─ ScCheckbox (absolute, fills container) ─────────────┐    │
│  │ <input type="checkbox">                             │    │
│  │ • opacity: 0 (invisible)                            │    │
│  │ • cursor: pointer                                   │    │
│  │ • peer class (for CSS peer selectors)              │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                               │
│  ┌─ ScVisualCheckbox (16px × 16px) ──────────────────┐      │
│  │  ┌─ ScCheckboxIndicator ───────────────────────┐  │      │
│  │  │ • border, rounded corners                   │  │      │
│  │  │ • background color (when checked)           │  │      │
│  │  │ • checkmark/minus icon                      │  │      │
│  │  └─────────────────────────────────────────────┘  │      │
│  └───────────────────────────────────────────────────┘      │
└───────────────────────────────────────────────────────────────┘
```

**Styling breakdown:**

- **ScCheckboxField**: `relative inline-flex shrink-0` - Creates positioning context
- **ScCheckbox**: `peer absolute inset-0 size-full cursor-pointer opacity-0` - Invisible clickable layer
- **ScVisualCheckbox**: `inline-flex h-4 w-4 shrink-0 items-center justify-center` - Visual container (16px × 16px)
- **ScCheckboxIndicator**: `h-4 w-4 border rounded-sm` - Actual visual checkbox box

The input is layered on top using absolute positioning and remains clickable, while the visual checkbox displays underneath. The `peer` class on the input enables visual styles to respond to input states (focus, disabled, hover, etc.) using Tailwind's peer selectors.

### State Flow

```
Native Input (source of truth)
  ├─ User interactions (click, keyboard)
  ├─ Form bindings (ngModel, formField)
  └─ Attributes (checked, disabled, indeterminate)
         ↓
ScCheckboxField (observer)
  ├─ contentChild() queries ScCheckbox
  ├─ Reads signals from ScCheckbox directly
  └─ Provides context via SC_CHECKBOX_FIELD token
         ↓
ScVisualCheckbox (renderer)
  ├─ inject(SC_CHECKBOX_FIELD)
  └─ Renders based on checkbox.dataState()
```

**How state propagates:**

1. User interacts with native input (click, keyboard)
2. Input's `(change)` event handler updates the `checked` model signal
3. ScCheckboxField's computed signals react to changes (zoneless-compatible)
4. ScVisualCheckbox injects context and renders accordingly
5. CSS peer selectors style based on input state (focus, disabled, etc.)

### Benefits

This pattern provides:

- **Native behavior**: All browser/OS checkbox features work automatically
- **Accessibility**: Screen readers interact with the real checkbox
- **Composability**: Consumers provide their own input element
- **Flexibility**: Visual representation is fully customizable
- **Simplicity**: No manual ARIA management or keyboard handling needed
- **Single source of truth**: Native input owns all state
- **Zoneless compatible**: Works with OnPush change detection and zoneless mode

## Migration Guide

If upgrading from the previous component-based API:

**Before:**

```html
<sc-checkbox [(checked)]="terms" [disabled]="loading" id="terms" />
<label for="terms">Accept terms</label>
```

**After:**

```html
<div sc-checkbox-field>
  <input type="checkbox" sc-checkbox [(ngModel)]="terms" [disabled]="loading" id="terms" />
  <span sc-visual-checkbox></span>
</div>
<label for="terms">Accept terms</label>
```

**Key changes:**

- `sc-checkbox-field` is a directive that can be applied to any container element (`div` or `label`)
- You must provide your own `input[type="checkbox"]` element
- State bindings (`[(ngModel)]`, `[formField]`) go on the input, not the directive
- `[indeterminate]` input goes on `sc-checkbox`
- Standard attributes (`id`, `disabled`, `name`) go directly on the input element
- Use `ScCheckboxField` instead of `ScCheckboxDirective` in imports
- Injection token changed from `SC_CHECKBOX` to `SC_CHECKBOX_FIELD`
