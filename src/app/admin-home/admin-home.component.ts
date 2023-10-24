import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private rout:Router) {}

  usermng(){
    this.rout.navigateByUrl("admin-usermng")
  }

  productmng(){
    this.rout.navigateByUrl("admin-productmng")
  }

}
