import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-admin-product-mng',
  templateUrl: './admin-product-mng.component.html',
  styleUrls: ['./admin-product-mng.component.css']
})
export class AdminProductMngComponent implements OnInit {

  pdata:any=[]
  id:any

  constructor(private rout:Router, private es:EcartService){}

  ngOnInit(): void {
    this.es.getAllProducts().subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        console.log(this.pdata);
      }
    })
  }

  addProduct(){
    this.rout.navigateByUrl("admin-add-product")
  }

  editPage(id:any){
    this.rout.navigateByUrl(`admin-edit-product/${id}`)
  }
  // deleteProduct
  remove(id:any){
    this.es.deleteProductApi(id).subscribe({
      next:(result:any)=>{
        alert(result.message)

        this.es.getAllProducts().subscribe({
          next:(result:any)=>{
            this.pdata=result.message
            console.log(this.pdata);
          }
        })
        
      }
    })
  }

  // https://i.postimg.cc/FRffcFhz/wclock1.jpg
}
