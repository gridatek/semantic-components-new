import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicDatePickerDemo } from './basic-date-picker-demo';

@Component({
  selector: 'app-basic-date-picker-demo-container',
  imports: [DemoContainer, BasicDatePickerDemo],
  template: `
    <app-demo-container
      title="Basic"
      demoUrl="/demos/date-picker/basic-date-picker-demo"
      [code]="code"
    >
      <app-basic-date-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicDatePickerDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScDatePicker } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-date-picker-demo',
  imports: [ScDatePicker],
  template: \`
    <sc-date-picker [(selected)]="selectedDate" />
    @if (selectedDate()) {
      <p class="text-sm text-muted-foreground mt-4">
        Selected: {{ selectedDate()?.toLocaleDateString() }}
      </p>
    }
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicDatePickerDemo {
  readonly selectedDate = signal<Date | undefined>(undefined);
}`;
}
