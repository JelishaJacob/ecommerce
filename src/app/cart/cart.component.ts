import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  userId:any
  pdata:any=[]
  total:any=0
  constructor(private es:EcartService,private rout:Router){}

  ngOnInit(): void {
          this.cartItems()   
    }

  cartItems(){
    if(localStorage.getItem("user")){
      this.userId=localStorage.getItem("user")
      this.es.cartProductsApi(this.userId).subscribe({
        next:(result:any)=>{
          this.pdata=result.message
          console.log(this.pdata);

          this.es.priceTotal(this.userId).subscribe({
            next:(result:any)=>{
              this.total=result.message
              console.log(this.total);
              
            }
          })
        }
      })
    }
  }

  increment(pId:any){
    this.es.increment(pId).subscribe({
      next:(out:any)=>{
        this.cartItems()
      }
    })
  }

  decrement(pId:any){
    this.es.decrement(pId).subscribe({
      next:(out:any)=>{
        this.cartItems()
      },
      error:(result:any)=>{
        this.remove(pId)
        this.cartItems()
      }
    })
  }

  remove(pId:any){
    this.es.remove(pId).subscribe({
      next:(data:any)=>{
        alert(data.message)
        this.cartItems()
        this.es.cartUpdate()
      }
    })
  }

}
