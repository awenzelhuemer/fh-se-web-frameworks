import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookStoreService } from 'src/app/services/book-store.service';

@Component({
  selector: 'wea5-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookStoreService) { }

  ngOnInit(): void {
    this.books = this.bookService.getAll();
  }
}
