import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LabelsImageCompareDemo } from './labels-image-compare-demo';

@Component({
  selector: 'app-labels-image-compare-demo-container',
  imports: [DemoContainer, LabelsImageCompareDemo],
  template: `
    <app-demo-container
      title="Custom Labels"
      demoUrl="/demos/image-compare/labels-image-compare-demo"
      [code]="code"
    >
      <app-labels-image-compare-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsImageCompareDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-labels-image-compare-demo',
  imports: [ScImageCompare],
  template: \`
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/800/400?blur=5&random=2'"
      [afterImage]="'https://picsum.photos/800/400?random=2'"
      [beforeLabel]="'Blurred'"
      [afterLabel]="'Sharp'"
      class="w-full max-w-2xl aspect-[2/1]"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsImageCompareDemo {}`;
}
