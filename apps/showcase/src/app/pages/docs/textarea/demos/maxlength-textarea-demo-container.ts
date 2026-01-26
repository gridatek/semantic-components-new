import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MaxlengthTextareaDemo } from './maxlength-textarea-demo';

@Component({
  selector: 'app-maxlength-textarea-demo-container',
  imports: [DemoContainer, MaxlengthTextareaDemo],
  template: `
    <app-demo-container title="With Character Limit" [code]="code">
      <app-maxlength-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaxlengthTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-maxlength-textarea-demo',
  imports: [ScTextarea, ScLabel],
  template: \`
    <div class="grid w-full gap-1.5">
      <label sc-label for="limited">Description (max 200 characters)</label>
      <textarea
        sc-textarea
        id="limited"
        maxlength="200"
        placeholder="Enter description..."
      ></textarea>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaxlengthTextareaDemo {}`;
}
