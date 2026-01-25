import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FileInputDemo } from './file-input-demo';

@Component({
  selector: 'app-file-input-demo-container',
  imports: [DemoContainer, FileInputDemo],
  template: `
    <app-demo-container title="File" [code]="code">
      <app-file-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-file-input-demo',
  imports: [ScInput, ScLabel],
  template: \`
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label sc-label for="file">Upload file</label>
      <input sc-input type="file" id="file" />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileInputDemo {}`;
}
