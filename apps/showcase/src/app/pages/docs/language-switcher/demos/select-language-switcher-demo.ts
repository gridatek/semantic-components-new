import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLanguageSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-select-language-switcher-demo',
  imports: [ScLanguageSelect],
  template: `
    <div class="max-w-xs">
      <sc-language-select></sc-language-select>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectLanguageSwitcherDemo {}
