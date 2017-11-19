import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey/survey.service';
import { UtilsService } from '../../../utils.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [SurveyService, DashboardService]
})
export class DashboardComponent implements OnInit {
  manager: any;
  hr: any;
  employees: any;
  to_date: any;
  from_date: any;
  total_count: any;
  pending_count: any;
  completed_count: any;
  loaderStatus = true;
  dataLoadStatus = false;
  api_token = this._utilsService.api_token;
  btnLabel = 'Filter';
  constructor(
    private _surveyService: SurveyService,
    private _utilsService: UtilsService,
    private _dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.fetchSurveyCounts();
    this.fetchEmployeeCounts();
  }

  /**Fetch survey counts */
  fetchSurveyCounts() {
    this.btnLabel = 'Filtering...';
    const input = {
      'api_token': this.api_token,
      'from_date': this.from_date,
      'to_date': this.to_date,
    };
    this._surveyService.fetchSurveyCounts(input)
      .subscribe(response => {
        this.btnLabel = 'Filter';
        this.loaderStatus = false;
        this.dataLoadStatus = true;
        if (response.status === 1) {
          this.completed_count = response.data.completed_count;
          this.pending_count = response.data.pending_count;
          this.total_count = response.data.total_count;
        } else {
          alert(response.message);
        }
      });
  }

  /**Fetch employee counts */
  fetchEmployeeCounts() {
    const input = {
      'api_token': this.api_token
    };
    this._dashboardService.fetchEmployeeCounts(input)
      .subscribe(response => {
        console.log(response);
        if (response.status === 1) {
          this.employees = response.data[0].employees;
          this.hr = response.data[0].hr;
          this.manager = response.data[0].manager;
        } else {
          alert(response.message);
        }
      });
  }

}
