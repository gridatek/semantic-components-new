import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLanguageToggle } from '@semantic-components/ui';

@Component({
  selector: 'app-icon-only-language-switcher-demo',
  imports: [ScLanguageToggle],
  template: `
    <div class="flex items-center gap-4">
      <button sc-language-toggle [iconOnly]="true" size="icon"></button>
      <span class="text-sm text-muted-foreground">Globe icon only</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconOnlyLanguageSwitcherDemo {}
