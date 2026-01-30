import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { ScThemeService, Theme } from './theme.service';

export type ThemeToggleVariant = 'default' | 'outline' | 'ghost';
export type ThemeToggleSize = 'default' | 'sm' | 'lg' | 'icon';

const variantStyles: Record<ThemeToggleVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline:
    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
};

const sizeStyles: Record<ThemeToggleSize, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'size-10',
};

@Component({
  selector: 'button[sc-theme-toggle]',
  exportAs: 'scThemeToggle',
  host: {
    'data-slot': 'theme-toggle',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-pressed]': 'isDark()',
    '(click)': 'toggle()',
  },
  template: `
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeToggle {
  private readonly themeService = inject(ScThemeService);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly variant = input<ThemeToggleVariant>('ghost');
  readonly size = input<ThemeToggleSize>('icon');

  readonly isDark = this.themeService.isDark;
  protected readonly theme = this.themeService.theme;

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium',
      'ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0',
      variantStyles[this.variant()],
      sizeStyles[this.size()],
      this.classInput(),
    ),
  );

  protected readonly ariaLabel = computed(() =>
    this.isDark() ? 'Switch to light theme' : 'Switch to dark theme',
  );

  protected toggle(): void {
    this.themeService.toggleTheme();
  }
}

@Component({
  selector: 'sc-theme-select',
  host: {
    'data-slot': 'theme-select',
    '[class]': 'class()',
  },
  template: `
    <label for="theme-select" class="sr-only">Select theme</label>
    <select
      id="theme-select"
      [value]="theme()"
      (change)="onThemeChange($event)"
      class="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeSelect {
  private readonly themeService = inject(ScThemeService);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly theme = this.themeService.theme;

  protected readonly class = computed(() =>
    cn('inline-block', this.classInput()),
  );

  protected onThemeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.themeService.setTheme(target.value as Theme);
  }
}
