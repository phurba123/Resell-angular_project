import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecommendedProductsComponent } from "./components/recommended-products/recommended-products.component";

const routes: Routes = [
    {
        path: '', component: RecommendedProductsComponent, pathMatch: 'full'
    }
]

@NgModule({
    imports:[ RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}