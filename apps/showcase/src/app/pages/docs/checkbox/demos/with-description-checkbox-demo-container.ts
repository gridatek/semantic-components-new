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
  ScInvisibleCheckbox,
} from '@semantic-components/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-with-description-checkbox-demo',
  imports: [
    ScCheckboxField,
    ScInvisibleCheckbox,
    FormsModule,
  ],
  template: \`
    <div class="items-top flex space-x-2">
      <div sc-checkbox-field>
        <input
          type="checkbox"
          sc-invisible-checkbox
          [(ngModel)]="marketing"
          id="marketing"
        />
      </div>
      <div class="grid gap-1.5 leading-none">
        <label
          for="marketing"
          class="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
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
