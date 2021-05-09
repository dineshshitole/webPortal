import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductEnggComponent } from './product-engg/product-engg.component';
import { RisingFoxComponent } from './rising-fox/rising-fox.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'productEngg', component: ProductEnggComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'risingFox', component: RisingFoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
