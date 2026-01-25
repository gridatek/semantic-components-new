import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-image-compare-demo',
  imports: [ScImageCompare],
  template: `
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/800/400?grayscale&random=1'"
      [afterImage]="'https://picsum.photos/800/400?random=1'"
      class="w-full max-w-2xl aspect-[2/1]"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicImageCompareDemo {}
