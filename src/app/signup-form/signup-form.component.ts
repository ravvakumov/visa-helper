import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  public email: string;
  public password: string;
  public confirmPassword: string;
  public confirmEmail: boolean;
  public isConfirmedPassword: boolean;

  constructor() {
    this.confirmEmail = false;
    this.isConfirmedPassword = true;
  }

  ngOnInit() {
  }

  signup(email: string, password: string) {
    if (this.password === this.confirmPassword) {
      console.log('signed up; email confirmation');
      this.confirmEmail = true;
    } else {
      console.log('signed up failed; password not equals');
      this.isConfirmedPassword = false;
    }
  }
}
