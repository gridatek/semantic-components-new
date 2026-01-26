import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NoMagnificationDockDemo } from './no-magnification-dock-demo';

@Component({
  selector: 'app-no-magnification-dock-demo-container',
  imports: [DemoContainer, NoMagnificationDockDemo],
  template: `
    <app-demo-container title="Without Magnification" [code]="code">
      <app-no-magnification-dock-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoMagnificationDockDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDock } from '@semantic-components/ui';
import type { DockItem } from '@semantic-components/ui';

@Component({
  selector: 'app-no-magnification-dock-demo',
  imports: [ScDock],
  template: \`
    <div class="flex justify-center rounded-lg border bg-muted/30 p-8">
      <sc-dock [items]="items" [magnification]="false" />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoMagnificationDockDemo {
  readonly items: DockItem[] = [
    { id: 'finder', label: 'Finder', icon: '...' },
    { id: 'safari', label: 'Safari', icon: '...' },
    { id: 'mail', label: 'Mail', icon: '...' },
    { id: 'photos', label: 'Photos', icon: '...' },
    { id: 'music', label: 'Music', icon: '...' },
    { id: 'settings', label: 'Settings', icon: '...' },
  ];
}`;
}
