import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  count:any=""
  uid:any=""
  login:any=false

  constructor(private es:EcartService,private rout:Router){}

  ngOnInit(): void {

    this.es.login.subscribe((logData:any)=>{
      this.login=logData
    })

    this.es.cartCount.subscribe((data:any)=>{
      this.count=data
    })
  }

  cartPage(){
    if(localStorage.getItem("user")){
      this.uid=localStorage.getItem("user")
      this.rout.navigateByUrl('cart/'+this.uid)
    }
    else{
      alert("Login First")
      this.rout.navigateByUrl('user-login')
    }
  }

  toWishlist(){
    if(localStorage.getItem("user")){
      this.uid=localStorage.getItem("user")
      this.rout.navigateByUrl('wishlist/'+this.uid)
    }
  }

  logout(){
    localStorage.removeItem("user")
    this.es.login.next(false)
    this.rout.navigateByUrl("")

  }
}
