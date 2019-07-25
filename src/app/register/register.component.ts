import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {RegisterFormService} from './../services/register-form.service'
import {Register} from './register'
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  subscription: Subscription;
  user = new Register('', '', '');
  constructor(private registerFormService: RegisterFormService, 
    private _router:Router, private spinner:NgxSpinnerService ) {}
  registerForm() {
    this.spinner.show()
    this.subscription = this.registerFormService.registerUser(this.user).subscribe(
      data => {
        if(data){
          this.spinner.hide()
          this._router.navigate(['registrationConfirmation']);
        }
      },
      error => {
        console.log(error)
      })
  }
  ngOnInit() {
  }

}
