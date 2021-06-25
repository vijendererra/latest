import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';

import {SharedModule} from '../shared/shared.module';
import{ResetpwdrouterModule} from './resetpwdrouter/resetpwdrouter.module';
import { FogotpwdComponent } from './fogotpwd/fogotpwd.component'

@NgModule({
  declarations: [ResetpwdComponent, FogotpwdComponent],
  imports: [
    CommonModule,
    ResetpwdrouterModule,
    SharedModule
  ]
})
export class ResetpasswordModule { }
