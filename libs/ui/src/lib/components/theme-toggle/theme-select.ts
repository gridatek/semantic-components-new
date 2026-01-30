import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { ScTheme, Theme } from './theme.service';

@Component({
  selector: 'select[sc-theme-select]',
  host: {
    'data-slot': 'theme-select',
    '[class]': 'class()',
    '[value]': 'theme()',
    '(change)': 'onThemeChange($event)',
  },
  template: `
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="system">System</option>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeSelect {
  private readonly themeService = inject(ScTheme);

  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly theme = this.themeService.theme;

  protected readonly class = computed(() =>
    cn(
      'h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.classInput(),
    ),
  );

  protected onThemeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.themeService.setTheme(target.value as Theme);
  }
}
