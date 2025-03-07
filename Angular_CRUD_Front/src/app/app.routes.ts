import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AddcustomerComponent } from './page/dashboard/addcustomer/addcustomer.component';
import { ManagecustomerComponent } from './page/dashboard/managecustomer/managecustomer.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent,
        children:[
            {
                path:"addcustomer",
                component:AddcustomerComponent
            },
            {
                path:"managecustomer",
                component:ManagecustomerComponent
            }
        ]
    },


];
