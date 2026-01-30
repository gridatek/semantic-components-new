# Sidebar Component (scx)

A comprehensive sidebar component system for Angular applications with collapsible states, mobile responsiveness, keyboard shortcuts, and state persistence.

## Components

### Core Components

- `ScxSidebarProvider` - Root provider component with state management
- `ScxSidebar` - Main sidebar container
- `ScxSidebarTrigger` - Toggle button
- `ScxSidebarRail` - Resize handle for collapsing/expanding
- `ScxSidebarInset` - Main content wrapper

### Layout Components

- `ScxSidebarHeader` - Header section
- `ScxSidebarFooter` - Footer section
- `ScxSidebarContent` - Scrollable content area
- `ScxSidebarSeparator` - Visual separator
- `ScxSidebarInput` - Styled input for search

### Menu Components

- `ScxSidebarMenu` - Menu list container (ul)
- `ScxSidebarMenuItem` - Menu list item (li)
- `ScxSidebarMenuButton` - Menu button/link (works with both button and a elements)
- `ScxSidebarMenuAction` - Action button on menu items
- `ScxSidebarMenuBadge` - Badge/counter display
- `ScxSidebarMenuSkeleton` - Loading skeleton
- `ScxSidebarMenuSub` - Submenu container (ul)
- `ScxSidebarMenuSubItem` - Submenu item (li)
- `ScxSidebarMenuSubButton` - Submenu button/link

### Group Components

- `ScxSidebarGroup` - Group container
- `ScxSidebarGroupLabel` - Group header/label
- `ScxSidebarGroupAction` - Action button for groups
- `ScxSidebarGroupContent` - Group content wrapper

## Features

- **Reactive State Management** - Built with Angular signals
- **Keyboard Shortcuts** - Cmd/Ctrl + B to toggle sidebar
- **Cookie Persistence** - State persists across page refreshes (7 days)
- **Mobile Responsive** - Sheet drawer on mobile devices
- **Multiple Variants** - sidebar, floating, inset
- **Collapsible Modes** - offcanvas, icon, none
- **Two-way Binding** - Model support for open state
- **CSS Variables** - Customizable widths

## How It Works

The sidebar uses a clever layout technique to push content to the side instead of overlaying it:

```
┌─────────────────────────────────────────────────────────┐
│ ScxSidebarProvider (flex container)                     │
│ ┌─────────────────────┬─────────────────────────────┐   │
│ │  ScxSidebar         │  ScxSidebarInset            │   │
│ │ ┌─────────────────┐ │  (main content)             │   │
│ │ │ Gap Div         │ │                             │   │
│ │ │ • Width: 16rem  │ │  <header>                   │   │
│ │ │ • No height     │ │    <button>Toggle</button>  │   │
│ │ │ • Pushes content│ │  </header>                  │   │
│ │ └─────────────────┘ │                             │   │
│ │                     │  <main>                     │   │
│ │ ┌─────────────────┐ │    Your content here        │   │
│ │ │ Fixed Container │ │                             │   │
│ │ │ (actual sidebar)│ │                             │   │
│ │ │ • Position fixed│ │                             │   │
│ │ │ • Overlays gap  │ │                             │   │
│ │ └─────────────────┘ │                             │   │
│ └─────────────────────┴─────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Key Concepts

1. **Gap Div** - An invisible spacer with width but no height that participates in the flex layout, creating space for the sidebar
2. **Fixed Container** - The actual sidebar content, positioned fixed to overlay the gap
3. **Flex Layout** - The provider uses flexbox, making the gap and content area sit side-by-side
4. **Responsive Collapse** - When collapsed, the gap width transitions to 0, allowing content to use full width

This architecture ensures smooth transitions and proper content flow without JavaScript layout calculations.

## Basic Usage

```typescript
import { ScxSidebarProvider, ScxSidebar, ScxSidebarTrigger, ScxSidebarHeader, ScxSidebarContent, ScxSidebarFooter, ScxSidebarMenu, ScxSidebarMenuItem, ScxSidebarMenuButton, ScxSidebarInset } from '@semantic-components/ui';

