import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';    
import { LoginComponent } from './components/pages/login/login.component';


/** INCLUDE PATH IN ROUTES */
const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
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
    DashboardComponent,LoginComponent
]