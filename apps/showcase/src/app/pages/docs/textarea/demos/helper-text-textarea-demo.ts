import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-helper-text-textarea-demo',
  imports: [ScTextarea, ScLabel],
  template: `
    <div class="grid w-full gap-1.5">
      <label sc-label for="bio">Bio</label>
      <textarea
        sc-textarea
        id="bio"
        placeholder="Tell us about yourself"
      ></textarea>
      <p class="text-sm text-muted-foreground">
        Your bio will be visible on your public profile.
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelperTextTextareaDemo {}
