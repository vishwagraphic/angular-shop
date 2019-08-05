import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
//import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-shop';
  email: string;

  constructor(private shared: SharedService/* , private spinner: NgxSpinnerService */) {
    
  }

  ngOnInit() {
    this.shared.currentUser.subscribe(status => this.email = status.useremail)
    /* this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 5000); */
  }
}
