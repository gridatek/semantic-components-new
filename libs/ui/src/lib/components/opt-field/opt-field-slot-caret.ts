import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'sc-opt-field-slot-caret',
  host: {
    'data-slot': 'opt-field-slot-caret',
    '[class]': 'containerClass()',
  },
  template: `
    <div [class]="caretClass()"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOptFieldSlotCaret {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly containerClass = computed(() =>
    cn(
      'pointer-events-none absolute inset-0 flex items-center justify-center',
      this.classInput(),
    ),
  );

  protected readonly caretClass = computed(() =>
    cn('h-4 w-px animate-caret-blink bg-foreground'),
  );
}
