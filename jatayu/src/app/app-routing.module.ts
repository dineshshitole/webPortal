import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductEnggComponent } from './product-engg/product-engg.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'productEngg', component: ProductEnggComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
