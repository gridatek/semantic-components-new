# Drawer

A mobile-friendly slide-in panel that can be opened from any edge of the screen. Ideal for navigation menus, forms, and quick actions on touch devices.

## Components

- `ScDrawer` - Root wrapper component with direction and open state
- `ScDrawerTrigger` - Button that opens the drawer
- `ScDrawerPortal` - CDK Overlay portal with backdrop
- `ScDrawerContent` - Sliding content container
- `ScDrawerHeader` - Header section with centered/left-aligned text
- `ScDrawerFooter` - Footer section with stacked buttons
- `ScDrawerTitle` - Title text styling
- `ScDrawerDescription` - Description text styling
- `ScDrawerHandle` - Visual drag handle indicator
- `ScDrawerClose` - Button that closes the drawer

## Usage

```html
<div sc-drawer direction="bottom">
  <button sc-drawer-trigger>Open Drawer</button>
  <div sc-drawer-portal>
    <div sc-drawer-content>
      <div sc-drawer-handle></div>
      <div sc-drawer-header>
        <h2 sc-drawer-title>Drawer Title</h2>
        <p sc-drawer-description>Drawer description text.</p>
      </div>
      <div class="p-4">
        <!-- Main content -->
      </div>
      <div sc-drawer-footer>
        <button sc-drawer-close>Cancel</button>
        <button sc-drawer-close>Submit</button>
      </div>
    </div>
  </div>
</div>
```

## Direction

The drawer can slide in from any edge of the screen:

```html
<!-- Bottom (default) -->
<div sc-drawer direction="bottom">...</div>

<!-- Top -->
<div sc-drawer direction="top">...</div>

<!-- Left -->
<div sc-drawer direction="left">...</div>

<!-- Right -->
<div sc-drawer direction="right">...</div>
```

## Programmatic Control

The drawer exposes a `model()` signal for two-way binding:

```typescript
@Component({
  template: `
    <div sc-drawer [(open)]="isOpen">...</div>
    <button (click)="isOpen.set(true)">Open Drawer</button>
  `,
})
export class MyComponent {
  isOpen = signal(false);
}
```

## Accessibility

- Uses CDK Overlay for proper focus management
- Backdrop click closes the drawer
- ESC key closes the drawer
- Proper ARIA attributes are applied

## Dependencies

- Angular CDK Overlay (`@angular/cdk/overlay`)
- Angular CDK Portal (`@angular/cdk/portal`)
