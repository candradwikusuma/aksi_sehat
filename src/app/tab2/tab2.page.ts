import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { HorizontalService } from '../horizontal.service';
import { Router } from '@angular/router';
import { HidenavStretchheaderComponent } from 'ionic4-hidenav';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(HidenavStretchheaderComponent, { static: false }) hidenav: HidenavStretchheaderComponent;
  @ViewChild('a', { read: ElementRef, static: true }) ContentArea: ElementRef;
  @ViewChild('triggerElement', { read: ElementRef, static: true }) triggerElement: ElementRef;


  private observer: IntersectionObserver;

  cart = [];
  items = [];
  sliderConfig = {
    spaceBetween: 2,
    centeredSlides: false,
    slidesPerView: 1.2
  }
  constructor(private render: Renderer2, private cartService: HorizontalService, private router: Router) { }

  ngOnInit() {
    console.log(this.ContentArea);
    // Create the observer
    this.observer = new IntersectionObserver((entries) => {

      entries.forEach((entry: any) => {

        if (entry.isIntersecting) {
          console.log("add  transform")
          this.render.removeClass(this.ContentArea.nativeElement, 'no-transform');


        } else {
          console.log("remove transform")

          this.render.addClass(this.ContentArea.nativeElement, 'no-transform');
        }
      });

    });

    this.observer.observe(this.triggerElement.nativeElement);

    // this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
  }


  handleScroll(ev) {
    console.log(ev);

  }

  // addToCart(product) {
  //   this.cartService.addProduct(product);
  // }
  openCart() {
    this.router.navigate(['module']);
  }
}
