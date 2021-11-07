import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud-compnet/crud.component';
import {SharedModule} from '../shared/shared.module';

import{CrudRoutingModule} from './crud-routing/crud-routing.module'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CurdDataService } from './state/curd.effects';
import { listReducer } from './state/curd.reducer';
import { _loadDataSuccess } from './state/curd.select';
// import { _loadDataSuccess } from './state/curd.select';
@NgModule({
  declarations: [CrudComponent ],
  imports: [
    CommonModule,
    SharedModule,
    CrudRoutingModule,
    StoreModule.forFeature(_loadDataSuccess,listReducer),
    EffectsModule.forFeature([CurdDataService]),
  ]
})
export class CrudModule { }
