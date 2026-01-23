import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScStepper,
  ScStepperList,
  ScStepperItem,
  ScStepperTrigger,
  ScStepperSeparator,
  ScStepperContent,
  ScStepperTitle,
  ScStepperDescription,
  ScStepperPrevious,
  ScStepperNext,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-stepper-demo',
  imports: [
    ScStepper,
    ScStepperList,
    ScStepperItem,
    ScStepperTrigger,
    ScStepperSeparator,
    ScStepperContent,
    ScStepperTitle,
    ScStepperDescription,
    ScStepperPrevious,
    ScStepperNext,
  ],
  template: `
    <div class="space-y-8">
      <!-- Basic Horizontal Stepper -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Horizontal</h3>
        <div class="rounded-lg border p-6">
          <div sc-stepper [(activeStep)]="horizontalStep">
            <div sc-stepper-list>
              <div sc-stepper-item [step]="0">
                <button sc-stepper-trigger></button>
                <div class="flex flex-col">
                  <span sc-stepper-title>Account</span>
                  <span sc-stepper-description>Create your account</span>
                </div>
              </div>
              <div sc-stepper-separator></div>
              <div sc-stepper-item [step]="1">
                <button sc-stepper-trigger></button>
                <div class="flex flex-col">
                  <span sc-stepper-title>Profile</span>
                  <span sc-stepper-description>Set up your profile</span>
                </div>
              </div>
              <div sc-stepper-separator></div>
              <div sc-stepper-item [step]="2">
                <button sc-stepper-trigger></button>
                <div class="flex flex-col">
                  <span sc-stepper-title>Complete</span>
                  <span sc-stepper-description>Review and submit</span>
                </div>
              </div>
            </div>

            <div sc-stepper-content [step]="0">
              <div class="space-y-4">
                <div class="space-y-2">
                  <label class="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            <div sc-stepper-content [step]="1">
              <div class="space-y-4">
                <div class="space-y-2">
                  <label class="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium">Bio</label>
                  <textarea
                    placeholder="Tell us about yourself"
                    rows="3"
                    class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  ></textarea>
                </div>
              </div>
            </div>

            <div sc-stepper-content [step]="2">
              <div class="space-y-4">
                <p class="text-sm text-muted-foreground">
                  Review your information and click submit to complete
                  registration.
                </p>
                <div class="rounded-lg bg-muted p-4">
                  <p class="text-sm">All steps completed! Ready to submit.</p>
                </div>
              </div>
            </div>

            <div class="mt-6 flex justify-between">
              <button sc-stepper-previous>Previous</button>
              <button sc-stepper-next>
                {{ horizontalStep() === 2 ? 'Submit' : 'Next' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Vertical Stepper -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Vertical Orientation</h3>
        <div class="max-w-md rounded-lg border p-6">
          <div sc-stepper orientation="vertical" [(activeStep)]="verticalStep">
            <div sc-stepper-list>
              <div sc-stepper-item [step]="0">
                <button sc-stepper-trigger></button>
                <div class="flex flex-col pb-4">
                  <span sc-stepper-title>Step 1</span>
                  <span sc-stepper-description>First step description</span>
                  @if (verticalStep() === 0) {
                    <div class="mt-4 rounded-lg bg-muted p-4">
                      <p class="text-sm">Content for step 1</p>
                    </div>
                  }
                </div>
                <div sc-stepper-separator></div>
              </div>
              <div sc-stepper-item [step]="1">
                <button sc-stepper-trigger></button>
                <div class="flex flex-col pb-4">
                  <span sc-stepper-title>Step 2</span>
                  <span sc-stepper-description>Second step description</span>
                  @if (verticalStep() === 1) {
                    <div class="mt-4 rounded-lg bg-muted p-4">
                      <p class="text-sm">Content for step 2</p>
                    </div>
                  }
                </div>
                <div sc-stepper-separator></div>
              </div>
              <div sc-stepper-item [step]="2">
                <button sc-stepper-trigger></button>
                <div class="flex flex-col">
                  <span sc-stepper-title>Step 3</span>
                  <span sc-stepper-description>Final step description</span>
                  @if (verticalStep() === 2) {
                    <div class="mt-4 rounded-lg bg-muted p-4">
                      <p class="text-sm">Content for step 3</p>
                    </div>
                  }
                </div>
              </div>
            </div>

            <div class="mt-6 flex justify-between">
              <button sc-stepper-previous>Previous</button>
              <button sc-stepper-next>Next</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Simple Stepper -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Simple Steps</h3>
        <div class="rounded-lg border p-6">
          <div sc-stepper [(activeStep)]="simpleStep">
            <div sc-stepper-list>
              <div sc-stepper-item [step]="0">
                <button sc-stepper-trigger></button>
              </div>
              <div sc-stepper-separator></div>
              <div sc-stepper-item [step]="1">
                <button sc-stepper-trigger></button>
              </div>
              <div sc-stepper-separator></div>
              <div sc-stepper-item [step]="2">
                <button sc-stepper-trigger></button>
              </div>
              <div sc-stepper-separator></div>
              <div sc-stepper-item [step]="3">
                <button sc-stepper-trigger></button>
              </div>
            </div>

            <div class="mt-6 flex justify-center gap-2">
              <button sc-stepper-previous>Back</button>
              <button sc-stepper-next>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScStepperDemo {
  readonly horizontalStep = signal(0);
  readonly verticalStep = signal(0);
  readonly simpleStep = signal(0);
}
