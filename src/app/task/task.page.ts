import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HorizontalService } from '../horizontal.service';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  // @ViewChild(HidenavStretchheaderComponent, { static: false }) hidenav: HidenavStretchheaderComponent;
  @ViewChild('a', { read: ElementRef, static: true }) ContentArea: ElementRef;
  @ViewChild('triggerElement', { read: ElementRef, static: true }) triggerElement: ElementRef;
  private observer: IntersectionObserver;
  selectedSlide: any;
  segment: string;

  cart = [];
  items = [];
  sliderConfig = {
    spaceBetween: 2,
    centeredSlides: false,
    slidesPerView: 1.2
  }

  sliderOptions = {
    initialSlide: 0,
    sliderPerView: 1,
    speed: 400
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
  ionViewWillEnter() {
    this.segment = "Progress";
  }
  taskprogress() {
    // this.router.navigate(['home']);
    this.router.navigateByUrl('/taskprogress');
  }

  package() {
    this.router.navigateByUrl('/packagetask');
  }
  // async segmentChanged(ev) {
  //   await this.selectedSlide.slideTo(this.segment);
  // }

  // slideShanged(slides: IonSlides) {
  //   this.selectedSlide = slides;
  //   slides.getActiveIndex().then(selectedIndex => {
  //     this.segment = selectedIndex;
  //   })
  // }
}
