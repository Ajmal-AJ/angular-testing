import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { Login2Component } from './login2/login2.component';
import { Layout2Component } from './layout2/layout2.component';

export const routes: Routes = [

    //{ path:'',component:Login2Component,},
    {path:'layout',component:LayoutComponent},
    {path:'',component:Layout2Component}
];
