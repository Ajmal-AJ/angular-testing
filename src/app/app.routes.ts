import { Routes } from '@angular/router';
import { Login2Component } from './login2/login2.component';
import { Layout2Component } from './layout2/layout2.component';
import { DashboardCreationComponent } from './dashboard-creation/dashboard-creation.component';

export const routes: Routes = [

    //{ path:'',component:Login2Component,},
   
    {path:'',component:Layout2Component},
    {path:'dashboard-creation',component:DashboardCreationComponent},
];
