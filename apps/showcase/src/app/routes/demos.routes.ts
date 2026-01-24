import { Route } from '@angular/router';

export const demosRoutes: Route[] = [
  {
    path: 'demos/accordion',
    children: [
      {
        path: 'basic-accordion-demo',
        loadComponent: () =>
          import('../pages/docs/accordion/demos/basic-accordion-demo').then(
            (m) => m.BasicAccordionDemo,
          ),
      },
      {
        path: 'disabled-accordion-demo',
        loadComponent: () =>
          import('../pages/docs/accordion/demos/disabled-accordion-demo').then(
            (m) => m.DisabledAccordionDemo,
          ),
      },
      {
        path: 'multiple-accordion-demo',
        loadComponent: () =>
          import('../pages/docs/accordion/demos/multiple-accordion-demo').then(
            (m) => m.MultipleAccordionDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/alert',
    children: [
      {
        path: 'default-alert-demo',
        loadComponent: () =>
          import('../pages/docs/alert/demos/default-alert-demo').then(
            (m) => m.DefaultAlertDemo,
          ),
      },
      {
        path: 'destructive-alert-demo',
        loadComponent: () =>
          import('../pages/docs/alert/demos/destructive-alert-demo').then(
            (m) => m.DestructiveAlertDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/alert-dialog',
    children: [
      {
        path: 'basic-alert-dialog-demo',
        loadComponent: () =>
          import('../pages/docs/alert-dialog/demos/basic-alert-dialog-demo').then(
            (m) => m.BasicAlertDialogDemo,
          ),
      },
      {
        path: 'destructive-alert-dialog-demo',
        loadComponent: () =>
          import('../pages/docs/alert-dialog/demos/destructive-alert-dialog-demo').then(
            (m) => m.DestructiveAlertDialogDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/animated-counter',
    children: [
      {
        path: 'basic-animated-counter-demo',
        loadComponent: () =>
          import('../pages/docs/animated-counter/demos/basic-animated-counter-demo').then(
            (m) => m.BasicAnimatedCounterDemo,
          ),
      },
      {
        path: 'easing-animated-counter-demo',
        loadComponent: () =>
          import('../pages/docs/animated-counter/demos/easing-animated-counter-demo').then(
            (m) => m.EasingAnimatedCounterDemo,
          ),
      },
      {
        path: 'prefix-animated-counter-demo',
        loadComponent: () =>
          import('../pages/docs/animated-counter/demos/prefix-animated-counter-demo').then(
            (m) => m.PrefixAnimatedCounterDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/aspect-ratio',
    children: [
      {
        path: 'sixteen-nine-aspect-ratio-demo',
        loadComponent: () =>
          import('../pages/docs/aspect-ratio/demos/sixteen-nine-aspect-ratio-demo').then(
            (m) => m.SixteenNineAspectRatioDemo,
          ),
      },
      {
        path: 'four-three-aspect-ratio-demo',
        loadComponent: () =>
          import('../pages/docs/aspect-ratio/demos/four-three-aspect-ratio-demo').then(
            (m) => m.FourThreeAspectRatioDemo,
          ),
      },
      {
        path: 'square-aspect-ratio-demo',
        loadComponent: () =>
          import('../pages/docs/aspect-ratio/demos/square-aspect-ratio-demo').then(
            (m) => m.SquareAspectRatioDemo,
          ),
      },
      {
        path: 'ultrawide-aspect-ratio-demo',
        loadComponent: () =>
          import('../pages/docs/aspect-ratio/demos/ultrawide-aspect-ratio-demo').then(
            (m) => m.UltrawideAspectRatioDemo,
          ),
      },
      {
        path: 'portrait-aspect-ratio-demo',
        loadComponent: () =>
          import('../pages/docs/aspect-ratio/demos/portrait-aspect-ratio-demo').then(
            (m) => m.PortraitAspectRatioDemo,
          ),
      },
      {
        path: 'placeholder-aspect-ratio-demo',
        loadComponent: () =>
          import('../pages/docs/aspect-ratio/demos/placeholder-aspect-ratio-demo').then(
            (m) => m.PlaceholderAspectRatioDemo,
          ),
      },
      {
        path: 'video-aspect-ratio-demo',
        loadComponent: () =>
          import('../pages/docs/aspect-ratio/demos/video-aspect-ratio-demo').then(
            (m) => m.VideoAspectRatioDemo,
          ),
      },
      {
        path: 'map-aspect-ratio-demo',
        loadComponent: () =>
          import('../pages/docs/aspect-ratio/demos/map-aspect-ratio-demo').then(
            (m) => m.MapAspectRatioDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/audio-player',
    children: [
      {
        path: 'basic-audio-player-demo',
        loadComponent: () =>
          import('../pages/docs/audio-player/demos/basic-audio-player-demo').then(
            (m) => m.BasicAudioPlayerDemo,
          ),
      },
      {
        path: 'compact-audio-player-demo',
        loadComponent: () =>
          import('../pages/docs/audio-player/demos/compact-audio-player-demo').then(
            (m) => m.CompactAudioPlayerDemo,
          ),
      },
      {
        path: 'minimal-audio-player-demo',
        loadComponent: () =>
          import('../pages/docs/audio-player/demos/minimal-audio-player-demo').then(
            (m) => m.MinimalAudioPlayerDemo,
          ),
      },
      {
        path: 'no-cover-audio-player-demo',
        loadComponent: () =>
          import('../pages/docs/audio-player/demos/no-cover-audio-player-demo').then(
            (m) => m.NoCoverAudioPlayerDemo,
          ),
      },
      {
        path: 'single-track-audio-player-demo',
        loadComponent: () =>
          import('../pages/docs/audio-player/demos/single-track-audio-player-demo').then(
            (m) => m.SingleTrackAudioPlayerDemo,
          ),
      },
      {
        path: 'podcast-audio-player-demo',
        loadComponent: () =>
          import('../pages/docs/audio-player/demos/podcast-audio-player-demo').then(
            (m) => m.PodcastAudioPlayerDemo,
          ),
      },
      {
        path: 'controlled-audio-player-demo',
        loadComponent: () =>
          import('../pages/docs/audio-player/demos/controlled-audio-player-demo').then(
            (m) => m.ControlledAudioPlayerDemo,
          ),
      },
      {
        path: 'keyboard-audio-player-demo',
        loadComponent: () =>
          import('../pages/docs/audio-player/demos/keyboard-audio-player-demo').then(
            (m) => m.KeyboardAudioPlayerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/avatar',
    children: [
      {
        path: 'basic-avatar-demo',
        loadComponent: () =>
          import('../pages/docs/avatar/demos/basic-avatar-demo').then(
            (m) => m.BasicAvatarDemo,
          ),
      },
      {
        path: 'fallback-avatar-demo',
        loadComponent: () =>
          import('../pages/docs/avatar/demos/fallback-avatar-demo').then(
            (m) => m.FallbackAvatarDemo,
          ),
      },
      {
        path: 'sizes-avatar-demo',
        loadComponent: () =>
          import('../pages/docs/avatar/demos/sizes-avatar-demo').then(
            (m) => m.SizesAvatarDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/avatar-group',
    children: [
      {
        path: 'basic-avatar-group-demo',
        loadComponent: () =>
          import('../pages/docs/avatar-group/demos/basic-avatar-group-demo').then(
            (m) => m.BasicAvatarGroupDemo,
          ),
      },
      {
        path: 'sizes-avatar-group-demo',
        loadComponent: () =>
          import('../pages/docs/avatar-group/demos/sizes-avatar-group-demo').then(
            (m) => m.SizesAvatarGroupDemo,
          ),
      },
      {
        path: 'spacing-avatar-group-demo',
        loadComponent: () =>
          import('../pages/docs/avatar-group/demos/spacing-avatar-group-demo').then(
            (m) => m.SpacingAvatarGroupDemo,
          ),
      },
      {
        path: 'max-count-avatar-group-demo',
        loadComponent: () =>
          import('../pages/docs/avatar-group/demos/max-count-avatar-group-demo').then(
            (m) => m.MaxCountAvatarGroupDemo,
          ),
      },
      {
        path: 'fallback-avatar-group-demo',
        loadComponent: () =>
          import('../pages/docs/avatar-group/demos/fallback-avatar-group-demo').then(
            (m) => m.FallbackAvatarGroupDemo,
          ),
      },
      {
        path: 'team-avatar-group-demo',
        loadComponent: () =>
          import('../pages/docs/avatar-group/demos/team-avatar-group-demo').then(
            (m) => m.TeamAvatarGroupDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/badge',
    children: [
      {
        path: 'variants-badge-demo',
        loadComponent: () =>
          import('../pages/docs/badge/demos/variants-badge-demo').then(
            (m) => m.VariantsBadgeDemo,
          ),
      },
      {
        path: 'with-icons-badge-demo',
        loadComponent: () =>
          import('../pages/docs/badge/demos/with-icons-badge-demo').then(
            (m) => m.WithIconsBadgeDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/barcode-scanner',
    children: [
      {
        path: 'basic-barcode-scanner-demo',
        loadComponent: () =>
          import('../pages/docs/barcode-scanner/demos/basic-barcode-scanner-demo').then(
            (m) => m.BasicBarcodeScannerDemo,
          ),
      },
      {
        path: 'qr-code-barcode-scanner-demo',
        loadComponent: () =>
          import('../pages/docs/barcode-scanner/demos/qr-code-barcode-scanner-demo').then(
            (m) => m.QrCodeBarcodeScannerDemo,
          ),
      },
      {
        path: 'product-barcode-scanner-demo',
        loadComponent: () =>
          import('../pages/docs/barcode-scanner/demos/product-barcode-scanner-demo').then(
            (m) => m.ProductBarcodeScannerDemo,
          ),
      },
      {
        path: 'single-scan-barcode-scanner-demo',
        loadComponent: () =>
          import('../pages/docs/barcode-scanner/demos/single-scan-barcode-scanner-demo').then(
            (m) => m.SingleScanBarcodeScannerDemo,
          ),
      },
      {
        path: 'history-barcode-scanner-demo',
        loadComponent: () =>
          import('../pages/docs/barcode-scanner/demos/history-barcode-scanner-demo').then(
            (m) => m.HistoryBarcodeScannerDemo,
          ),
      },
      {
        path: 'formats-barcode-scanner-demo',
        loadComponent: () =>
          import('../pages/docs/barcode-scanner/demos/formats-barcode-scanner-demo').then(
            (m) => m.FormatsBarcodeScannerDemo,
          ),
      },
      {
        path: 'browser-support-barcode-scanner-demo',
        loadComponent: () =>
          import('../pages/docs/barcode-scanner/demos/browser-support-barcode-scanner-demo').then(
            (m) => m.BrowserSupportBarcodeScannerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/breadcrumb',
    children: [
      {
        path: 'breadcrumb-demo',
        loadComponent: () =>
          import('../pages/docs/breadcrumb/demos/breadcrumb-demo').then(
            (m) => m.ScBreadcrumbDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/button',
    children: [
      {
        path: 'button-demo',
        loadComponent: () =>
          import('../pages/docs/button/demos/button-demo').then(
            (m) => m.ScButtonDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/calendar',
    children: [
      {
        path: 'calendar-demo',
        loadComponent: () =>
          import('../pages/docs/calendar/demos/calendar-demo').then(
            (m) => m.ScCalendarDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/card',
    children: [
      {
        path: 'card-demo',
        loadComponent: () =>
          import('../pages/docs/card/demos/card-demo').then(
            (m) => m.ScCardDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/carousel',
    children: [
      {
        path: 'carousel-demo',
        loadComponent: () =>
          import('../pages/docs/carousel/demos/carousel-demo').then(
            (m) => m.ScCarouselDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/chart',
    children: [
      {
        path: 'chart-demo',
        loadComponent: () =>
          import('../pages/docs/chart/demos/chart-demo').then(
            (m) => m.ScChartDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/checkbox',
    children: [
      {
        path: 'checkbox-demo',
        loadComponent: () =>
          import('../pages/docs/checkbox/demos/checkbox-demo').then(
            (m) => m.ScCheckboxDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/code-editor',
    children: [
      {
        path: 'code-editor-demo',
        loadComponent: () =>
          import('../pages/docs/code-editor/demos/code-editor-demo').then(
            (m) => m.CodeEditorDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/collapsible',
    children: [
      {
        path: 'collapsible-demo',
        loadComponent: () =>
          import('../pages/docs/collapsible/demos/collapsible-demo').then(
            (m) => m.ScCollapsibleDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/color-picker',
    children: [
      {
        path: 'color-picker-demo',
        loadComponent: () =>
          import('../pages/docs/color-picker/demos/color-picker-demo').then(
            (m) => m.ScColorPickerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/combobox',
    children: [
      {
        path: 'combobox-demo',
        loadComponent: () =>
          import('../pages/docs/combobox/demos/combobox-demo').then(
            (m) => m.ScComboboxDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/command',
    children: [
      {
        path: 'command-demo',
        loadComponent: () =>
          import('../pages/docs/command/demos/command-demo').then(
            (m) => m.ScCommandDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/confetti',
    children: [
      {
        path: 'confetti-demo',
        loadComponent: () =>
          import('../pages/docs/confetti/demos/confetti-demo').then(
            (m) => m.ConfettiDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/context-menu',
    children: [
      {
        path: 'context-menu-demo',
        loadComponent: () =>
          import('../pages/docs/context-menu/demos/context-menu-demo').then(
            (m) => m.ScContextMenuDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/copy-button',
    children: [
      {
        path: 'copy-button-demo',
        loadComponent: () =>
          import('../pages/docs/copy-button/demos/copy-button-demo').then(
            (m) => m.ScCopyButtonDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/countdown',
    children: [
      {
        path: 'countdown-demo',
        loadComponent: () =>
          import('../pages/docs/countdown/demos/countdown-demo').then(
            (m) => m.ScCountdownDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/data-table',
    children: [
      {
        path: 'data-table-demo',
        loadComponent: () =>
          import('../pages/docs/data-table/demos/data-table-demo').then(
            (m) => m.ScDataTableDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/date-picker',
    children: [
      {
        path: 'date-picker-demo',
        loadComponent: () =>
          import('../pages/docs/date-picker/demos/date-picker-demo').then(
            (m) => m.ScDatePickerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/date-range-picker',
    children: [
      {
        path: 'date-range-picker-demo',
        loadComponent: () =>
          import('../pages/docs/date-range-picker/demos/date-range-picker-demo').then(
            (m) => m.ScDateRangePickerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/dialog',
    children: [
      {
        path: 'dialog-demo',
        loadComponent: () =>
          import('../pages/docs/dialog/demos/dialog-demo').then(
            (m) => m.ScDialogDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/diff-viewer',
    children: [
      {
        path: 'diff-viewer-demo',
        loadComponent: () =>
          import('../pages/docs/diff-viewer/demos/diff-viewer-demo').then(
            (m) => m.DiffViewerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/dock',
    children: [
      {
        path: 'dock-demo',
        loadComponent: () =>
          import('../pages/docs/dock/demos/dock-demo').then((m) => m.DockDemo),
      },
    ],
  },
  {
    path: 'demos/drawer',
    children: [
      {
        path: 'basic-drawer-demo',
        loadComponent: () =>
          import('../pages/docs/drawer/demos/basic-drawer-demo').then(
            (m) => m.BasicDrawerDemo,
          ),
      },
      {
        path: 'top-drawer-demo',
        loadComponent: () =>
          import('../pages/docs/drawer/demos/top-drawer-demo').then(
            (m) => m.TopDrawerDemo,
          ),
      },
      {
        path: 'left-drawer-demo',
        loadComponent: () =>
          import('../pages/docs/drawer/demos/left-drawer-demo').then(
            (m) => m.LeftDrawerDemo,
          ),
      },
      {
        path: 'right-drawer-demo',
        loadComponent: () =>
          import('../pages/docs/drawer/demos/right-drawer-demo').then(
            (m) => m.RightDrawerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/emoji-picker',
    children: [
      {
        path: 'emoji-picker-demo',
        loadComponent: () =>
          import('../pages/docs/emoji-picker/demos/emoji-picker-demo').then(
            (m) => m.ScEmojiPickerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/empty-state',
    children: [
      {
        path: 'empty-state-demo',
        loadComponent: () =>
          import('../pages/docs/empty-state/demos/empty-state-demo').then(
            (m) => m.EmptyStateDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/file-upload',
    children: [
      {
        path: 'file-upload-demo',
        loadComponent: () =>
          import('../pages/docs/file-upload/demos/file-upload-demo').then(
            (m) => m.ScFileUploadDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/form',
    children: [
      {
        path: 'form-demo',
        loadComponent: () =>
          import('../pages/docs/form/demos/form-demo').then(
            (m) => m.ScFormDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/hover-card',
    children: [
      {
        path: 'basic-hover-card-demo',
        loadComponent: () =>
          import('../pages/docs/hover-card/demos/basic-hover-card-demo').then(
            (m) => m.BasicHoverCardDemo,
          ),
      },
      {
        path: 'right-hover-card-demo',
        loadComponent: () =>
          import('../pages/docs/hover-card/demos/right-hover-card-demo').then(
            (m) => m.RightHoverCardDemo,
          ),
      },
      {
        path: 'top-hover-card-demo',
        loadComponent: () =>
          import('../pages/docs/hover-card/demos/top-hover-card-demo').then(
            (m) => m.TopHoverCardDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/image-annotator',
    children: [
      {
        path: 'image-annotator-demo',
        loadComponent: () =>
          import('../pages/docs/image-annotator/demos/image-annotator-demo').then(
            (m) => m.ImageAnnotatorDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/image-compare',
    children: [
      {
        path: 'image-compare-demo',
        loadComponent: () =>
          import('../pages/docs/image-compare/demos/image-compare-demo').then(
            (m) => m.ScImageCompareDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/image-cropper',
    children: [
      {
        path: 'image-cropper-demo',
        loadComponent: () =>
          import('../pages/docs/image-cropper/demos/image-cropper-demo').then(
            (m) => m.ScImageCropperDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/infinite-scroll',
    children: [
      {
        path: 'infinite-scroll-demo',
        loadComponent: () =>
          import('../pages/docs/infinite-scroll/demos/infinite-scroll-demo').then(
            (m) => m.ScInfiniteScrollDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/input',
    children: [
      {
        path: 'input-demo',
        loadComponent: () =>
          import('../pages/docs/input/demos/input-demo').then(
            (m) => m.ScInputDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/input-otp',
    children: [
      {
        path: 'input-otp-demo',
        loadComponent: () =>
          import('../pages/docs/input-otp/demos/input-otp-demo').then(
            (m) => m.ScInputOtpDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/kanban-board',
    children: [
      {
        path: 'kanban-board-demo',
        loadComponent: () =>
          import('../pages/docs/kanban-board/demos/kanban-board-demo').then(
            (m) => m.KanbanBoardDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/kbd',
    children: [
      {
        path: 'kbd-demo',
        loadComponent: () =>
          import('../pages/docs/kbd/demos/kbd-demo').then((m) => m.ScKbdDemo),
      },
    ],
  },
  {
    path: 'demos/label',
    children: [
      {
        path: 'label-demo',
        loadComponent: () =>
          import('../pages/docs/label/demos/label-demo').then(
            (m) => m.ScLabelDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/language-switcher',
    children: [
      {
        path: 'language-switcher-demo',
        loadComponent: () =>
          import('../pages/docs/language-switcher/demos/language-switcher-demo').then(
            (m) => m.ScLanguageSwitcherDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/lightbox',
    children: [
      {
        path: 'lightbox-demo',
        loadComponent: () =>
          import('../pages/docs/lightbox/demos/lightbox-demo').then(
            (m) => m.ScLightboxDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/marquee',
    children: [
      {
        path: 'marquee-demo',
        loadComponent: () =>
          import('../pages/docs/marquee/demos/marquee-demo').then(
            (m) => m.ScMarqueeDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/masonry-grid',
    children: [
      {
        path: 'masonry-grid-demo',
        loadComponent: () =>
          import('../pages/docs/masonry-grid/demos/masonry-grid-demo').then(
            (m) => m.MasonryGridDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/mention-input',
    children: [
      {
        path: 'mention-input-demo',
        loadComponent: () =>
          import('../pages/docs/mention-input/demos/mention-input-demo').then(
            (m) => m.ScMentionInputDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/menu',
    children: [
      {
        path: 'menu-demo',
        loadComponent: () =>
          import('../pages/docs/menu/demos/menu-demo').then(
            (m) => m.ScMenuDemo,
          ),
      },
      {
        path: 'menu-shortcuts-demo',
        loadComponent: () =>
          import('../pages/docs/menu/demos/menu-shortcuts-demo').then(
            (m) => m.MenuShortcutsDemo,
          ),
      },
      {
        path: 'menu-tools-demo',
        loadComponent: () =>
          import('../pages/docs/menu/demos/menu-tools-demo').then(
            (m) => m.MenuToolsDemo,
          ),
      },
      {
        path: 'menu-avatar-demo',
        loadComponent: () =>
          import('../pages/docs/menu/demos/menu-avatar-demo').then(
            (m) => m.MenuAvatarDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/multi-select',
    children: [
      {
        path: 'multi-select-demo',
        loadComponent: () =>
          import('../pages/docs/multi-select/demos/multi-select-demo').then(
            (m) => m.ScMultiSelectDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/navigation-menu',
    children: [
      {
        path: 'navigation-menu-demo',
        loadComponent: () =>
          import('../pages/docs/navigation-menu/demos/navigation-menu-demo').then(
            (m) => m.ScNavigationMenuDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/notification-center',
    children: [
      {
        path: 'notification-center-demo',
        loadComponent: () =>
          import('../pages/docs/notification-center/demos/notification-center-demo').then(
            (m) => m.NotificationCenterDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/number-input',
    children: [
      {
        path: 'number-input-demo',
        loadComponent: () =>
          import('../pages/docs/number-input/demos/number-input-demo').then(
            (m) => m.ScNumberInputDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/org-chart',
    children: [
      {
        path: 'org-chart-demo',
        loadComponent: () =>
          import('../pages/docs/org-chart/demos/org-chart-demo').then(
            (m) => m.OrgChartDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/pagination',
    children: [
      {
        path: 'pagination-demo',
        loadComponent: () =>
          import('../pages/docs/pagination/demos/pagination-demo').then(
            (m) => m.ScPaginationDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/password-input',
    children: [
      {
        path: 'password-input-demo',
        loadComponent: () =>
          import('../pages/docs/password-input/demos/password-input-demo').then(
            (m) => m.ScPasswordInputDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/pdf-viewer',
    children: [
      {
        path: 'pdf-viewer-demo',
        loadComponent: () =>
          import('../pages/docs/pdf-viewer/demos/pdf-viewer-demo').then(
            (m) => m.PdfViewerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/phone-input',
    children: [
      {
        path: 'phone-input-demo',
        loadComponent: () =>
          import('../pages/docs/phone-input/demos/phone-input-demo').then(
            (m) => m.ScPhoneInputDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/popover',
    children: [
      {
        path: 'basic-popover-demo',
        loadComponent: () =>
          import('../pages/docs/popover/demos/basic-popover-demo').then(
            (m) => m.BasicPopoverDemo,
          ),
      },
      {
        path: 'top-popover-demo',
        loadComponent: () =>
          import('../pages/docs/popover/demos/top-popover-demo').then(
            (m) => m.TopPopoverDemo,
          ),
      },
      {
        path: 'right-popover-demo',
        loadComponent: () =>
          import('../pages/docs/popover/demos/right-popover-demo').then(
            (m) => m.RightPopoverDemo,
          ),
      },
      {
        path: 'left-popover-demo',
        loadComponent: () =>
          import('../pages/docs/popover/demos/left-popover-demo').then(
            (m) => m.LeftPopoverDemo,
          ),
      },
      {
        path: 'align-start-popover-demo',
        loadComponent: () =>
          import('../pages/docs/popover/demos/align-start-popover-demo').then(
            (m) => m.AlignStartPopoverDemo,
          ),
      },
      {
        path: 'align-end-popover-demo',
        loadComponent: () =>
          import('../pages/docs/popover/demos/align-end-popover-demo').then(
            (m) => m.AlignEndPopoverDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/progress',
    children: [
      {
        path: 'progress-demo',
        loadComponent: () =>
          import('../pages/docs/progress/demos/progress-demo').then(
            (m) => m.ScProgressDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/qr-code',
    children: [
      {
        path: 'qr-code-demo',
        loadComponent: () =>
          import('../pages/docs/qr-code/demos/qr-code-demo').then(
            (m) => m.ScQrCodeDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/radio-group',
    children: [
      {
        path: 'radio-group-demo',
        loadComponent: () =>
          import('../pages/docs/radio-group/demos/radio-group-demo').then(
            (m) => m.ScRadioGroupDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/rating',
    children: [
      {
        path: 'rating-demo',
        loadComponent: () =>
          import('../pages/docs/rating/demos/rating-demo').then(
            (m) => m.ScRatingDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/resizable',
    children: [
      {
        path: 'resizable-demo',
        loadComponent: () =>
          import('../pages/docs/resizable/demos/resizable-demo').then(
            (m) => m.ScResizableDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/rich-text-editor',
    children: [
      {
        path: 'rich-text-editor-demo',
        loadComponent: () =>
          import('../pages/docs/rich-text-editor/demos/rich-text-editor-demo').then(
            (m) => m.RichTextEditorDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/scroll-area',
    children: [
      {
        path: 'scroll-area-demo',
        loadComponent: () =>
          import('../pages/docs/scroll-area/demos/scroll-area-demo').then(
            (m) => m.ScScrollAreaDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/search-input',
    children: [
      {
        path: 'search-input-demo',
        loadComponent: () =>
          import('../pages/docs/search-input/demos/search-input-demo').then(
            (m) => m.SearchInputDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/select',
    children: [
      {
        path: 'select-demo',
        loadComponent: () =>
          import('../pages/docs/select/demos/select-demo').then(
            (m) => m.ScSelectDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/separator',
    children: [
      {
        path: 'separator-demo',
        loadComponent: () =>
          import('../pages/docs/separator/demos/separator-demo').then(
            (m) => m.ScSeparatorDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/sheet',
    children: [
      {
        path: 'right-sheet-demo',
        loadComponent: () =>
          import('../pages/docs/sheet/demos/right-sheet-demo').then(
            (m) => m.RightSheetDemo,
          ),
      },
      {
        path: 'left-sheet-demo',
        loadComponent: () =>
          import('../pages/docs/sheet/demos/left-sheet-demo').then(
            (m) => m.LeftSheetDemo,
          ),
      },
      {
        path: 'top-sheet-demo',
        loadComponent: () =>
          import('../pages/docs/sheet/demos/top-sheet-demo').then(
            (m) => m.TopSheetDemo,
          ),
      },
      {
        path: 'bottom-sheet-demo',
        loadComponent: () =>
          import('../pages/docs/sheet/demos/bottom-sheet-demo').then(
            (m) => m.BottomSheetDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/sidebar',
    children: [
      {
        path: 'sidebar-demo',
        loadComponent: () =>
          import('../pages/docs/sidebar/demos/sidebar-demo').then(
            (m) => m.ScSidebarDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/signature-pad',
    children: [
      {
        path: 'signature-pad-demo',
        loadComponent: () =>
          import('../pages/docs/signature-pad/demos/signature-pad-demo').then(
            (m) => m.ScSignaturePadDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/skeleton',
    children: [
      {
        path: 'skeleton-demo',
        loadComponent: () =>
          import('../pages/docs/skeleton/demos/skeleton-demo').then(
            (m) => m.ScSkeletonDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/slider',
    children: [
      {
        path: 'slider-demo',
        loadComponent: () =>
          import('../pages/docs/slider/demos/slider-demo').then(
            (m) => m.ScSliderDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/sortable-list',
    children: [
      {
        path: 'sortable-list-demo',
        loadComponent: () =>
          import('../pages/docs/sortable-list/demos/sortable-list-demo').then(
            (m) => m.ScSortableListDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/speed-dial',
    children: [
      {
        path: 'speed-dial-demo',
        loadComponent: () =>
          import('../pages/docs/speed-dial/demos/speed-dial-demo').then(
            (m) => m.SpeedDialDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/spinner',
    children: [
      {
        path: 'spinner-demo',
        loadComponent: () =>
          import('../pages/docs/spinner/demos/spinner-demo').then(
            (m) => m.ScSpinnerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/split-button',
    children: [
      {
        path: 'split-button-demo',
        loadComponent: () =>
          import('../pages/docs/split-button/demos/split-button-demo').then(
            (m) => m.SplitButtonDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/spotlight',
    children: [
      {
        path: 'spotlight-demo',
        loadComponent: () =>
          import('../pages/docs/spotlight/demos/spotlight-demo').then(
            (m) => m.SpotlightDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/stat-card',
    children: [
      {
        path: 'stat-card-demo',
        loadComponent: () =>
          import('../pages/docs/stat-card/demos/stat-card-demo').then(
            (m) => m.StatCardDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/stepper',
    children: [
      {
        path: 'stepper-demo',
        loadComponent: () =>
          import('../pages/docs/stepper/demos/stepper-demo').then(
            (m) => m.ScStepperDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/switch',
    children: [
      {
        path: 'switch-demo',
        loadComponent: () =>
          import('../pages/docs/switch/demos/switch-demo').then(
            (m) => m.ScSwitchDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/tabs',
    children: [
      {
        path: 'tabs-demo',
        loadComponent: () =>
          import('../pages/docs/tabs/demos/tabs-demo').then(
            (m) => m.ScTabsDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/tag-input',
    children: [
      {
        path: 'tag-input-demo',
        loadComponent: () =>
          import('../pages/docs/tag-input/demos/tag-input-demo').then(
            (m) => m.ScTagInputDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/textarea',
    children: [
      {
        path: 'textarea-demo',
        loadComponent: () =>
          import('../pages/docs/textarea/demos/textarea-demo').then(
            (m) => m.ScTextareaDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/theme-toggle',
    children: [
      {
        path: 'theme-toggle-demo',
        loadComponent: () =>
          import('../pages/docs/theme-toggle/demos/theme-toggle-demo').then(
            (m) => m.ScThemeToggleDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/time-picker',
    children: [
      {
        path: 'time-picker-demo',
        loadComponent: () =>
          import('../pages/docs/time-picker/demos/time-picker-demo').then(
            (m) => m.ScTimePickerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/timeline',
    children: [
      {
        path: 'timeline-demo',
        loadComponent: () =>
          import('../pages/docs/timeline/demos/timeline-demo').then(
            (m) => m.ScTimelineDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/timezone',
    children: [
      {
        path: 'timezone-demo',
        loadComponent: () =>
          import('../pages/docs/timezone/demos/timezone-demo').then(
            (m) => m.ScTimezoneDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/toast',
    children: [
      {
        path: 'toast-demo',
        loadComponent: () =>
          import('../pages/docs/toast/demos/toast-demo').then(
            (m) => m.ScToastDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/toggle',
    children: [
      {
        path: 'toggle-demo',
        loadComponent: () =>
          import('../pages/docs/toggle/demos/toggle-demo').then(
            (m) => m.ScToggleDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/toggle-group',
    children: [
      {
        path: 'toggle-group-demo',
        loadComponent: () =>
          import('../pages/docs/toggle-group/demos/toggle-group-demo').then(
            (m) => m.ScToggleGroupDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/tooltip',
    children: [
      {
        path: 'basic-tooltip-demo',
        loadComponent: () =>
          import('../pages/docs/tooltip/demos/basic-tooltip-demo').then(
            (m) => m.BasicTooltipDemo,
          ),
      },
      {
        path: 'positions-tooltip-demo',
        loadComponent: () =>
          import('../pages/docs/tooltip/demos/positions-tooltip-demo').then(
            (m) => m.PositionsTooltipDemo,
          ),
      },
      {
        path: 'icon-button-tooltip-demo',
        loadComponent: () =>
          import('../pages/docs/tooltip/demos/icon-button-tooltip-demo').then(
            (m) => m.IconButtonTooltipDemo,
          ),
      },
      {
        path: 'delay-tooltip-demo',
        loadComponent: () =>
          import('../pages/docs/tooltip/demos/delay-tooltip-demo').then(
            (m) => m.DelayTooltipDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/tour-guide',
    children: [
      {
        path: 'tour-guide-demo',
        loadComponent: () =>
          import('../pages/docs/tour-guide/demos/tour-guide-demo').then(
            (m) => m.TourGuideDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/transfer-list',
    children: [
      {
        path: 'transfer-list-demo',
        loadComponent: () =>
          import('../pages/docs/transfer-list/demos/transfer-list-demo').then(
            (m) => m.TransferListDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/tree-view',
    children: [
      {
        path: 'tree-view-demo',
        loadComponent: () =>
          import('../pages/docs/tree-view/demos/tree-view-demo').then(
            (m) => m.ScTreeViewDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/video-player',
    children: [
      {
        path: 'video-player-demo',
        loadComponent: () =>
          import('../pages/docs/video-player/demos/video-player-demo').then(
            (m) => m.ScVideoPlayerDemo,
          ),
      },
    ],
  },
  {
    path: 'demos/virtual-list',
    children: [
      {
        path: 'virtual-list-demo',
        loadComponent: () =>
          import('../pages/docs/virtual-list/demos/virtual-list-demo').then(
            (m) => m.VirtualListDemo,
          ),
      },
    ],
  },
];
