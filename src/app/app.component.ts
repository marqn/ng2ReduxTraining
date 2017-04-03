import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET, SET} from './counterStore';
import {Observable} from "rxjs/Observable";
import {TempServices, Contact} from "./temp-services.service";
import {ListItemComponent} from "./list-item/list-item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TempServices]
})
export class AppComponent {

  counter:Observable<number>;
  contacts:Array<Contact>;

  ngOnInit() {
    this.contacts = this.tempService.contacts;
  }

  constructor(private store: Store<number>, private tempService:TempServices){
    this.counter = store.select('counter');
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  set(value) {
    this.store.dispatch({type: SET, payload: value})
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }

  addTodo() {
    console.log('enter pressed');
  }
}
