import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScLanguageSwitcherDemo } from './language-switcher-demo';

@Component({
  selector: 'app-language-switcher-demo-container',
  imports: [DemoContainer, ScLanguageSwitcherDemo],
  template: `
    <app-demo-container title="Language" [code]="code">
      <app-sc-language-switcher-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLanguageSwitcherDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ScLanguageButton,
  ScLanguageSelect,
  ScLanguageService,
  ScLanguageToggle,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-language-switcher-demo',
  imports: [ScLanguageToggle, ScLanguageSelect, ScLanguageButton],
  template: \`
    <div class="space-y-8">
      <!-- Basic Toggle -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Toggle</h3>
        <div class="flex items-center gap-4">
          <button sc-language-toggle></button>
          <span class="text-sm text-muted-foreground">
            Current: {{ languageService.currentLanguage().label }}
          </span>
        </div>
        <p class="text-sm text-muted-foreground">
          Click to switch between languages. This will refresh the page.
        </p>
      </div>

      <!-- Icon Only Toggle -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Icon Only Toggle</h3>
        <div class="flex items-center gap-4">
          <button sc-language-toggle [iconOnly]="true" size="icon"></button>
          <span class="text-sm text-muted-foreground">Globe icon only</span>
        </div>
      </div>

      <!-- Variants -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Variants</h3>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-2">
            <button sc-language-toggle variant="default"></button>
            <span class="text-xs text-muted-foreground">Default</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button sc-language-toggle variant="outline"></button>
            <span class="text-xs text-muted-foreground">Outline</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button sc-language-toggle variant="ghost"></button>
            <span class="text-xs text-muted-foreground">Ghost</span>
          </div>
        </div>
      </div>

      <!-- Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Sizes</h3>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-2">
            <button sc-language-toggle variant="outline" size="sm"></button>
            <span class="text-xs text-muted-foreground">Small</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button
              sc-language-toggle
              variant="outline"
              size="default"
            ></button>
            <span class="text-xs text-muted-foreground">Default</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button sc-language-toggle variant="outline" size="lg"></button>
            <span class="text-xs text-muted-foreground">Large</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button
              sc-language-toggle
              variant="outline"
              size="icon"
              [iconOnly]="true"
            ></button>
            <span class="text-xs text-muted-foreground">Icon</span>
          </div>
        </div>
      </div>

      <!-- Language Select -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Language Select</h3>
        <div class="max-w-xs">
          <sc-language-select></sc-language-select>
        </div>
        <p class="text-sm text-muted-foreground">
          Dropdown showing all available languages
        </p>
      </div>

      <!-- Language Select with English Labels -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Language Select (English Labels)</h3>
        <div class="max-w-xs">
          <sc-language-select [showNativeLabels]="false"></sc-language-select>
        </div>
        <p class="text-sm text-muted-foreground">
          Shows labels in English instead of native names
        </p>
      </div>

      <!-- Language Button -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Language Button</h3>
        <div class="flex items-center gap-4">
          <button sc-language-button variant="outline"></button>
          <span class="text-sm text-muted-foreground">
            Shows current language with dropdown icon
          </span>
        </div>
      </div>

      <!-- In Navigation Context -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">In Navigation Context</h3>
        <div class="flex items-center justify-between rounded-lg border p-4">
          <div class="space-y-0.5">
            <span class="text-base font-medium">Language</span>
            <p class="text-sm text-muted-foreground">
              Choose your preferred language
            </p>
          </div>
          <button sc-language-toggle variant="outline"></button>
        </div>
      </div>

      <!-- Settings Panel -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Settings Panel</h3>
        <div class="w-[400px] rounded-lg border p-4">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <label class="text-sm font-medium">Language</label>
                <p class="text-sm text-muted-foreground">
                  Select your preferred language
                </p>
              </div>
              <sc-language-select class="w-32"></sc-language-select>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLanguageSwitcherDemo {
  protected readonly languageService = inject(ScLanguageService);
}`;
}
