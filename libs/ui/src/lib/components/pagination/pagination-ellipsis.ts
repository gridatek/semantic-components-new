import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'span[sc-pagination-ellipsis]',
  host: {
    'data-slot': 'pagination-ellipsis',
    '[attr.aria-hidden]': 'true',
    '[class]': 'class()',
  },
  template: `
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationEllipsis {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex size-10 items-center justify-center', this.classInput()),
  );
}
