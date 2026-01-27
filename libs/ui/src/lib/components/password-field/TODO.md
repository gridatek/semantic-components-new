# Password Field - TODO

This document tracks the remaining features that need to be implemented for the password-field component following the composable architecture pattern.

## Missing Sub-Components

### 1. ScPasswordFieldStrengthBar

A sub-component that displays a single strength bar indicator.

**Selector:** `div[sc-password-field-strength-bar]`

**Purpose:**

- Displays a single strength bar that can be used to build custom strength indicators
- Allows users to create their own strength layouts
- Reusable building block

**Inputs:**

- `class` - Additional CSS classes
- `index` - Bar index (0-3 or 0-4)

**Features:**

- Injects `SC_PASSWORD_FIELD` parent context
- Automatically computes strength from password value
- Computes whether this bar should be filled based on index and strength
- Auto-colors based on strength level:
  - Strength 0: `bg-red-500`
  - Strength 1: `bg-orange-500`
  - Strength 2: `bg-yellow-500`
  - Strength 3: `bg-lime-500`
  - Strength 4: `bg-green-500`
  - Unfilled: `bg-muted`
- Can be used independently to build custom strength displays

**Implementation Notes:**

```typescript
protected readonly strength = computed(() => {
  const password = this.passwordField.value();
  if (!password) return 0;
  // Calculate strength (0-4) based on password criteria
  // See password-input-strength.ts:109-127 for logic
});

protected readonly class = computed(() => {
  const strength = this.strength();
  const index = this.index();
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500'];

  return cn(
    'h-1 flex-1 rounded-full transition-colors',
    index <= strength ? colors[strength] : 'bg-muted',
    this.classInput(),
  );
});
```

**Example Usage:**

```html
<div sc-password-field [(value)]="password">
  <div sc-password-field-group>
    <input sc-password-field-input />
    <button sc-password-field-toggle></button>
  </div>

  <!-- Custom strength bar layout -->
  <div class="flex gap-2 mt-2">
    @for (i of [0, 1, 2, 3, 4]; track i) {
    <div sc-password-field-strength-bar [index]="i"></div>
    }
  </div>
</div>
```

**Expected Template Structure:**

```html
<div [class]="class()"></div>
```

---

### 2. ScPasswordFieldStrength

A sub-component that displays a visual password strength indicator.

**Selector:** `[sc-password-field-strength]` or `div[sc-password-field-strength]`

**Purpose:**

- Displays 4-5 strength bars that fill based on password strength
- Shows strength label (Very weak, Weak, Fair, Strong, Very strong)
- Uses color coding (red → orange → yellow → lime → green)

**Inputs:**

- `class` - Additional CSS classes

**Features:**

- Injects `SC_PASSWORD_FIELD` parent context
- Computes strength based on password value from parent:
  - Length (8+, 12+)
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Only displays when value is not empty
- Maps strength score (0-6) to visual scale (0-4)

**Reference Implementation:**
See `password-input-strength.ts` lines 109-127 for strength calculation logic.

**Example Usage:**

```html
<div sc-password-field [(value)]="password">
  <label sc-label>Password</label>
  <div sc-password-field-group>
    <input sc-password-field-input />
    <button sc-password-field-toggle></button>
  </div>
  <div sc-password-field-strength></div>
</div>
```

**Expected Template Structure:**

Option 1 - Using ScPasswordFieldStrengthBar sub-components:

```html
@if (passwordField.value()) {
<div class="mt-2 space-y-1">
  <!-- Strength bars -->
  <div class="flex gap-1">
    @for (i of [0, 1, 2, 3]; track i) {
    <div sc-password-field-strength-bar [index]="i"></div>
    }
  </div>
  <!-- Strength label -->
  <p [class]="strengthTextClass()">{{ strengthLabel() }}</p>
</div>
}
```

Option 2 - Inline implementation (simpler):

