import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Iproduct[] = [
    { id: 1, name: "Pen" },
    { id: 2, name: "Book" },
    { id: 3, name: "Folders" },
    { id: 4, name: "Staplers" },
  ];

  constructor() { }
}
