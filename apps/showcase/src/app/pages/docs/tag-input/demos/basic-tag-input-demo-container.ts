import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicTagInputDemo } from './basic-tag-input-demo';

@Component({
  selector: 'app-basic-tag-input-demo-container',
  imports: [DemoContainer, BasicTagInputDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-tag-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTagInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScTagInput,
  ScTagInputField,
  ScTagInputTag,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-tag-input-demo',
  imports: [ScTagInput, ScTagInputField, ScTagInputTag],
  template: \`
    <div class="max-w-md">
      <div sc-tag-input [(tags)]="tags">
        @for (tag of tags(); track tag) {
          <span sc-tag-input-tag [tag]="tag"></span>
        }
        <input sc-tag-input-field />
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicTagInputDemo {
  readonly tags = signal<string[]>(['Angular', 'TypeScript']);
}`;
}
