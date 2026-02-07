import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import type { EmptyStateAction, EmptyStateSize } from './empty-state-types';

@Component({
  selector: 'sc-empty-state',
  template: `
    <div [class]="containerClass()">
      @if (icon()) {
        <div [class]="iconContainerClass()">
          <span
            class="inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
            [innerHTML]="icon()"
          ></span>
        </div>
      }

      <div [class]="contentClass()">
        @if (title()) {
          <h3 [class]="titleClass()">{{ title() }}</h3>
        }
        @if (description()) {
          <p [class]="descriptionClass()">{{ description() }}</p>
        }
      </div>

      @if (actions().length > 0) {
        <div [class]="actionsClass()">
          @for (action of actions(); track action.label) {
            <button
              type="button"
              [class]="actionClass(action)"
              (click)="onActionClick(action)"
            >
              {{ action.label }}
            </button>
          }
        </div>
      }

      <ng-content />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEmptyState {
  readonly title = input<string>();
  readonly description = input<string>();
  readonly icon = input<string>();
  readonly actions = input<EmptyStateAction[]>([]);
  readonly size = input<EmptyStateSize>('md');
  readonly class = input<string>('');

  readonly actionClick = output<EmptyStateAction>();

  protected readonly containerClass = computed(() => {
    const size = this.size();

    return cn(
      'flex flex-col items-center justify-center text-center',
      size === 'sm' && 'py-8 px-4',
      size === 'md' && 'py-12 px-6',
      size === 'lg' && 'py-16 px-8',
      this.class(),
    );
  });

  protected readonly iconContainerClass = computed(() => {
    const size = this.size();

    return cn(
      'rounded-full bg-muted p-4 text-muted-foreground',
      size === 'sm' && '[&>span>svg]:w-8 [&>span>svg]:h-8',
      size === 'md' && '[&>span>svg]:w-12 [&>span>svg]:h-12',
      size === 'lg' && '[&>span>svg]:w-16 [&>span>svg]:h-16',
    );
  });

  protected readonly contentClass = computed(() => {
    const size = this.size();

    return cn(
      'max-w-md',
      size === 'sm' && 'mt-3 space-y-1',
      size === 'md' && 'mt-4 space-y-2',
      size === 'lg' && 'mt-6 space-y-3',
    );
  });

  protected readonly titleClass = computed(() => {
    const size = this.size();

    return cn(
      'font-semibold text-foreground',
      size === 'sm' && 'text-base',
      size === 'md' && 'text-lg',
      size === 'lg' && 'text-xl',
    );
  });

  protected readonly descriptionClass = computed(() => {
    const size = this.size();

    return cn(
      'text-muted-foreground',
      size === 'sm' && 'text-xs',
      size === 'md' && 'text-sm',
      size === 'lg' && 'text-base',
    );
  });

  protected readonly actionsClass = computed(() => {
    const size = this.size();

    return cn(
      'flex flex-wrap items-center justify-center gap-2',
      size === 'sm' && 'mt-4',
      size === 'md' && 'mt-6',
      size === 'lg' && 'mt-8',
    );
  });

  protected actionClass(action: EmptyStateAction): string {
    const variant = action.variant || 'default';
    const size = this.size();

    return cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      size === 'sm' && 'h-8 px-3 text-xs',
      size === 'md' && 'h-9 px-4 text-sm',
      size === 'lg' && 'h-10 px-6 text-sm',
      variant === 'default' &&
        'bg-primary text-primary-foreground hover:bg-primary/90',
      variant === 'outline' &&
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      variant === 'ghost' && 'hover:bg-accent hover:text-accent-foreground',
    );
  }

  onActionClick(action: EmptyStateAction): void {
    if (action.onClick) {
      action.onClick();
    }
    this.actionClick.emit(action);
  }
}
