import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LabelTextareaDemo } from './label-textarea-demo';

@Component({
  selector: 'app-label-textarea-demo-container',
  imports: [DemoContainer, LabelTextareaDemo],
  template: `
    <app-demo-container title="With Label" [code]="code">
      <app-label-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-label-textarea-demo',
  imports: [ScTextarea, ScLabel],
  template: \`
    <div class="grid w-full gap-1.5">
      <label sc-label for="message">Your message</label>
      <textarea
        sc-textarea
        id="message"
        placeholder="Type your message here."
      ></textarea>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelTextareaDemo {}`;
}
