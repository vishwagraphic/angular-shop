import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  isSigned: boolean;
  userName: String;

  constructor(private shared: SharedService) { }

  onSignout(event) {
    event.preventDefault();
    let currUser:Object = {
      isSigned : false,
      userName : ''
    }
    this.shared.changeStatus(currUser)
    localStorage.clear()
  }
  ngOnInit() {
    this.shared.currentUser.subscribe(user => this.isSigned = user.isSigned)
    this.shared.currentUser.subscribe(user => this.userName = user.userName)
  }
}
