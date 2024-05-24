import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { RestaurantComponent } from './restaurant.component';

const detailModule = () => import('./details/detail.module').then(x => x.DetailModule);

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component : RestaurantComponent},
            { path: 'restaurant', component : RestaurantComponent},
            { path: 'restaurant', loadChildren : detailModule}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }