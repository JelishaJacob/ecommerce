import { Component, OnInit } from '@angular/core';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  userId:any=""
  pdata:any=[]

  constructor(private es:EcartService){ }

  ngOnInit(): void {
    this.wishlist()
  }

  wishlist(){
    if(localStorage.getItem("user")){
      this.userId=localStorage.getItem("user")
      this.es.wishlistProductsApi(this.userId).subscribe({
        next:(result:any)=>{
          this.pdata=result.message
          console.log(this.pdata);
        }
      })
    }
  }

  addToCart(pId:any,id:any){
    this.es.addToCartApi(this.userId,pId).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.es.cartUpdate()
        this.removeItem(id)
      }
    })
  }

  removeItem(id:any){
    this.es.removeWishlistApi(id).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.wishlist()
      }
    })
  }
}
