import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from './book';
import { BookserviceService } from './bookservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '06-Post-Request-BackEnd';

  book:Book = new Book();

  books:Book[] = [ ];

  constructor(private bookservice:BookserviceService){}
  msg:string="";

  saveBook(){
    this.bookservice.createBook(this.book).subscribe(response=>{
      this.books=response;
    })

  }
}
