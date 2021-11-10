import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookStoreService } from 'src/app/services/book-store.service';

@Component({
  selector: 'wea5-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  @Input() book: Book = new Book();
  
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    bookStoreService: BookStoreService,
    private router: Router) {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.book = bookStoreService.getBookById(id);
      });
   }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
  }

  showBookList() {
    this.router.navigateByUrl("/books");
  }
}
