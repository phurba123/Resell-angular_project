import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostProductComponent } from "./post-product/post-product.component";

const routes: Routes = [
    {
        path: 'post',
        component: PostProductComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class ProductRoutingModule {}