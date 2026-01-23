import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScLabelDemo } from './label-demo';

@Component({
  selector: 'app-label-demo-container',
  imports: [DemoContainer, ScLabelDemo],
  template: `
    <app-demo-container title="Label" [code]="code">
      <app-sc-label-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLabelDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel } from '@semantic-components/ui';
import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-label-demo',
  imports: [ScLabel, ScCheckbox],
  template: \`
    <div class="space-y-8">
      <!-- Basic Label -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Label</h3>
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <label sc-label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>

      <!-- With Checkbox -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Checkbox</h3>
        <div class="flex items-center space-x-2">
          <sc-checkbox id="terms-label" />
          <label sc-label for="terms-label">Accept terms and conditions</label>
        </div>
      </div>

      <!-- Disabled State -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled State</h3>
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <label sc-label for="disabled-input">Disabled Input</label>
          <input
            type="text"
            id="disabled-input"
            disabled
            placeholder="Disabled"
            class="peer flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <p class="text-xs text-muted-foreground">
          Note: Place disabled input before label with "peer" class to show
          disabled styling on label.
        </p>
      </div>

      <!-- With Different Input Types -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Form Fields</h3>
        <div class="grid w-full max-w-sm gap-4">
          <div class="grid gap-1.5">
            <label sc-label for="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="&#64;username"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="bio">Bio</label>
            <textarea
              id="bio"
              placeholder="Tell us about yourself"
              rows="3"
              class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Required Field -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Required Field</h3>
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <label sc-label for="required-field">
            Required Field
            <span class="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="required-field"
            required
            placeholder="This field is required"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLabelDemo {}`;
}
