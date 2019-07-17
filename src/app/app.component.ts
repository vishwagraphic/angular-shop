import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-shop';

  isSigned:boolean;

  constructor(private data: SharedService) { }

  ngOnInit() {
    this.data.currentUser.subscribe(status => console.log(status))
  }
}
