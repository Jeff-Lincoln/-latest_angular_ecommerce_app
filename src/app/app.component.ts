import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BasketComponent } from './pages/basket/basket.component';
import { RouterModule } from '@angular/router';
import { MyhomeComponent } from "./components/myhome/myhome.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_new_ecommerce_app';
}
