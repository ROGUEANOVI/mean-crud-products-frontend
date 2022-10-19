import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';

const routes: Routes = [
  {path: "", component: ListProductsComponent},
  {path: "create-product", component: ManageProductsComponent},
  {path: "edit-product/:id", component: ManageProductsComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
