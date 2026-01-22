import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-components-page',
  imports: [RouterLink],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Components</h1>
        <p class="text-muted-foreground">
          Beautifully designed components built with Angular ARIA and Tailwind
          CSS.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <a
          routerLink="/select"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Select</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Displays a list of options for the user to pick from.
          </p>
        </a>

        <a
          routerLink="/menu"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Menu</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Displays a menu with a list of actions or options.
          </p>
        </a>

        <a
          routerLink="/dialog"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Dialog</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A modal dialog that interrupts the user with important content.
          </p>
        </a>

        <a
          routerLink="/sheet"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Sheet</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A panel that slides in from the edge of the screen.
          </p>
        </a>

        <a
          routerLink="/popover"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Popover</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Displays floating content in relation to a trigger.
          </p>
        </a>

        <a
          routerLink="/tooltip"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Tooltip</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A popup that displays information on hover or focus.
          </p>
        </a>

        <a
          routerLink="/collapsible"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Collapsible</h3>
          <p class="text-sm text-muted-foreground mt-2">
            An interactive component that expands and collapses.
          </p>
        </a>

        <a
          routerLink="/alert-dialog"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Alert Dialog
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A modal dialog for important alerts requiring confirmation.
          </p>
        </a>

        <a
          routerLink="/toast"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Toast</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A brief notification that appears temporarily.
          </p>
        </a>

        <a
          routerLink="/hover-card"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Hover Card</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A card that appears when hovering over an element.
          </p>
        </a>

        <a
          routerLink="/navigation-menu"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Navigation Menu
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A navigation menu with links and dropdowns.
          </p>
        </a>

        <a
          routerLink="/context-menu"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Context Menu
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A menu displayed on right-click.
          </p>
        </a>

        <a
          routerLink="/tabs"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Tabs</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Organize content into multiple sections with tabs.
          </p>
        </a>

        <a
          routerLink="/accordion"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Accordion</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A vertically stacked set of interactive headings.
          </p>
        </a>

        <a
          routerLink="/command"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Command</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A command palette for quick actions and search.
          </p>
        </a>

        <a
          routerLink="/drawer"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Drawer</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A touch-friendly drawer that slides from the bottom.
          </p>
        </a>

        <a
          routerLink="/progress"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Progress</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Displays an indicator showing completion progress.
          </p>
        </a>

        <a
          routerLink="/scroll-area"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Scroll Area</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A custom scrollable area with styled scrollbars.
          </p>
        </a>

        <a
          routerLink="/breadcrumb"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Breadcrumb</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Displays the path to the current resource.
          </p>
        </a>

        <a
          routerLink="/separator"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Separator</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Visually separates content with a line.
          </p>
        </a>

        <a
          routerLink="/skeleton"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Skeleton</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A placeholder to show while content is loading.
          </p>
        </a>

        <a
          routerLink="/avatar"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Avatar</h3>
          <p class="text-sm text-muted-foreground mt-2">
            An image element with a fallback for representing users.
          </p>
        </a>

        <a
          routerLink="/badge"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Badge</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Displays a small status indicator or label.
          </p>
        </a>

        <a
          routerLink="/switch"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Switch</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A toggle control for switching between two states.
          </p>
        </a>

        <a
          routerLink="/slider"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Slider</h3>
          <p class="text-sm text-muted-foreground mt-2">
            An input for selecting a value from a range.
          </p>
        </a>

        <a
          routerLink="/toggle"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Toggle</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A two-state button that can be on or off.
          </p>
        </a>

        <a
          routerLink="/toggle-group"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Toggle Group
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A set of toggle buttons that work together.
          </p>
        </a>

        <a
          routerLink="/input-otp"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Input OTP</h3>
          <p class="text-sm text-muted-foreground mt-2">
            An input for entering one-time passwords.
          </p>
        </a>

        <a
          routerLink="/checkbox"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Checkbox</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A control for toggling a single option on or off.
          </p>
        </a>

        <a
          routerLink="/radio-group"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Radio Group</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A group of radio buttons for single selection.
          </p>
        </a>

        <a
          routerLink="/label"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Label</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Renders an accessible label for form controls.
          </p>
        </a>

        <a
          routerLink="/input"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Input</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A text input field for user data entry.
          </p>
        </a>

        <a
          routerLink="/textarea"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Textarea</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A multi-line text input field.
          </p>
        </a>

        <a
          routerLink="/card"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Card</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A container for grouping related content.
          </p>
        </a>

        <a
          routerLink="/alert"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Alert</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Displays important messages to the user.
          </p>
        </a>

        <a
          routerLink="/table"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Table</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A responsive table for displaying tabular data.
          </p>
        </a>

        <a
          routerLink="/pagination"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Pagination</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Navigation controls for paging through content.
          </p>
        </a>

        <a
          routerLink="/aspect-ratio"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Aspect Ratio
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Displays content within a fixed aspect ratio.
          </p>
        </a>

        <a
          routerLink="/resizable"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Resizable</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A component that can be resized by dragging.
          </p>
        </a>

        <a
          routerLink="/calendar"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Calendar</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A date picker calendar component.
          </p>
        </a>

        <a
          routerLink="/date-picker"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Date Picker</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A popover-based date selection component.
          </p>
        </a>

        <a
          routerLink="/button"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Button</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A clickable button with multiple variants.
          </p>
        </a>

        <a
          routerLink="/combobox"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Combobox</h3>
          <p class="text-sm text-muted-foreground mt-2">
            An autocomplete input with filtering.
          </p>
        </a>

        <a
          routerLink="/carousel"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Carousel</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A slideshow for cycling through elements.
          </p>
        </a>

        <a
          routerLink="/sidebar"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Sidebar</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A collapsible side navigation panel.
          </p>
        </a>

        <a
          routerLink="/form"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Form</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Building accessible forms with validation.
          </p>
        </a>

        <a
          routerLink="/tree-view"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Tree View</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A hierarchical view of nested items.
          </p>
        </a>

        <a
          routerLink="/dropdown-menu"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Dropdown Menu
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A menu displayed on button click.
          </p>
        </a>

        <a
          routerLink="/stepper"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Stepper</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Guides users through a multi-step process.
          </p>
        </a>

        <a
          routerLink="/file-upload"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">File Upload</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A drag-and-drop file upload component.
          </p>
        </a>

        <a
          routerLink="/kbd"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Kbd</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Displays keyboard shortcuts and keys.
          </p>
        </a>

        <a
          routerLink="/chart"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Chart</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Beautiful charts for data visualization.
          </p>
        </a>

        <a
          routerLink="/time-picker"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Time Picker</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A component for selecting time values.
          </p>
        </a>

        <a
          routerLink="/color-picker"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Color Picker
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A component for selecting colors.
          </p>
        </a>

        <a
          routerLink="/rating"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Rating</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A star rating component for feedback.
          </p>
        </a>

        <a
          routerLink="/data-table"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Data Table</h3>
          <p class="text-sm text-muted-foreground mt-2">
            An advanced table with sorting and filtering.
          </p>
        </a>

        <a
          routerLink="/number-input"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Number Input
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            An input for numeric values with controls.
          </p>
        </a>

        <a
          routerLink="/image-cropper"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Image Cropper
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A tool for cropping and resizing images.
          </p>
        </a>

        <a
          routerLink="/tag-input"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Tag Input</h3>
          <p class="text-sm text-muted-foreground mt-2">
            An input for adding and managing tags.
          </p>
        </a>

        <a
          routerLink="/sortable-list"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Sortable List
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A drag-and-drop sortable list.
          </p>
        </a>

        <a
          routerLink="/copy-button"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Copy Button</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A button that copies text to clipboard.
          </p>
        </a>

        <a
          routerLink="/spinner"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Spinner</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A loading indicator animation.
          </p>
        </a>

        <a
          routerLink="/timeline"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Timeline</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Displays events in chronological order.
          </p>
        </a>

        <a
          routerLink="/emoji-picker"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Emoji Picker
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A picker for selecting emojis.
          </p>
        </a>

        <a
          routerLink="/marquee"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Marquee</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A scrolling text or content animation.
          </p>
        </a>

        <a
          routerLink="/password-input"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Password Input
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A password input with visibility toggle.
          </p>
        </a>

        <a
          routerLink="/phone-input"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Phone Input</h3>
          <p class="text-sm text-muted-foreground mt-2">
            An input for international phone numbers.
          </p>
        </a>

        <a
          routerLink="/mention-input"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Mention Input
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            An input with mention suggestions.
          </p>
        </a>

        <a
          routerLink="/multi-select"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Multi-Select
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A select component for multiple selections.
          </p>
        </a>

        <a
          routerLink="/date-range-picker"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Date Range Picker
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Select a range of dates with a calendar.
          </p>
        </a>

        <a
          routerLink="/countdown"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Countdown</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A countdown timer display.
          </p>
        </a>

        <a
          routerLink="/infinite-scroll"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Infinite Scroll
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Load more content as the user scrolls.
          </p>
        </a>

        <a
          routerLink="/lightbox"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Lightbox</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A full-screen image viewer.
          </p>
        </a>

        <a
          routerLink="/signature-pad"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Signature Pad
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A canvas for capturing signatures.
          </p>
        </a>

        <a
          routerLink="/image-compare"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Image Compare
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Compare two images with a slider.
          </p>
        </a>

        <a
          routerLink="/audio-player"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Audio Player
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A custom audio player with controls.
          </p>
        </a>

        <a
          routerLink="/qr-code"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">QR Code</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Generate and display QR codes.
          </p>
        </a>

        <a
          routerLink="/video-player"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Video Player
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A custom video player with controls.
          </p>
        </a>

        <a
          routerLink="/barcode-scanner"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Barcode Scanner
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Scan barcodes using the camera.
          </p>
        </a>

        <a
          routerLink="/tour-guide"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Tour Guide</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Create interactive product tours.
          </p>
        </a>

        <a
          routerLink="/spotlight"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Spotlight</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A spotlight search interface.
          </p>
        </a>

        <a
          routerLink="/code-editor"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Code Editor</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A syntax-highlighted code editor.
          </p>
        </a>

        <a
          routerLink="/rich-text-editor"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Rich Text Editor
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A WYSIWYG text editor.
          </p>
        </a>

        <a
          routerLink="/diff-viewer"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Diff Viewer</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Compare and display text differences.
          </p>
        </a>

        <a
          routerLink="/kanban-board"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Kanban Board
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            A drag-and-drop task board.
          </p>
        </a>

        <a
          routerLink="/timezone"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Timezone</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A component for selecting and displaying timezones.
          </p>
        </a>

        <a
          routerLink="/navbar"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Navbar</h3>
          <p class="text-sm text-muted-foreground mt-2">
            A responsive navigation bar with mobile menu support.
          </p>
        </a>

        <a
          routerLink="/notification-center"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Notification Center
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Grouped notification management with filtering.
          </p>
        </a>

        <a
          routerLink="/pdf-viewer"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">PDF Viewer</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Document viewer with navigation and zoom controls.
          </p>
        </a>

        <a
          routerLink="/masonry-grid"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Masonry Grid
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Pinterest-style layout with varying item heights.
          </p>
        </a>

        <a
          routerLink="/speed-dial"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Speed Dial</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Floating action button with expandable menu.
          </p>
        </a>

        <a
          routerLink="/org-chart"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Org Chart</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Hierarchical organization visualization.
          </p>
        </a>

        <a
          routerLink="/theme-toggle"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Theme Toggle
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Switch between light and dark themes.
          </p>
        </a>

        <a
          routerLink="/language-switcher"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Language Switcher
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Switch between different languages.
          </p>
        </a>

        <a
          routerLink="/avatar-group"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Avatar Group
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Stacked/overlapping avatars with overflow.
          </p>
        </a>

        <a
          routerLink="/split-button"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Split Button
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Button with dropdown actions.
          </p>
        </a>

        <a
          routerLink="/virtual-list"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Virtual List
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Virtualized scrolling for large lists.
          </p>
        </a>

        <a
          routerLink="/image-annotator"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Image Annotator
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Draw and markup on images.
          </p>
        </a>

        <a
          routerLink="/confetti"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Confetti</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Celebration animation effect.
          </p>
        </a>

        <a
          routerLink="/animated-counter"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Animated Counter
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Numbers that animate up/down.
          </p>
        </a>

        <a
          routerLink="/dock"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Dock</h3>
          <p class="text-sm text-muted-foreground mt-2">
            macOS-style icon dock with magnification.
          </p>
        </a>

        <a
          routerLink="/search-input"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Search Input
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Search with autocomplete suggestions.
          </p>
        </a>

        <a
          routerLink="/stat-card"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Stat Card</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Statistics and metrics display.
          </p>
        </a>

        <a
          routerLink="/empty-state"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">Empty State</h3>
          <p class="text-sm text-muted-foreground mt-2">
            Placeholder for empty content.
          </p>
        </a>

        <a
          routerLink="/transfer-list"
          class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <h3 class="font-semibold leading-none tracking-tight">
            Transfer List
          </h3>
          <p class="text-sm text-muted-foreground mt-2">
            Move items between two lists.
          </p>
        </a>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComponentsPage {}
