import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/product.service';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

@Component({
  selector: 'app-myhome',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss'],
})
export class MyhomeComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response: any) => {
        this.isLoading = false;
        if (response && Array.isArray(response)) {
          this.products = response;
          console.log('Fetched products:', this.products);
        } else {
          console.warn('Unexpected API response format:', response);
          this.errorMessage = 'Error: Unexpected API format';
        }
      },
      error: (error: any) => {
        this.isLoading = false;
        console.error('Error fetching products:', error);
        this.errorMessage = 'Error: Unable to fetch products';
      },
    });
  }
}



// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { ProductsService } from '../../services/product.service'

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   category: {
//     id: number;
//     name: string;
//     image: string;
//   };
// }

// @Component({
//   selector: 'app-myhome',
//   standalone: true,
//   imports: [RouterModule, CommonModule],
//   templateUrl: './myhome.component.html',
//   styleUrls: ['./myhome.component.scss'],
// })
// export class MyhomeComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private productService: ProductsService) {}

//   ngOnInit(): void {
//     this.productService.getProducts().subscribe({
//       next: (response: any) => {
//         if (response?.products && Array.isArray(response.products)) {
//           this.products = response.products;
//           // console.log('Fetched products:', this.products);
//         } else {
//           console.warn('Unexpected API response format:', response);
//         }
//         console.log('Fetched products:', this.products);
//       },
//       error: (error: any) => {
//         console.error('Error fetching products:', error);
//       },
//     });
//   }
// }
