import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { RowsTextareaDemo } from './rows-textarea-demo';

@Component({
  selector: 'app-rows-textarea-demo-container',
  imports: [DemoContainer, RowsTextareaDemo],
  template: `
    <app-demo-container
      title="Custom Rows"
      demoUrl="/demos/textarea/rows-textarea-demo"
      [code]="code"
    >
      <app-rows-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowsTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-rows-textarea-demo',
  imports: [ScField, ScLabel, ScTextarea],
  template: \`
    <div class="grid w-full gap-4">
      <div sc-field>
        <label sc-label>Small (2 rows)</label>
        <textarea sc-textarea rows="2" placeholder="Small textarea"></textarea>
      </div>
      <div sc-field>
        <label sc-label>Large (6 rows)</label>
        <textarea sc-textarea rows="6" placeholder="Large textarea"></textarea>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowsTextareaDemo {}`;
}
