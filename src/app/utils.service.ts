import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UtilsService {
    api_token: string;

    loginStatus = false;

    /**Dev environment start */
    baseUrl = 'http://52.66.152.103/systemcore/public/';
    /**Dev environment end*/

    constructor(
        private _router: Router
    ) { }

    /**CHECK TOKEN STATUS AND REDIRECT */
    checkTokenStatusAndRedirect() {
        this.api_token = localStorage.getItem('api_token');
        if (this.api_token) {
            // this._router.navigate(['/dashboard']);
            this.loginStatus = true;
        } else {
            this._router.navigate(['/login']);
            this.loginStatus = false;
        }
    }


    /**FETCH API TOKEN */
    fetchToken() {
        this.api_token = localStorage.getItem('api_token');
    }

}
