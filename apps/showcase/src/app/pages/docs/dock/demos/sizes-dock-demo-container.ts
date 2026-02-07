import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SizesDockDemo } from './sizes-dock-demo';

@Component({
  selector: 'app-sizes-dock-demo-container',
  imports: [DemoContainer, SizesDockDemo],
  template: `
    <app-demo-container title="Sizes" [code]="code">
      <app-sizes-dock-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesDockDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDock } from '@semantic-components/ui';
import type { DockItem } from '@semantic-components/ui';

@Component({
  selector: 'app-sizes-dock-demo',
  imports: [ScDock],
  template: \`
    <div class="flex flex-col items-center gap-6 rounded-lg border bg-muted/30 p-8">
      <div class="text-center">
        <p class="mb-2 text-xs text-muted-foreground">Small</p>
        <sc-dock [items]="items" size="sm" />
      </div>
      <div class="text-center">
        <p class="mb-2 text-xs text-muted-foreground">Medium (Default)</p>
        <sc-dock [items]="items" size="md" />
      </div>
      <div class="text-center">
        <p class="mb-2 text-xs text-muted-foreground">Large</p>
        <sc-dock [items]="items" size="lg" />
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesDockDemo {
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
