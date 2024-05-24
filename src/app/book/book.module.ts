import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { LayoutComponent } from './layout.component';
import { PlaceComponent } from './place.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BookRoutingModule
    ],
    declarations: [
        LayoutComponent,
        PlaceComponent
    ]
})
export class BookModule { }