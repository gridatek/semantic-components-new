import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BadgesDockDemo } from './badges-dock-demo';

@Component({
  selector: 'app-badges-dock-demo-container',
  imports: [DemoContainer, BadgesDockDemo],
  template: `
    <app-demo-container title="With Badges" [code]="code">
      <app-badges-dock-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgesDockDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDock } from '@semantic-components/ui';
import type { DockItem } from '@semantic-components/ui';

@Component({
  selector: 'app-badges-dock-demo',
  imports: [ScDock],
  template: \`
    <div class="flex justify-center rounded-lg border bg-muted/30 p-8">
      <sc-dock [items]="items" />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgesDockDemo {
  readonly items: DockItem[] = [
    { id: 'finder', label: 'Finder', icon: '...' },
    { id: 'safari', label: 'Safari', icon: '...' },
    { id: 'mail', label: 'Mail', icon: '...', badge: 5 },
    { id: 'photos', label: 'Photos', icon: '...', badge: 12 },
    { id: 'music', label: 'Music', icon: '...' },
    { id: 'settings', label: 'Settings', icon: '...', badge: '!' },
  ];
}`;
}
