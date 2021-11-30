import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  books: Book[] = [];

  constructor(private http: HttpClient) { 
  }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  } 

  getAll(): Observable<Array<Book>> {
    return this.http.get<any>(`${environment.server}/books`)
      .pipe(retry(3), map(res => res["books"]), catchError(this.errorHandler));
  }

  getAllSearch(searchTerm: string): Observable<Array<Book>> {
    return this.http.get<any>(`${environment.server}/search/${searchTerm}`)
      .pipe(map(res => res["books"]), catchError(this.errorHandler));
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<any>(`${environment.server}/book/${id}`)
    .pipe(map(res => res["book"]), catchError(this.errorHandler));
  }

  update(book: Book): Observable<any> {
    return this.http.put<any>(`${environment.server}/update`, book);
  }

  save(book: Book): Observable<any> {
    return this.http.post<any>(`${environment.server}/save`, book);
  }
}
