# ScDialog Components

A set of Angular components for creating accessible modal dialogs with shadcn/ui styling.

## Architecture

The components follow a dependency injection (DI) pattern where child components inject the parent `ScDialog` to access shared state.

```
ScDialog (root wrapper - manages open state)
├── ScDialogTrigger (button that opens dialog)
└── ScDialogPortal (overlay with backdrop)
    └── ScDialogContent (dialog container)
        ├── ScDialogClose (close button)
        ├── ScDialogHeader
        │   ├── ScDialogTitle
        │   └── ScDialogDescription
        ├── (user content)
        └── ScDialogFooter
```

## Components

| Component             | Selector                    | Description                           |
| --------------------- | --------------------------- | ------------------------------------- |
| `ScDialog`            | `div[sc-dialog]`            | Root wrapper, manages open state      |
| `ScDialogTrigger`     | `button[sc-dialog-trigger]` | Button that opens the dialog          |
| `ScDialogPortal`      | `div[sc-dialog-portal]`     | Overlay container with backdrop       |
| `ScDialogContent`     | `div[sc-dialog-content]`    | Dialog panel with animations          |
| `ScDialogHeader`      | `div[sc-dialog-header]`     | Header section container              |
| `ScDialogTitle`       | `h2[sc-dialog-title]`       | Dialog title (aria-labelledby)        |
| `ScDialogDescription` | `p[sc-dialog-description]`  | Dialog description (aria-describedby) |
| `ScDialogFooter`      | `div[sc-dialog-footer]`     | Footer section for actions            |
| `ScDialogClose`       | `button[sc-dialog-close]`   | Button that closes the dialog         |

## Usage

### Basic Dialog

```html
<div sc-dialog>
  <button sc-dialog-trigger>Open Dialog</button>
  <div sc-dialog-portal>
    <div sc-dialog-content>
      <button sc-dialog-close>
        <svg><!-- X icon --></svg>
        <span class="sr-only">Close</span>
      </button>
      <div sc-dialog-header>
        <h2 sc-dialog-title>Dialog Title</h2>
        <p sc-dialog-description>Dialog description goes here.</p>
      </div>
      <!-- Your content -->
      <div sc-dialog-footer>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  </div>
</div>
```

### Controlled Dialog

You can control the dialog state programmatically using the `open` model:

```typescript
@Component({
  template: `
    <div sc-dialog [(open)]="isOpen">
      <button sc-dialog-trigger>Open</button>
      <div sc-dialog-portal>
        <div sc-dialog-content>
          <!-- content -->
        </div>
      </div>
    </div>
  `,
})
export class MyComponent {
  isOpen = signal(false);

  openDialog() {
    this.isOpen.set(true);
  }

  closeDialog() {
    this.isOpen.set(false);
  }
}
```

### Form Dialog

```html
<div sc-dialog>
  <button sc-dialog-trigger>Edit Profile</button>
  <div sc-dialog-portal>
    <div sc-dialog-content>
      <button sc-dialog-close>
        <svg><!-- X icon --></svg>
      </button>
      <div sc-dialog-header>
        <h2 sc-dialog-title>Edit profile</h2>
        <p sc-dialog-description>Make changes to your profile here.</p>
      </div>
      <form class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <label for="name" class="text-right">Name</label>
          <input id="name" class="col-span-3" />
        </div>
      </form>
      <div sc-dialog-footer>
        <button type="submit">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

## Keyboard Navigation

| Key      | Action                 |
| -------- | ---------------------- |
| `Escape` | Close dialog           |
| `Tab`    | Navigate within dialog |

## How It Works

### State Management

`ScDialog` uses a `model` signal for the `open` state:

```typescript
readonly open = model<boolean>(false);
```

Child components inject `ScDialog` to read or modify this state:

```typescript
// ScDialogTrigger
openDialog(): void {
  this.dialog.open.set(true);
}

// ScDialogClose
closeDialog(): void {
  this.dialog.open.set(false);
}
```

### Overlay Management

`ScDialogPortal` creates a CDK overlay and attaches/detaches content based on the `open` state:

```typescript
effect(() => {
  if (this.dialog.open()) {
    this.attachDialog();
  } else {
    this.detachDialog();
  }
});
```

### Animations

`ScDialogContent` applies Tailwind CSS transitions for enter/leave animations:

```typescript
protected readonly class = computed(() =>
  cn(
    'bg-background relative z-50 ...',
    this.dialog.open()
      ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-out'
      : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in',
  ),
);
```

## Accessibility

- `role="dialog"` on the content
- `aria-modal="true"` for modal behavior
- `aria-labelledby` linked to `ScDialogTitle`
- `aria-describedby` linked to `ScDialogDescription`
- `aria-haspopup="dialog"` on the trigger
- `aria-expanded` reflects open state on trigger
- Focus trapped within the dialog
- Escape key closes the dialog
- Click outside (backdrop) closes the dialog

## Customization

All components accept a `class` input for custom styling:

```html
<div sc-dialog-content class="max-w-2xl">
  <!-- wider dialog -->
</div>

<div sc-dialog-footer class="flex-row-reverse">
  <!-- reversed button order -->
</div>
```
