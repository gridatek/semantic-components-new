# Dropdown Menu

Displays a menu to the user — such as a set of actions or functions — triggered by a button.

## Usage

```html
<div sc-dropdown-menu>
  <button sc-button sc-dropdown-menu-trigger [cdkMenuTriggerFor]="menu">Open</button>
  <ng-template #menu>
    <div sc-dropdown-menu-content>
      <div sc-dropdown-menu-item>Profile</div>
      <div sc-dropdown-menu-item>Settings</div>
      <div sc-dropdown-menu-separator></div>
      <div sc-dropdown-menu-item>Log out</div>
    </div>
  </ng-template>
</div>
```

## Components

### ScDropdownMenu

Root container for the dropdown menu.

**Selector:** `[sc-dropdown-menu]`

### ScDropdownMenuTrigger

Button that triggers the dropdown menu.

**Selector:** `[sc-dropdown-menu-trigger]`

Use with `[cdkMenuTriggerFor]="templateRef"` to connect to content.

### ScDropdownMenuContent

The popup content container.

**Selector:** `[sc-dropdown-menu-content]`

### ScDropdownMenuGroup

Groups related menu items.

**Selector:** `[sc-dropdown-menu-group]`

### ScDropdownMenuLabel

Non-interactive label for a group.

**Selector:** `[sc-dropdown-menu-label]`

**Inputs:**

| Input   | Type      | Default | Description            |
| ------- | --------- | ------- | ---------------------- |
| `inset` | `boolean` | `false` | Add left padding       |
| `class` | `string`  | `''`    | Additional CSS classes |

### ScDropdownMenuItem

Interactive menu item.

**Selector:** `[sc-dropdown-menu-item]`

**Inputs:**

| Input   | Type      | Default | Description            |
| ------- | --------- | ------- | ---------------------- |
| `inset` | `boolean` | `false` | Add left padding       |
| `class` | `string`  | `''`    | Additional CSS classes |

### ScDropdownMenuCheckboxItem

Menu item with checkbox state.

**Selector:** `[sc-dropdown-menu-checkbox-item]`

**Two-way Bindings:**

| Binding   | Type      | Description   |
| --------- | --------- | ------------- |
| `checked` | `boolean` | Checked state |

### ScDropdownMenuRadioGroup

Container for radio items.

**Selector:** `[sc-dropdown-menu-radio-group]`

**Two-way Bindings:**

| Binding | Type     | Description    |
| ------- | -------- | -------------- |
| `value` | `string` | Selected value |

### ScDropdownMenuRadioItem

Radio menu item.

**Selector:** `[sc-dropdown-menu-radio-item]`

**Inputs:**

| Input   | Type     | Required | Description    |
| ------- | -------- | -------- | -------------- |
| `value` | `string` | Yes      | Item value     |
| `class` | `string` | No       | Additional CSS |

### ScDropdownMenuSeparator

Visual separator between items.

**Selector:** `[sc-dropdown-menu-separator]`

### ScDropdownMenuShortcut

Keyboard shortcut hint text.

**Selector:** `[sc-dropdown-menu-shortcut]`

### ScDropdownMenuSub

Container for submenu.

**Selector:** `[sc-dropdown-menu-sub]`

### ScDropdownMenuSubTrigger

Trigger for opening submenu.

**Selector:** `[sc-dropdown-menu-sub-trigger]`

Use with `[cdkMenuTriggerFor]="submenuTemplate"`.

### ScDropdownMenuSubContent

Submenu popup content.

**Selector:** `[sc-dropdown-menu-sub-content]`

## Examples

### Basic Menu

```html
<div sc-dropdown-menu>
  <button sc-dropdown-menu-trigger [cdkMenuTriggerFor]="menu">Open</button>
  <ng-template #menu>
    <div sc-dropdown-menu-content>
      <div sc-dropdown-menu-label>My Account</div>
      <div sc-dropdown-menu-separator></div>
      <div sc-dropdown-menu-item>Profile</div>
      <div sc-dropdown-menu-item>Settings</div>
    </div>
  </ng-template>
</div>
```

### With Shortcuts

```html
<div sc-dropdown-menu-item>
  Save
  <span sc-dropdown-menu-shortcut>⌘S</span>
</div>
```

### Checkboxes

```html
<div sc-dropdown-menu-checkbox-item [(checked)]="showToolbar">Show Toolbar</div>
```

### Radio Group

```html
<div sc-dropdown-menu-radio-group [(value)]="theme">
  <div sc-dropdown-menu-radio-item value="light">Light</div>
  <div sc-dropdown-menu-radio-item value="dark">Dark</div>
  <div sc-dropdown-menu-radio-item value="system">System</div>
</div>
```

### Submenu

```html
<div sc-dropdown-menu-sub>
  <div sc-dropdown-menu-sub-trigger [cdkMenuTriggerFor]="submenu">More Options</div>
  <ng-template #submenu>
    <div sc-dropdown-menu-sub-content>
      <div sc-dropdown-menu-item>Option 1</div>
      <div sc-dropdown-menu-item>Option 2</div>
    </div>
  </ng-template>
</div>
```

## Features

- **CDK Menu Integration**: Built on Angular CDK Menu
- **Checkbox Items**: Toggle boolean states
- **Radio Groups**: Single selection from options
- **Submenus**: Nested menu support
- **Keyboard Shortcuts**: Display shortcut hints
- **Icons**: Support for leading icons
- **Inset Items**: Alignment with checkbox/radio items

## Accessibility

- Built on Angular CDK Menu for full a11y support
- Keyboard navigation (Arrow keys, Enter, Escape)
- Focus management
- ARIA roles automatically applied
