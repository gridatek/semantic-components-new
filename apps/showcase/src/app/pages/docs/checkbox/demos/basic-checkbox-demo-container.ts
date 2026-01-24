import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicCheckboxDemo } from './basic-checkbox-demo';

@Component({
  selector: 'app-basic-checkbox-demo-container',
  imports: [DemoContainer, BasicCheckboxDemo],
  template: `
    <app-demo-container
      title="Basic Checkbox"
      demoUrl="/demos/checkbox/basic-checkbox-demo"
      [code]="code"
    >
      <app-basic-checkbox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCheckboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-checkbox-demo',
  imports: [ScCheckbox],
  template: \`
    <div class="flex items-center space-x-2">
      <sc-checkbox [(checked)]="terms" id="terms" />
      <label
        for="terms"
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
    <p class="text-sm text-muted-foreground mt-2">Checked: {{ terms() }}</p>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCheckboxDemo {
  readonly terms = signal(false);
}`;
}
