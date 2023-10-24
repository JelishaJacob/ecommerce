import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit{

constructor(private fb:FormBuilder, private rout:Router, private es:EcartService){}

addProductForm=this.fb.group({
  pname:[''],
  description:[''],
  price:[''],
  image:[''],
  rating:[''],
  count:['']
})

  ngOnInit(): void {
  }

  // add new product
  add(){
    const path=this.addProductForm.value
    let body={
      pname:path.pname,
      description:path.description,
      price:path.price,
      image:path.image,
      rating:path.rating,
      count:path.count
    }
   

    if(this.addProductForm.valid){
      this.es.addProductApi(body)
      .subscribe({
        next:(result:any)=>{
          alert(result.message)
          // this.rout.navigateByUrl("admin-productmng")
          this.addProductForm.reset()
        }
      })
    }
  }


}
