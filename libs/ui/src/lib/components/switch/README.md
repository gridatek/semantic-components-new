# Switch

A control that allows the user to toggle between checked and not checked.

## Components

- `ScSwitch` - Toggle switch with built-in thumb

## Usage

```html
<button sc-switch></button>
```

## With Label

```html
<div class="flex items-center space-x-2">
  <button sc-switch id="airplane-mode"></button>
  <label for="airplane-mode">Airplane Mode</label>
</div>
```

## Two-Way Binding

```typescript
@Component({
  template: `
    <button sc-switch [(checked)]="enabled"></button>
    <p>Switch is {{ enabled() ? 'on' : 'off' }}</p>
  `,
})
export class MyComponent {
  enabled = signal(false);
}
```

## Disabled State

```html
<button sc-switch [disabled]="true"></button>
<button sc-switch [checked]="true" [disabled]="true"></button>
```

## In a Form

```html
<div class="flex items-center justify-between">
  <div class="space-y-0.5">
    <label for="notifications">Notifications</label>
    <p class="text-sm text-muted-foreground">Receive email notifications.</p>
  </div>
  <button sc-switch [(checked)]="notifications" id="notifications"></button>
</div>
```

## Inputs

| Input      | Type      | Default | Description                |
| ---------- | --------- | ------- | -------------------------- |
| `checked`  | `boolean` | `false` | The checked state (model)  |
| `disabled` | `boolean` | `false` | Whether switch is disabled |
| `class`    | `string`  | `''`    | Additional CSS classes     |

## Outputs

| Output          | Type      | Description                      |
| --------------- | --------- | -------------------------------- |
| `checkedChange` | `boolean` | Emits when checked state changes |

## Accessibility

- Uses `role="switch"` for screen readers
- `aria-checked` reflects the current state
- Keyboard accessible with Space key to toggle
- Focus ring for keyboard navigation
- Disabled state properly communicated
