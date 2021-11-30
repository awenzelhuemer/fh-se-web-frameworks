import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookRFormErrorMessages } from './book-rform-error-messages';

@Component({
  selector: 'wea5-book-rform',
  templateUrl: './book-rform.component.html',
  styles: []
})
export class BookRformComponent implements OnInit {
  isUpdatingBook = false;
  myForm!: FormGroup;
  book = new Book();
  errors: { [key: string]: string } = {};

  constructor(private fb: FormBuilder,
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router) 
    { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdatingBook = true;
      this.bs.getBookById(id).subscribe(book => {
        this.book = book;
        this.initForm();
      });
    }
    this.initForm();
  }

  initForm() {
    // we are using a FormBuilder to fill the Form-Model
    this.myForm = this.fb.group({
      title: [this.book.title, Validators.required],
      publisher: this.book.publisher,
      id: [this.book.id, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8)
      ]],
      description: this.book.publisher,
      author: this.book.author,
      year: this.book.year,
      price: this.book.price,
      picture: this.book.picture
    });
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {
    const book : Book = this.myForm.value; 
    if (this.isUpdatingBook) {
      console.log("Update book");
      this.bs.update(book).subscribe(() => this.router.navigate(["/books", book.id]));
    } else {
      console.log("Save book");
      this.bs.save(book).subscribe(() => {
        this.book = new Book();
        this.myForm.reset(this.book);
      });
    }
  }

  updateErrorMessages() {
    this.errors = {};
    
    for (const message of BookRFormErrorMessages) {
      const control = this.myForm.get(message.forControl);
      if (control &&
          control.dirty &&
          control.invalid &&
          control.errors != null && 
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
