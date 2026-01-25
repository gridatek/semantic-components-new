import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NoLabelsImageCompareDemo } from './no-labels-image-compare-demo';

@Component({
  selector: 'app-no-labels-image-compare-demo-container',
  imports: [DemoContainer, NoLabelsImageCompareDemo],
  template: `
    <app-demo-container title="Without Labels" [code]="code">
      <app-no-labels-image-compare-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoLabelsImageCompareDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-no-labels-image-compare-demo',
  imports: [ScImageCompare],
  template: \`
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/800/400?grayscale&random=3'"
      [afterImage]="'https://picsum.photos/800/400?random=3'"
      [showLabels]="false"
      class="w-full max-w-2xl aspect-[2/1]"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoLabelsImageCompareDemo {}`;
}
