import { Component, OnInit } from '@angular/core';

import { AccountService } from '../_services/account.service';
import { BookService } from '../_services/book.service';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    
    
    account = this.accountService.accountValue;
    books = this.bookService.getAll()
    .pipe(first())
    .subscribe(books => this.books = books);

    constructor(
        private accountService: AccountService,
        private bookService: BookService
    ) { 
        
    }

  


}