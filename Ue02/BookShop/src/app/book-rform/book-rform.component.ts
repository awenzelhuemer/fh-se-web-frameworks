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
      // TODO load book
    }
    this.initForm();
  }

  initForm() {
    // we are using a FormBuilder to fill the Form-Model
    // TODO
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {   
    if (this.isUpdatingBook) {
      // TODO Update
    } else {
      // TODO Save
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
