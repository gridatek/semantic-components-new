# Tree View

A hierarchical collapsible tree for displaying nested data.

## Usage

```html
<div sc-tree>
  <div sc-tree-item [hasChildren]="true" [expanded]="true">
    <div sc-tree-item-trigger>
      <svg sc-tree-item-icon><!-- folder icon --></svg>
      <span>Folder</span>
    </div>
    <div sc-tree-item-content>
      <div sc-tree-item>
        <div sc-tree-item-trigger>
          <svg sc-tree-item-icon><!-- file icon --></svg>
          <span>File.ts</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Components

### ScTree

Root container with tree role.

**Selector:** `div[sc-tree]`

**Inputs:**

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

### ScTreeItem

Individual tree item that can have children.

**Selector:** `div[sc-tree-item]`

**Inputs:**

| Input         | Type      | Default | Description               |
| ------------- | --------- | ------- | ------------------------- |
| `hasChildren` | `boolean` | `false` | Whether item has children |
| `class`       | `string`  | `''`    | Additional CSS classes    |

**Two-way Bindings:**

| Binding    | Type      | Description    |
| ---------- | --------- | -------------- |
| `expanded` | `boolean` | Expanded state |
| `selected` | `boolean` | Selected state |

**Properties:**

- `level`: Computed nesting level (0 for root items)

### ScTreeItemTrigger

Clickable trigger to expand/collapse the item.

**Selector:** `div[sc-tree-item-trigger]`

Automatically includes:

- Chevron icon that rotates when expanded
- Proper indentation based on nesting level
- Keyboard navigation support

### ScTreeItemContent

Container for nested child items.

**Selector:** `div[sc-tree-item-content]`

Hidden when parent item is collapsed.

### ScTreeItemIcon

Optional icon slot for tree items.

**Selector:** `[sc-tree-item-icon]`

## Examples

### File Explorer

```html
<div sc-tree>
  <div sc-tree-item [hasChildren]="true" [expanded]="true">
    <div sc-tree-item-trigger>
      <svg sc-tree-item-icon class="text-blue-500"><!-- folder --></svg>
      <span>src</span>
    </div>
    <div sc-tree-item-content>
      <div sc-tree-item>
        <div sc-tree-item-trigger>
          <svg sc-tree-item-icon class="text-green-500"><!-- file --></svg>
          <span>main.ts</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Navigation Tree

```html
<div sc-tree>
  <div sc-tree-item [hasChildren]="true" [expanded]="true">
    <div sc-tree-item-trigger>Getting Started</div>
    <div sc-tree-item-content>
      <div sc-tree-item>
        <div sc-tree-item-trigger>Introduction</div>
      </div>
      <div sc-tree-item>
        <div sc-tree-item-trigger>Installation</div>
      </div>
    </div>
  </div>
</div>
```

### Controlled Expansion

```html
<div sc-tree-item [hasChildren]="true" [(expanded)]="isExpanded">
  <div sc-tree-item-trigger>Click to toggle</div>
  <div sc-tree-item-content>
    <!-- children -->
  </div>
</div>
```

## Features

- **Nested Structure**: Unlimited nesting depth
- **Expand/Collapse**: Click or keyboard to toggle
- **Auto Indentation**: Based on nesting level
- **Animated Chevron**: Rotates on expand/collapse
- **Keyboard Support**: Enter, Space, Arrow keys
- **Custom Icons**: Use any icon with `sc-tree-item-icon`

## Keyboard Navigation

| Key          | Action                 |
| ------------ | ---------------------- |
| `Enter`      | Toggle expand/collapse |
| `Space`      | Toggle expand/collapse |
| `ArrowRight` | Expand if collapsed    |
| `ArrowLeft`  | Collapse if expanded   |

## Accessibility

- `role="tree"` on root container
- `role="treeitem"` on each item
- `role="group"` on nested content
- `aria-expanded` reflects expand state
- `aria-selected` reflects selection state
- Keyboard navigable with focus styles
