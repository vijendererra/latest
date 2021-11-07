import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setname } from '../state/ngrx-actions';

@Component({
  selector: 'app-addname',
  templateUrl: './addname.component.html',
  styleUrls: ['./addname.component.scss']
})
export class AddnameComponent implements OnInit {
reName:string;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  addName(){
    const obj={
      "name":this.reName,
      "name1":"raja"
    }
    this,this.store.dispatch(setname({name:obj}));
  }
}
