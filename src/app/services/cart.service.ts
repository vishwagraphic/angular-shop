import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  getCartProducts(ids:any) {
    return this.http.post('https://vue-react-server.herokuapp.com/cart/', {ids: ids});
  }
}
