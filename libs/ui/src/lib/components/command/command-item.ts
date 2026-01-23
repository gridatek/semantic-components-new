import { computed, Directive, inject, input, output } from '@angular/core';
import { cn } from '../../utils';
import { ScCommand } from './command';

@Directive({
  selector: 'div[sc-command-item]',
  host: {
    'data-slot': 'command-item',
    role: 'option',
    '[attr.data-disabled]': 'disabled() || null',
    '[attr.data-selected]': 'selected() || null',
    '[class]': 'class()',
    '[hidden]': '!isVisible()',
    '(click)': 'onClick()',
  },
})
export class ScCommandItem {
  private readonly command = inject(ScCommand);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input<string>('');
  readonly keywords = input<string[]>([]);
  readonly disabled = input<boolean>(false);
  readonly selected = input<boolean>(false);

  readonly select = output<void>();

  protected readonly isVisible = computed(() => {
    const searchValue = this.command.value().toLowerCase();
    if (!searchValue) return true;

    const itemValue = this.value().toLowerCase();
    const itemKeywords = this.keywords().map((k) => k.toLowerCase());

    return (
      itemValue.includes(searchValue) ||
      itemKeywords.some((k) => k.includes(searchValue))
    );
  });

  protected readonly class = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'data-[selected]:bg-accent data-[selected]:text-accent-foreground',
      'hover:bg-accent hover:text-accent-foreground',
      '[&>svg]:size-4 [&>svg]:shrink-0',
      this.classInput(),
    ),
  );

  onClick(): void {
    if (!this.disabled()) {
      this.select.emit();
    }
  }
}
