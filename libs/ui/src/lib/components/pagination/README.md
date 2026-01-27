# Pagination

Pagination with page navigation, next and previous links. Supports both manual and smart automatic page generation.

## Components

- `ScPagination` - Navigation container with optional smart pagination logic
- `ScPaginationList` - List container (ul)
- `ScPaginationItem` - List item (li)
- `ScPaginationLink` - Page number link/button
- `ScPaginationPrevious` - Previous page link/button
- `ScPaginationNext` - Next page link/button
- `ScPaginationFirst` - First page link/button
- `ScPaginationLast` - Last page link/button
- `ScPaginationEllipsis` - Ellipsis indicator
- `ScPaginationPageSize` - Page size selector (select dropdown)

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

## First and Last Page Navigation

Use `ScPaginationFirst` and `ScPaginationLast` for quick navigation to the first and last pages:

```html
<nav sc-pagination #pagination="scPagination" [currentPage]="currentPage()" [pageSize]="10" [totalItems]="100" (pageChange)="currentPage.set($event)">
  <ul sc-pagination-list>
    <li sc-pagination-item>
      <button sc-pagination-first [disabled]="currentPage() === 1">First</button>
    </li>
    <li sc-pagination-item>
      <button sc-pagination-previous [disabled]="currentPage() === 1">Previous</button>
    </li>

    <!-- Page numbers here -->

    <li sc-pagination-item>
      <button sc-pagination-next [disabled]="currentPage() === pagination.totalPages()">Next</button>
    </li>
    <li sc-pagination-item>
      <button sc-pagination-last [disabled]="currentPage() === pagination.totalPages()">Last</button>
    </li>
  </ul>
</nav>
```

## Page Size Selector

Use `ScPaginationPageSize` to allow users to change the number of items displayed per page:

```typescript
import { Component, signal } from '@angular/core';

@Component({
  template: `
    <nav sc-pagination #pagination="scPagination" [currentPage]="currentPage()" [pageSize]="pageSize()" [totalItems]="totalItems()" [pageSizeOptions]="[10, 25, 50, 100]" (pageChange)="currentPage.set($event)" (pageSizeChange)="pageSize.set($event)">
      <div class="flex items-center gap-2">
        <span class="text-sm text-muted-foreground">Items per page:</span>
        <sc-pagination-page-size />
      </div>

      <ul sc-pagination-list>
        <!-- Pagination items here -->
      </ul>
    </nav>
  `,
})
export class MyComponent {
  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly totalItems = signal(250);
}
```

Key points:

- `ScPaginationPageSize` renders only the select element
- Wrap it with a label or other elements as needed in your template
- Must be a child of `<nav sc-pagination>` to access pagination context
- Configure available options via `[pageSizeOptions]` on the parent `ScPagination`
- Listen to `(pageSizeChange)` to update your page size signal
- The component automatically resets to page 1 when page size changes

## Inputs & Outputs

### ScPagination

| Input             | Type       | Default             | Description                                          |
| ----------------- | ---------- | ------------------- | ---------------------------------------------------- |
| `currentPage`     | `number`   | `1`                 | Current active page (1-based)                        |
| `pageSize`        | `number`   | `10`                | Number of items per page                             |
| `totalItems`      | `number`   | `0`                 | Total number of items across all pages               |
| `siblingCount`    | `number`   | `1`                 | Number of pages to show on each side of current page |
| `showEdges`       | `boolean`  | `true`              | Whether to always show first and last pages          |
| `pageSizeOptions` | `number[]` | `[10, 25, 50, 100]` | Available page size options for selector             |
| `class`           | `string`   | `''`                | Additional CSS classes                               |

| Output           | Type     | Description                                     |
| ---------------- | -------- | ----------------------------------------------- |
| `pageChange`     | `number` | Emitted when user navigates to a different page |
| `pageSizeChange` | `number` | Emitted when user changes the page size         |

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

### ScPaginationFirst

| Input      | Type      | Default | Description            |
| ---------- | --------- | ------- | ---------------------- |
| `disabled` | `boolean` | `false` | Disabled state         |
| `class`    | `string`  | `''`    | Additional CSS classes |

### ScPaginationLast

| Input      | Type      | Default | Description            |
| ---------- | --------- | ------- | ---------------------- |
| `disabled` | `boolean` | `false` | Disabled state         |
| `class`    | `string`  | `''`    | Additional CSS classes |

### ScPaginationPageSize

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

**Note**: This component renders only the select element. The page size options are configured via the `pageSizeOptions` input on the parent `ScPagination` component.

## Accessibility

- Uses `role="navigation"` with `aria-label="pagination"`
- Active page has `aria-current="page"`
- Previous/Next/First/Last have `aria-label` for screen readers
- Disabled state uses `aria-disabled` attribute with automatic styling
- Ellipsis is `aria-hidden` with `.sr-only` text
- Focus ring for keyboard navigation
