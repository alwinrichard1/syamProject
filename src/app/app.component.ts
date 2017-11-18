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
}
