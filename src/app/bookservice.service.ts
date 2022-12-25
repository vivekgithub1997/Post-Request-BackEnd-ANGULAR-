import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private apiUrl="http://localhost:8080/book";

  constructor(private httpClient:HttpClient) { }

  createBook(book:Book):Observable<Book[]>{

    return this.httpClient.post<Book[]>(this.apiUrl,book,{responseType:'json'});

  }
}
