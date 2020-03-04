import { Component, OnInit } from '@angular/core';
import { HorizontalService } from '../horizontal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  // cart = [];
  items = [];
  items2 = [];
  slide1pts = {
    slidesPerView: 2.2,
    // spaceBetween: -18,
    centeredSlides: true,
    // centeredSlidesBounds: true,
    loop: true,

    // // slidesOffsetBefore: -10



    // freeModeSticky: true,
    // breakpoints: {
    //   640: {

    //     slidesPerView: 2.3,
    //     spaceBetween: -18,
    //     centeredSlides: true,
    //     // loop: true,
    //     centeredSlidesBounds: true,
    //   },
    //   768: {

    //     slidesPerView: 4.2,
    //     spaceBetween: -4,
    //     centeredSlides: true,
    //     // loop: true,
    //     centeredSlidesBounds: true,
    //   },
    //   1024: {

    //     slidesPerView: 5.2,
    //     spaceBetween: -4,
    //     centeredSlides: true,
    //     // loop: true,
    //     centeredSlidesBounds: true,
    //   }
  }



  module = {
    slidesPerView: 4.2,
    spaceBetween: -20,
    centeredSlides: true,
    loop: true,

    breakpoints: {
      640: {
        slidesPerView: 4.2,
        spaceBetween: -20,
        centeredSlides: true,
        loop: true,
      },
      768: {
        slidesPerView: 6.2,
        spaceBetween: -23,

        centeredSlides: true,
        loop: true,
      },
      1024: {
        slidesPerView: 8.2,
        spaceBetween: -30,
        centeredSlides: true,
        loop: true,
      },
    }
  };

  constructor(private cartService: HorizontalService, private router: Router) { }


  ngOnInit() {

    // this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();

    this.items2 = this.cartService.getModul();

  }

  // addToCart(product) {
  //   this.cartService.addProduct(product);
  // }

  // addToCart2(modul) {
  //   this.cartService.addProduct(modul);
  // }

  // openCart() {
  //   this.router.navigate(['module']);
  // }
} 
