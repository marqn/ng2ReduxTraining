import {Injectable} from "@angular/core";

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

@Injectable()
export class TodoActions {
  private nextTodoID = 0;

  addTodo(title:string) {
    return {
      id: this.getNextID(),
      type: ADD_TODO,
      title,
      complete: false
    };
  }

  toogleTodo(id:number)
  {
    return {
      id,
      type: TOGGLE_TODO
    }
  }

  getNextID() {
    return ++this.nextTodoID;
  }
}

export function rootReducer(state:AppState = initialState)
