import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-shop';
  email: string;

  constructor(private shared: SharedService) {
    
  }

  ngOnInit() {
    this.shared.currentUser.subscribe(status => this.email = status.useremail)
  }
}
