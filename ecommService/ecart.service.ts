import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcartService {
  uid:any

  cartCount=new BehaviorSubject(0)
  login=new BehaviorSubject(false)

  baseUrl: any = "http://localhost:5000"

  constructor(private http: HttpClient) { 
    this.cartUpdate()
    this.header()
  }

  header(){
    if(localStorage.getItem("user")){
      this.login.next(true)
    }
  }

  cartUpdate(){
    if(localStorage.getItem("user")){
      this.uid=localStorage.getItem("user")
      this.http.get(`${this.baseUrl}/cart-count/${this.uid}`).subscribe({
        next:(result:any)=>{
          this.cartCount.next(result.message)
        }
      })
    }
  }
  // api calls

  // api call for adminLogin
  adminLogin(uname: any, psw: any) {
    const body = { uname, psw }
    return this.http.post(`${this.baseUrl}/admin/login`, body)
  }

  // api call to add products
  addProductApi(body: any) {
    return this.http.post(`${this.baseUrl}/admin/add-product`, body)
  }

  // api to view all products
  getAllProducts() {
    return this.http.get(`${this.baseUrl}/product-access`)
  }

  // api to edit product
  editProductApi(id: any, bodyData: any) {
    return this.http.put(`${this.baseUrl}/product-update/${id}`, bodyData)
  }

  // api to single product
  getProductAPi(id: any) {
    return this.http.get(`${this.baseUrl}/singleprodect-access/${id}`)
  }
  // deleteProduct
  deleteProductApi(id: any) {
    return this.http.delete(`${this.baseUrl}/product-delete/${id}`)
  }

  // api call to userRegister
  userRegisterApi(email: any, psw: any) {
    const body = { email, psw }
    return this.http.post(`${this.baseUrl}/user-register`, body)
  }

  // api call to userLogin
  userLoginApi(email: any, psw: any) {
    const body = { email, psw }
    return this.http.post(`${this.baseUrl}/user-login`, body)
  }

  // api to addToCart
  addToCartApi(userId: any, pId: any) {
    const body = { userId, pId }
    return this.http.post(`${this.baseUrl}/addtocart`, body)
  }

  // api to view cartProduct
  cartProductsApi(userId:any){
    return this.http.get(`${this.baseUrl}/cart-products/${userId}`)
  }

  // api to get total price at cart
  priceTotal(id:any){
    return this.http.get(`${this.baseUrl}/price-total/${id}`)
  }

  // api call to increment decrement quantity
  increment(pId:any){
    return this.http.get(`${this.baseUrl}/quantity-update-inc/${pId}`)
  }

  decrement(pId:any){
    return this.http.get(`${this.baseUrl}/quantity-update-dec/${pId}`)
  }

  // api call to  remove product from cart
  remove(pId:any){
    return this.http.delete(`${this.baseUrl}/remove-cart/${pId}`)
  }

  // api call to addToWishlist
  addToWishlist(userId:any,pId:any){
    const body={userId,pId}
    return this.http.post(`${this.baseUrl}/add-to-wishlist`,body)
  }

  // api call to view wsihlist products
  wishlistProductsApi(userId:any){
    return this.http.get(`${this.baseUrl}/wishlist-products/${userId}`)
  }

  // api call to remove wishlist item
  removeWishlistApi(id:any){
    return this.http.delete(`${this.baseUrl}/remove-wishlist/${id}`)
  }

    // api to view all users
    getAllUsers() {
      return this.http.get(`${this.baseUrl}/user-access`)
    }

    // delete user
    deleteUser(id:any){
      return this.http.delete(`${this.baseUrl}/user-delete/${id}`)
    }
}

