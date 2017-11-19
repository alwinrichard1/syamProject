import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SurveyService } from './../survey.service';
import { UtilsService } from './../../../../utils.service';

@Component({
  templateUrl: './surveyOverview.component.html',
  styleUrls: ['./surveyOverview.component.css'],
  providers: [SurveyService]
})
export class SurveyOverviewComponent implements OnInit {
  dataSource: MatTableDataSource<Element>;
  surveyDetails: any;
  type = 0;
  to_date: any;
  from_date: any;
  total_count: any;
  pending_count: any;
  completed_count: any;
  loaderStatus = true;
  dataLoadStatus = false;
  displayedColumns = ['title', 'start_date', 'end_date', 'status', 'survey_response_count'];

  api_token = this._utilsService.api_token;

  constructor(
    private _surveyService: SurveyService,
    private _utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.fetchSurveyCounts();
    this.searchSurvey();
  }

  /**Fetch survey counts */
  fetchSurveyCounts() {
    const input = {
      'api_token': this.api_token
    };
    this._surveyService.fetchSurveyCounts(input)
      .subscribe(response => {
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

  /**searchSurvey */
  searchSurvey() {
    const input = {
      'api_token': this.api_token,
      'from_date': this.from_date,
      'to_date': this.to_date,
      'type': this.type,
    };
    this._surveyService.searchSurvey(input)
      .subscribe(response => {
        if (response.status === 1) {
          this.surveyDetails = response.data;
          this.dataSource = new MatTableDataSource<Element>(this.surveyDetails);
          console.log(this.surveyDetails);
        } else {
          alert(response.message);
        }
      });
  }

}