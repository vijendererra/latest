import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from '../views/views.component';
import { ChangepwdComponent } from '../changepwd/changepwd.component';

const routes: Routes = [

  {path:'',component:ViewsComponent},
  {path:'pwdchange',component:ChangepwdComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterViewModuleModule { }
