import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SquareImageCompareDemo } from './square-image-compare-demo';

@Component({
  selector: 'app-square-image-compare-demo-container',
  imports: [DemoContainer, SquareImageCompareDemo],
  template: `
    <app-demo-container
      title="Square Images"
      demoUrl="/demos/image-compare/square-image-compare-demo"
      [code]="code"
    >
      <app-square-image-compare-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareImageCompareDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-square-image-compare-demo',
  imports: [ScImageCompare],
  template: \`
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/500/500?grayscale&random=7'"
      [afterImage]="'https://picsum.photos/500/500?random=7'"
      class="w-full max-w-md aspect-square"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareImageCompareDemo {}`;
}
