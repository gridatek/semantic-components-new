# Pagination

Pagination with page navigation, next and previous links. Supports both manual and smart automatic page generation.

## Components

- `ScPagination` - Navigation container with optional smart pagination logic
- `ScPaginationList` - List container (ul)
- `ScPaginationItem` - List item (li)
- `ScPaginationLink` - Page number link/button
- `ScPaginationPrevious` - Previous page link/button
- `ScPaginationNext` - Next page link/button
- `ScPaginationEllipsis` - Ellipsis indicator

## Features

- **Manual Mode**: Full control over pagination items (basic usage)
- **Smart Mode**: Automatic page number and ellipsis generation
- Automatic calculation of total pages
- Configurable sibling pages count
- Optional first/last page display
- Disabled state support for navigation buttons
- **Internal click handling**: Components handle clicks internally, consumers only listen to `pageChange` event

## Usage

```html
<nav sc-pagination>
  <ul sc-pagination-list>
    <li sc-pagination-item>
      <a sc-pagination-previous href="#"></a>
    </li>
    <li sc-pagination-item>
      <a sc-pagination-link href="#">1</a>
    </li>
    <li sc-pagination-item>
      <a sc-pagination-link href="#" [isActive]="true">2</a>
    </li>
    <li sc-pagination-item>
      <a sc-pagination-link href="#">3</a>
    </li>
    <li sc-pagination-item>
      <a sc-pagination-next href="#"></a>
    </li>
  </ul>
</nav>
```

## With Ellipsis

```html
<nav sc-pagination>
  <ul sc-pagination-list>
    <li sc-pagination-item>
      <a sc-pagination-previous href="#"></a>
    </li>
    <li sc-pagination-item>
      <a sc-pagination-link href="#">1</a>
    </li>
    <li sc-pagination-item>
      <span sc-pagination-ellipsis></span>
    </li>
    <li sc-pagination-item>
      <a sc-pagination-link href="#" [isActive]="true">5</a>
    </li>
    <li sc-pagination-item>
      <span sc-pagination-ellipsis></span>
    </li>
    <li sc-pagination-item>
      <a sc-pagination-link href="#">10</a>
    </li>
    <li sc-pagination-item>
      <a sc-pagination-next href="#"></a>
    </li>
  </ul>
</nav>
```

## With Buttons

```html
<nav sc-pagination>
  <ul sc-pagination-list>
    <li sc-pagination-item>
      <button sc-pagination-previous></button>
    </li>
    <li sc-pagination-item>
      <button sc-pagination-link [isActive]="true">1</button>
    </li>
    <li sc-pagination-item>
      <button sc-pagination-next></button>
    </li>
  </ul>
</nav>
```

## Smart Pagination (Automatic Page Generation)

The pagination component can automatically calculate and generate page numbers with ellipses. Components handle clicks internally and emit a single `pageChange` event:

```typescript
import { Component, signal } from '@angular/core';

@Component({
  template: `
    <nav sc-pagination #pagination="scPagination" [currentPage]="currentPage()" [pageSize]="10" [totalItems]="100" [siblingCount]="1" [showEdges]="true" (pageChange)="currentPage.set($event)">
      <ul sc-pagination-list>
        <li sc-pagination-item>
          <button sc-pagination-previous [disabled]="currentPage() === 1">
            <svg class="size-4"><!-- icon --></svg>
            <span>Previous</span>
          </button>
        </li>

        @for (page of pagination.pages(); track page.value) {
          <li sc-pagination-item>
            @if (page.type === 'ellipsis') {
              <span sc-pagination-ellipsis>
                <svg class="size-4"><!-- ellipsis icon --></svg>
                <span class="sr-only">More pages</span>
              </span>
            } @else {
              <button sc-pagination-link [page]="page.value" [isActive]="page.value === currentPage()">
                {{ page.value }}
              </button>
            }
          </li>
        }

        <li sc-pagination-item>
          <button sc-pagination-next [disabled]="currentPage() === pagination.totalPages()">
            <span>Next</span>
            <svg class="size-4"><!-- icon --></svg>
          </button>
        </li>
      </ul>
    </nav>
  `,
})
export class MyComponent {
  readonly currentPage = signal(1);
}
```

### Smart Pagination Features

- Automatically generates page numbers based on `currentPage`, `pageSize`, and `totalItems`
- Intelligently places ellipses when there are many pages
- Exposes `pagination.pages()` array for iteration
- Exposes `pagination.totalPages()` for total page count
- Each item in `pages()` has type `ScPaginationPageData`: `{ type: 'page' | 'ellipsis', value: number | string }`

### Configuration Options

- `currentPage` - Current active page number (1-based)
- `pageSize` - Number of items per page
- `totalItems` - Total number of items across all pages
- `siblingCount` - Number of pages to show on each side of current page (default: 1)
- `showEdges` - Whether to always show first and last pages (default: true)

## Disabled State

```html
<!-- Disabled previous (first page) -->
<button sc-pagination-previous [disabled]="true">
  <!-- content -->
</button>

<!-- Disabled next (last page) -->
<button sc-pagination-next disabled>
  <!-- content -->
</button>

<!-- Disabled link -->
<button sc-pagination-link [disabled]="true">1</button>
```

## Inputs & Outputs

### ScPagination

| Input          | Type      | Default | Description                                          |
| -------------- | --------- | ------- | ---------------------------------------------------- |
| `currentPage`  | `number`  | `1`     | Current active page (1-based)                        |
| `pageSize`     | `number`  | `10`    | Number of items per page                             |
| `totalItems`   | `number`  | `0`     | Total number of items across all pages               |
| `siblingCount` | `number`  | `1`     | Number of pages to show on each side of current page |
| `showEdges`    | `boolean` | `true`  | Whether to always show first and last pages          |
| `class`        | `string`  | `''`    | Additional CSS classes                               |

| Output       | Type     | Description                                     |
| ------------ | -------- | ----------------------------------------------- |
| `pageChange` | `number` | Emitted when user navigates to a different page |

### ScPaginationLink

| Input      | Type                                  | Default  | Description                      |
| ---------- | ------------------------------------- | -------- | -------------------------------- |
| `page`     | `number`                              | -        | Page number this link represents |
| `isActive` | `boolean`                             | `false`  | Whether page is active           |
| `size`     | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'icon'` | Button size                      |
| `disabled` | `boolean`                             | `false`  | Disabled state                   |
| `class`    | `string`                              | `''`     | Additional CSS classes           |

### ScPaginationPrevious

| Input      | Type      | Default | Description            |
| ---------- | --------- | ------- | ---------------------- |
| `disabled` | `boolean` | `false` | Disabled state         |
| `class`    | `string`  | `''`    | Additional CSS classes |

### ScPaginationNext

| Input      | Type      | Default | Description            |
| ---------- | --------- | ------- | ---------------------- |
| `disabled` | `boolean` | `false` | Disabled state         |
| `class`    | `string`  | `''`    | Additional CSS classes |

## Accessibility

- Uses `role="navigation"` with `aria-label="pagination"`
- Active page has `aria-current="page"`
- Previous/Next have `aria-label` for screen readers
- Disabled state uses `aria-disabled` attribute with automatic styling
- Ellipsis is `aria-hidden` with `.sr-only` text
- Focus ring for keyboard navigation
