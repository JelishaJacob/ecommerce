import { Component, OnInit } from '@angular/core';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-admin-user-mng',
  templateUrl: './admin-user-mng.component.html',
  styleUrls: ['./admin-user-mng.component.css']
})
export class AdminUserMngComponent implements OnInit {

  users:any=[]

  constructor(private es:EcartService){}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.es.getAllUsers().subscribe({
      next:(result:any)=>{
        this.users=result.message
        // console.log(this.users);
      }
    })
  }

  deleteUser(id:any){
    this.es.deleteUser(id).subscribe({
      next:(result:any)=>{
        this.getUsers()
      }
    })
  }
}
