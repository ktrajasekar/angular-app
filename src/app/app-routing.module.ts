import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';

//components for routing
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularapiComponent } from './angularapi/angularapi.component';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "api", component: AngularapiComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
