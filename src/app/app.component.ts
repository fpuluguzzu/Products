import { Component } from '@angular/core';
import { Iproduct } from './interfaces/iproduct';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Iproduct[];


  constructor(private productService:ProductService ) {

    this.products = this.productService.products;

  }
}
