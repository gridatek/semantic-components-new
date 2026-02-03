import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScField,
  ScLabel,
  ScFieldError,
  ScFieldErrorItem,
} from '@semantic-components/ui';

@Component({
  selector: 'app-error-field-demo',
  imports: [ScField, ScLabel, ScFieldError],
  template: `
    <div class="space-y-4">
      <div sc-field [invalid]="singleError().length > 0">
        <label sc-label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
        />
        <div sc-field-error [errors]="singleError()"></div>
      </div>

      <div sc-field [invalid]="multipleErrors().length > 0">
        <label sc-label for="password2">Password (Multiple Errors)</label>
        <input
          id="password2"
          type="password"
          placeholder="Enter password"
        />
        @if (multipleErrors().length === 1) {
          <div sc-field-error [errors]="multipleErrors()"></div>
        } @else if (multipleErrors().length > 1) {
          <div sc-field-error>
            <ul class="ml-4 flex list-disc flex-col gap-1">
              @for (error of multipleErrors(); track error.message) {
                <li>{{ error.message }}</li>
              }
            </ul>
          </div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorFieldDemo {
  readonly singleError = signal<ScFieldErrorItem[]>([
    { message: 'Password is required' },
  ]);

  readonly multipleErrors = signal<ScFieldErrorItem[]>([
    { message: 'Password must be at least 8 characters' },
    { message: 'Password must contain a number' },
    { message: 'Password must contain a special character' },
  ]);
}
