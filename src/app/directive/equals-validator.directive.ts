import {Directive, Input, NgModule, OnInit, ViewChild} from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  NgControl,
  NgForm,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators
} from '@angular/forms';

export const equalsValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  var validationErrors = password && confirmPassword && password.value === confirmPassword.value ? null : {'equalsValidator': true};

  return validationErrors;
};

@Directive({
  selector: '[appEqualsValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualsValidatorDirective, multi: true}]
})
export class EqualsValidatorDirective implements Validator {
  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors {
    console.log(control.value); // Value of confirmPassword input
    return equalsValidator(control);
  }
}
