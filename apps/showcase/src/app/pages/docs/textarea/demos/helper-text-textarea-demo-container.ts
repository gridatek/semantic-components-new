import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { HelperTextTextareaDemo } from './helper-text-textarea-demo';

@Component({
  selector: 'app-helper-text-textarea-demo-container',
  imports: [DemoContainer, HelperTextTextareaDemo],
  template: `
    <app-demo-container title="With Helper Text" [code]="code">
      <app-helper-text-textarea-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelperTextTextareaDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-helper-text-textarea-demo',
  imports: [ScTextarea, ScLabel],
  template: \`
    <div class="grid w-full gap-1.5">
      <label sc-label for="bio">Bio</label>
      <textarea
        sc-textarea
        id="bio"
        placeholder="Tell us about yourself"
      ></textarea>
      <p class="text-sm text-muted-foreground">
        Your bio will be visible on your public profile.
      </p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelperTextTextareaDemo {}`;
}
