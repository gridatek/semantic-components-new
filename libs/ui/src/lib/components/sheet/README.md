# ScSheet Components

A set of Angular components for creating accessible side panels (drawers) with shadcn/ui styling.

## Architecture

The components follow a dependency injection (DI) pattern where child components inject the parent `ScSheet` to access shared state.

```
ScSheet (root wrapper - manages open state and side)
├── ScSheetTrigger (button that opens sheet)
└── ScSheetPortal (overlay with backdrop)
    └── ScSheetContent (sheet panel)
        ├── ScSheetClose (close button)
        ├── ScSheetHeader
        │   ├── ScSheetTitle
        │   └── ScSheetDescription
        ├── (user content)
        └── ScSheetFooter
```

## Components

| Component            | Selector                   | Description                          |
| -------------------- | -------------------------- | ------------------------------------ |
| `ScSheet`            | `div[sc-sheet]`            | Root wrapper, manages open state     |
| `ScSheetTrigger`     | `button[sc-sheet-trigger]` | Button that opens the sheet          |
| `ScSheetPortal`      | `div[sc-sheet-portal]`     | Overlay container with backdrop      |
| `ScSheetContent`     | `div[sc-sheet-content]`    | Sheet panel with slide animations    |
| `ScSheetHeader`      | `div[sc-sheet-header]`     | Header section container             |
| `ScSheetTitle`       | `h2[sc-sheet-title]`       | Sheet title (aria-labelledby)        |
| `ScSheetDescription` | `p[sc-sheet-description]`  | Sheet description (aria-describedby) |
| `ScSheetFooter`      | `div[sc-sheet-footer]`     | Footer section for actions           |
| `ScSheetClose`       | `button[sc-sheet-close]`   | Button that closes the sheet         |

## Usage

### Basic Sheet (Right Side)

```html
<div sc-sheet>
  <button sc-sheet-trigger>Open Sheet</button>
  <div sc-sheet-portal>
    <div sc-sheet-content>
      <button sc-sheet-close>
        <svg><!-- X icon --></svg>
        <span class="sr-only">Close</span>
      </button>
      <div sc-sheet-header>
        <h2 sc-sheet-title>Sheet Title</h2>
        <p sc-sheet-description>Sheet description goes here.</p>
      </div>
      <!-- Your content -->
      <div sc-sheet-footer>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  </div>
</div>
```

### Different Sides

```html
<!-- Left side -->
<div sc-sheet side="left">
  <button sc-sheet-trigger>Open Left</button>
  <div sc-sheet-portal>
    <div sc-sheet-content>
      <!-- content -->
    </div>
  </div>
</div>

<!-- Top side -->
<div sc-sheet side="top">
  <button sc-sheet-trigger>Open Top</button>
  <div sc-sheet-portal>
    <div sc-sheet-content>
      <!-- content -->
    </div>
  </div>
</div>

<!-- Bottom side -->
<div sc-sheet side="bottom">
  <button sc-sheet-trigger>Open Bottom</button>
  <div sc-sheet-portal>
    <div sc-sheet-content>
      <!-- content -->
    </div>
  </div>
</div>
```

### Controlled Sheet

```typescript
@Component({
  template: `
    <div sc-sheet [(open)]="isOpen" side="right">
      <button sc-sheet-trigger>Open</button>
      <div sc-sheet-portal>
        <div sc-sheet-content>
          <!-- content -->
        </div>
      </div>
    </div>
  `,
})
export class MyComponent {
  isOpen = signal(false);

  openSheet() {
    this.isOpen.set(true);
  }

  closeSheet() {
    this.isOpen.set(false);
  }
}
```

### Navigation Sheet

```html
<div sc-sheet side="left">
  <button sc-sheet-trigger>Menu</button>
  <div sc-sheet-portal>
    <div sc-sheet-content>
      <button sc-sheet-close>X</button>
      <div sc-sheet-header>
        <h2 sc-sheet-title>Navigation</h2>
      </div>
      <nav class="flex flex-col gap-2">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </div>
</div>
```

## Keyboard Navigation

| Key      | Action                |
| -------- | --------------------- |
| `Escape` | Close sheet           |
| `Tab`    | Navigate within sheet |

## Side Options

| Side     | Description                    |
| -------- | ------------------------------ |
| `right`  | Slides in from right (default) |
| `left`   | Slides in from left            |
| `top`    | Slides down from top           |
| `bottom` | Slides up from bottom          |

## How It Works

### State Management

`ScSheet` uses a `model` signal for the `open` state and an `input` for the `side`:

```typescript
readonly side = input<SheetSide>('right');
readonly open = model<boolean>(false);
```

### Slide Animations

`ScSheetContent` applies different transform classes based on the side and open state:

```typescript
const sideClosedClasses: Record<SheetSide, string> = {
  top: '-translate-y-full',
  right: 'translate-x-full',
  bottom: 'translate-y-full',
  left: '-translate-x-full',
};

const sideOpenClasses: Record<SheetSide, string> = {
  top: 'translate-y-0',
  right: 'translate-x-0',
  bottom: 'translate-y-0',
  left: 'translate-x-0',
};
```

## Accessibility

- `role="dialog"` on the content
- `aria-modal="true"` for modal behavior
- `aria-labelledby` linked to `ScSheetTitle`
- `aria-describedby` linked to `ScSheetDescription`
- `aria-haspopup="dialog"` on the trigger
- `aria-expanded` reflects open state on trigger
- Escape key closes the sheet
- Click outside (backdrop) closes the sheet

## Customization

All components accept a `class` input for custom styling:

```html
<div sc-sheet-content class="w-[400px]">
  <!-- custom width -->
</div>

<div sc-sheet-footer class="flex-row-reverse">
  <!-- reversed button order -->
</div>
```
