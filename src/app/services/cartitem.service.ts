import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartitemService {
  constructor(private http:HttpClient) { 
  }
  updateCart(user:any) {
    return this.http.put<any>('https://vue-react-server.herokuapp.com/postCart', user)
  }
  postCart(user:any) {
    return this.http.post<any>('https://vue-react-server.herokuapp.com/postCart', user)
  }
  getCartDetails(email:string) {
    return this.http.post<any>('https://vue-react-server.herokuapp.com/cartDetails', {email})
  }
}
