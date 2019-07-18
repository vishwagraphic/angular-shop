import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts(type:any) {
    return this.http.get('https://vue-react-server.herokuapp.com/products/', {params: {type:type}});
  }
}
