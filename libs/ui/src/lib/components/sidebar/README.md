# Sidebar

A composable, themeable and customizable sidebar component.

## Usage

```html
<div sc-sidebar-provider>
  <aside sc-sidebar>
    <div sc-sidebar-header>Header</div>
    <div sc-sidebar-content>
      <div sc-sidebar-group>
        <div sc-sidebar-group-label>Menu</div>
        <ul sc-sidebar-menu>
          <li sc-sidebar-menu-item>
            <button sc-sidebar-menu-button [isActive]="true">
              <svg><!-- icon --></svg>
              <span>Home</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div sc-sidebar-footer>Footer</div>
  </aside>
  <div sc-sidebar-inset>
    <header>
      <button sc-sidebar-trigger></button>
    </header>
    <main>Content</main>
  </div>
</div>
```

## Components

### ScSidebarProvider

Root component that provides sidebar state to all children.

**Selector:** `div[sc-sidebar-provider]`

### ScSidebarState

Injectable service for sidebar state management.

**Methods:**

- `toggle()`: Toggle sidebar open/closed
- `setOpen(value: boolean)`: Set open state

### ScSidebar

Main sidebar container.

**Selector:** `aside[sc-sidebar]`

**Inputs:**

| Input         | Type                                 | Default       | Description        |
| ------------- | ------------------------------------ | ------------- | ------------------ |
| `side`        | `'left' \| 'right'`                  | `'left'`      | Sidebar position   |
| `variant`     | `'sidebar' \| 'floating' \| 'inset'` | `'sidebar'`   | Visual variant     |
| `collapsible` | `'offcanvas' \| 'icon' \| 'none'`    | `'offcanvas'` | Collapse behavior  |
| `class`       | `string`                             | `''`          | Additional classes |

### ScSidebarHeader

Header section of the sidebar.

**Selector:** `div[sc-sidebar-header]`

### ScSidebarContent

Scrollable content area.

**Selector:** `div[sc-sidebar-content]`

### ScSidebarFooter

Footer section of the sidebar.

**Selector:** `div[sc-sidebar-footer]`

### ScSidebarGroup

Group container for menu items.

**Selector:** `div[sc-sidebar-group]`

### ScSidebarGroupLabel

Label for a sidebar group.

**Selector:** `div[sc-sidebar-group-label]`

### ScSidebarMenu

Menu container (ul element).

**Selector:** `ul[sc-sidebar-menu]`

### ScSidebarMenuItem

Menu item container (li element).

**Selector:** `li[sc-sidebar-menu-item]`

### ScSidebarMenuButton

Clickable menu button.

**Selector:** `button[sc-sidebar-menu-button], a[sc-sidebar-menu-button]`

**Inputs:**

| Input      | Type                        | Default     | Description        |
| ---------- | --------------------------- | ----------- | ------------------ |
| `isActive` | `boolean`                   | `false`     | Active state       |
| `size`     | `'default' \| 'sm' \| 'lg'` | `'default'` | Button size        |
| `class`    | `string`                    | `''`        | Additional classes |

### ScSidebarTrigger

Toggle button for sidebar.

**Selector:** `button[sc-sidebar-trigger]`

### ScSidebarInset

Main content area next to sidebar.

**Selector:** `div[sc-sidebar-inset]`

### ScSidebarSeparator

Visual separator line.

**Selector:** `[sc-sidebar-separator]`

## Examples

### Icon Collapsible

```html
<div sc-sidebar-provider>
  <aside sc-sidebar collapsible="icon">
    <!-- When collapsed, only icons visible -->
  </aside>
</div>
```

### Floating Variant

```html
<aside sc-sidebar variant="floating">
  <!-- Sidebar with rounded corners and shadow -->
</aside>
```

### Right Side

```html
<aside sc-sidebar side="right">
  <!-- Sidebar on the right -->
</aside>
```

## Features

- **Collapsible Modes**: offcanvas, icon-only, or non-collapsible
- **Variants**: Standard, floating, or inset
- **State Management**: Injectable service for programmatic control
- **Responsive**: Hidden on mobile, visible on desktop
- **Composable**: Mix and match components as needed

## CSS Variables

The sidebar uses these CSS variables:

- `--sidebar-width`: Width when expanded (default: 16rem)
- `--sidebar-width-icon`: Width when collapsed to icons (default: 3rem)
