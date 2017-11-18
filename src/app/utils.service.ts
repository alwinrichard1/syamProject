import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UtilsService {

    loginStatus: boolean = false;
    
    /**Dev environment start */
    baseUrl:string = 'http://52.66.152.103/systemcore/public/';
    /**Dev environment end*/



    constructor(
        private _router: Router
    ) { }

    /**CHECK LOGED IN OR NOT AND REDIRECT */
    checkLoginStatusAndRedirect(){
        if(!this.loginStatus){
            this._router.navigate(['/login']);
        }else{
            this._router.navigate(['/dashboard']);
        }
    }

}