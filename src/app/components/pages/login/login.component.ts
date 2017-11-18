import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(
    private _loginService: LoginService
  ) { }

  ngOnInit() {
    this.validateEmail();
  }

  /**Validate Email */
  validateEmail() {
    const input = "alwin@gmail.com";
    this._loginService.validateEmail(input)
        .subscribe(response=>{
          console.log(response);
        })
  }

}
