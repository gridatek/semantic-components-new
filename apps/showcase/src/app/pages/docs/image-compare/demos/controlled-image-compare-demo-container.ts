import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ControlledImageCompareDemo } from './controlled-image-compare-demo';

@Component({
  selector: 'app-controlled-image-compare-demo-container',
  imports: [DemoContainer, ControlledImageCompareDemo],
  template: `
    <app-demo-container title="Controlled Position" [code]="code">
      <app-controlled-image-compare-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlledImageCompareDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-controlled-image-compare-demo',
  imports: [ScImageCompare],
  template: \`
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/800/400?grayscale&random=6'"
      [afterImage]="'https://picsum.photos/800/400?random=6'"
      [(position)]="position"
      class="w-full max-w-2xl aspect-[2/1]"
    />
    <div class="flex items-center gap-4 max-w-2xl mt-4">
      <input
        type="range"
        min="0"
        max="100"
        [value]="position()"
        (input)="position.set(+$any($event.target).value)"
        class="flex-1"
      />
      <span class="text-sm w-12 text-right"> {{ position() }}% </span>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlledImageCompareDemo {
  readonly position = signal(50);
}`;
}
