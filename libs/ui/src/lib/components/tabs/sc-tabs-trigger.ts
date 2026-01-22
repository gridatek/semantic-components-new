import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { ScTabs } from './sc-tabs';

@Directive({
  selector: 'button[sc-tabs-trigger]',
  host: {
    'data-slot': 'tabs-trigger',
    type: 'button',
    role: 'tab',
    '[id]': 'triggerId()',
    '[attr.aria-selected]': 'isActive()',
    '[attr.aria-controls]': 'panelId()',
    '[attr.data-state]': 'isActive() ? "active" : "inactive"',
    '[tabindex]': 'isActive() ? 0 : -1',
    '[disabled]': 'disabled() || null',
    '[class]': 'class()',
    '(click)': 'onClick()',
    '(keydown.arrowleft)': 'onArrowLeft($event)',
    '(keydown.arrowright)': 'onArrowRight($event)',
  },
})
export class ScTabsTrigger {
  private readonly tabs = inject(ScTabs);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<string>();
  readonly disabled = input<boolean>(false);

  protected readonly triggerId = computed(() => `tab-trigger-${this.value()}`);
  protected readonly panelId = computed(() => `tab-panel-${this.value()}`);

  protected readonly isActive = computed(() =>
    this.tabs.isActive(this.value()),
  );

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
      this.classInput(),
    ),
  );

  onClick(): void {
    if (!this.disabled()) {
      this.tabs.selectTab(this.value());
    }
  }

  onArrowLeft(event: Event): void {
    event.preventDefault();
    this.focusSibling(-1);
  }

  onArrowRight(event: Event): void {
    event.preventDefault();
    this.focusSibling(1);
  }

  private focusSibling(direction: -1 | 1): void {
    const triggers = Array.from(
      document.querySelectorAll<HTMLButtonElement>(
        '[data-slot="tabs-trigger"]',
      ),
    );
    const currentIndex = triggers.findIndex((t) => t.id === this.triggerId());
    const nextIndex =
      (currentIndex + direction + triggers.length) % triggers.length;
    triggers[nextIndex]?.focus();
    triggers[nextIndex]?.click();
  }
}
