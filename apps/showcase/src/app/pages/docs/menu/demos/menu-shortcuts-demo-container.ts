import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MenuShortcutsDemo } from './menu-shortcuts-demo';

@Component({
  selector: 'app-menu-shortcuts-demo-container',
  imports: [DemoContainer, MenuShortcutsDemo],
  template: `
    <app-demo-container title="With Shortcuts" [code]="code">
      <app-menu-shortcuts-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuShortcutsDemoContainer {
  readonly code = `<div sc-menu-provider>
  <button sc-menu-trigger>Open</button>
  <div sc-menu-portal>
    <div sc-menu class="w-56">
      <div class="px-2 py-1.5 text-sm font-semibold" role="presentation">
        My Account
      </div>
      <div sc-menu-separator></div>
      <div sc-menu-item value="Profile">
        <span class="flex-1">Profile</span>
        <span class="ml-auto text-xs tracking-widest text-muted-foreground">⇧⌘P</span>
      </div>
      <div sc-menu-item value="Settings">
        <span class="flex-1">Settings</span>
        <span class="ml-auto text-xs tracking-widest text-muted-foreground">⌘S</span>
      </div>
      <div sc-menu-separator></div>
      <div sc-menu-item value="Log out">
        <span class="flex-1">Log out</span>
        <span class="ml-auto text-xs tracking-widest text-muted-foreground">⇧⌘Q</span>
      </div>
    </div>
  </div>
</div>`;
}
