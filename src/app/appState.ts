import {Todo} from "./todo";
interface AppState {
  todos: Array<Todo>
}

const initialState:AppState = {
  todos: []
};
