import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import type {
  StatCardSize,
  StatCardTrend,
  StatCardVariant,
} from './stat-card-types';

@Component({
  selector: 'sc-stat-card',
  template: `
    <div [class]="containerClass()">
      <div class="flex items-start justify-between">
        <div class="space-y-1">
          <p [class]="labelClass()">{{ label() }}</p>
          <p [class]="valueClass()">{{ formattedValue() }}</p>
        </div>
        @if (icon()) {
          <div [class]="iconContainerClass()">
            <span
              class="inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
              [innerHTML]="icon()"
            ></span>
          </div>
        }
      </div>

      @if (showChange()) {
        <div class="mt-3 flex items-center gap-2">
          @if (trend() !== 'neutral') {
            <span [class]="trendClass()">
              <span [innerHTML]="trendIcon()"></span>
              @if (change() !== undefined) {
                <span>{{ formattedChange() }}</span>
              }
            </span>
          }
          @if (changeLabel()) {
            <span class="text-xs text-muted-foreground">
              {{ changeLabel() }}
            </span>
          }
        </div>
      }

      @if (description()) {
        <p class="mt-2 text-xs text-muted-foreground">{{ description() }}</p>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScStatCard {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly change = input<number>();
  readonly changeLabel = input<string>();
  readonly trend = input<StatCardTrend>('neutral');
  readonly icon = input<string>();
  readonly description = input<string>();
  readonly variant = input<StatCardVariant>('default');
  readonly size = input<StatCardSize>('md');
  readonly class = input<string>('');

  readonly upIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`;
  readonly downIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

  protected readonly formattedValue = computed(() => {
    const val = this.value();
    if (typeof val === 'number') {
      return val.toLocaleString();
    }
    return val;
  });

  protected readonly formattedChange = computed(() => {
    const change = this.change();
    if (change === undefined) return '';
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change}%`;
  });

  protected readonly showChange = computed(() => {
    return this.change() !== undefined || this.changeLabel();
  });

  protected readonly trendIcon = computed(() => {
    return this.trend() === 'up' ? this.upIcon : this.downIcon;
  });

  protected readonly containerClass = computed(() => {
    const variant = this.variant();
    const size = this.size();

    return cn(
      'rounded-lg transition-colors',
      variant === 'default' && 'border bg-card text-card-foreground',
      variant === 'outline' && 'border-2 bg-transparent',
      variant === 'filled' && 'bg-primary text-primary-foreground',
      size === 'sm' && 'p-4',
      size === 'md' && 'p-6',
      size === 'lg' && 'p-8',
      this.class(),
    );
  });

  protected readonly labelClass = computed(() => {
    const size = this.size();
    const variant = this.variant();

    return cn(
      'font-medium',
      size === 'sm' && 'text-xs',
      size === 'md' && 'text-sm',
      size === 'lg' && 'text-base',
      variant === 'filled'
        ? 'text-primary-foreground/80'
        : 'text-muted-foreground',
    );
  });

  protected readonly valueClass = computed(() => {
    const size = this.size();

    return cn(
      'font-bold tracking-tight',
      size === 'sm' && 'text-xl',
      size === 'md' && 'text-2xl',
      size === 'lg' && 'text-4xl',
    );
  });

  protected readonly iconContainerClass = computed(() => {
    const size = this.size();
    const variant = this.variant();

    return cn(
      'rounded-md p-2',
      variant === 'filled' ? 'bg-primary-foreground/10' : 'bg-muted',
      size === 'sm' && '[&>span>svg]:w-4 [&>span>svg]:h-4',
      size === 'md' && '[&>span>svg]:w-5 [&>span>svg]:h-5',
      size === 'lg' && '[&>span>svg]:w-6 [&>span>svg]:h-6',
    );
  });

  protected readonly trendClass = computed(() => {
    const trend = this.trend();
    const variant = this.variant();

    return cn(
      'inline-flex items-center gap-1 text-xs font-medium',
      variant === 'filled'
        ? trend === 'up'
          ? 'text-green-200'
          : 'text-red-200'
        : trend === 'up'
          ? 'text-green-600'
          : 'text-red-600',
    );
  });
}
