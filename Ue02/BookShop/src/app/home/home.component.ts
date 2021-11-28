import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/book';

@Component({
  selector: 'wea5-home',
  template: `
    <div class="ui container two column grid">
    <!-- END_SEARCH_INTEGRATION -->

      <div class="ui container column">
        <h1>Home</h1>
        <p>Willkommen im WEA5 BookShop.</p>
        <a routerLink="../books" class="ui red button">
          Buchliste ansehen
          <i class="right arrow icon"></i>
        </a>
      </div>

      <!-- START_SEARCH_INTEGRATION -->
      <!-- TODO -->
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  bookSelected(book: Book) {
    this.router.navigate(['../books', book.id], { relativeTo: this.route });
  }

}
