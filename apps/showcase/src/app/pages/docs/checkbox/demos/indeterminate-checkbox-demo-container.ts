import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { IndeterminateCheckboxDemo } from './indeterminate-checkbox-demo';

@Component({
  selector: 'app-indeterminate-checkbox-demo-container',
  imports: [DemoContainer, IndeterminateCheckboxDemo],
  template: `
    <app-demo-container
      title="Indeterminate State"
      demoUrl="/demos/checkbox/indeterminate-checkbox-demo"
      [code]="code"
    >
      <app-indeterminate-checkbox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndeterminateCheckboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-indeterminate-checkbox-demo',
  imports: [ScCheckbox],
  template: \`
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-2">
        <sc-checkbox
          [checked]="allSelected()"
          [indeterminate]="someSelected()"
          (checkedChange)="toggleAll($event)"
          id="select-all"
        />
        <label for="select-all" class="text-sm font-medium leading-none">
          Select all
        </label>
      </div>
      <div class="ml-6 flex flex-col gap-2">
        <div class="flex items-center space-x-2">
          <sc-checkbox [(checked)]="item1" id="item1" />
          <label for="item1" class="text-sm leading-none">Item 1</label>
        </div>
        <div class="flex items-center space-x-2">
          <sc-checkbox [(checked)]="item2" id="item2" />
          <label for="item2" class="text-sm leading-none">Item 2</label>
        </div>
        <div class="flex items-center space-x-2">
          <sc-checkbox [(checked)]="item3" id="item3" />
          <label for="item3" class="text-sm leading-none">Item 3</label>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndeterminateCheckboxDemo {
  readonly item1 = signal(true);
  readonly item2 = signal(false);
  readonly item3 = signal(false);

  readonly allSelected = () => this.item1() && this.item2() && this.item3();
  readonly someSelected = () => {
    const selected = [this.item1(), this.item2(), this.item3()].filter(
      Boolean,
    ).length;
    return selected > 0 && selected < 3;
  };

  toggleAll(checked: boolean): void {
    this.item1.set(checked);
    this.item2.set(checked);
    this.item3.set(checked);
  }
}`;
}
