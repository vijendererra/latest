import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice/practice.component';
import { RouterPracticeModule } from './router-practice/router-practice.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PracticeComponent],
  imports: [
    CommonModule,
    RouterPracticeModule,
    SharedModule,
   
  ]
})
export class PracticeModule { }
