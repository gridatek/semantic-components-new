import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLanguageSwitcherDemoContainer } from './demos/language-switcher-demo-container';

@Component({
  selector: 'app-language-switcher-page',
  imports: [ScLanguageSwitcherDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">LanguageSwitcher</h1>
        <p class="text-muted-foreground">
          A component for switching between languages with support for Angular
          localize. Changing the language will refresh the page to load the
          appropriate locale bundle.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-language-switcher-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LanguageSwitcherPage {}