```html
@if (passwordField.value()) {
<div class="mt-2 space-y-1">
  <!-- Strength bars -->
  <div class="flex gap-1">
    @for (i of [0, 1, 2, 3]; track i) {
    <div [class]="strengthBarClass(i)"></div>
    }
  </div>
  <!-- Strength label -->
  <p [class]="strengthTextClass()">{{ strengthLabel() }}</p>
</div>
}
```

---

### 3. ScPasswordFieldRequirements

A sub-component that displays a checklist of password requirements.

**Selector:** `[sc-password-field-requirements]` or `ul[sc-password-field-requirements]`

**Purpose:**

- Shows a list of password requirements
- Displays check/circle icons based on whether each requirement is met
- Color codes requirements (green when met, muted when not)

**Inputs:**

- `class` - Additional CSS classes
- `requirements` - Optional array of custom requirements (default: standard requirements)

**Requirements Format:**

```typescript
export interface ScPasswordRequirement {
  label: string;
  test: (value: string) => boolean;
}
```

**Default Requirements:**

- At least 8 characters
- Contains uppercase letter
- Contains lowercase letter
- Contains number
- Contains special character

**Features:**

- Injects `SC_PASSWORD_FIELD` parent context
- Tests each requirement against current password value
- Only displays when value is not empty
- Shows visual indicators (checkmark vs circle) for each requirement
- Allows custom requirements via input

**Reference Implementation:**
See `password-input-strength.ts` lines 39-70 and 92-107 for requirements logic.

**Example Usage:**

```html
<div sc-password-field [(value)]="password">
  <label sc-label>Create Password</label>
  <div sc-password-field-group>
    <input sc-password-field-input autocomplete="new-password" />
    <button sc-password-field-toggle></button>
  </div>
  <ul sc-password-field-requirements></ul>
</div>
```

**With Custom Requirements:**

```html
<div sc-password-field [(value)]="password">
  <label sc-label>Password</label>
  <div sc-password-field-group>
    <input sc-password-field-input />
    <button sc-password-field-toggle></button>
  </div>
  <ul sc-password-field-requirements [requirements]="customReqs"></ul>
</div>
```

```typescript
customReqs = [
  { label: 'At least 12 characters', test: (v: string) => v.length >= 12 },
  { label: 'Contains emoji', test: (v: string) => /[\p{Emoji}]/u.test(v) },
];
```

**Expected Template Structure:**

```html
@if (passwordField.value()) {
<ul class="mt-2 space-y-1 text-xs">
  @for (req of requirements; track req.label) {
  <li [class]="requirementClass(req.test(passwordField.value()))">
    @if (req.test(passwordField.value())) {
    <!-- Check icon -->
    <svg class="inline size-3 mr-1">...</svg>
    } @else {
    <!-- Circle icon -->
    <svg class="inline size-3 mr-1">...</svg>
    } {{ req.label }}
  </li>
  }
</ul>
}
```

---

## Implementation Notes

### Architecture Consistency

Both components should follow the composable architecture pattern:

1. **Inject parent context:**

```typescript
readonly passwordField = inject(SC_PASSWORD_FIELD);
```

2. **Use computed() for derived state:**

```typescript
protected readonly strength = computed(() => {
  const password = this.passwordField.value();
  // Calculate strength
});
```

3. **Support custom classes:**

```typescript
readonly classInput = input<string>('', { alias: 'class' });
protected readonly class = computed(() => cn('base-classes', this.classInput()));
```

4. **Use host bindings:**

```typescript
host: {
  'data-slot': 'password-field-strength',
  '[class]': 'class()',
}
```

5. **Set proper decorators:**

```typescript
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
```

### Styling Guidelines

- Use consistent spacing (`mt-2`, `space-y-1`)
- Use color utilities from design system (green-500, muted-foreground, etc.)
- Support custom classes via `class` input
- Use `data-*` attributes for state-based styling
- Keep sizing consistent (size-3 for icons, text-xs for text)

### Testing Considerations

When implementing, create demos for:

1. **Password with Strength Indicator**
   - Shows strength bars updating as user types

2. **Password with Requirements**
   - Shows requirements checklist updating as user types

3. **Password with Both Strength and Requirements**
   - Combines both features

