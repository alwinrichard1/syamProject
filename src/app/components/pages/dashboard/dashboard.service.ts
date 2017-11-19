import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { UtilsService } from './../../../utils.service';

@Injectable()
export class DashboardService {
    baseUrl: string = this._utilsService.baseUrl;
    path: string;
    constructor(
        private _http: Http,
        private _utilsService: UtilsService
    ) { }

    /**Fetch employee counts */
    fetchEmployeeCounts(input: any) {
        this.path = 'hr/api/emp_counts';
        const headers: any = new Headers;
        headers.append('Content-type', 'application/json;charset=utf-8');
        return this._http
            .post(this.baseUrl + this.path, input, headers)
            .map((response: Response) => response.json());
    }

}
