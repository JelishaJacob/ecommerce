import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private es: EcartService, private rout: Router) { }

  pdata: any = []

  ngOnInit(): void {
    this.es.getAllProducts().subscribe({
      next: (result: any) => {
        this.pdata = result.message
      }
    })
  }

  singleView(id: any) {
    this.rout.navigateByUrl(`product-view/${id}`)
  }

}
