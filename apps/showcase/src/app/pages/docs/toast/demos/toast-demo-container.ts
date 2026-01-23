import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScToastDemo } from './toast-demo';

@Component({
  selector: 'app-toast-demo-container',
  imports: [DemoContainer, ScToastDemo],
  template: `
    <app-demo-container title="Toast" [code]="code">
      <app-sc-toast-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScToastDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScToaster, ToastService } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-toast-demo',
  imports: [ScToaster],
  template: \`
    <div class="flex flex-wrap gap-4">
      <!-- Default Toast -->
      <button
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        (click)="showDefault()"
      >
        Show Default Toast
      </button>

      <!-- Toast with Title -->
      <button
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        (click)="showWithTitle()"
      >
        Toast with Title
      </button>

      <!-- Toast with Action -->
      <button
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        (click)="showWithAction()"
      >
        Toast with Action
      </button>

      <!-- Destructive Toast -->
      <button
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground shadow-xs transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        (click)="showDestructive()"
      >
        <svg
          class="size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
        Destructive Toast
      </button>

      <!-- Long Duration Toast -->
      <button
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        (click)="showLongDuration()"
      >
        Long Duration (10s)
      </button>
    </div>

    <!-- Toaster renders all active toasts -->
    <sc-toaster />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScToastDemo {
  private readonly toastService = inject(ToastService);

  showDefault(): void {
    this.toastService.show({
      description: 'Your message has been sent.',
    });
  }

  showWithTitle(): void {
    this.toastService.show({
      title: 'Scheduled: Catch up',
      description: 'Friday, February 10, 2025 at 5:57 PM',
    });
  }

  showWithAction(): void {
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

  showDestructive(): void {
    this.toastService.show({
      variant: 'destructive',
      title: 'Error',
      description: 'Something went wrong. Please try again.',
    });
  }

  showLongDuration(): void {
    this.toastService.show({
      title: 'Long toast',
      description: 'This toast will stay for 10 seconds.',
      duration: 10000,
    });
  }
}`;
}
