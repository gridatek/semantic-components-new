import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SiCheckIcon, SiMinusIcon } from '@semantic-icons/lucide-icons';
import { cn } from '../../utils';
import { ScCheckboxIndicator } from './checkbox-indicator';

@Component({
  selector: 'span[sc-visual-checkbox]',
  imports: [ScCheckboxIndicator, SiCheckIcon, SiMinusIcon],
  host: {
    'data-slot': 'visual-checkbox',
    '[class]': 'class()',
    '[attr.data-state]': 'state()',
  },
  template: `
    <span sc-checkbox-indicator [state]="state()">
      @if (state() === 'indeterminate') {
        <svg si-minus-icon class="size-4"></svg>
      } @else if (state() === 'checked') {
        <svg si-check-icon class="size-4"></svg>
      }
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScVisualCheckbox {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly state = input<'checked' | 'unchecked' | 'indeterminate'>('unchecked');

  protected readonly class = computed(() =>
    cn(
      'ring-offset-background',
      'peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      this.classInput(),
    ),
  );
}
