import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { TypesInputDemo } from './types-input-demo';

@Component({
  selector: 'app-types-input-demo-container',
  imports: [DemoContainer, TypesInputDemo],
  template: `
    <app-demo-container title="Input Types" [code]="code">
      <app-types-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypesInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-types-input-demo',
  imports: [ScInput, ScLabel],
  template: \`
    <div class="grid w-full max-w-sm gap-4">
      <div class="grid gap-1.5">
        <label sc-label for="text">Text</label>
        <input sc-input type="text" id="text" placeholder="Text input" />
      </div>
      <div class="grid gap-1.5">
        <label sc-label for="password">Password</label>
        <input sc-input type="password" id="password" placeholder="Password" />
      </div>
      <div class="grid gap-1.5">
        <label sc-label for="number">Number</label>
        <input sc-input type="number" id="number" placeholder="0" />
      </div>
      <div class="grid gap-1.5">
        <label sc-label for="date">Date</label>
        <input sc-input type="date" id="date" />
      </div>
      <div class="grid gap-1.5">
        <label sc-label for="time">Time</label>
        <input sc-input type="time" id="time" />
      </div>
      <div class="grid gap-1.5">
        <label sc-label for="search">Search</label>
        <input sc-input type="search" id="search" placeholder="Search..." />
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypesInputDemo {}`;
}
