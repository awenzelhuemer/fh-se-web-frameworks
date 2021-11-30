import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'wea5-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  isLoading: boolean = false;
  foundBooks: Book[] = [];
  @Output() bookSelected = new EventEmitter<Book>();
  keyup = new EventEmitter<string>();

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.keyup.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(term =>  this.bs.getAllSearch(term)),
      tap(() => this.isLoading = false)
    ).subscribe(books => this.foundBooks = books);
  }
}
