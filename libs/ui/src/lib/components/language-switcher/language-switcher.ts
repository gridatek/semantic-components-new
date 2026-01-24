import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { ScLanguageService } from './language.service';

export type LanguageSwitcherVariant = 'default' | 'outline' | 'ghost';
export type LanguageSwitcherSize = 'default' | 'sm' | 'lg' | 'icon';

const variantStyles: Record<LanguageSwitcherVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline:
    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
};

const sizeStyles: Record<LanguageSwitcherSize, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'size-10',
};

/**
 * Language toggle button - ideal for switching between 2 languages.
 * Displays a globe icon with the current language code.
 *
 * @example
 * ```html
 * <button sc-language-toggle></button>
 * <button sc-language-toggle variant="outline" size="sm"></button>
 * ```
 */
@Component({
  selector: 'button[sc-language-toggle]',
  host: {
    'data-slot': 'language-toggle',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': 'ariaLabel()',
    '(click)': 'toggle()',
  },
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
    @if (!iconOnly()) {
      <span class="text-xs font-semibold uppercase">
        {{ currentLanguageCode() }}
      </span>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLanguageToggle {
  private readonly languageService = inject(ScLanguageService);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly variant = input<LanguageSwitcherVariant>('ghost');
  readonly size = input<LanguageSwitcherSize>('default');
  readonly iconOnly = input<boolean>(false);

  protected readonly currentLanguageCode = computed(() =>
    this.languageService.language(),
  );
  protected readonly currentLanguage = this.languageService.currentLanguage;
  protected readonly languages = this.languageService.languages;

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium',
      'ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0',
      variantStyles[this.variant()],
      sizeStyles[this.size()],
      this.classInput(),
    ),
  );

  protected readonly ariaLabel = computed(() => {
    const current = this.currentLanguage();
    const langs = this.languages();
    if (langs.length === 2) {
      const next = langs.find((lang) => lang.code !== current.code);
      return `Switch language to ${next?.label ?? 'other language'}. Current language: ${current.label}`;
    }
    return `Current language: ${current.label}. Click to change language.`;
  });

  protected toggle(): void {
    this.languageService.toggleLanguage();
  }
}

/**
 * Language select dropdown - ideal for multiple languages.
 * Shows a dropdown with all available languages.
 *
 * @example
 * ```html
 * <sc-language-select></sc-language-select>
 * <sc-language-select [showNativeLabels]="true"></sc-language-select>
 * ```
 */
@Component({
  selector: 'sc-language-select',
  host: {
    'data-slot': 'language-select',
    '[class]': 'class()',
  },
  template: `
    <label for="language-select" class="sr-only">Select language</label>
    <select
      id="language-select"
      [value]="currentLanguageCode()"
      (change)="onLanguageChange($event)"
      class="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      @for (lang of languages(); track lang.code) {
        <option [value]="lang.code">
          {{ showNativeLabels() ? lang.nativeLabel : lang.label }}
        </option>
      }
    </select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLanguageSelect {
  private readonly languageService = inject(ScLanguageService);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly showNativeLabels = input<boolean>(true);

  protected readonly currentLanguageCode = computed(() =>
    this.languageService.language(),
  );
  protected readonly languages = this.languageService.languages;

  protected readonly class = computed(() =>
    cn('inline-block', this.classInput()),
  );

  protected onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.languageService.setLanguage(target.value);
  }
}

/**
 * Language switcher with flag/label display - a more visual option.
 * Shows the current language with option to display as button or link style.
 *
 * @example
 * ```html
 * <button sc-language-button></button>
 * <a sc-language-button href="#"></a>
 * ```
 */
@Component({
  selector: 'button[sc-language-button], a[sc-language-button]',
  host: {
    'data-slot': 'language-button',
    '[class]': 'class()',
    '[attr.aria-label]': 'ariaLabel()',
    '(click)': 'onClick($event)',
  },
  template: `
    <span class="font-medium">{{ displayLabel() }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLanguageButton {
  private readonly languageService = inject(ScLanguageService);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly variant = input<LanguageSwitcherVariant>('ghost');
  readonly size = input<LanguageSwitcherSize>('default');
  readonly showNativeLabels = input<boolean>(true);

  protected readonly currentLanguage = this.languageService.currentLanguage;
  protected readonly languages = this.languageService.languages;

  protected readonly displayLabel = computed(() => {
    const lang = this.currentLanguage();
    return this.showNativeLabels() ? lang.nativeLabel : lang.label;
  });

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium',
      'ring-offset-background transition-colors cursor-pointer',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0',
      variantStyles[this.variant()],
      sizeStyles[this.size()],
      this.classInput(),
    ),
  );

  protected readonly ariaLabel = computed(() => {
    const current = this.currentLanguage();
    return `Current language: ${current.label}. Click to change language.`;
  });

  protected onClick(event: Event): void {
    // For a 2-language setup, toggle directly
    const langs = this.languages();
    if (langs.length === 2) {
      event.preventDefault();
      this.languageService.toggleLanguage();
    }
    // For more languages, this could open a menu (to be implemented by consumer)
  }
}
