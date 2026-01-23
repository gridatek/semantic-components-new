import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicAspectRatioDemo } from './basic-aspect-ratio-demo';

@Component({
  selector: 'app-basic-aspect-ratio-demo-container',
  imports: [DemoContainer, BasicAspectRatioDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-aspect-ratio-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicAspectRatioDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAspectRatio } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-aspect-ratio-demo',
  imports: [ScAspectRatio],
  template: \`
    <div class="w-[450px] overflow-hidden rounded-md">
      <div sc-aspect-ratio [ratio]="16 / 9">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          class="size-full object-cover"
        />
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicAspectRatioDemo {}`;
}
