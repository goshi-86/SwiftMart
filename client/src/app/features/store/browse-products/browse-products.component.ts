import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '@services/cart.service';
import { Product } from 'app/shared/models/product';


@Component({
  selector: 'app-browse-products',
  standalone: true,
  imports: [CommonModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './browse-products.component.html',
  styleUrl: './browse-products.component.scss'
})
export class BrowseProductsComponent {
 @Input() product?:Product
  private router = inject(Router)
  public cartService = inject(CartService)
  btnItemDetails(){
    this.router.navigateByUrl("itemDetails");

  }
}
