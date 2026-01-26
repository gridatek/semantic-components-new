# Pagination

Pagination with page navigation, next and previous links.

## Components

- `ScPagination` - Navigation container
- `ScPaginationContent` - List container (ul)
- `ScPaginationItem` - List item (li)
- `ScPaginationLink` - Page number link/button
- `ScPaginationPrevious` - Previous page link/button
- `ScPaginationNext` - Next page link/button
- `ScPaginationEllipsis` - Ellipsis indicator

## Usage

```html
<nav sc-pagination>
  <ul sc-pagination-content>
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
  <ul sc-pagination-content>
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
  <ul sc-pagination-content>
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

## Inputs

### ScPaginationLink

| Input      | Type                                  | Default  | Description            |
| ---------- | ------------------------------------- | -------- | ---------------------- |
| `isActive` | `boolean`                             | `false`  | Whether page is active |
| `size`     | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'icon'` | Button size            |
| `disabled` | `boolean`                             | `false`  | Disabled state         |
| `class`    | `string`                              | `''`     | Additional CSS classes |

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

## Features

- Works with both `<a>` links and `<button>` elements
- Active state with border styling
- Hover states on all interactive elements
- Built-in Previous/Next icons
- Ellipsis with screen reader text

## Accessibility

- Uses `role="navigation"` with `aria-label="pagination"`
- Active page has `aria-current="page"`
- Previous/Next have `aria-label` for screen readers
- Disabled state uses `aria-disabled` attribute with automatic styling
- Ellipsis is `aria-hidden` with `.sr-only` text
- Focus ring for keyboard navigation
