import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DealProductsService {
  constructor(private http: HttpClient) { }

  getDealProducts() {
    return this.http.get(`https://vue-react-server.herokuapp.com/dealsProducts`);
  }

  getLowCostProducts() {
    return this.http.get(`https://vue-react-server.herokuapp.com/lowCostProducts`);
  }
}
