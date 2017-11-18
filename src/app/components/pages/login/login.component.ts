import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { UtilsService } from './../../../utils.service';
import { AppComponent } from './../../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  OTPResponse: any;
  loginOTP: any;
  phoneResponse: any;
  loginNumber: any;
  api_token_Phone: any;
  emailResponse: any;
  loginEmail: string;
  btnStatus = true;
  btnLabel = 'Next';
  emailFormStatus = true;
  numberFormStatus = false;
  otpFormStatus = false;

  constructor(
    private _loginService: LoginService,
    private _utilsService: UtilsService,
    private _appComponent: AppComponent
  ) { }

  ngOnInit() { }

  /**Validate Email */
  validateEmail() {
    this.btnStatus = false;
    this.btnLabel = 'Validating email...';
    const input = {
      'email': this.loginEmail
    };
    this._loginService.validateEmail(input)
      .subscribe(response => {
        this.emailResponse = response;
        this.btnStatus = true;
        this.btnLabel = 'Next';
        if (this.emailResponse.status === 0) {
          alert(this.emailResponse.message);
        } else {
          this.emailFormStatus = false;
          this.numberFormStatus = true;
          alert(this.emailResponse.message);
          this.api_token_Phone = this.emailResponse.data[0].api_token;
        }
      });
  }

  /**Validate Phone number */
  validatePhone() {
    this.btnStatus = false;
    this.btnLabel = 'Validating phone...';
    const input = {
      'phone': this.loginNumber,
      'api_token': this.api_token_Phone
    };
    this._loginService.validatePhone(input)
      .subscribe(response => {
        this.phoneResponse = response;
        this.btnStatus = true;
        if (this.phoneResponse.status === 0) {
          alert(this.phoneResponse.message);
          this.btnLabel = 'Next';
        } else {
          this.btnLabel = 'Login';
          this.emailFormStatus = false;
          this.numberFormStatus = false;
          this.otpFormStatus = true;
          alert(this.phoneResponse.message);
        }
      });
  }

  /**Validate OTP */
  validateOTP() {
    this.btnStatus = false;
    this.btnLabel = 'Validating OTP...';
    const input = {
      'otp': this.loginOTP,
      'api_token': this.api_token_Phone
    };
    this._loginService.validateOTP(input)
      .subscribe(response => {
        this.OTPResponse = response;
        this.btnStatus = true;
        this.btnLabel = 'Login';
        if (this.OTPResponse.status === 0) {
          alert(this.OTPResponse.message);
        } else {
          alert(this.OTPResponse.message);
          localStorage.setItem('api_token', this.OTPResponse.data[0].api_token);
          localStorage.setItem('company_id', this.OTPResponse.data[0].company_id);
          localStorage.setItem('user_id', this.OTPResponse.data[0].user_id);
          this._utilsService.checkTokenStatusAndRedirect();
          this._appComponent.loginStatus = true;
        }
      });
  }
}
