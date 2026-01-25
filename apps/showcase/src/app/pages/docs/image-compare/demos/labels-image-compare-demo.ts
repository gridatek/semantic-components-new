import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-labels-image-compare-demo',
  imports: [ScImageCompare],
  template: `
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/800/400?blur=5&random=2'"
      [afterImage]="'https://picsum.photos/800/400?random=2'"
      [beforeLabel]="'Blurred'"
      [afterLabel]="'Sharp'"
      class="w-full max-w-2xl aspect-[2/1]"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsImageCompareDemo {}
