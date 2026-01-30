# Carousel

A carousel component built with Embla Carousel, featuring smooth animations, touch/swipe gestures, and plugin support.

## Usage

```html
<div sc-carousel class="w-full max-w-xs">
  <div sc-carousel-track>
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

| Input         | Type                         | Default        | Description                    |
| ------------- | ---------------------------- | -------------- | ------------------------------ |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Scroll direction               |
| `opts`        | `CarouselOptions`            | `{}`           | Embla carousel options         |
| `plugins`     | `CarouselPlugin[]`           | `[]`           | Embla plugins (e.g., autoplay) |
| `class`       | `string`                     | `''`           | Additional CSS classes         |

**Outputs:**

| Output   | Type          | Description                  |
| -------- | ------------- | ---------------------------- |
| `setApi` | `CarouselApi` | Emits the Embla API instance |

### ScCarouselTrack

The Embla viewport that contains and slides carousel items.

**Selector:** `sc-carousel-track`

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
  <div sc-carousel-track>
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

### With Loop

```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <div sc-carousel [opts]="{ loop: true }" class="w-full max-w-xs">
      <div sc-carousel-track>
        @for (i of [1, 2, 3, 4, 5]; track i) {
          <div sc-carousel-item>{{ i }}</div>
        }
      </div>
      <button sc-carousel-previous></button>
      <button sc-carousel-next></button>
    </div>
  `,
})
export class MyComponent {}
```

### With Autoplay

```typescript
import { Component } from '@angular/core';
import Autoplay from 'embla-carousel-autoplay';

@Component({
  template: `
    <div sc-carousel [plugins]="plugins" class="w-full max-w-xs">
      <div sc-carousel-track>
        @for (i of items; track i) {
          <div sc-carousel-item>{{ i }}</div>
        }
      </div>
      <button sc-carousel-previous></button>
      <button sc-carousel-next></button>
    </div>
  `,
})
export class MyComponent {
  plugins = [Autoplay({ delay: 2000, stopOnInteraction: true })];
  items = [1, 2, 3, 4, 5];
}
```

### Partial Items (Multiple Visible)

```html
<div sc-carousel [opts]="{ align: 'start' }" class="w-full max-w-lg">
  <div sc-carousel-track>
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
  <sc-carousel-track class="h-[200px]">
    @for (i of items; track i) {
      <div sc-carousel-item>...</div>
    }
  </div>
  <button sc-carousel-previous></button>
  <button sc-carousel-next></button>
</div>
```

### Access Embla API

```typescript
import { Component } from '@angular/core';
import type { CarouselApi } from './carousel';

@Component({
  template: `
    <div sc-carousel (setApi)="onSetApi($event)">
      <div sc-carousel-track>
        @for (i of items; track i) {
          <div sc-carousel-item>{{ i }}</div>
        }
      </div>
    </div>
    <p>Current slide: {{ current }}</p>
  `,
})
export class MyComponent {
  current = 0;
  items = [1, 2, 3, 4, 5];

  onSetApi(api: CarouselApi): void {
    api.on('select', () => {
      this.current = api.selectedScrollSnap() + 1;
    });
  }
}
```

## Features

- **Embla Carousel**: Powered by Embla for smooth, physics-based animations
- **Touch/Swipe**: Native touch and mouse drag support
- **Horizontal/Vertical**: Supports both orientations
- **Keyboard Navigation**: Arrow keys for navigation
- **Plugin System**: Extend with plugins (autoplay, auto-scroll, etc.)
- **Flexible Options**: Loop, alignment, slide spacing, and more
- **Responsive**: Flexible sizing with basis classes
- **Navigation Buttons**: Prev/next with auto-disable at boundaries
- **Accessible**: ARIA roles and roledescription
- **API Access**: Full access to Embla API for advanced control

## Keyboard Navigation

- `ArrowLeft` / `ArrowRight`: Navigate horizontal carousel
- `ArrowUp` / `ArrowDown`: Navigate vertical carousel

## Accessibility

- `role="region"` with `aria-roledescription="carousel"` on container
- `role="group"` with `aria-roledescription="slide"` on items
- Screen reader text on navigation buttons
- Disabled state for navigation at boundaries

## Carousel Options

The `opts` input accepts all [Embla Carousel options](https://www.embla-carousel.com/api/options/):

- `align`: `'start' | 'center' | 'end'` - Slide alignment
- `loop`: `boolean` - Enable infinite loop
- `skipSnaps`: `boolean` - Skip slides that can't be scrolled to
- `dragFree`: `boolean` - Enable free scroll without snap points
- `slidesToScroll`: `number | 'auto'` - Number of slides to scroll
- `containScroll`: `'trimSnaps' | 'keepSnaps'` - Contain scroll behavior
- And many more...

## Plugins

The carousel supports all Embla plugins via the `plugins` input:

### Autoplay

```bash
npm install embla-carousel-autoplay
```

```typescript
import Autoplay from 'embla-carousel-autoplay';

export class MyComponent {
  plugins = [
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  ];
}
```

### Other Available Plugins

- **embla-carousel-auto-scroll**: Automatic scrolling
- **embla-carousel-class-names**: Dynamic class names on slides
- **embla-carousel-fade**: Fade transition effect

See [Embla Carousel Plugins](https://www.embla-carousel.com/plugins/) for more.
