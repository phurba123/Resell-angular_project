import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
    {
        path: '', component: HomeComponent, pathMatch: 'full'
    },
    {
        path: 'product',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
    },
    
    /* *********Wildcard route ******** */
    {
        path: '**', component: NotFoundComponent
    },
]

@NgModule({
    imports:[ RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}