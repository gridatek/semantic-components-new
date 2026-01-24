import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FormCardDemo } from './form-card-demo';

@Component({
  selector: 'app-form-card-demo-container',
  imports: [DemoContainer, FormCardDemo],
  template: `
    <app-demo-container
      title="Card with Form"
      demoUrl="/demos/card/form-card-demo"
      [code]="code"
    >
      <app-form-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCardDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScCard,
  ScCardContent,
  ScCardDescription,
  ScCardFooter,
  ScCardHeader,
  ScCardTitle,
  ScInput,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  selector: 'app-form-card-demo',
  imports: [
    ScCard,
    ScCardContent,
    ScCardDescription,
    ScCardFooter,
    ScCardHeader,
    ScCardTitle,
    ScInput,
    ScLabel,
  ],
  template: \`
    <div sc-card class="w-[350px]">
      <div sc-card-header>
        <h3 sc-card-title>Create project</h3>
        <p sc-card-description>Deploy your new project in one-click.</p>
      </div>
      <div sc-card-content>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <label sc-label for="name">Name</label>
            <input sc-input id="name" placeholder="Name of your project" />
          </div>
        </div>
      </div>
      <div sc-card-footer class="flex justify-between">
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          Cancel
        </button>
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Deploy
        </button>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCardDemo {}`;
}
