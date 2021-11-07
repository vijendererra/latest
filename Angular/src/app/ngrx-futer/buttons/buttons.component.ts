import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { decrement, increment, reset } from '../state/ngrx-actions';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }


  increse(){
    this.store.dispatch(increment());
  }
  decrese(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }
}
