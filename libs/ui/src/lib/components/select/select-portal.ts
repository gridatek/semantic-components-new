import { NgTemplateOutlet } from '@angular/common';
import { ComboboxPopupContainer } from '@angular/aria/combobox';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  inject,
  input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { ScSelect } from './select';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-select-portal]',
  imports: [ComboboxPopupContainer, OverlayModule, NgTemplateOutlet],
  template: `
    <ng-template ngComboboxPopupContainer>
      @if (origin(); as origin) {
        <ng-template
          [cdkConnectedOverlay]="{
            origin,
            usePopover: 'inline',
            matchWidth: true,
          }"
          [cdkConnectedOverlayOpen]="true"
        >
          <ng-template [ngTemplateOutlet]="contentTpl()" />
        </ng-template>
      }
    </ng-template>
  `,
  host: {
    'data-slot': 'select-portal',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectPortal {
  readonly contentTpl = contentChild.required(TemplateRef);
  private readonly select = inject(ScSelect);

  protected readonly origin = computed(() => this.select.origin());

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('', this.classInput()));
}
