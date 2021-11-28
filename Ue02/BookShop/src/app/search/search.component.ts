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

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {

  }

}
