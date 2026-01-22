import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-progress]',
  host: {
    role: 'progressbar',
    'data-slot': 'progress',
    '[class]': 'hostClass()',
    '[attr.aria-valuemin]': '0',
    '[attr.aria-valuemax]': 'max()',
    '[attr.aria-valuenow]': 'value()',
    '[attr.data-state]': 'state()',
  },
  template: `
    <div
      data-slot="progress-indicator"
      [class]="indicatorClass()"
      [style.transform]="'translateX(-' + (100 - percentage()) + '%)'"
    ></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScProgress {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input<number | null>(null);
  readonly max = input<number>(100);

  protected readonly percentage = computed(() => {
    const val = this.value();
    const maxVal = this.max();
    if (val === null || maxVal === 0) return 0;
    return Math.min(Math.max((val / maxVal) * 100, 0), 100);
  });

  protected readonly state = computed(() => {
    const val = this.value();
    if (val === null) return 'indeterminate';
    return val >= this.max() ? 'complete' : 'loading';
  });

  protected readonly hostClass = computed(() =>
    cn(
      'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
      this.classInput(),
    ),
  );

  protected readonly indicatorClass = computed(() =>
    cn('h-full w-full flex-1 bg-primary transition-all'),
  );
}
