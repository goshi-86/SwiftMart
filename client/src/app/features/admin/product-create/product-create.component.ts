import { Component } from '@angular/core';
import { ProductService } from '@services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { Product } from 'app/shared/models/product';


@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [FormsModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCard
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})

export class ProductCreateComponent {
  product: Product = {
    id:0,
    name: '',
    description: '',
    price: 0,
    pictureUrl: '',
    type: '',
    brand: '',
    quantityInStock: 0
  };
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}
  createProduct() {
    debugger;
    this.productService.createProduct(this.product).subscribe({
      next: () => {
        alert('Product created successfully!');
        this.router.navigate(['/shop']);
      },
      error: (err) => {
        alert('Error creating product');
        console.error(err);
      }
    });
  }
}
