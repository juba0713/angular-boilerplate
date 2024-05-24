import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { LayoutComponent } from './layout.component';
import { RestaurantComponent } from './restaurant.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CategoryRoutingModule
    ],
    declarations: [
        LayoutComponent,
        RestaurantComponent
    ]
})
export class CategoryModule { }