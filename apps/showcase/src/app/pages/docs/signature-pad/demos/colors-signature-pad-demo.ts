import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScSignaturePad,
  ScSignaturePadCanvas,
  ScSignaturePadControls,
  ScSignaturePadUndoButton,
  ScSignaturePadClearButton,
  ScSignaturePadToolbar,
  ScSignaturePadColorButton,
  ScSignaturePadWidthButton,
} from '@semantic-components/ui';
import { SiUndoIcon, SiTrash2Icon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-colors-signature-pad-demo',
  imports: [
    ScSignaturePad,
    ScSignaturePadCanvas,
    ScSignaturePadControls,
    ScSignaturePadUndoButton,
    ScSignaturePadClearButton,
    ScSignaturePadToolbar,
    ScSignaturePadColorButton,
    SiUndoIcon,
    SiTrash2Icon,
  ],
  template: `
    <div sc-signature-pad class="space-y-3">
      <div sc-signature-pad-toolbar>
        <button sc-signature-pad-pen-color [color]="'#000000'"></button>
        <button sc-signature-pad-pen-color [color]="'#1d4ed8'"></button>
        <button sc-signature-pad-pen-color [color]="'#dc2626'"></button>
        <button sc-signature-pad-pen-color [color]="'#16a34a'"></button>
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
export class ColorsSignaturePadDemo {}
