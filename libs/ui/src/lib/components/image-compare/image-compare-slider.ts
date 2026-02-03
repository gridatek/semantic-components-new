import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { ScImageCompare } from './image-compare';

@Component({
  selector: 'sc-image-compare-slider',
  imports: [ScImageCompare],
  template: `
    <sc-image-compare
      [beforeImage]="beforeImage()"
      [afterImage]="afterImage()"
      [beforeLabel]="beforeLabel()"
      [afterLabel]="afterLabel()"
      [orientation]="orientation()"
      [showLabels]="showLabels()"
      [(position)]="position"
      [class]="class()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScImageCompareSlider {
  readonly beforeImage = input.required<string>();
  readonly afterImage = input.required<string>();
  readonly beforeLabel = input<string>('Before');
  readonly afterLabel = input<string>('After');
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');
  readonly showLabels = input<boolean>(true);
  readonly class = input<string>('');

  readonly position = model<number>(50);
}
