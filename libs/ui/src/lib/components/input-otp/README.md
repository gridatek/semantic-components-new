# Input OTP

Accessible one-time password component with copy paste functionality.

## Components

- `ScInputOtp` - Container for OTP input that manages state
- `ScInputOtpGroup` - Groups slots together visually
- `ScInputOtpSlot` - Individual input slot for a single character
- `ScInputOtpSeparator` - Visual separator between groups

## Usage

```html
<!-- Basic 6-digit OTP -->
<div sc-input-otp [maxLength]="6" [(value)]="otpValue">
  <div sc-input-otp-group>
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
  </div>
</div>
```

## With Separator

```html
<div sc-input-otp [maxLength]="6" [(value)]="otpValue">
  <div sc-input-otp-group>
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
  </div>
  <div sc-input-otp-separator>-</div>
  <div sc-input-otp-group>
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
  </div>
</div>
```

## 4-digit PIN

```html
<div sc-input-otp [maxLength]="4" [(value)]="pinValue">
  <div sc-input-otp-group>
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
  </div>
</div>
```

## Disabled

```html
<div sc-input-otp [maxLength]="6" [disabled]="true" value="123456">
  <div sc-input-otp-group>
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
    <sc-input-otp-slot />
  </div>
</div>
```

## ScInputOtp Inputs

| Input       | Type      | Default | Description               |
| ----------- | --------- | ------- | ------------------------- |
| `maxLength` | `number`  | `6`     | Number of OTP digits      |
| `value`     | `string`  | `''`    | Current OTP value (model) |
| `disabled`  | `boolean` | `false` | Whether input is disabled |
| `class`     | `string`  | `''`    | Additional CSS classes    |

## ScInputOtp Outputs

| Output        | Type     | Description                  |
| ------------- | -------- | ---------------------------- |
| `valueChange` | `string` | Emits when OTP value changes |

## ScInputOtpSlot Inputs

| Input   | Type     | Default | Description            |
| ------- | -------- | ------- | ---------------------- |
| `class` | `string` | `''`    | Additional CSS classes |

## Features

- Auto-focus moves to next slot after input
- Backspace navigates to previous slot
- Arrow keys for navigation between slots
- Paste support (distributes characters across slots)
- Numeric keyboard on mobile (`inputmode="numeric"`)
- Blinking caret animation when focused and empty
- `data-active` attribute when slot is focused
- `data-filled` attribute when slot has a value

## Accessibility

- Uses `inputmode="numeric"` for mobile keyboards
- Uses `autocomplete="one-time-code"` for browser autofill
- Each slot is a focusable input element
- Separator has `role="separator"`
- Disabled state properly communicated to assistive technology
