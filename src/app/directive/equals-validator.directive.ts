import {Directive, Input, NgModule, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, NgControl, NgForm, ValidationErrors, Validator, Validators} from '@angular/forms';

@Directive({
  selector: '[appEqualsValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualsValidatorDirective, multi: true}]
})
// @NgModule({
//   providers: [{provide: NG_VALIDATORS, useExisting: EqualsValidatorDirective, multi: true}]
// })
export class EqualsValidatorDirective implements Validator {
  // @Input('appEqualsValidator') controlToCompare: AbstractControl; // What is the name of @Input('?'). Need to take password value.
  // @Input('') signupForm: NgForm;

  constructor(
    // Get the control directive
    private originControl: NgControl
  ) {}

  validate(confirmationControl: AbstractControl): ValidationErrors | null {
    console.log(confirmationControl.value); // Value of confirmPassword input
    console.log(this.originControl.value);
    return null;
  }
}
