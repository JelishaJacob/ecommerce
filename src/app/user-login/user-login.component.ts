import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z@.]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@*]+')]]
  })

  constructor(private fb: FormBuilder, private es: EcartService, private rout: Router) { }

  ngOnInit(): void {
  }

  userLogin() {
    if (this.userLoginForm.valid) {
      this.es.userLoginApi(this.userLoginForm.value.email, this.userLoginForm.value.psw)
        .subscribe({
          next: (result: any) => {
            alert(result.message)
            localStorage.setItem("user", result._id)
            this.rout.navigateByUrl("")
            this.es.header()
          },
          error: (result: any) => {
            alert(result.error.message)
            this.rout.navigateByUrl("")
          }
        })
    }
    else {
      alert("Please Fill The Form")
    }
  }


}
