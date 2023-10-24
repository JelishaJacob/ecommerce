import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EcartService } from 'ecommService/ecart.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userRegisterForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z@.]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@]+')]]
  })

  constructor(private fb: FormBuilder, private es: EcartService, private rout: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.userRegisterForm.valid) {
      this.es.userRegisterApi(this.userRegisterForm.value.email, this.userRegisterForm.value.psw)
        .subscribe({
          next: (result: any) => {
            alert(result.message)
            this.rout.navigateByUrl('user-login')
          },
          error: (result: any) => {
            alert(result.error.message)
          }
        })
    }
    else {
      alert("Please Fill The Form")
    }
  }

}
