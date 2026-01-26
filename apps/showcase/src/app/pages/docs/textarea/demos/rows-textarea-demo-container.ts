import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { RowsTextareaDemo } from './rows-textarea-demo';

@Component({
  selector: 'app-rows-textarea-demo-container',
  imports: [DemoContainer, RowsTextareaDemo],
  template: `
    <app-demo-container title="Custom Rows" [code]="code">
      <app-rows-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowsTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-rows-textarea-demo',
  imports: [ScTextarea, ScLabel],
  template: \`
    <div class="grid w-full gap-4">
      <div class="grid gap-1.5">
        <label sc-label for="small">Small (2 rows)</label>
        <textarea
          sc-textarea
          id="small"
          rows="2"
          placeholder="Small textarea"
        ></textarea>
      </div>
      <div class="grid gap-1.5">
        <label sc-label for="large">Large (6 rows)</label>
        <textarea
          sc-textarea
          id="large"
          rows="6"
          placeholder="Large textarea"
        ></textarea>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowsTextareaDemo {}`;
}
