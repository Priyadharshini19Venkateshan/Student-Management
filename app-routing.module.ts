import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import{StudentComponent} from './student/student.component';


const routes: Routes = [
 {path:'customer' , component:CustomerComponent},
  {path:'student' , component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
