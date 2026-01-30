import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ActionToastDemo } from './action-toast-demo';

@Component({
  selector: 'app-action-toast-demo-container',
  imports: [DemoContainer, ActionToastDemo],
  template: `
    <app-demo-container title="With Action" [code]="code">
      <app-action-toast-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionToastDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScToastStack, ToastService } from '@semantic-components/ui';

@Component({
  selector: 'app-action-toast-demo',
  imports: [ScToastStack],
  template: \`
    <button
      class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      (click)="showToast()"
    >
      Show Toast
    </button>

    <sc-toast-stack />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionToastDemo {
  private readonly toastService = inject(ToastService);

  showToast(): void {
    this.toastService.show({
      title: 'Event has been created',
      description: 'Monday, January 20, 2025 at 2:00 PM',
      action: {
        label: 'Undo',
        onClick: () => {
          console.log('Undo clicked');
        },
      },
    });
  }
}`;
}
