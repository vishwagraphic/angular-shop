import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {SigninService} from './../services/signin.service';
import {Sign} from './sign';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  subscription: Subscription;
  user = new Sign('', '');
  constructor(private signInService: SigninService, private _router:Router) { }

  signInForm() {
    this.subscription = this.signInService.signInUser(this.user).subscribe(
      data => {
        if(data){
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
