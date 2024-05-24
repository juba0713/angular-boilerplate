import { Injectable } from "@angular/core";
import { Book } from "../_models/book";
import { environment } from "../../environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

const baseUrl = `${environment.apiUrl}/book`;

@Injectable({ providedIn: 'root' })
export class BookService{
    private bookSubject: BehaviorSubject<Book>;
    public book: Observable<Book>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.bookSubject = new BehaviorSubject<Book>(null);
        this.book = this.bookSubject.asObservable();
    }

    public get bookValue(): Book {
        return this.bookSubject.value;
    }
    
    books(book : Book){
        return this.http.post(`${baseUrl}/category/restaurant/details`, book);
    }

    getAll(){
        return this.http.get<Book[]>(baseUrl);
    }
}