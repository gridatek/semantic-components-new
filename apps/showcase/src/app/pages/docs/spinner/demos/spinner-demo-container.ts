import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSpinnerDemo } from './spinner-demo';

@Component({
  selector: 'app-spinner-demo-container',
  imports: [DemoContainer, ScSpinnerDemo],
  template: `
    <app-demo-container title="Spinner" [code]="code">
      <app-spinner-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSpinnerDemoContainer {
  readonly code = `import { Component } from '@angular/core';
import {
  ScSpinner,
  ScSpinnerDots,
  ScSpinnerBars,
  ScSpinnerRing,
} from '@semantic-components/ui';

@Component({
  selector: 'app-spinner-demo',
  imports: [ScSpinner, ScSpinnerDots, ScSpinnerBars, ScSpinnerRing],
  template: \`
    <div class="space-y-8">
      <!-- Default Spinner -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Default Spinner</h3>
        <div class="flex items-center gap-6">
          <span sc-spinner size="xs"></span>
          <span sc-spinner size="sm"></span>
          <span sc-spinner></span>
          <span sc-spinner size="lg"></span>
          <span sc-spinner size="xl"></span>
        </div>
      </section>

      <!-- Spinner with Colors -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Colors</h3>
        <div class="flex items-center gap-6">
          <span sc-spinner class="text-primary"></span>
          <span sc-spinner class="text-blue-500"></span>
          <span sc-spinner class="text-green-500"></span>
          <span sc-spinner class="text-yellow-500"></span>
          <span sc-spinner class="text-red-500"></span>
          <span sc-spinner class="text-purple-500"></span>
        </div>
      </section>

      <!-- Dots Spinner -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Dots Spinner</h3>
        <div class="flex items-center gap-6">
          <span sc-spinner-dots size="xs"></span>
          <span sc-spinner-dots size="sm"></span>
          <span sc-spinner-dots></span>
          <span sc-spinner-dots size="lg"></span>
          <span sc-spinner-dots size="xl"></span>
        </div>
      </section>

      <!-- Bars Spinner -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Bars Spinner</h3>
        <div class="flex items-center gap-6">
          <span sc-spinner-bars size="xs"></span>
          <span sc-spinner-bars size="sm"></span>
          <span sc-spinner-bars></span>
          <span sc-spinner-bars size="lg"></span>
          <span sc-spinner-bars size="xl"></span>
        </div>
      </section>

      <!-- Ring Spinner -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Ring Spinner</h3>
        <div class="flex items-center gap-6">
          <span sc-spinner-ring size="xs"></span>
          <span sc-spinner-ring size="sm"></span>
          <span sc-spinner-ring></span>
          <span sc-spinner-ring size="lg"></span>
          <span sc-spinner-ring size="xl"></span>
        </div>
      </section>

      <!-- All Variants Comparison -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">All Variants</h3>
        <div class="grid grid-cols-4 gap-4 text-center">
          <div class="space-y-2">
            <span sc-spinner size="lg"></span>
            <p class="text-sm text-muted-foreground">Default</p>
          </div>
          <div class="space-y-2">
            <span sc-spinner-dots size="lg"></span>
            <p class="text-sm text-muted-foreground">Dots</p>
          </div>
          <div class="space-y-2">
            <span sc-spinner-bars size="lg"></span>
            <p class="text-sm text-muted-foreground">Bars</p>
          </div>
          <div class="space-y-2">
            <span sc-spinner-ring size="lg"></span>
            <p class="text-sm text-muted-foreground">Ring</p>
          </div>
        </div>
      </section>

      <!-- In Button Context -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">In Button Context</h3>
        <div class="flex items-center gap-4">
          <button
            class="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            disabled
          >
            <span sc-spinner size="sm" class="text-primary-foreground"></span>
            Loading...
          </button>
          <button
            class="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium"
            disabled
          >
            <span sc-spinner-ring size="sm"></span>
            Processing
          </button>
          <button
            class="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
            disabled
          >
            <span sc-spinner-dots size="sm"></span>
            Saving
          </button>
        </div>
      </section>

      <!-- Full Page Loading -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Loading Overlay Example</h3>
        <div
          class="relative h-32 rounded-lg border bg-muted/50 flex items-center justify-center"
        >
          <div class="text-center">
            <span sc-spinner size="xl" class="text-primary"></span>
            <p class="mt-2 text-sm text-muted-foreground">Loading content...</p>
          </div>
        </div>
      </section>
    </div>
  \`,
})
export class ScSpinnerDemo {}`;
}
