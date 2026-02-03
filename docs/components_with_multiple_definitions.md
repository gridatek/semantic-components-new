# Component File Organization

This document tracks the organization of related Angular components within the `libs/ui/src/lib/components` directory.

## Overview

All components now follow a **one-component-per-file** pattern for better maintainability, clarity, and ease of navigation. Related components are organized within the same directory and exported through barrel files.

## Component Groups

The following component groups contain related components organized in separate files:

### 1. QR Code Components
**Directory:** `libs/ui/src/lib/components/qr-code/`

- **qr-code.ts** - `ScQrCode` - Base QR code component for rendering QR codes with customization options
- **qr-code-download.ts** - `ScQrCodeDownload` - Wrapper component that adds download functionality to the QR code

### 2. Countdown Components
**Directory:** `libs/ui/src/lib/components/countdown/`

- **countdown.ts** - `ScCountdown` - Full-featured countdown timer with customizable display units (days, hours, minutes, seconds)
- **countdown-simple.ts** - `ScCountdownSimple` - Simplified countdown timer with compact formatting options

### 3. Image Compare Components
**Directory:** `libs/ui/src/lib/components/image-compare/`

- **image-compare.ts** - `ScImageCompare` - Interactive image comparison component with slider functionality
- **image-compare-slider.ts** - `ScImageCompareSlider` - Wrapper component that provides two-way binding for the slider position

### 4. Emoji Picker Components
**Directory:** `libs/ui/src/lib/components/emoji-picker/`

- **emoji-picker.ts** - `ScEmojiPicker` - Full emoji picker with search, categories, and recent emojis
- **emoji-picker-trigger.ts** - `ScEmojiPickerTrigger` - Button component designed to trigger the emoji picker in a popover

### 5. Barcode Scanner Components
**Directory:** `libs/ui/src/lib/components/barcode-scanner/`

- **barcode-scanner.ts** - `ScBarcodeScanner` - Full-featured barcode scanner with camera controls and torch support
- **barcode-scanner-simple.ts** - `ScBarcodeScannerSimple` - Simplified wrapper with preset configurations for common use cases

## Design Pattern

These component groups follow a common pattern:

1. **Base Component**: A full-featured component with comprehensive functionality
2. **Variant Components**: Simplified wrappers, triggers, or alternative implementations for specific use cases

Each component group:
- Lives in its own directory
- Has one component per file
- Exports all components through an `index.ts` barrel file
- Shares types and interfaces through the main component file

## File Organization Benefits

This one-component-per-file approach provides:

- **Better Navigation**: Easier to locate specific components
- **Clearer Dependencies**: Import paths explicitly show which component is being used
- **Improved Maintainability**: Changes to one component don't affect unrelated components in the same file
- **Better Code Review**: Smaller, focused files are easier to review
- **IDE Performance**: Better autocomplete and navigation support

## Guidelines

When creating related components:

1. Create a directory for the component group
2. Place each component in its own file
3. Use descriptive file names matching the component purpose (e.g., `component-name.ts`, `component-name-simple.ts`)
4. Export all components and types through an `index.ts` barrel file
5. Keep shared types, interfaces, and constants in the main component file
6. Import only what's needed from sibling files
