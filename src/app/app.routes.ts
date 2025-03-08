import { Routes } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MyhomeComponent } from './components/myhome/myhome.component';

export const routes: Routes = [
  { path: '', component: MyhomeComponent }, // Default route
  { path: 'basket', component: BasketComponent }, // Example route
  { path: '**', component: NotFoundComponent }, // Wildcard route for 404 pages
];
