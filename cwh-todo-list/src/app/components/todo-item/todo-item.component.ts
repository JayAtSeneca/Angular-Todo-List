import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor(){ }
  ngOnInit(): void {
      
  }

  onClick(item: Todo){
    this.todoDelete.emit(item);
  }
  onCheckboxClick(item:Todo){
    this.todoCheckBox.emit(item)
  }
  checkValue(event: any){
    console.log(event);
 }
}
