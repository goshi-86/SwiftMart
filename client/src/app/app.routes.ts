import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductCreateComponent } from './features/admin/product-create/product-create.component';

import { ShopComponent } from './features/shop/shop.component';
import { ProductDetailsComponent } from './features/shop/product-details/product-details.component';
import { TestErrorComponent } from './features/test-error/test-error.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ServerErrorComponent } from './shared/components/server-error/server-error.component';
import { CartComponent } from './features/cart/cart.component';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { StoreComponent } from './features/store/store.component';
import { ItemDetailsComponent } from './features/store/item-details/item-details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'product', component: ProductCreateComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'store', component:StoreComponent},
    {path: 'itemDetails',component:ItemDetailsComponent},
    {path: 'shop/:id', component: ProductDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', loadChildren: () => import('./features/checkout/routes')
        .then(r => r.checkoutRoutes)},
    {path: 'orders', loadChildren: () => import('./features/orders/routes')
        .then(r => r.orderRoutes)},
    {path: 'account', loadChildren: () => import('./features/account/routes')
        .then(r => r.accountRoutes)},
    {path: 'test-error', component: TestErrorComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'server-error', component: ServerErrorComponent},
    {path: 'admin', loadComponent: () => import('./features/admin/admin.component')
        .then(c => c.AdminComponent), canActivate: [authGuard, adminGuard]},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];
