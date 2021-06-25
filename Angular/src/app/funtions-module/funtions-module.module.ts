import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionsComponent } from './functions/functions.component';
import {SharedModule} from '../shared/shared.module';
import { RouterFunModuleModule } from './router-fun-module/router-fun-module.module';



@NgModule({
  declarations: [FunctionsComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    RouterFunModuleModule
  ]
})
export class FuntionsModuleModule { }
