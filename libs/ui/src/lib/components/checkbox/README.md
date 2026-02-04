# Checkbox

A control that allows the user to toggle between checked and not checked.

## Components

- `ScCheckbox` - Main checkbox component with native input and visual representation
- `ScInvisibleCheckbox` - Directive for native input styling (applied to input[type="checkbox"])
- `ScCheckboxIndicator` - Directive for styling the visual checkbox box (applied to span)
- `ScVisualCheckbox` - Component for visual representation (applied to span)

## Usage

```html
<div class="flex items-center space-x-2">
  <sc-checkbox [(checked)]="accepted" id="terms" />
  <label for="terms">Accept terms and conditions</label>
</div>
```

## With Description

```html
<div class="items-top flex space-x-2">
  <sc-checkbox [(checked)]="marketing" id="marketing" />
  <div class="grid gap-1.5 leading-none">
    <label for="marketing">Marketing emails</label>
    <p class="text-sm text-muted-foreground">Receive emails about new products, features, and more.</p>
  </div>
</div>
```

## With Signal Forms

ScCheckbox implements `FormCheckboxControl` and works seamlessly with Angular Signal Forms:

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
<sc-checkbox [formField]="myForm.acceptTerms" id="terms" />
<label for="terms">Accept terms and conditions</label>
```

Note: Add `FormField` to your component's `imports` array to use the `[formField]` directive. When using `[formField]`, you cannot use other property bindings like `[checked]` on the same element.

## Indeterminate State

```html
<sc-checkbox [checked]="allSelected" [indeterminate]="someSelected" (checkedChange)="toggleAll($event)" />
```

## Disabled

```html
<sc-checkbox [disabled]="true" />
<sc-checkbox [checked]="true" [disabled]="true" />
```

## Advanced: Custom Checkbox Indicator

For advanced customization, you can use the directives directly:

```html
<div class="relative inline-flex h-4 w-4">
  <input type="checkbox" sc-invisible-checkbox [(ngModel)]="checked" />
  <span sc-checkbox-indicator [state]="checked ? 'checked' : 'unchecked'">
    @if (checked) {
      <svg si-check-icon class="size-4"></svg>
    }
  </span>
</div>
```

Or create a completely custom visual:

```html
<div class="relative inline-flex h-6 w-6">
  <input type="checkbox" sc-invisible-checkbox [(ngModel)]="checked" />
  <span sc-checkbox-indicator [state]="checked ? 'checked' : 'unchecked'" class="h-6 w-6 rounded-full">
    <!-- Your custom icon -->
  </span>
</div>
```

## Custom Theme

Customize colors using CSS variables:

```html
<div style="--primary: oklch(0.6 0.25 280); --primary-foreground: oklch(0.985 0 0);">
  <sc-checkbox [(checked)]="purple" id="purple" />
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

| Input           | Type      | Default | Description                                  |
| --------------- | --------- | ------- | -------------------------------------------- |
| `checked`       | `boolean` | `false` | Whether checkbox is checked                  |
| `disabled`      | `boolean` | `false` | Whether checkbox is disabled                 |
| `indeterminate` | `boolean` | `false` | Whether checkbox is indeterminate            |
| `id`            | `string`  | `''`    | ID for label association and form submission |
| `name`          | `string`  | `''`    | Name attribute for form submission           |
| `class`         | `string`  | `''`    | Additional CSS classes                       |

## Outputs

| Output          | Type      | Description                      |
| --------------- | --------- | -------------------------------- |
| `checkedChange` | `boolean` | Emits when checked state changes |

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

The checkbox uses a layered approach:

```
sc-checkbox
├── input[sc-invisible-checkbox] (native checkbox, opacity: 0, covers full area)
└── span[sc-visual-checkbox] (decorative wrapper)
    └── span[sc-checkbox-indicator] (visual box)
        ├── <svg si-check-icon> (checkmark icon)
        └── <svg si-minus-icon> (indeterminate icon)
```

This pattern provides:
- **Native behavior**: All browser/OS checkbox features work automatically
- **Accessibility**: Screen readers interact with the real checkbox
- **Styling**: Visual representation is fully customizable
- **Simplicity**: No manual ARIA management or keyboard handling needed
