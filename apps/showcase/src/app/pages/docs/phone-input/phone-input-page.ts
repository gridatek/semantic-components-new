import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScPhoneInputDemoContainer } from './demos/phone-input-demo-container';
import { TocHeading } from '../../../components/toc/toc-heading';

@Component({
  selector: 'app-phone-input-page',
  imports: [ScPhoneInputDemoContainer, TocHeading],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">PhoneInput</h1>
        <p class="text-muted-foreground">
          Phone number input with country code selector and formatting options.
        </p>
      </div>

      <section class="space-y-8">
        <h2 toc class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-phone-input-demo-container />
      </section>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PhoneInputPage {}
