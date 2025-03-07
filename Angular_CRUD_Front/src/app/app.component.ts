import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from "./page/login/login.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { ManagecustomerComponent } from "./page/dashboard/managecustomer/managecustomer.component";
import { AddcustomerComponent } from "./page/dashboard/addcustomer/addcustomer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, DashboardComponent, ManagecustomerComponent, AddcustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular_crud_front';

  ngOnInit(): void {
    initFlowbite();
  }
}