import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_PDF_VIEWER } from './pdf-viewer-root';
import { ZOOM_LEVELS } from './pdf-viewer-types';

// Toolbar Container
@Component({
  selector: '[sc-pdf-viewer-toolbar]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-toolbar',
    role: 'toolbar',
    '[attr.aria-label]': '"PDF viewer toolbar"',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerToolbar {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'flex items-center gap-2 px-3 py-2 bg-background border-b',
      this.classInput(),
    ),
  );
}

// Navigation Group
@Component({
  selector: '[sc-pdf-viewer-nav]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-nav',
    role: 'group',
    '[attr.aria-label]': '"Page navigation"',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerNav {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex items-center gap-1', this.classInput()),
  );
}

// Previous Page Button
@Component({
  selector: 'button[sc-pdf-viewer-prev-page]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-prev-page',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!pdfViewer.canGoPrev()',
    '[attr.aria-label]': '"Previous page"',
    '(click)': 'pdfViewer.goToPrevPage()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerPrevPage {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'p-2 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
      this.classInput(),
    ),
  );
}

// Next Page Button
@Component({
  selector: 'button[sc-pdf-viewer-next-page]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-next-page',
    type: 'button',
    '[class]': 'class()',
    '[disabled]': '!pdfViewer.canGoNext()',
    '[attr.aria-label]': '"Next page"',
    '(click)': 'pdfViewer.goToNextPage()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerNextPage {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'p-2 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
      this.classInput(),
    ),
  );
}

// Page Info (input + total)
@Component({
  selector: '[sc-pdf-viewer-page-info]',
  template: `
    <input
      type="number"
      [value]="pdfViewer.currentPage()"
      (change)="onPageInput($event)"
      (keydown.enter)="onPageInput($event)"
      class="w-12 px-2 py-1 text-sm text-center border rounded bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      [attr.min]="1"
      [attr.max]="pdfViewer.totalPages()"
      aria-label="Current page"
    />
    <span class="text-sm text-muted-foreground">
      / {{ pdfViewer.totalPages() }}
    </span>
  `,
  host: {
    'data-slot': 'pdf-viewer-page-info',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerPageInfo {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex items-center gap-1 px-2', this.classInput()),
  );

  protected onPageInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const page = parseInt(input.value, 10);
    if (!isNaN(page) && page >= 1 && page <= this.pdfViewer.totalPages()) {
      this.pdfViewer.goToPage(page);
    } else {
      input.value = this.pdfViewer.currentPage().toString();
    }
  }
}

// Zoom Group
@Component({
  selector: '[sc-pdf-viewer-zoom]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-zoom',
    role: 'group',
    '[attr.aria-label]': '"Zoom controls"',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerZoom {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('flex items-center gap-1', this.classInput()),
  );
}

// Zoom In Button
@Component({
  selector: 'button[sc-pdf-viewer-zoom-in]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-zoom-in',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': '"Zoom in"',
    '(click)': 'pdfViewer.zoomIn()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerZoomIn {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'p-2 rounded-lg hover:bg-muted disabled:opacity-50 transition-colors',
      this.classInput(),
    ),
  );
}

// Zoom Out Button
@Component({
  selector: 'button[sc-pdf-viewer-zoom-out]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-zoom-out',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': '"Zoom out"',
    '(click)': 'pdfViewer.zoomOut()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerZoomOut {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'p-2 rounded-lg hover:bg-muted disabled:opacity-50 transition-colors',
      this.classInput(),
    ),
  );
}

// Zoom Select Dropdown
@Component({
  selector: 'select[sc-pdf-viewer-zoom-select]',
  template: `
    @for (level of zoomLevels; track level.value) {
      <option [value]="level.value">{{ level.label }}</option>
    }
  `,
  host: {
    'data-slot': 'pdf-viewer-zoom-select',
    '[class]': 'class()',
    '[value]': 'zoomLevelValue()',
    '[attr.aria-label]': '"Zoom level"',
    '(change)': 'onZoomSelect($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerZoomSelect {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly zoomLevels = ZOOM_LEVELS;

  protected readonly class = computed(() =>
    cn(
      'px-2 py-1.5 text-sm border rounded bg-background focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer',
      this.classInput(),
    ),
  );

  protected readonly zoomLevelValue = computed(() => {
    const z = this.pdfViewer.zoom();
    return typeof z === 'number' ? z.toString() : z;
  });

  protected onZoomSelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const value = select.value;

    if (value === 'auto' || value === 'page-fit' || value === 'page-width') {
      this.pdfViewer.setZoom(value);
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        this.pdfViewer.setZoom(numValue);
      }
    }
  }
}

// Rotate Left Button
@Component({
  selector: 'button[sc-pdf-viewer-rotate-left]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-rotate-left',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': '"Rotate left"',
    '(click)': 'pdfViewer.rotateLeft()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerRotateLeft {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('p-2 rounded-lg hover:bg-muted transition-colors', this.classInput()),
  );
}

// Rotate Right Button
@Component({
  selector: 'button[sc-pdf-viewer-rotate-right]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-rotate-right',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': '"Rotate right"',
    '(click)': 'pdfViewer.rotateRight()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerRotateRight {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('p-2 rounded-lg hover:bg-muted transition-colors', this.classInput()),
  );
}

// Download Button
@Component({
  selector: 'button[sc-pdf-viewer-download]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-download',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': '"Download PDF"',
    '(click)': 'pdfViewer.download()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerDownload {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('p-2 rounded-lg hover:bg-muted transition-colors', this.classInput()),
  );
}

// Print Button
@Component({
  selector: 'button[sc-pdf-viewer-print]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-print',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]': '"Print PDF"',
    '(click)': 'pdfViewer.print()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerPrint {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('p-2 rounded-lg hover:bg-muted transition-colors', this.classInput()),
  );
}

// Fullscreen Button
@Component({
  selector: 'button[sc-pdf-viewer-fullscreen]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'pdf-viewer-fullscreen',
    type: 'button',
    '[class]': 'class()',
    '[attr.aria-label]':
      'pdfViewer.isFullscreen() ? "Exit fullscreen" : "Enter fullscreen"',
    '[attr.aria-pressed]': 'pdfViewer.isFullscreen()',
    '(click)': 'pdfViewer.toggleFullscreen()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerFullscreen {
  readonly pdfViewer = inject(SC_PDF_VIEWER);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('p-2 rounded-lg hover:bg-muted transition-colors', this.classInput()),
  );
}

// Separator
@Component({
  selector: '[sc-pdf-viewer-separator]',
  template: ``,
  host: {
    'data-slot': 'pdf-viewer-separator',
    role: 'separator',
    '[attr.aria-orientation]': '"vertical"',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerSeparator {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('w-px h-6 bg-border', this.classInput()),
  );
}

// Spacer (pushes items to the right)
@Component({
  selector: '[sc-pdf-viewer-spacer]',
  template: ``,
  host: {
    'data-slot': 'pdf-viewer-spacer',
    '[class]': 'class()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPdfViewerSpacer {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() => cn('flex-1', this.classInput()));
}
