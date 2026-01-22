# Password Input

Password input with show/hide toggle, strength indicator, and confirmation support.

## Components

- `ScPasswordInput` - Base password input with visibility toggle
- `ScPasswordInputStrength` - Password input with strength meter and requirements
- `ScPasswordInputConfirm` - Password input with confirmation field

## Usage

### Basic Password Input

```html
<sc-password-input [(value)]="password" placeholder="Enter password" />
```

### With Strength Indicator

```html
<sc-password-input-strength [(value)]="password" [showStrength]="true" [showRequirements]="true" />
```

### With Confirmation

```html
<sc-password-input-confirm [(password)]="password" [(confirmPassword)]="confirmPassword" />
```

## API

### ScPasswordInput

| Input           | Type      | Default              | Description              |
| --------------- | --------- | -------------------- | ------------------------ |
| `class`         | `string`  | `''`                 | Additional CSS classes   |
| `placeholder`   | `string`  | `''`                 | Placeholder text         |
| `disabled`      | `boolean` | `false`              | Disable the input        |
| `readonly`      | `boolean` | `false`              | Make input readonly      |
| `autocomplete`  | `string`  | `'current-password'` | Autocomplete attribute   |
| `showByDefault` | `boolean` | `false`              | Show password by default |

| Output             | Type      | Description                     |
| ------------------ | --------- | ------------------------------- |
| `value`            | `string`  | Two-way binding for input value |
| `visibilityChange` | `boolean` | Emits when visibility toggles   |

| Method     | Description       |
| ---------- | ----------------- |
| `toggle()` | Toggle visibility |
| `show()`   | Show password     |
| `hide()`   | Hide password     |
| `focus()`  | Focus the input   |

### ScPasswordInputStrength

| Input              | Type      | Default            | Description                 |
| ------------------ | --------- | ------------------ | --------------------------- |
| `class`            | `string`  | `''`               | Additional CSS classes      |
| `placeholder`      | `string`  | `'Enter password'` | Placeholder text            |
| `disabled`         | `boolean` | `false`            | Disable the input           |
| `autocomplete`     | `string`  | `'new-password'`   | Autocomplete attribute      |
| `showStrength`     | `boolean` | `true`             | Show strength meter         |
| `showRequirements` | `boolean` | `true`             | Show requirements checklist |
| `minLength`        | `number`  | `8`                | Minimum password length     |

| Output           | Type     | Description                     |
| ---------------- | -------- | ------------------------------- |
| `value`          | `string` | Two-way binding for input value |
| `strengthChange` | `number` | Emits strength score (0-4)      |

### ScPasswordInputConfirm

| Input                 | Type      | Default              | Description              |
| --------------------- | --------- | -------------------- | ------------------------ |
| `class`               | `string`  | `''`                 | Additional CSS classes   |
| `disabled`            | `boolean` | `false`              | Disable both inputs      |
| `passwordLabel`       | `string`  | `'Password'`         | Label for password field |
| `confirmLabel`        | `string`  | `'Confirm Password'` | Label for confirm field  |
| `passwordPlaceholder` | `string`  | `'Enter password'`   | Password placeholder     |
| `confirmPlaceholder`  | `string`  | `'Confirm password'` | Confirm placeholder      |

| Output            | Type      | Description                     |
| ----------------- | --------- | ------------------------------- |
| `password`        | `string`  | Two-way binding for password    |
| `confirmPassword` | `string`  | Two-way binding for confirm     |
| `matchChange`     | `boolean` | Emits when match status changes |

| Method      | Description                     |
| ----------- | ------------------------------- |
| `isValid()` | Returns true if passwords match |

## Strength Levels

The strength indicator uses a 5-level scale:

| Level | Label       | Color  | Criteria                 |
| ----- | ----------- | ------ | ------------------------ |
| 0     | Very weak   | Red    | Less than 3 criteria met |
| 1     | Weak        | Orange | 3 criteria met           |
| 2     | Fair        | Yellow | 4 criteria met           |
| 3     | Strong      | Lime   | 5 criteria met           |
| 4     | Very strong | Green  | All 6 criteria met       |

## Password Requirements

Default requirements checked:

- At least 8 characters
- Contains uppercase letter
- Contains lowercase letter
- Contains number
- Contains special character

## Examples

### Login Form

```html
<form>
  <div class="space-y-4">
    <div>
      <label>Email</label>
      <input type="email" />
    </div>
    <div>
      <label>Password</label>
      <sc-password-input [(value)]="password" autocomplete="current-password" />
    </div>
    <button type="submit">Sign In</button>
  </div>
</form>
```

### Registration Form

```html
<form>
  <sc-password-input-strength [(value)]="password" [showStrength]="true" [showRequirements]="true" />
</form>
```

### Change Password Form

```html
<form>
  <div class="space-y-4">
    <div>
      <label>Current Password</label>
      <sc-password-input [(value)]="currentPassword" />
    </div>

    <sc-password-input-confirm [(password)]="newPassword" [(confirmPassword)]="confirmNewPassword" passwordLabel="New Password" confirmLabel="Confirm New Password" />

    <button [disabled]="!passwordConfirm.isValid()">Update Password</button>
  </div>
</form>
```

## Accessibility

- Toggle button has `aria-label` that updates based on visibility state
- Toggle button has `aria-pressed` to indicate current state
- Strength indicator uses semantic color coding
- Requirements list shows clear pass/fail indicators
- Error messages are displayed inline for screen readers
