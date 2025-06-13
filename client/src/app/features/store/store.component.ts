import { Component, inject } from '@angular/core';
import { BrowseProductsComponent } from "./browse-products/browse-products.component";
import { AccountService } from '@services/account.service';
import { ProductService } from '@services/product.service';
import { ShopService } from '@services/shop.service';
import { Pagination } from 'app/shared/models/pagination';
import { Product } from 'app/shared/models/product';
import { ShopParams } from 'app/shared/models/shopParams';
@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ BrowseProductsComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  private shopService = inject(ShopService)
  shopParam = new ShopParams();
  productList?:Pagination<Product>

   ngOnInit(): void {
      this.initialize();
  }
  initialize(){
    this.shopService.getProductsList().subscribe({
      next: response=>{
          this.productList = response;
      },
      error: error=>{
          console.error(error)
      }
    })

  }
}
