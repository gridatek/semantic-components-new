import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MagnificationScaleDockDemo } from './magnification-scale-dock-demo';

@Component({
  selector: 'app-magnification-scale-dock-demo-container',
  imports: [DemoContainer, MagnificationScaleDockDemo],
  template: `
    <app-demo-container title="Magnification Scale" [code]="code">
      <app-magnification-scale-dock-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagnificationScaleDockDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDock } from '@semantic-components/ui';
import type { DockItem } from '@semantic-components/ui';

@Component({
  selector: 'app-magnification-scale-dock-demo',
  imports: [ScDock],
  template: \`
    <div class="flex justify-center rounded-lg border bg-muted/30 p-8">
      <sc-dock [items]="items" [magnificationScale]="2" />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagnificationScaleDockDemo {
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
