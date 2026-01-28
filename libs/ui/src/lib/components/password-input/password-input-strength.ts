import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  model,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScPasswordInput } from './password-input';

@Component({
  selector: 'sc-password-input-strength',
  exportAs: 'scPasswordInputStrength',
  template: `
    <div [class]="containerClass()">
      <sc-password-input
        [(value)]="value"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [autocomplete]="autocomplete()"
        class="w-full"
      />

      @if (showStrength() && value()) {
        <div class="mt-2 space-y-1">
          <div class="flex gap-1">
            @for (i of [0, 1, 2, 3]; track i) {
              <div [class]="strengthBarClass(i)"></div>
            }
          </div>
          <p [class]="strengthTextClass()">
            {{ strengthLabel() }}
          </p>
        </div>
      }

      @if (showRequirements() && value()) {
        <ul class="mt-2 space-y-1 text-xs">
          @for (req of requirements(); track req.label) {
            <li [class]="requirementClass(req.test(value()))">
              @if (req.test(value())) {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="inline size-3 mr-1"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              } @else {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="inline size-3 mr-1"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              }
              {{ req.label }}
            </li>
          }
        </ul>
      }
    </div>
  `,
  host: {
    'data-slot': 'password-input-strength',
  },
  imports: [ScPasswordInput],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPasswordInputStrength {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly placeholder = input<string>('Enter password');
  readonly disabled = input<boolean>(false);
  readonly autocomplete = input<string>('new-password');
  readonly showStrength = input<boolean>(true);
  readonly showRequirements = input<boolean>(true);
  readonly minLength = input<number>(8);

  readonly value = model<string>('');
  readonly strengthChange = output<number>();

  protected readonly requirements = computed(() => {
    const min = this.minLength();
    return [
      {
        label: `At least ${min} characters`,
        test: (v: string) => v.length >= min,
      },
      {
        label: 'Contains uppercase letter',
        test: (v: string) => /[A-Z]/.test(v),
      },
      {
        label: 'Contains lowercase letter',
        test: (v: string) => /[a-z]/.test(v),
      },
      { label: 'Contains number', test: (v: string) => /\d/.test(v) },
      {
        label: 'Contains special character',
        test: (v: string) => /[!@#$%^&*(),.?":{}|<>]/.test(v),
      },
    ];
  });

  protected readonly strength = computed(() => {
    const password = this.value();
    const min = this.minLength();
    if (!password) return 0;

    let score = 0;
    if (password.length >= min) score++;
    if (password.length >= min + 4) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    // Map to 0-4 scale
    if (score <= 2) return 0;
    if (score <= 3) return 1;
    if (score <= 4) return 2;
    if (score <= 5) return 3;
    return 4;
  });

  private readonly strengthEmitEffect = effect(() => {
    const strength = this.strength();
    this.strengthChange.emit(strength);
  });

  protected readonly strengthLabel = computed(() => {
    const labels = ['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'];
    return labels[this.strength()];
  });

  protected readonly containerClass = computed(() =>
    cn('w-full', this.classInput()),
  );

  protected strengthBarClass(index: number): string {
    const strength = this.strength();
    const colors = [
      'bg-red-500',
      'bg-orange-500',
      'bg-yellow-500',
      'bg-lime-500',
      'bg-green-500',
    ];

    return cn(
      'h-1 flex-1 rounded-full transition-colors',
      index <= strength ? colors[strength] : 'bg-muted',
    );
  }

  protected readonly strengthTextClass = computed(() => {
    const strength = this.strength();
    const colors = [
      'text-red-500',
      'text-orange-500',
      'text-yellow-500',
      'text-lime-500',
      'text-green-500',
    ];
    return cn('text-xs', colors[strength]);
  });

  protected requirementClass(met: boolean): string {
    return cn(
      'flex items-center',
      met ? 'text-green-600' : 'text-muted-foreground',
    );
  }
}
