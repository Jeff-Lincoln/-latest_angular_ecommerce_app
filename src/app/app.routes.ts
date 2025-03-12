import { Routes } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MyhomeComponent } from './components/myhome/myhome.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: MyhomeComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent }, // Wildcard route for 404 pages
];
