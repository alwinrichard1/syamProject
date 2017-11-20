import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LaunchSurveyComponent } from './components/pages/survey/launchSurvey/launchSurvey.component';
import { SurveyOverviewComponent } from './components/pages/survey/surveyOverview/surveyOverview.component';
import { SurveyResultComponent } from './components/pages/survey/surveyResult/surveyResult.component';
import { UserComponent } from './components/pages/user/user.component';


/** INCLUDE PATH IN ROUTES */
const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UserComponent },
    { path: 'survey/launchSurvey', component: LaunchSurveyComponent },
    { path: 'survey/surveyOverview', component: SurveyOverviewComponent },
    { path: 'survey/surveyResult', component: SurveyResultComponent },
];

@NgModule({
    imports: [
    RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

/**ADD COMPONENTS IN routingComponents */
export const routingComponents = [
    DashboardComponent, LoginComponent, LaunchSurveyComponent, SurveyOverviewComponent, SurveyResultComponent,
    UserComponent
];
