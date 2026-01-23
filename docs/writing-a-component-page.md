# Writing a Component Documentation Page

This guide explains how to add a new component documentation page to the showcase app.

## File Structure

For a component named `{component}`, create the following files:

```
apps/showcase/src/app/pages/docs/{component}/
  {component}-page.ts                         # Main documentation page
  demos/
    basic-{component}-demo.ts                  # Demo component
    basic-{component}-demo-container.ts        # Demo container (wraps demo with code viewer)
```

You can add as many demos as needed. Each demo requires both a demo file and a container file.

## Step 1: Create the Demo Component

The demo component is the actual usage example of your component.

**File:** `demos/basic-{component}-demo.ts`

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScMyComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-{component}-demo',
  imports: [ScMyComponent],
  template: `
    <!-- Your demo template here -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Basic{Component}Demo {}
```

Key points:

- Use a **named export** (not default) — the demos router references the class by name.
- Keep the demo focused on showcasing specific component behavior.

## Step 2: Create the Demo Container

The container wraps the demo with a title and a code snippet viewer.

**File:** `demos/basic-{component}-demo-container.ts`

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { Basic{Component}Demo } from './basic-{component}-demo';

@Component({
  selector: 'app-basic-{component}-demo-container',
  imports: [DemoContainer, Basic{Component}Demo],
  template: `
    <app-demo-container title="Basic {Component}" [code]="code">
      <app-basic-{component}-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Basic{Component}DemoContainer {
  readonly code = `// Paste the full demo component source code here as a string`;
}
```

Key points:

- Use a **default export** — the page imports containers with default imports.
- The `code` property holds the full source of the demo as a string for the code viewer.

## Step 3: Create the Page Component

The page component is the main documentation entry point.

**File:** `{component}-page.ts`

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeViewer } from '@semantic-components/ui';
import Basic{Component}DemoContainer from './demos/basic-{component}-demo-container';

@Component({
  selector: 'app-{component}-page',
  imports: [ScCodeViewer, Basic{Component}DemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">{Component}</h1>
        <p class="text-muted-foreground">A brief description of the component.</p>
      </div>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold tracking-tight">Usage</h2>
        <sc-code-viewer [code]="usageCode" language="angular-ts" />
      </section>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-{component}-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class {Component}Page {
  readonly usageCode = `// Usage code snippet here`;
}
```

Key points:

- Use a **default export** — the components router uses `import(...)` without `.then()`.

## Step 4: Register the Components Route

Add the page to the components router so it appears in the docs sidebar.

**File:** `apps/showcase/src/app/routes/components.routes.ts`

```typescript
{
  path: '{component}',
  loadComponent: () => import('../pages/docs/{component}/{component}-page'),
},
```

## Step 5: Add to the Components Data

Register the component in the sidebar navigation list.

**File:** `apps/showcase/src/app/data/components.ts`

Add an entry to the `COMPONENTS` array:

```typescript
{ name: '{Component}', path: '{component}', description: 'A brief description.' },
```

## Step 6: Register Demos in the Demos Router (Required for Playwright)

Each demo **must** be added to the demos router so it can be rendered in isolation at a standalone URL. This is required for Playwright e2e testing — tests navigate directly to individual demo routes.

**File:** `apps/showcase/src/app/routes/demos.routes.ts`

```typescript
export const demosRoutes: Route[] = [
  // ... existing entries
  {
    path: 'demos/{component}',
    children: [
      {
        path: 'basic-{component}-demo',
        loadComponent: () =>
          import('../pages/docs/{component}/demos/basic-{component}-demo').then(
            (m) => m.Basic{Component}Demo,
          ),
      },
    ],
  },
];
```

This registers each demo at `/demos/{component}/{demo-name}`, allowing Playwright tests to navigate to a single demo without the surrounding docs layout.

### Why this matters

- Playwright tests target these isolated URLs to test component behavior without interference from the page layout, sidebar, or other demos on the page.
- If a demo is not registered here, it cannot be tested in isolation.
- The `.then((m) => m.Basic{Component}Demo)` part requires the demo to use a **named export**.

## Summary Checklist

1. Create demo component(s) with **named exports**
2. Create demo container(s) with **default exports**
3. Create the page component with **default export**
4. Add route to `components.routes.ts`
5. Add entry to `data/components.ts`
6. Add all demos to `demos.routes.ts` for Playwright testing
