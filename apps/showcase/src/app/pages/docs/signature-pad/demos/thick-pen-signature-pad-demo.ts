import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScSignaturePad,
  ScSignaturePadCanvas,
  ScSignaturePadControls,
  ScSignaturePadUndoButton,
  ScSignaturePadClearButton,
  ScSignaturePadToolbar,
  ScSignaturePadWidthButton,
} from '@semantic-components/ui';
import { SiUndoIcon, SiTrash2Icon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-thick-pen-signature-pad-demo',
  imports: [
    ScSignaturePad,
    ScSignaturePadCanvas,
    ScSignaturePadControls,
    ScSignaturePadUndoButton,
    ScSignaturePadClearButton,
    ScSignaturePadToolbar,
    ScSignaturePadWidthButton,
    SiUndoIcon,
    SiTrash2Icon,
  ],
  template: `
    <div sc-signature-pad class="space-y-3">
      <div sc-signature-pad-toolbar>
        <button sc-signature-pad-pen-width [width]="2"></button>
        <button sc-signature-pad-pen-width [width]="4"></button>
        <button sc-signature-pad-pen-width [width]="6"></button>
        <button sc-signature-pad-pen-width [width]="8"></button>
      </div>

      <div class="relative inline-block">
        <canvas sc-signature-pad-canvas [width]="400" [height]="200"></canvas>

        <div sc-signature-pad-controls>
          <button sc-signature-pad-undo>
            <svg si-undo-icon class="size-4"></svg>
          </button>
          <button sc-signature-pad-clear>
            <svg si-trash-2-icon class="size-4"></svg>
          </button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThickPenSignaturePadDemo {}
