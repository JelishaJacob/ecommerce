import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  pid: any = ""
  pdata: any = {}
  uid: any = ""

  constructor(private ar: ActivatedRoute, private es: EcartService, private rout: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data.id
    })

    this.es.getProductAPi(this.pid).subscribe({
      next: (result: any) => {
        this.pdata = result.message
        // console.log(this.pdata);

      }
    })
  }

  Cart() {
    if (localStorage.getItem("user")) {

      // usesrId pId
        this.uid=localStorage.getItem("user")
        this.es.addToCartApi(this.uid,this.pid).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.es.cartUpdate()
        }
      })
    }
    else {
      alert("Please Login First")
      this.rout.navigateByUrl('user-login')
    }
  }

  addToWishlist(){
    if (localStorage.getItem("user")) {
      // usesrId pId
        this.uid=localStorage.getItem("user")
        this.es.addToWishlist(this.uid,this.pid).subscribe({
        next:(result:any)=>{
          alert(result.message)
        },
        error:(result:any)=>{
          alert(result.error.message)
        }
      })
    }
    else {
      alert("Please Login First")
      this.rout.navigateByUrl('user-login')
    }
  }
}

