# Form

Building forms with validation and accessible error messages.

## Usage

```html
<form [formGroup]="form">
  <div sc-form-field name="email">
    <div sc-form-item>
      <label sc-form-label>Email</label>
      <input sc-form-control formControlName="email" />
      <p sc-form-description>Enter your email address.</p>
      @if (form.get('email')?.invalid && form.get('email')?.touched) {
      <p sc-form-message></p>
      }
    </div>
  </div>
</form>
```

## Components

### ScFormField

Wrapper that connects form components to a FormControl by name.

**Selector:** `[sc-form-field]`

**Inputs:**

| Input  | Type     | Required | Description                      |
| ------ | -------- | -------- | -------------------------------- |
| `name` | `string` | Yes      | Name of the form control to bind |

**Properties:**

- `control`: The AbstractControl reference
- `invalid`: Whether the control is invalid
- `touched`: Whether the control has been touched
- `dirty`: Whether the control has been modified
- `showError`: Whether to show error (invalid + touched/dirty)
- `errorMessage`: Auto-generated error message

### ScFormItem

Container for form field elements with proper spacing.

**Selector:** `div[sc-form-item]`

### ScFormLabel

Label that shows error state styling.

**Selector:** `label[sc-form-label]`

Shows destructive color when field has error.

### ScFormControl

Directive for the form control element.

**Selector:** `[sc-form-control]`

Automatically sets:

- `aria-invalid` when field has error
- `aria-describedby` linking to description and message

### ScFormDescription

Helper text for the form field.

**Selector:** `p[sc-form-description]`

### ScFormMessage

Error message display with auto-generated messages.

**Selector:** `p[sc-form-message]`

**Inputs:**

| Input     | Type     | Default | Description          |
| --------- | -------- | ------- | -------------------- |
| `message` | `string` | `''`    | Custom error message |

## Built-in Error Messages

The component auto-generates messages for common validators:

| Validator   | Message                          |
| ----------- | -------------------------------- |
| `required`  | "This field is required"         |
| `email`     | "Please enter a valid email"     |
| `minlength` | "Minimum length is X characters" |
| `maxlength` | "Maximum length is X characters" |
| `min`       | "Minimum value is X"             |
| `max`       | "Maximum value is X"             |
| `pattern`   | "Invalid format"                 |

## Examples

### Basic Form

```typescript
form = this.fb.group({
  username: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
});
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <div sc-form-field name="username">
    <div sc-form-item>
      <label sc-form-label>Username</label>
      <input sc-form-control formControlName="username" class="..." />
      @if (form.get('username')?.invalid && form.get('username')?.touched) {
      <p sc-form-message></p>
      }
    </div>
  </div>
  <button type="submit">Submit</button>
</form>
```

### Custom Error Message

```html
<p sc-form-message message="Please enter a valid username"></p>
```

### With Description

```html
<div sc-form-field name="bio">
  <div sc-form-item>
    <label sc-form-label>Bio</label>
    <textarea sc-form-control formControlName="bio"></textarea>
    <p sc-form-description>Brief description. Max 160 characters.</p>
    @if (form.get('bio')?.invalid && form.get('bio')?.touched) {
    <p sc-form-message></p>
    }
  </div>
</div>
```

## Features

- **Reactive Forms Integration**: Works with Angular FormGroup/FormControl
- **Auto Error Messages**: Built-in messages for common validators
- **Custom Messages**: Override with custom error text
- **Error State Styling**: Label turns red on error
- **Accessibility**: ARIA attributes auto-applied

## Accessibility

- `aria-invalid` on form controls when invalid
- `aria-describedby` linking control to description and error
- `role="alert"` on error messages
- Proper label association
