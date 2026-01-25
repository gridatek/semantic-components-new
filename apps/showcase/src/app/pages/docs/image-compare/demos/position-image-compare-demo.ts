import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-position-image-compare-demo',
  imports: [ScImageCompare],
  template: `
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/800/400?grayscale&random=5'"
      [afterImage]="'https://picsum.photos/800/400?random=5'"
      [(position)]="position"
      class="w-full max-w-2xl aspect-[2/1]"
    />
    <p class="text-sm text-muted-foreground mt-4">
      Current position: {{ position() }}%
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionImageCompareDemo {
  readonly position = signal(25);
}
