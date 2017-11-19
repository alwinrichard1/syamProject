import { Component, OnInit } from '@angular/core';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UtilsService]
})
export class AppComponent implements OnInit {
  loginStatus: boolean;
  constructor(
    private _utilsService: UtilsService
  ) { }

  ngOnInit() {
    this._utilsService.checkTokenStatusAndRedirect();
    this.loginStatus = this._utilsService.loginStatus;
  }

  /**Signout */
  signout() {
    if (confirm('Are you sure?')) {
      localStorage.setItem('api_token', '');
      localStorage.setItem('company_id', '');
      localStorage.setItem('user_id', '');
      this._utilsService.checkTokenStatusAndRedirect();
      this.loginStatus = false;
    }

  }
}
