
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetpwdComponent } from '../resetpwd/resetpwd.component';
import { FogotpwdComponent } from '../fogotpwd/fogotpwd.component'


const routes: Routes = [
  {path:'',component:FogotpwdComponent}, 
  {path:'reset/:token',component:ResetpwdComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetpwdrouterModule { }
