import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxFuterComponent } from './ngrx-futer-component/ngrx-futer.component';
import { NgrxFuterRouterModule } from './ngrx-futer-router/ngrx-futer-router.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { AddnameComponent } from './addname/addname.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { Count_Variable } from './state/ngrx-selecter';
import { countReducer } from './state/ngrx-reducer';



@NgModule({
  declarations: [
    NgrxFuterComponent,
    ButtonsComponent,
    AddnameComponent,
  ],
  imports: [
    CommonModule,
    NgrxFuterRouterModule,
    SharedModule,
    // StoreModule.forFeature(Count_Variable,countReducer)
  ]
})
export class NgrxFuterModule { }
