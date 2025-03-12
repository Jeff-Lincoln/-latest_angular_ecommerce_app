import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/product.service'
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [ProductModalComponent, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  productId!: string;
  product: any = null;
  showModal = true;


  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productId = id;
        this.fetchProduct();
      }
    });
  }

  fetchProduct() {
    this.productService.getProductById(this.productId).subscribe(
      (product: any) => {
        this.product = product;
        console.log('Fetched Product:', this.product);
      },
      (error: any) => {
        console.error('Error fetching product:', error);
      }
    );
  }

  closeModal() {
    this.showModal = false;
  }
}
