import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScTabs } from './sc-tabs';

@Directive({
  selector: 'div[sc-tabs-content]',
  host: {
    'data-slot': 'tabs-content',
    role: 'tabpanel',
    '[id]': 'panelId()',
    '[attr.aria-labelledby]': 'triggerId()',
    '[attr.data-state]': 'isActive() ? "active" : "inactive"',
    '[hidden]': '!isActive()',
    '[tabindex]': '0',
    '[class]': 'class()',
  },
})
export class ScTabsContent {
  private readonly tabs = inject(ScTabs);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<string>();

  protected readonly panelId = computed(() => `tab-panel-${this.value()}`);
  protected readonly triggerId = computed(() => `tab-trigger-${this.value()}`);

  protected readonly isActive = computed(() =>
    this.tabs.isActive(this.value()),
  );

  protected readonly class = computed(() =>
    cn(
      'mt-2 ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.classInput(),
    ),
  );
}
