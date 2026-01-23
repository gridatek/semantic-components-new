import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScPhoneInput,
  ScPhoneInputSimple,
  Country,
} from '@semantic-components/ui';

@Component({
  selector: 'app-phone-input-demo',
  imports: [ScPhoneInput, ScPhoneInputSimple],
  template: `
    <div class="space-y-8">
      <!-- Basic Phone Input with Country Selector -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">With Country Selector</h3>
        <p class="text-sm text-muted-foreground">
          Phone input with searchable country dropdown and dial code.
        </p>
        <div class="max-w-sm">
          <sc-phone-input
            [(value)]="phoneWithCountry"
            [(countryCode)]="selectedCountry"
            (countryChange)="onCountryChange($event)"
          />
        </div>
        <p class="text-sm text-muted-foreground">
          Value: {{ phoneWithCountry() || 'Empty' }}
        </p>
      </section>

      <!-- Different Default Country -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Different Default Country</h3>
        <p class="text-sm text-muted-foreground">
          Set a different default country using the defaultCountry input.
        </p>
        <div class="max-w-sm">
          <sc-phone-input defaultCountry="GB" />
        </div>
      </section>

      <!-- Simple Phone Input (US Format) -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Simple Input (US Format)</h3>
        <p class="text-sm text-muted-foreground">
          Simple phone input with automatic US formatting.
        </p>
        <div class="max-w-sm">
          <sc-phone-input-simple
            [(value)]="phoneUS"
            format="us"
            placeholder="(555) 555-5555"
          />
        </div>
        <p class="text-sm text-muted-foreground">
          Value: {{ phoneUS() || 'Empty' }}
        </p>
      </section>

      <!-- Simple Phone Input (International Format) -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">
          Simple Input (International Format)
        </h3>
        <p class="text-sm text-muted-foreground">
          Simple phone input with international formatting.
        </p>
        <div class="max-w-sm">
          <sc-phone-input-simple
            [(value)]="phoneInternational"
            format="international"
            placeholder="+1 555 555 5555"
          />
        </div>
        <p class="text-sm text-muted-foreground">
          Value: {{ phoneInternational() || 'Empty' }}
        </p>
      </section>

      <!-- Without Icon -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Icon</h3>
        <p class="text-sm text-muted-foreground">
          Simple phone input without the phone icon.
        </p>
        <div class="max-w-sm">
          <sc-phone-input-simple
            [showIcon]="false"
            format="us"
            placeholder="Enter phone number"
          />
        </div>
      </section>

      <!-- Disabled State -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Disabled</h3>
        <p class="text-sm text-muted-foreground">
          Disabled phone input states.
        </p>
        <div class="flex flex-col gap-3 max-w-sm">
          <sc-phone-input [disabled]="true" />
          <sc-phone-input-simple [disabled]="true" />
        </div>
      </section>

      <!-- In a Form -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Form Example</h3>
        <p class="text-sm text-muted-foreground">
          Phone input used in a contact form.
        </p>
        <div class="max-w-md space-y-4 rounded-lg border p-4">
          <div class="space-y-2">
            <label class="text-sm font-medium">Name</label>
            <input
              type="text"
              class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="John Doe"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Phone Number</label>
            <sc-phone-input defaultCountry="US" />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Email</label>
            <input
              type="email"
              class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="john@example.com"
            />
          </div>
          <button
            class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPhoneInputDemo {
  readonly phoneWithCountry = signal('');
  readonly selectedCountry = signal('US');
  readonly phoneUS = signal('');
  readonly phoneInternational = signal('');

  onCountryChange(country: Country): void {
    console.log('Country changed:', country);
  }
}