4. **Custom Requirements**
   - Uses custom requirement rules

5. **Custom Strength Bar Layout**
   - Uses ScPasswordFieldStrengthBar components to build custom strength displays
   - Demonstrates flexibility of composable approach

### File Structure

After implementation:

```
password-field/
├── password-field.ts                  # Root directive
├── password-field-group.ts            # Container
├── password-field-input.ts            # Input field
├── password-field-toggle.ts           # Toggle button
├── password-field-strength-bar.ts     # ✨ NEW - Single strength bar
├── password-field-strength.ts         # ✨ NEW - Strength indicator
├── password-field-requirements.ts     # ✨ NEW - Requirements list
├── index.ts                           # Exports
├── README.md                          # Documentation
└── TODO.md                            # This file
```

### Export Updates

Don't forget to export the new components in `index.ts`:

```typescript
export * from './password-field';
export * from './password-field-group';
export * from './password-field-input';
export * from './password-field-toggle';
export * from './password-field-strength-bar'; // Add
export * from './password-field-strength'; // Add
export * from './password-field-requirements'; // Add

// Export types
export type { ScPasswordRequirement } from './password-field-requirements';
```

And in `libs/ui/src/index.ts`:

```typescript
export {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
  ScPasswordFieldStrengthBar, // Add
  ScPasswordFieldStrength, // Add
  ScPasswordFieldRequirements, // Add
  SC_PASSWORD_FIELD,
} from './lib/components/password-field';

// Export types
export type { ScPasswordRequirement } from './lib/components/password-field';
```

---

## Benefits of Composable Approach

Unlike the monolithic `ScPasswordInputStrength` component which bundles everything together, the composable approach provides:

✅ **Flexibility**: Use strength indicator without requirements, or vice versa
✅ **Customization**: Each component can be styled independently
✅ **Reusability**: Requirements list could work with other inputs, strength bars can be reused
✅ **Composition**: Mix with other components (labels, descriptions)
✅ **Control**: Place components in any order or layout
✅ **Granularity**: Build custom strength displays using individual ScPasswordFieldStrengthBar components

**Example - Flexibility in Action:**

```html
<!-- Only strength indicator -->
<div sc-password-field [(value)]="password">
  <div sc-password-field-group>
    <input sc-password-field-input />
    <button sc-password-field-toggle></button>
  </div>
  <div sc-password-field-strength></div>
</div>

<!-- Only requirements -->
<div sc-password-field [(value)]="password">
  <div sc-password-field-group>
    <input sc-password-field-input />
    <button sc-password-field-toggle></button>
  </div>
  <ul sc-password-field-requirements></ul>
</div>

<!-- Both, with custom layout -->
<div class="grid grid-cols-2 gap-4">
  <div sc-password-field [(value)]="password">
    <div sc-password-field-group>
      <input sc-password-field-input />
      <button sc-password-field-toggle></button>
    </div>
  </div>

  <div class="space-y-2">
    <div sc-password-field-strength></div>
    <ul sc-password-field-requirements></ul>
  </div>
</div>

<!-- Custom strength bar layout using individual bars -->
<div sc-password-field [(value)]="password">
  <div sc-password-field-group>
    <input sc-password-field-input />
    <button sc-password-field-toggle></button>
  </div>

  <!-- Vertical strength bars -->
  <div class="flex gap-1 mt-2 h-20">
    @for (i of [0, 1, 2, 3, 4]; track i) {
    <div sc-password-field-strength-bar [index]="i" class="flex-1"></div>
    }
  </div>
</div>
```

---

## Next Steps

1. ✅ Create this TODO.md file
2. ⬜ Implement `ScPasswordFieldStrengthBar` component
3. ⬜ Implement `ScPasswordFieldStrength` component
4. ⬜ Implement `ScPasswordFieldRequirements` component with `ScPasswordRequirement` type
5. ⬜ Create demos for new components
6. ⬜ Update README.md with new components
7. ⬜ Add demo routes
8. ⬜ Export new components and types from index files
