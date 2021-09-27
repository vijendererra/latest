import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from '../practice/practice.component';


const routes: Routes = [
  {path:'',component:PracticeComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterPracticeModule { }
