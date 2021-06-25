import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views/views.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import{RouterViewModuleModule} from './router-view-module/router-view-module.module';
import {SharedModule} from '../shared/shared.module'



@NgModule({
  declarations: [ViewsComponent, ChangepwdComponent],
  imports: [
    CommonModule,
    RouterViewModuleModule,
    SharedModule
  ]
})
export class ViewPwdupadateModule { }
