import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScField,
  ScFieldLabel,
  ScFieldDescription,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-field-demo',
  imports: [ScField, ScFieldLabel, ScFieldDescription],
  template: `
    <div sc-field>
      <label sc-field-label for="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      />
      <p sc-field-description>We'll never share your email with anyone else.</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFieldDemo {}
