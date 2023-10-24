import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  pid:any=""
  pdata:any={}

  constructor(private ar:ActivatedRoute,private es:EcartService,private rout:Router){}

  ngOnInit(): void {
    this.ar.params.subscribe(data=>{
      this.pid=data['id']
      // console.log(this.pid);
    })

    this.es.getProductAPi(this.pid).subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        // console.log(this.pdata);
        
      }
    })
  }

  update(){
    this.es.editProductApi(this.pid,this.pdata).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.rout.navigateByUrl('admin-productmng')
      }
    })
  }

}
