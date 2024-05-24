import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { PlaceComponent } from './place.component';

const categoryModule = () => import('./category/category.module').then(x => x.CategoryModule);

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component : PlaceComponent},
            { path: 'place', component: PlaceComponent },
            { path: 'category', loadChildren : categoryModule}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRoutingModule { }