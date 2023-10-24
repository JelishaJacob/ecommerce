import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUserMngComponent } from './admin-user-mng/admin-user-mng.component';
import { AdminProductMngComponent } from './admin-product-mng/admin-product-mng.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "admin-home", component: AdminHomeComponent },
  { path: "admin-usermng", component: AdminUserMngComponent },
  { path: "admin-productmng", component: AdminProductMngComponent },
  { path: "admin-add-product", component: AdminAddProductComponent },
  { path: 'admin-edit-product/:id', component: EditProductComponent },
  { path: 'product-view/:id', component: SingleproductComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'wishlist/:id', component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
