import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sign} from './../signin/sign'

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }
  signInUser (user: Sign) {
    return this.http.post<any>(`https://vue-react-server.herokuapp.com/signin`, user);
  }
}
