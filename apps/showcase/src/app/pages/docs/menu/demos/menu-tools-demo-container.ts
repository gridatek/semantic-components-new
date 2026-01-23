import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MenuToolsDemo } from './menu-tools-demo';

@Component({
  selector: 'app-menu-tools-demo-container',
  imports: [DemoContainer, MenuToolsDemo],
  template: `
    <app-demo-container title="With Submenu" [code]="code">
      <app-menu-tools-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuToolsDemoContainer {
  readonly code = `<div sc-menu-provider>
  <button sc-menu-trigger>Options</button>
  <div sc-menu-portal>
    <div sc-menu class="w-56">
      <div sc-menu-item value="Back">
        <span class="flex-1">Back</span>
        <span class="ml-auto text-xs tracking-widest text-muted-foreground">⌘[</span>
      </div>
      <div sc-menu-item value="Forward" aria-disabled="true">
        <span class="flex-1">Forward</span>
        <span class="ml-auto text-xs tracking-widest text-muted-foreground">⌘]</span>
      </div>
      <div sc-menu-item value="Reload">
        <span class="flex-1">Reload</span>
        <span class="ml-auto text-xs tracking-widest text-muted-foreground">⌘R</span>
      </div>
      <div sc-menu-separator></div>
      <div sc-menu-sub-provider>
        <div sc-menu-sub-trigger value="More Tools">
          <span class="flex-1">More Tools</span>
          <svg sc-menu-sub-icon ...><path d="m9 18 6-6-6-6" /></svg>
        </div>
        <div sc-menu-sub-portal>
          <div sc-menu-sub>
            <div sc-menu-item value="Save Page As...">Save Page As...</div>
            <div sc-menu-item value="Developer Tools">Developer Tools</div>
          </div>
        </div>
      </div>
      <div sc-menu-separator></div>
      <div sc-menu-item value="Show Full URLs">Show Full URLs</div>
    </div>
  </div>
</div>`;
}
