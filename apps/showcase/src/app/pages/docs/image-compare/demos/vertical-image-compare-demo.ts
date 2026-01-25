import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-vertical-image-compare-demo',
  imports: [ScImageCompare],
  template: `
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/400/600?grayscale&random=4'"
      [afterImage]="'https://picsum.photos/400/600?random=4'"
      [orientation]="'vertical'"
      [beforeLabel]="'Top'"
      [afterLabel]="'Bottom'"
      class="w-full max-w-sm aspect-[2/3]"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalImageCompareDemo {}
