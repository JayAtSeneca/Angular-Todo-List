import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];
  constructor(){ 
    this.todos = [
      {
        sno: 1,
        title: "This is title",
        desc: "Description",
        isActive: true
      },
      {
        sno: 2,
        title: "This is title-2",
        desc: "Description",
        isActive: true
      },
      {
        sno: 3,
        title: "This is title-3",
        desc: "Description",
        isActive: true
      },
    ]
  }

  deleteTodo(event:Todo){
    console.log('in deleteTodo');
    const index = this.todos.indexOf(event);
    this.todos.splice(index,1);
  }
  AddTodo(item:Todo){
    this.todos.push(item)
  }
}