@Component({
  selector: 'app-layout',
  imports: [
    ScxSidebarProvider,
    ScxSidebar,
    // ... other imports
  ],
  template: `
    <div scx-sidebar-provider>
      <div scx-sidebar>
        <div scx-sidebar-header>
          <h2>My App</h2>
        </div>

        <div scx-sidebar-content>
          <ul scx-sidebar-menu>
            <li scx-sidebar-menu-item>
              <a scx-sidebar-menu-button routerLink="/dashboard">Dashboard</a>
            </li>
          </ul>
        </div>

        <div scx-sidebar-footer>User Info</div>
      </div>

      <main scx-sidebar-inset>
        <header>
          <button scx-sidebar-trigger>Toggle</button>
        </header>
        <router-outlet />
      </main>
    </div>
  `,
})
export class AppLayout {}
```

## Advanced Usage

### With Submenu

```html
<ul scx-sidebar-menu>
  <li scx-sidebar-menu-item>
    <a scx-sidebar-menu-button>Projects</a>
    <ul scx-sidebar-menu-sub>
      <li scx-sidebar-menu-sub-item>
        <a scx-sidebar-menu-sub-button routerLink="/projects/1">Project 1</a>
      </li>
    </ul>
  </li>
</ul>
```

### With Groups

```html
<div scx-sidebar-group>
  <div scx-sidebar-group-label>Navigation</div>
  <div scx-sidebar-group-content>
    <ul scx-sidebar-menu>
      <!-- menu items -->
    </ul>
  </div>
</div>
```

### Variants

```html
<!-- Default sidebar -->
<div scx-sidebar variant="sidebar" collapsible="icon">
  <!-- Floating sidebar -->
  <div scx-sidebar variant="floating" collapsible="icon">
    <!-- Inset sidebar -->
    <div scx-sidebar variant="inset" collapsible="icon"></div>
  </div>
</div>
```

### Two-way Binding

```typescript
@Component({
  template: `
    <div scx-sidebar-provider [(open)]="sidebarOpen">
      <!-- sidebar content -->
    </div>
  `,
})
export class MyComponent {
  sidebarOpen = signal(true);
}
```

## Configuration

### CSS Variables

The sidebar uses CSS variables that can be customized:

```css
:root {
  --sidebar-width: 16rem;
  --sidebar-width-mobile: 18rem;
  --sidebar-width-icon: 3rem;
}
```

### Props

#### ScxSidebar

- `side` - 'left' | 'right' (default: 'left')
- `variant` - 'sidebar' | 'floating' | 'inset' (default: 'sidebar')
- `collapsible` - 'offcanvas' | 'icon' | 'none' (default: 'offcanvas')

#### ScxSidebarMenuButton

- `size` - 'default' | 'sm' | 'lg' (default: 'default')
- `isActive` - boolean (default: false)
- `tooltip` - string (optional)

#### ScxSidebarMenuSubButton

- `size` - 'sm' | 'md' (default: 'md')
- `isActive` - boolean (default: false)

## Keyboard Shortcuts

- `Cmd + B` (Mac) / `Ctrl + B` (Windows) - Toggle sidebar

## State Persistence

The sidebar state is automatically saved to a cookie (`sidebar_state`) with a 7-day expiration. The state will be restored when the page is refreshed.

## Mobile Behavior

On screens smaller than 768px (md breakpoint), the sidebar automatically switches to a sheet drawer that slides in from the side using the `ScSheetProvider`, `ScSheetPortal`, and `ScSheet` components. The `ScxSidebarTrigger` automatically handles mobile vs desktop toggle logic.

### Mobile Implementation Details

The mobile view uses the new ScSheet architecture with a provider pattern:

- `ScSheetProvider` manages the open state and side
- `ScSheetPortal` creates the overlay with backdrop
- `ScSheet` is the dialog panel with slide animations

## Accessibility

- All interactive elements are keyboard accessible
- Proper ARIA attributes are applied
- Focus management is handled automatically
- Screen reader support included

## Demo

See a comprehensive demo at `/sidebar-demo` in the blocks application.
