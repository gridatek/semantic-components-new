import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSkeleton } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-skeleton-demo',
  imports: [ScSkeleton],
  template: `
    <div class="space-y-2">
      <div sc-skeleton class="h-4 w-[250px]"></div>
      <div sc-skeleton class="h-4 w-[200px]"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicSkeletonDemo {}
