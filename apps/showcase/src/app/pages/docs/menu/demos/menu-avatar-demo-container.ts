import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MenuAvatarDemo } from './menu-avatar-demo';

@Component({
  selector: 'app-menu-avatar-demo-container',
  imports: [DemoContainer, MenuAvatarDemo],
  template: `
    <app-demo-container title="With Avatar" [code]="code">
      <app-menu-avatar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuAvatarDemoContainer {
  readonly code = `<div sc-menu-provider>
  <button sc-menu-trigger class="size-10 rounded-full border-0 bg-transparent p-0 shadow-none">
    <img src="https://github.com/shadcn.png" alt="User avatar" class="size-10 rounded-full" />
  </button>
  <div sc-menu-portal>
    <div sc-menu class="w-56">
      <div class="flex items-center gap-2 px-2 py-1.5" role="presentation">
        <img src="https://github.com/shadcn.png" alt="" class="size-8 rounded-full" />
        <div class="flex flex-col">
          <span class="text-sm font-semibold">shadcn</span>
          <span class="text-xs text-muted-foreground">m&#64;example.com</span>
        </div>
      </div>
      <div sc-menu-separator></div>
      <div sc-menu-item value="Profile">Profile</div>
      <div sc-menu-item value="Billing">Billing</div>
      <div sc-menu-item value="Settings">Settings</div>
      <div sc-menu-separator></div>
      <div sc-menu-item value="Log out">Log out</div>
    </div>
  </div>
</div>`;
}
