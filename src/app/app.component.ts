import { Component, OnInit } from '@angular/core';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UtilsService]
})
export class AppComponent implements OnInit{
  loginStatus:boolean = this._utilsService.loginStatus;

  constructor(
    private _utilsService: UtilsService
  ) { }

  ngOnInit() {
    this._utilsService.checkLoginStatusAndRedirect();
  }
}
