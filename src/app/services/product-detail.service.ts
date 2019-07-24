import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  constructor(private http: HttpClient) { }

  getProductDetails(id:any) {
    return this.http.post('https://vue-react-server.herokuapp.com/product/' + id, {id: id});
  }
}
