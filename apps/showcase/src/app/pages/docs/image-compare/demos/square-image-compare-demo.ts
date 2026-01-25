import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-square-image-compare-demo',
  imports: [ScImageCompare],
  template: `
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/500/500?grayscale&random=7'"
      [afterImage]="'https://picsum.photos/500/500?random=7'"
      class="w-full max-w-md aspect-square"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareImageCompareDemo {}
