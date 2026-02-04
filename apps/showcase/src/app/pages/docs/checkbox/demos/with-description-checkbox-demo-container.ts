import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { WithDescriptionCheckboxDemo } from './with-description-checkbox-demo';

@Component({
  selector: 'app-with-description-checkbox-demo-container',
  imports: [DemoContainer, WithDescriptionCheckboxDemo],
  template: `
    <app-demo-container
      title="With Description"
      demoUrl="/demos/checkbox/with-description-checkbox-demo"
      [code]="code"
    >
      <app-with-description-checkbox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithDescriptionCheckboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScCheckboxField,
  ScCheckbox,
  ScLabel,
} from '@semantic-components/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-with-description-checkbox-demo',
  imports: [
    ScCheckboxField,
    ScCheckbox,
    ScLabel,
    FormsModule,
  ],
  template: \`
    <div sc-checkbox-field>
      <input
        type="checkbox"
        sc-checkbox
        [(ngModel)]="marketing"
        id="marketing"
      />
      <div class="grid gap-1.5 leading-none">
        <label sc-label for="marketing">
          Marketing emails
        </label>
        <p class="text-sm text-muted-foreground">
          Receive emails about new products, features, and more.
        </p>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithDescriptionCheckboxDemo {
  readonly marketing = signal(true);
}`;
}
