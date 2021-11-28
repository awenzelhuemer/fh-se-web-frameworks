import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'wea5-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Book = new Book();
  @Output() showListEvent = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, 
    private bookStoreService: BookStoreService,
    private router: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.book =   
      this.bookStoreService.getBookById(params['id']));
  }

  showBookList() {
   // this.showListEvent.emit();
   this.router.navigateByUrl("/books");
  }

  imageUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.images}/${this.book.picture}`)
  }
  
}
