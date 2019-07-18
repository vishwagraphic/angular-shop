import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {SigninService} from './../services/signin.service';
import {Sign} from './sign';
import { Router } from '@angular/router';
import { SharedService } from './../services/shared.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  subscription: Subscription;
  user = new Sign('', '');
  constructor(private signInService: SigninService, private _router:Router, private shared: SharedService) { }

  signInForm() {
    this.subscription = this.signInService.signInUser(this.user).subscribe(
      data => {
        if(data){
          let currUser:Object = {
            isSigned : true,
            userName : data.name,
            useremail: data.email
          }
          this.shared.changeStatus(currUser)
          //this.shared.changeUserName(data.name)
          console.log(JSON.stringify(data))
          localStorage.setItem('isSigned', 'true')
          localStorage.setItem('userid', data.id)
          localStorage.setItem('username', data.name)
          localStorage.setItem('useremail', data.email)
          this._router.navigate(['']);
        }
      },
      error => {
        console.log(error)
      })
  }

  ngOnInit() {
    
  }

}
