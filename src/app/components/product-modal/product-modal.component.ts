import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent {
  @Input() product: any = null;
  @Output() closeModal = new EventEmitter<void>();
  isVisible = false; // Animation control

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 50);
  }

  close() {
    this.isVisible = false;
    setTimeout(() => {
      this.closeModal.emit();
      this.router.navigate(['/']); // Navigate to homepage
    }, 400);
  }
}




// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-product-modal',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './product-modal.component.html',
//   styleUrls: ['./product-modal.component.scss'],
// })
// export class ProductModalComponent {
//   @Input() product: any = null;
//   @Output() closeModal = new EventEmitter<void>();

//   close() {
//     this.closeModal.emit();
//   }
// }

