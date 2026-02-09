import { NgTemplateOutlet } from '@angular/common';
import { TabContent, TabPanel } from '@angular/aria/tabs';
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
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-tab-panel]',
  imports: [TabContent, NgTemplateOutlet],
  hostDirectives: [
    {
      directive: TabPanel,
      inputs: ['value'],
    },
  ],
  template: `
    <ng-template ngTabContent>
      <ng-template [ngTemplateOutlet]="contentTpl()" />
    </ng-template>
  `,
  host: {
    'data-slot': 'tab-panel',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTabPanel {
  readonly contentTpl = contentChild.required(TemplateRef);
  protected readonly tabPanel = inject(TabPanel);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'mt-2 ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.classInput(),
    ),
  );
}
