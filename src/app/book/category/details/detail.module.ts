import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DetailRoutingModule
    ],
    declarations: [
        LayoutComponent,
        DetailsComponent
    ]
})
export class DetailModule { }