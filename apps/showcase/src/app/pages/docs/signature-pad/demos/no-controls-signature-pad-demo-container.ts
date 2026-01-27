import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NoControlsSignaturePadDemo } from './no-controls-signature-pad-demo';

@Component({
  selector: 'app-no-controls-signature-pad-demo-container',
  imports: [DemoContainer, NoControlsSignaturePadDemo],
  template: `
    <app-demo-container title="Without Controls" [code]="code">
      <app-no-controls-signature-pad-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoControlsSignaturePadDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-no-controls-signature-pad-demo',
  imports: [ScSignaturePad],
  template: \`
    <div class="space-y-3">
      <sc-signature-pad
        #pad
        [width]="400"
        [height]="150"
        [showControls]="false"
      />
      <div class="flex gap-2">
        <button
          (click)="pad.undo()"
          class="px-3 py-1.5 text-sm border rounded-md hover:bg-accent"
        >
          Undo
        </button>
        <button
          (click)="pad.clear()"
          class="px-3 py-1.5 text-sm border rounded-md hover:bg-accent"
        >
          Clear
        </button>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoControlsSignaturePadDemo {}`;
}
