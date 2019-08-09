import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-confirm',
  template: `
  <div class="container text-center">
    <h2>Thank you for registering</h2>
    <h2>Please log into your account by <a href="signin">Sign in</a></h2>
  </div>
  `,
  styles: []
})
export class RegConfirmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
