import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicImageCompareDemo } from './basic-image-compare-demo';

@Component({
  selector: 'app-basic-image-compare-demo-container',
  imports: [DemoContainer, BasicImageCompareDemo],
  template: `
    <app-demo-container
      title="Basic"
      demoUrl="/demos/image-compare/basic-image-compare-demo"
      [code]="code"
    >
      <app-basic-image-compare-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicImageCompareDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-image-compare-demo',
  imports: [ScImageCompare],
  template: \`
    <sc-image-compare
      [beforeImage]="'https://picsum.photos/800/400?grayscale&random=1'"
      [afterImage]="'https://picsum.photos/800/400?random=1'"
      class="w-full max-w-2xl aspect-[2/1]"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicImageCompareDemo {}`;
}
