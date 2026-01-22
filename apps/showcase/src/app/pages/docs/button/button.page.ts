import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-button-page',
  imports: [],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Button</h1>
        <p class="text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 id="installation" class="text-xl font-semibold">Installation</h2>
          <p class="text-sm text-muted-foreground">
            Install the button component from the package.
          </p>
        </div>
        <div class="rounded-md border p-4">
          <code>npm install &#64;semantic-components/ui</code>
        </div>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 id="usage" class="text-xl font-semibold">Usage</h2>
          <p class="text-sm text-muted-foreground">
            Import and use the button component in your templates.
          </p>
        </div>
        <div class="rounded-md border p-4">
          <code>&lt;button sc-button&gt;Click me&lt;/button&gt;</code>
        </div>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 id="variants" class="text-xl font-semibold">Variants</h2>
          <p class="text-sm text-muted-foreground">
            The button component supports multiple variants.
          </p>
        </div>

        <div class="space-y-4">
          <h3 id="default-variant" class="text-lg font-medium">Default</h3>
          <p class="text-sm text-muted-foreground">The default button style.</p>
          <div class="rounded-md border p-4">
            <button
              class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Default
            </button>
          </div>
        </div>

        <div class="space-y-4">
          <h3 id="secondary-variant" class="text-lg font-medium">Secondary</h3>
          <p class="text-sm text-muted-foreground">
            A secondary button style for less prominent actions.
          </p>
          <div class="rounded-md border p-4">
            <button
              class="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
            >
              Secondary
            </button>
          </div>
        </div>

        <div class="space-y-4">
          <h3 id="outline-variant" class="text-lg font-medium">Outline</h3>
          <p class="text-sm text-muted-foreground">An outlined button style.</p>
          <div class="rounded-md border p-4">
            <button
              class="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Outline
            </button>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 id="sizes" class="text-xl font-semibold">Sizes</h2>
          <p class="text-sm text-muted-foreground">
            Buttons come in different sizes to fit your needs.
          </p>
        </div>
        <div class="flex items-center gap-4 rounded-md border p-4">
          <button
            class="inline-flex items-center justify-center rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground hover:bg-primary/90"
          >
            Small
          </button>
          <button
            class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Medium
          </button>
          <button
            class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90"
          >
            Large
          </button>
        </div>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h2 id="accessibility" class="text-xl font-semibold">
            Accessibility
          </h2>
          <p class="text-sm text-muted-foreground">
            Buttons are accessible by default and follow WAI-ARIA guidelines.
          </p>
        </div>
        <ul class="list-disc pl-6 text-sm text-muted-foreground space-y-2">
          <li>Uses native button element for proper semantics</li>
          <li>Supports keyboard navigation</li>
          <li>Includes focus states for visibility</li>
          <li>Works with screen readers</li>
        </ul>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonPage {}
