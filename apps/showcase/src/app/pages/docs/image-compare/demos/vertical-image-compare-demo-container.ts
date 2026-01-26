import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { VerticalImageCompareDemo } from './vertical-image-compare-demo';

@Component({
  selector: 'app-vertical-image-compare-demo-container',
  imports: [DemoContainer, VerticalImageCompareDemo],
  template: `
    <app-demo-container
      title="Vertical Orientation"
      demoUrl="/demos/image-compare/vertical-image-compare-demo"
      [code]="code"
    >
      <app-vertical-image-compare-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalImageCompareDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-vertical-image-compare-demo',
  imports: [ScImageCompare],
  template: \`
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/400/600?grayscale&random=4'"
      [afterImage]="'https://picsum.photos/400/600?random=4'"
      [orientation]="'vertical'"
      [beforeLabel]="'Top'"
      [afterLabel]="'Bottom'"
      class="w-full max-w-sm aspect-[2/3]"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalImageCompareDemo {}`;
}
