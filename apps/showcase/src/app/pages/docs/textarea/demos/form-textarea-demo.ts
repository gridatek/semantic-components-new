import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScInput, ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-form-textarea-demo',
  imports: [ScField, ScInput, ScLabel, ScTextarea],
  template: `
    <div class="rounded-lg border p-6 max-w-lg">
      <div class="space-y-4">
        <h4 class="font-semibold">Contact Us</h4>
        <div class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div sc-field>
              <label sc-label>Name</label>
              <input sc-input type="text" placeholder="Your name" />
            </div>
            <div sc-field>
              <label sc-label>Email</label>
              <input sc-input type="email" placeholder="your&#64;email.com" />
            </div>
          </div>
          <div sc-field>
            <label sc-label>Subject</label>
            <input sc-input type="text" placeholder="How can we help?" />
          </div>
          <div sc-field>
            <label sc-label>Message</label>
            <textarea
              sc-textarea
              rows="4"
              placeholder="Please describe your inquiry in detail..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTextareaDemo {}
