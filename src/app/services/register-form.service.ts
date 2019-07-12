import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from './../register/register'
@Injectable({
  providedIn: 'root'
})

export class RegisterFormService {
   httpOptions:any = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  registerUser (formData) {
    return this.http.post(`https://vue-react-server.herokuapp.com/register`, formData, this.httpOptions);
  }
}
