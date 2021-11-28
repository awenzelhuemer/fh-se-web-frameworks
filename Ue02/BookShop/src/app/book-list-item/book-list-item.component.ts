import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Book } from '../shared/book';

@Component({
  selector: 'a.wea5-book-list-item',
  templateUrl: './book-list-item.component.html',
  styles: [
  ]
})
export class BookListItemComponent implements OnInit {

  @Input() book: Book = new Book();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  imageUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.images}/${this.book.picture}`)
  }

}
