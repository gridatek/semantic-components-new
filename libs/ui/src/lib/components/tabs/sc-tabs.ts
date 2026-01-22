import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-tabs]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'tabs',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTabs {
  readonly classInput = input<string>('', { alias: 'class' });

  /** The currently active tab value */
  readonly value = model<string>('');

  /** Default tab value (used on init if value is not set) */
  readonly defaultValue = input<string>('');

  protected readonly class = computed(() => cn('', this.classInput()));

  constructor() {
    // Set default value if no value is provided
    if (!this.value() && this.defaultValue()) {
      this.value.set(this.defaultValue());
    }
  }

  isActive(tabValue: string): boolean {
    return this.value() === tabValue;
  }

  selectTab(tabValue: string): void {
    this.value.set(tabValue);
  }
}
