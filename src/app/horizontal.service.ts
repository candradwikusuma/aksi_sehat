import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorizontalService {

  private data = [
    {
      category: 'Module',
      expanded: true,
      products: [
        { id: 0, name: 'Social', point: '8', img: 'https://via.placeholder.com/290x450/00000' },
        { id: 1, name: 'English', point: '5', img: 'https://via.placeholder.com/290x450/FFFFF/00000' },
        { id: 2, name: 'Leadership', point: '9', img: 'https://via.placeholder.com/290x450/0000FF' },
        { id: 3, name: 'Motivation', point: '7', img: 'https://via.placeholder.com/290x450/FF0000' }
      ]
    },
  ];

  private module = [
    {
      category: 'Modul',
      expanded: true,
      product: [
        { id: 0, name: '1', point: '8', img: 'https://via.placeholder.com/100x100/00000' },
        { id: 1, name: 'Indon', point: '5', img: 'https://via.placeholder.com/100x100/FFFFF/00000' },
        { id: 2, name: 'Leadership', point: '9', img: 'https://via.placeholder.com/100x100/0000FF' },
        { id: 3, name: 'Motivation', point: '7', img: 'https://via.placeholder.com/100x100/FF0000' },
        { id: 4, name: '1', point: '8', img: 'https://via.placeholder.com/100x100/00000' },
        { id: 5, name: 'Indon', point: '5', img: 'https://via.placeholder.com/100x100/FFFFF/00000' },
        { id: 6, name: 'Leadership', point: '9', img: 'https://via.placeholder.com/100x100/0000FF' },
        { id: 7, name: 'Motivation', point: '7', img: 'https://via.placeholder.com/100x100/FF0000' }

      ]
    }
  ];
  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  // getCart() {
  //   return this.cart;
  // }

  // addProduct(product) {
  //   this.cart.push(product);
  // }

  getModul() {
    return this.module;
  }
  // addModul(modul) {
  //   this.cart.push(modul);
  // }
}