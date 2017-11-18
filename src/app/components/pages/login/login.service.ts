import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { UtilsService } from './../../../utils.service';

@Injectable()
export class LoginService implements OnInit {
    baseUrl: string = this._utilsService.baseUrl;
    path: string;

    constructor(
        private _http: Http,
        private _utilsService: UtilsService
    ) { }

    ngOnInit() {
    }

    /**Validate email */
    validateEmail(input: any) {
        this.path = 'auth/api/verify_email';
        const headers: any = new Headers;
        headers.append('Content-type', 'application/json;charset=utf-8');
        return this._http
            .post(this.baseUrl + this.path, input, headers)
            .map((response: Response) => response.json());
    }

    /**Validate phone */
    validatePhone(input: any) {
        this.path = 'auth/api/verify_mobile';
        const headers: any = new Headers;
        headers.append('Content-type', 'application/json;charset=utf-8');
        return this._http
            .post(this.baseUrl + this.path, input, headers)
            .map((response: Response) => response.json());
    }

    /**Validate OTP */
    validateOTP(input: any) {
        this.path = 'auth/api/verify_otp';
        const headers: any = new Headers;
        headers.append('Content-type', 'application/json;charset=utf-8');
        return this._http
            .post(this.baseUrl + this.path, input, headers)
            .map((response: Response) => response.json());
    }

}
