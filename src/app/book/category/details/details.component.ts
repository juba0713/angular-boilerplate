import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../../_services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent implements OnInit{
    form: FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private bookService: BookService
    ) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            startDate: [''],
            startTime: [''],
            endTime: [''],
            testInput: ['']
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        console.log(this.form.value);
        this.bookService.books(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {                  
                    this.router.navigate(['../']);
                },
                error: error => {
                    console.log("YAWA");
                    console.log(error);
                }
            });
    }
}