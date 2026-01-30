import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { _IdGenerator } from '@angular/cdk/a11y';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-theme-field]',
  host: {
    'data-slot': 'theme-field',
    '[class]': 'class()',
  },
  template: `
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeField implements AfterContentInit {
  private readonly idGenerator = inject(_IdGenerator);
  private readonly elementRef = inject(ElementRef);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('space-y-2', this.classInput()));

  readonly fieldId = this.idGenerator.getId('sc-theme-field-');

  ngAfterContentInit(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    const label = element.querySelector('label');
    const select = element.querySelector('select[sc-theme-select]');

    if (label && !label.hasAttribute('for')) {
      label.setAttribute('for', this.fieldId);
    }
    if (select && !select.hasAttribute('id')) {
      select.setAttribute('id', this.fieldId);
    }
  }
}
