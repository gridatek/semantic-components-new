# Tabs Components

A set of layered sections of content, known as tab panels, displayed one at a time.

## Architecture

```
ScTabs (Root)
    ├── value: model<string> (two-way bindable)
    ├── defaultValue: input
    │
    ├── ScTabsList (tablist container)
    │     ├── ScTabsTrigger (tab button)
    │     ├── ScTabsTrigger
    │     └── ...
    │
    ├── ScTabsContent (tab panel)
    ├── ScTabsContent
    └── ...
```

## Components

| Component       | Selector                  | Description                        |
| --------------- | ------------------------- | ---------------------------------- |
| `ScTabs`        | `div[sc-tabs]`            | Root wrapper with active tab state |
| `ScTabsList`    | `div[sc-tabs-list]`       | Container for tab triggers         |
| `ScTabsTrigger` | `button[sc-tabs-trigger]` | Button to activate a tab panel     |
| `ScTabsContent` | `div[sc-tabs-content]`    | Content panel for each tab         |

## Inputs

### ScTabs

| Input          | Type     | Default | Description                             |
| -------------- | -------- | ------- | --------------------------------------- |
| `value`        | `string` | `''`    | Currently active tab (two-way bindable) |
| `defaultValue` | `string` | `''`    | Default active tab on init              |

### ScTabsTrigger

| Input      | Type      | Default      | Description                       |
| ---------- | --------- | ------------ | --------------------------------- |
| `value`    | `string`  | **required** | Unique value identifying this tab |
| `disabled` | `boolean` | `false`      | Whether the tab is disabled       |

### ScTabsContent

| Input   | Type     | Default      | Description                |
| ------- | -------- | ------------ | -------------------------- |
| `value` | `string` | **required** | Value matching the trigger |

## Usage

### Basic Tabs

```html
<div sc-tabs [value]="'tab1'">
  <div sc-tabs-list>
    <button sc-tabs-trigger value="tab1">Tab 1</button>
    <button sc-tabs-trigger value="tab2">Tab 2</button>
    <button sc-tabs-trigger value="tab3">Tab 3</button>
  </div>
  <div sc-tabs-content value="tab1">Content for Tab 1</div>
  <div sc-tabs-content value="tab2">Content for Tab 2</div>
  <div sc-tabs-content value="tab3">Content for Tab 3</div>
</div>
```

### With Two-Way Binding

```html
<div sc-tabs [(value)]="activeTab">
  <div sc-tabs-list>
    <button sc-tabs-trigger value="account">Account</button>
    <button sc-tabs-trigger value="password">Password</button>
  </div>
  <div sc-tabs-content value="account">Account settings...</div>
  <div sc-tabs-content value="password">Password settings...</div>
</div>
```

### With Disabled Tab

```html
<div sc-tabs-list>
  <button sc-tabs-trigger value="active">Active Tab</button>
  <button sc-tabs-trigger value="disabled" [disabled]="true">Disabled</button>
</div>
```

### Full Width Tabs

```html
<div sc-tabs-list class="grid w-full grid-cols-3">
  <button sc-tabs-trigger value="tab1">Tab 1</button>
  <button sc-tabs-trigger value="tab2">Tab 2</button>
  <button sc-tabs-trigger value="tab3">Tab 3</button>
</div>
```

## Keyboard Navigation

| Key          | Action                                     |
| ------------ | ------------------------------------------ |
| `ArrowLeft`  | Move focus to previous tab and activate it |
| `ArrowRight` | Move focus to next tab and activate it     |
| `Tab`        | Move focus to the active tab panel         |

## Accessibility

- Uses `role="tablist"` on the tabs container
- Uses `role="tab"` on triggers with `aria-selected`
- Uses `role="tabpanel"` on content with `aria-labelledby`
- Proper `id` and `aria-controls` linking
- `tabindex` management for keyboard navigation
- Hidden panels use `hidden` attribute

## Styling

The components use Tailwind CSS with shadcn/ui design tokens:

- List: `bg-muted rounded-lg p-1`
- Active trigger: `bg-background text-foreground shadow`
- Inactive trigger: `text-muted-foreground`
- Focus ring on keyboard navigation
