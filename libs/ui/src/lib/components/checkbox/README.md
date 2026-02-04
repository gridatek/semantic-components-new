# Checkbox

A control that allows the user to toggle between checked and not checked.

## Components

- `ScCheckboxField` (selector: `[sc-checkbox-field]`) - Coordinator directive that observes input state and provides it to child components
- `ScInvisibleCheckbox` - Directive for native input styling (applied to input[type="checkbox"])
- `ScCheckboxIndicator` - Directive for styling the visual checkbox box (applied to span)
- `ScVisualCheckbox` - Component for visual representation (applied to span)

## Usage

```html
<div class="flex items-center space-x-2">
  <div sc-checkbox-field>
    <input type="checkbox" sc-invisible-checkbox [(ngModel)]="accepted" id="terms" />
    <span sc-visual-checkbox></span>
  </div>
  <label for="terms">Accept terms and conditions</label>
</div>
```

## With Description

```html
<div class="items-top flex space-x-2">
  <div sc-checkbox-field>
    <input type="checkbox" sc-invisible-checkbox [(ngModel)]="marketing" id="marketing" />
    <span sc-visual-checkbox></span>
  </div>
  <div class="grid gap-1.5 leading-none">
    <label for="marketing">Marketing emails</label>
    <p class="text-sm text-muted-foreground">Receive emails about new products, features, and more.</p>
  </div>
</div>
```

## With Signal Forms

`ScInvisibleCheckbox` implements `FormCheckboxControl` and works seamlessly with Angular Signal Forms:

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
  <input type="checkbox" sc-invisible-checkbox [formField]="myForm.acceptTerms" id="terms" />
  <span sc-visual-checkbox></span>
</div>
<label for="terms">Accept terms and conditions</label>
```

Note: Add `FormField` to your component's `imports` array to use the `[formField]` directive. When using `[formField]`, you cannot use other property bindings like `[checked]` on the same element.

## Indeterminate State

```html
<div sc-checkbox-field>
  <input type="checkbox" sc-invisible-checkbox [(ngModel)]="allSelected" [indeterminate]="someSelected" />
  <span sc-visual-checkbox></span>
</div>
```

## Disabled

```html
<div sc-checkbox-field>
  <input type="checkbox" sc-invisible-checkbox [disabled]="true" />
  <span sc-visual-checkbox></span>
</div>

<div sc-checkbox-field>
  <input type="checkbox" sc-invisible-checkbox [(ngModel)]="checked" [disabled]="true" />
  <span sc-visual-checkbox></span>
</div>
```

## Advanced: Custom Checkbox Indicator

For advanced customization, you can use the directives directly with custom visuals:

```html
<div sc-checkbox-field class="relative inline-flex h-6 w-6">
  <input type="checkbox" sc-invisible-checkbox [(ngModel)]="checked" />
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
    <input type="checkbox" sc-invisible-checkbox [(ngModel)]="purple" id="purple" />
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

### ScInvisibleCheckbox (`sc-invisible-checkbox`)

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

```
[sc-checkbox-field] (directive - observes input state, provides context)
├── input[sc-invisible-checkbox] (native checkbox, opacity: 0, covers full area)
└── span[sc-visual-checkbox] (decorative wrapper, injects context)
    └── span[sc-checkbox-indicator] (visual box)
        ├── <svg si-check-icon> (checkmark icon)
        └── <svg si-minus-icon> (indeterminate icon)
```

### State Flow

```
Native Input (source of truth)
  ├─ User interactions (click, keyboard)
  ├─ Form bindings (ngModel, formField)
  └─ Attributes (checked, disabled, indeterminate)
         ↓
ScCheckboxField (observer)
  ├─ contentChild() queries input
  ├─ Listens to change/input events
  └─ Provides via SC_CHECKBOX_FIELD token
         ↓
ScVisualCheckbox (renderer)
  ├─ inject(SC_CHECKBOX_FIELD)
  └─ Renders based on checkbox.dataState()
```

This pattern provides:

- **Native behavior**: All browser/OS checkbox features work automatically
- **Accessibility**: Screen readers interact with the real checkbox
- **Composability**: Consumers provide their own input element
- **Flexibility**: Visual representation is fully customizable
- **Simplicity**: No manual ARIA management or keyboard handling needed
- **Single source of truth**: Native input owns all state

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
  <input type="checkbox" sc-invisible-checkbox [(ngModel)]="terms" [disabled]="loading" id="terms" />
  <span sc-visual-checkbox></span>
</div>
<label for="terms">Accept terms</label>
```

**Key changes:**

- `sc-checkbox-field` is a directive that can be applied to any container element (`div` or `label`)
- You must provide your own `input[type="checkbox"]` element
- State bindings (`[(ngModel)]`, `[formField]`) go on the input, not the directive
- `[indeterminate]` input goes on `sc-invisible-checkbox`
- Standard attributes (`id`, `disabled`, `name`) go directly on the input element
- Use `ScCheckboxField` instead of `ScCheckboxDirective` in imports
- Injection token changed from `SC_CHECKBOX` to `SC_CHECKBOX_FIELD`
