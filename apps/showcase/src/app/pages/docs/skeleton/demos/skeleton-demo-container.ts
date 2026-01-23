import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScSkeletonDemo } from './skeleton-demo';

@Component({
  selector: 'app-skeleton-demo-container',
  imports: [DemoContainer, ScSkeletonDemo],
  template: `
    <app-demo-container title="Skeleton" [code]="code">
      <app-skeleton-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSkeletonDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSkeleton } from '@semantic-components/ui';

@Component({
  selector: 'app-skeleton-demo',
  imports: [ScSkeleton],
  template: \`
    <div class="space-y-8">
      <!-- Basic Skeleton -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Skeleton</h3>
        <div class="space-y-2">
          <div sc-skeleton class="h-4 w-[250px]"></div>
          <div sc-skeleton class="h-4 w-[200px]"></div>
        </div>
      </div>

      <!-- Card Skeleton -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Card Skeleton</h3>
        <div class="flex items-center space-x-4">
          <div sc-skeleton class="size-12 rounded-full"></div>
          <div class="space-y-2">
            <div sc-skeleton class="h-4 w-[250px]"></div>
            <div sc-skeleton class="h-4 w-[200px]"></div>
          </div>
        </div>
      </div>

      <!-- Article Skeleton -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Article Skeleton</h3>
        <div class="space-y-3">
          <div sc-skeleton class="h-[125px] w-[250px] rounded-xl"></div>
          <div class="space-y-2">
            <div sc-skeleton class="h-4 w-[250px]"></div>
            <div sc-skeleton class="h-4 w-[200px]"></div>
          </div>
        </div>
      </div>

      <!-- List Skeleton -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">List Skeleton</h3>
        <div class="space-y-3">
          @for (i of [1, 2, 3, 4]; track i) {
            <div class="flex items-center space-x-4">
              <div sc-skeleton class="size-10 rounded-full"></div>
              <div class="flex-1 space-y-2">
                <div sc-skeleton class="h-4 w-3/4"></div>
                <div sc-skeleton class="h-3 w-1/2"></div>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Table Skeleton -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Table Skeleton</h3>
        <div class="rounded-md border">
          <div class="border-b p-4">
            <div class="flex items-center space-x-4">
              <div sc-skeleton class="h-4 w-[100px]"></div>
              <div sc-skeleton class="h-4 w-[150px]"></div>
              <div sc-skeleton class="h-4 w-[100px]"></div>
              <div sc-skeleton class="h-4 w-[80px]"></div>
            </div>
          </div>
          @for (i of [1, 2, 3]; track i) {
            <div class="border-b p-4 last:border-0">
              <div class="flex items-center space-x-4">
                <div sc-skeleton class="h-4 w-[100px]"></div>
                <div sc-skeleton class="h-4 w-[150px]"></div>
                <div sc-skeleton class="h-4 w-[100px]"></div>
                <div sc-skeleton class="h-4 w-[80px]"></div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSkeletonDemo {}`;
}
