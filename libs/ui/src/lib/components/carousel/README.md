# Carousel

A carousel with motion and swipe built using CSS scroll snap.

## Usage

```html
<div sc-carousel class="w-full max-w-xs">
  <div sc-carousel-content>
    <div sc-carousel-item>Slide 1</div>
    <div sc-carousel-item>Slide 2</div>
    <div sc-carousel-item>Slide 3</div>
  </div>
  <button sc-carousel-previous></button>
  <button sc-carousel-next></button>
</div>
```

## Components

### ScCarousel

Main carousel container that manages state and keyboard navigation.

**Selector:** `div[sc-carousel]`

**Inputs:**

| Input         | Type                         | Default        | Description            |
| ------------- | ---------------------------- | -------------- | ---------------------- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Scroll direction       |
| `class`       | `string`                     | `''`           | Additional CSS classes |

### ScCarouselContent

Scrollable container for carousel items.

**Selector:** `div[sc-carousel-content]`

**Inputs:**

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

### ScCarouselItem

Individual carousel slide.

**Selector:** `div[sc-carousel-item]`

**Inputs:**

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

### ScCarouselPrevious

Previous slide navigation button.

**Selector:** `button[sc-carousel-previous]`

**Inputs:**

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

### ScCarouselNext

Next slide navigation button.

**Selector:** `button[sc-carousel-next]`

**Inputs:**

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

## Examples

### Default

```html
<div sc-carousel class="w-full max-w-xs">
  <div sc-carousel-content>
    @for (i of [1, 2, 3, 4, 5]; track i) {
    <div sc-carousel-item>
      <div class="p-1">
        <div class="flex aspect-square items-center justify-center rounded-lg border">{{ i }}</div>
      </div>
    </div>
    }
  </div>
  <button sc-carousel-previous></button>
  <button sc-carousel-next></button>
</div>
```

### Partial Items (Multiple Visible)

```html
<div sc-carousel class="w-full max-w-lg">
  <div sc-carousel-content>
    @for (i of items; track i) {
    <div sc-carousel-item class="basis-1/3">
      <!-- Shows 3 items at a time -->
    </div>
    }
  </div>
</div>
```

### Vertical Orientation

```html
<div sc-carousel orientation="vertical" class="w-full max-w-xs">
  <div sc-carousel-content class="h-[200px]">
    @for (i of items; track i) {
    <div sc-carousel-item>...</div>
    }
  </div>
  <button sc-carousel-previous></button>
  <button sc-carousel-next></button>
</div>
```

## Features

- **CSS Scroll Snap**: Native smooth scrolling with snap points
- **Horizontal/Vertical**: Supports both orientations
- **Keyboard Navigation**: Arrow keys for navigation
- **Responsive**: Flexible sizing with basis classes
- **Navigation Buttons**: Prev/next with auto-disable at boundaries
- **Accessible**: ARIA roles and roledescription

## Keyboard Navigation

- `ArrowLeft` / `ArrowRight`: Navigate horizontal carousel
- `ArrowUp` / `ArrowDown`: Navigate vertical carousel

## Accessibility

- `role="region"` with `aria-roledescription="carousel"` on container
- `role="group"` with `aria-roledescription="slide"` on items
- Screen reader text on navigation buttons
- Disabled state for navigation at boundaries
