# Navbar

A responsive navigation bar block with mobile menu support. Automatically adapts between desktop horizontal navigation and a mobile hamburger menu with slide-in drawer.

## Components

- `ScNavbarProvider` - Root provider that manages state and links navbar with mobile menu
- `ScNavbar` - Root nav element for the main navigation bar
- `ScNavbarBrand` - Brand/logo section with focus styles
- `ScNavbarContent` - Desktop navigation container (hidden on mobile)
- `ScNavbarActions` - Right-aligned action buttons container
- `ScNavbarLink` - Individual nav link with active state support
- `ScNavbarMobileTrigger` - Hamburger menu button with icon switching
- `ScNavbarMobilePortal` - Mobile menu portal using CDK overlay (handles rendering)
- `ScNavbarMobileMenu` - Mobile menu container with styling (customizable)
- `ScNavbarMobileLink` - Mobile menu link with auto-close on navigation

## Architecture

The navbar uses a provider pattern similar to the sheet component:

- **Provider**: `ScNavbarProvider` wraps everything and manages state
- **Navbar**: The actual navigation bar sits inside the provider
- **Mobile Menu**: The mobile menu portal is a sibling to the navbar (not nested inside)
- **Components communicate**: All components inject the provider to access shared state

This architecture allows the mobile menu to be positioned independently while maintaining a clean connection to the navbar state.

## Usage

### Basic Navbar

```html
<div sc-navbar-provider>
  <nav sc-navbar>
    <!-- Brand -->
    <a sc-navbar-brand routerLink="/">
      <span>Brand</span>
    </a>

    <!-- Desktop Navigation -->
    <div sc-navbar-content>
      <a sc-navbar-link routerLink="/home" [active]="true">Home</a>
      <a sc-navbar-link routerLink="/about">About</a>
      <a sc-navbar-link routerLink="/contact">Contact</a>
    </div>

    <!-- Actions -->
    <div sc-navbar-actions>
      <button sc-navbar-mobile-trigger></button>
      <button sc-button>Sign In</button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div sc-navbar-mobile-portal>
    <div sc-navbar-mobile-menu>
      <a sc-navbar-mobile-link routerLink="/home" [active]="true">Home</a>
      <a sc-navbar-mobile-link routerLink="/about">About</a>
      <a sc-navbar-mobile-link routerLink="/contact">Contact</a>
    </div>
  </div>
</div>
```

## Controlling Mobile Menu State

You can control the mobile menu state using two-way binding on the provider:

```html
<div sc-navbar-provider [(open)]="mobileMenuOpen">
  <!-- navbar content -->
</div>
```

```typescript
export class MyComponent {
  readonly mobileMenuOpen = model(false);
}
```

## Active State

Use the `active` input to indicate the current page:

```html
<a sc-navbar-link routerLink="/about" [active]="isAboutPage">About</a>
<a sc-navbar-mobile-link routerLink="/about" [active]="isAboutPage">About</a>
```

## With RouterLinkActive

For automatic active state based on the current route:

```html
<a sc-navbar-link routerLink="/about" routerLinkActive="active" #rla="routerLinkActive" [active]="rla.isActive">About</a>
```

## Mobile Menu Behavior

The mobile menu automatically:

- Shows a hamburger icon when closed and an X icon when open
- Closes when clicking a mobile link (auto-navigation)
- Closes when pressing the Escape key
- Uses CDK overlay for proper z-index stacking and portal rendering
- Slides in from the top below the navbar
- Animates smoothly with CSS transitions
- State is managed by the provider and shared across all components

## Custom Styling

All components accept a `class` input for custom styles:

```html
<nav sc-navbar class="sticky top-0 z-50">
  <a sc-navbar-brand class="text-primary">Brand</a>
  <div sc-navbar-content class="gap-4">
    <!-- links -->
  </div>
</nav>
```

### Customizing Mobile Menu

The mobile menu container can be styled directly using the `class` input:

```html
<div sc-navbar-mobile-portal>
  <div sc-navbar-mobile-menu class="bg-red-500 p-8">
    <!-- Custom background and padding -->
  </div>
</div>
```

## Inputs

### ScNavbarProvider

| Input   | Type      | Default | Description                           |
| ------- | --------- | ------- | ------------------------------------- |
| `class` | `string`  | `''`    | Additional CSS classes                |
| `open`  | `boolean` | `false` | Two-way binding for mobile menu state |

### ScNavbar

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

### ScNavbarMobileMenu

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

### ScNavbarLink / ScNavbarMobileLink

| Input    | Type      | Default | Description                          |
| -------- | --------- | ------- | ------------------------------------ |
| `class`  | `string`  | `''`    | Additional CSS classes               |
| `active` | `boolean` | `false` | Whether the link is currently active |

## CSS Variables

The navbar uses the following CSS variable for positioning:

| Variable          | Default | Description                                           |
| ----------------- | ------- | ----------------------------------------------------- |
| `--navbar-height` | `57px`  | Height of the navbar, used to position mobile content |

## Accessibility

- Uses semantic `<nav>` element
- Mobile trigger includes `aria-expanded` and `aria-controls` attributes
- Mobile menu has `role="navigation"` and `aria-label="Mobile navigation"`
- Screen reader text for hamburger icon state changes
- Uses `inert` attribute to prevent focus on hidden mobile content
- Overlay is marked with `aria-hidden="true"`
- All interactive elements have visible focus indicators
