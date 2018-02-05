import { Component, OnInit } from '@angular/core';
import { product } from 'app/products/products';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  apiUrl = 'https://aqueous-gorge-20965.herokuapp.com/tools';

  constructor(private http: Http) {
    console.log('The products are here');
  }

  getData() {
    return this.http.get(this.apiUrl)
      .then((data) => data.json())
  }
}
