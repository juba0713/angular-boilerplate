import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRouteModule } from './home-routing.module';
import { LayoutComponent } from './layout.component';
import { InitialComponent } from './initial.component';
import { PlaceComponent } from './place.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomeRouteModule
    ],
    declarations: [
        LayoutComponent,
        InitialComponent,
        PlaceComponent
    ]
})
export class HomeModule { }