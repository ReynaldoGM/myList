import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailListComponent} from './detail-list/detail-list.component';
import {DashboardComponent} from './dashboard/dashboard.component'
const routes: Routes = [
  {path: 'detail/:userId/:recordId', component: DetailListComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path:'', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
