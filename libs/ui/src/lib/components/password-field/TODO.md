# Password Field - TODO

This document tracks the remaining features that need to be implemented for the password-field component following the composable architecture pattern.

## Missing Sub-Components

### 1. ScPasswordFieldStrength

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

### 2. ScPasswordFieldRequirements

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
interface PasswordRequirement {
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

### File Structure

After implementation:

```
password-field/
├── password-field.ts                  # Root directive
├── password-field-group.ts            # Container
├── password-field-input.ts            # Input field
├── password-field-toggle.ts           # Toggle button
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
export * from './password-field-strength'; // Add
export * from './password-field-requirements'; // Add
```

And in `libs/ui/src/index.ts`:

```typescript
export {
  ScPasswordField,
  ScPasswordFieldGroup,
  ScPasswordFieldInput,
  ScPasswordFieldToggle,
  ScPasswordFieldStrength, // Add
  ScPasswordFieldRequirements, // Add
  SC_PASSWORD_FIELD,
} from './lib/components/password-field';
```

---

## Benefits of Composable Approach

Unlike the monolithic `ScPasswordInputStrength` component which bundles everything together, the composable approach provides:

✅ **Flexibility**: Use strength indicator without requirements, or vice versa
✅ **Customization**: Each component can be styled independently
✅ **Reusability**: Requirements list could work with other inputs
✅ **Composition**: Mix with other components (labels, descriptions)
✅ **Control**: Place components in any order or layout

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
```

---

## Next Steps

1. ✅ Create this TODO.md file
2. ⬜ Implement `ScPasswordFieldStrength` component
3. ⬜ Implement `ScPasswordFieldRequirements` component
4. ⬜ Create demos for new components
5. ⬜ Update README.md with new components
6. ⬜ Add demo routes
7. ⬜ Export new components from index files
