import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm = this.fb.group({
    auname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    apasw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  constructor(private fb: FormBuilder, private rout: Router, private es: EcartService) { }

  ngOnInit(): void {
  }

  adminlogin() {
    if (this.adminLoginForm.valid) {
      this.es.adminLogin(this.adminLoginForm.value.auname, this.adminLoginForm.value.apasw)
        .subscribe({
          next: (result: any) => {
            this.rout.navigateByUrl("admin-home")
          },
          error: (result: any) => {
            alert(result.error.message)
          }
        })
    }
    else {
      alert("Please Provide Login Details")
    }

  }

}
