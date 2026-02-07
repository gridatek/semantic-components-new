import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScButton,
  ScDialogProvider,
  ScDialogClose,
  ScDialog,
  ScDialogDescription,
  ScDialogFooter,
  ScDialogHeader,
  ScDialogPortal,
  ScDialogTitle,
  ScDialogTrigger,
  ScField,
  ScFieldGroup,
  ScInput,
  ScLabel,
} from '@semantic-components/ui';

@Component({
  selector: 'app-dialog-demo',
  imports: [
    ScButton,
    ScDialogProvider,
    ScDialogClose,
    ScDialog,
    ScDialogDescription,
    ScDialogFooter,
    ScDialogHeader,
    ScDialogPortal,
    ScDialogTitle,
    ScDialogTrigger,
    ScField,
    ScFieldGroup,
    ScInput,
    ScLabel,
  ],
  template: `
    <div sc-dialog-provider>
      <button sc-dialog-trigger sc-button variant="outline">Open Dialog</button>
      <div sc-dialog-portal>
        <ng-template>
          <form>
            <div sc-dialog class="sm:max-w-sm">
              <div sc-dialog-header>
                <h2 sc-dialog-title>Edit profile</h2>
                <p sc-dialog-description>
                  Make changes to your profile here. Click save when you're
                  done.
                </p>
              </div>
              <div sc-field-group>
                <div sc-field orientation="horizontal">
                  <label sc-label>Name</label>
                  <input sc-input value="Pedro Duarte" />
                </div>
                <div sc-field orientation="horizontal">
                  <label sc-label>Username</label>
                  <input sc-input value="@peduarte" />
                </div>
              </div>
              <div sc-dialog-footer>
                <button sc-dialog-close sc-button variant="outline">
                  Cancel
                </button>
                <button sc-button type="submit">Save changes</button>
              </div>
            </div>
          </form>
        </ng-template>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDialogDemo {}
