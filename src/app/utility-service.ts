import { AbstractControl, ValidationErrors } from '@angular/forms';

export const phoneNumberValidator =
  () =>
  (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && value.length === 10 && !isNaN(value)) {
      return null;
    }
    return { phoneNumber: true };
  };
