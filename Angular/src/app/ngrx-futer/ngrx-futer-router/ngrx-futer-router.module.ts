import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgrxFuterComponent } from '../ngrx-futer-component/ngrx-futer.component';


const routes: Routes = [
  {path:'',component:NgrxFuterComponent},
  // {path:'register',component:RegistrationComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxFuterRouterModule { }
