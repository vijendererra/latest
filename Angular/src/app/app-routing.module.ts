import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AouthGuard } from './aouth/aouth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    // path:'',loadChildren:'./login-registration/login.module#LoginModule'
    path: '',
    // The new import() syntax
    loadChildren: () => import('./login-registration/login.module').then(m => m.LoginModule)
  },
  {
    path: 'curd',
    // loadChildren:'./crud/crud.module#CrudModule',canActivate:[AouthGuard]
    loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule), canActivate: [AouthGuard]
  },
  {
    path: 'forgotpwd',
    loadChildren: () => import('./resetpassword/resetpassword.module').then(m => m.ResetpasswordModule)
  },
  {
    path: 'views',
    // loadChildren:'./view-pwdupadate/view-pwdupadate.module#ViewPwdupadateModule',canActivate:[AouthGuard]
    loadChildren: () => import('./view-pwdupadate/view-pwdupadate.module').then(m => m.ViewPwdupadateModule),canActivate: [AouthGuard]
  },
  
  {
    path:'funtions',
    loadChildren:()=>import('./funtions-module/funtions-module.module').then(m=>m.FuntionsModuleModule)
    // loadChildren:'./funtions-module/funtions-module.module#FuntionsModuleModule',canActivate:[AouthGuard]
  },
  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
