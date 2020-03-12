import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public login: any;
  public psw: any;
  public router: Router;
  private incorrect: boolean;

  constructor(router: Router) {
    this.router = router;
    this.incorrect = false;
  }

  ngOnInit() {
  }

  logIn(login, password) {
    console.log(login + password);
    if (login === 'admin@mail.ru' && password === 'qwerty') {
      console.log('logged in; go to main form');
      this.router.navigateByUrl('/main');
    } else {
      console.log('log in failed; show span');
      this.incorrect = true;
    }

  }
}
