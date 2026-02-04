import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScCheckboxDirective,
  ScInvisibleCheckbox,
  ScVisualCheckbox,
} from '@semantic-components/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-indeterminate-checkbox-demo',
  imports: [
    ScCheckboxDirective,
    ScInvisibleCheckbox,
    ScVisualCheckbox,
    FormsModule,
  ],
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-2">
        <div sc-checkbox>
          <input
            type="checkbox"
            sc-invisible-checkbox
            [checked]="allSelected()"
            [indeterminate]="someSelected()"
            (change)="toggleAll($event)"
            id="select-all"
          />
          <span sc-visual-checkbox></span>
        </div>
        <label for="select-all" class="text-sm font-medium leading-none">
          Select all
        </label>
      </div>
      <div class="ml-6 flex flex-col gap-2">
        <div class="flex items-center space-x-2">
          <div sc-checkbox>
            <input
              type="checkbox"
              sc-invisible-checkbox
              [(ngModel)]="item1"
              id="item1"
            />
            <span sc-visual-checkbox></span>
          </div>
          <label for="item1" class="text-sm leading-none">Item 1</label>
        </div>
        <div class="flex items-center space-x-2">
          <div sc-checkbox>
            <input
              type="checkbox"
              sc-invisible-checkbox
              [(ngModel)]="item2"
              id="item2"
            />
            <span sc-visual-checkbox></span>
          </div>
          <label for="item2" class="text-sm leading-none">Item 2</label>
        </div>
        <div class="flex items-center space-x-2">
          <div sc-checkbox>
            <input
              type="checkbox"
              sc-invisible-checkbox
              [(ngModel)]="item3"
              id="item3"
            />
            <span sc-visual-checkbox></span>
          </div>
          <label for="item3" class="text-sm leading-none">Item 3</label>
        </div>
      </div>
    </div>
  `,
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

  toggleAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.item1.set(checked);
    this.item2.set(checked);
    this.item3.set(checked);
  }
}
