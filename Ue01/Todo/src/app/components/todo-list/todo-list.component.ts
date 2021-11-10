import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.list.push({ title: `Title ${i}`, author: "Author", category: "Category", dateTime: new Date(), description: "Description", done: i % 2 == 0 });
    }
  }
}
