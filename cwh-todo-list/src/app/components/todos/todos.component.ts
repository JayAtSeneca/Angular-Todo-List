import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];
  localItem:string|null;
  constructor(){
    this.localItem = localStorage.getItem('todos');
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
    
  }

  deleteTodo(event:Todo){
    console.log('in deleteTodo');
    const index = this.todos.indexOf(event);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  AddTodo(item:Todo){
    this.todos.push(item);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  checkboxTodo(item: Todo){
    const index = this.todos.indexOf(item);
    this.todos[index].isActive = !this.todos[index].isActive;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
