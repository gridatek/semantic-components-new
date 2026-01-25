import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ButtonInputDemo } from './button-input-demo';

@Component({
  selector: 'app-button-input-demo-container',
  imports: [DemoContainer, ButtonInputDemo],
  template: `
    <app-demo-container title="With Button" [code]="code">
      <app-button-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput } from '@semantic-components/ui';

@Component({
  selector: 'app-button-input-demo',
  imports: [ScInput],
  template: \`
    <div class="flex w-full max-w-sm items-center space-x-2">
      <input sc-input type="email" placeholder="Email" />
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      >
        Subscribe
      </button>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonInputDemo {}`;
}
