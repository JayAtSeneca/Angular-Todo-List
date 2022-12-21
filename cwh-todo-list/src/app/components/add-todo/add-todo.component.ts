import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  description: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor(){
    this.title = "";
    this.description = "";
  }
  ngOnInit(): void {
      
  }
  onSubmit(){
    const todo:Todo = {
      sno: 8,
      title: this.title,
      desc: this.description,
      isActive: true
    }
    this.todoAdd.emit(todo);
    this.title=""
    this.description=""
  }
}
