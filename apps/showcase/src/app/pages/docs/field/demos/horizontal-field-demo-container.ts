import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { HorizontalFieldDemo } from './horizontal-field-demo';

@Component({
  selector: 'app-horizontal-field-demo-container',
  imports: [DemoContainer, HorizontalFieldDemo],
  template: `
    <app-demo-container
      title="Horizontal Layout"
      [code]="code"
      demoUrl="/demos/field/horizontal-field-demo"
    >
      <app-horizontal-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScFieldLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-horizontal-field-demo',
  imports: [ScField, ScFieldLabel],
  template: \`
    <div sc-field [orientation]="'horizontal'">
      <label sc-field-label for="username">Username</label>
      <input
        id="username"
        type="text"
        placeholder="Enter username"
        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalFieldDemo {}`;
}
