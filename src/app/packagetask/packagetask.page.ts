import { PickerController } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { HorizontalService } from '../horizontal.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TaggingEventArgs } from '@syncfusion/ej2-angular-dropdowns';
//import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-packagetask',
  templateUrl: './packagetask.page.html',
  styleUrls: ['./packagetask.page.scss'],
  encapsulation: ViewEncapsulation.None
}
)
export class PackagetaskPage implements OnInit {

  @ViewChild('a', { read: ElementRef, static: true }) ContentArea: ElementRef;
  @ViewChild('triggerElement', { read: ElementRef, static: true }) triggerElement: ElementRef;
  private observer: IntersectionObserver;
  selectedSlide: any;
  segment: string;

  myForm: FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};

  // myForm: FormGroup;

  // //variable Declare
  // disabled = false;
  // ShowFilter = false;
  // limitSelection = false;
  // cities: any = [];
  // selectedItems: any = [];
  // dropdownSettings: any = {};




  constructor(private render: Renderer2, private cartService: HorizontalService, private router: Router, private pickerCtrl: PickerController, private fb: FormBuilder, private changeDetect: ChangeDetectorRef) { }
  ngAfterViewInit() {
    this.changeDetect.detectChanges();
  }
  public multidata: { [key: string]: Object }[] = [
    { Name: 'Andrew Fuller', Country: 'England' },
    { Name: 'Anne Dodsworth', Country: 'USA' },
    { Name: 'Janet Leverling', Country: 'USA' }
  ];
  // maps the appropriate column to fields property
  public multifields: Object = { text: 'Name' };
  //set the placeholder to MultiSelect input
  public multiwatermark: string = 'Select employees';
  // set the type of mode for how to visualized the selected items in input element.
  public box: string = 'Box';

  // define the JSON of data
  public colorsData: { [key: string]: Object }[] = [
    { Color: 'Chocolate', Code: '#75523C' },
    { Color: 'CadetBlue', Code: '#3B8289' },
    { Color: 'DarkOrange', Code: '#FF843D' }
  ];

  // map the appropriate columns to fields property
  public fields: { [key: string]: string } = { text: 'Color', value: 'Code' };
  // set the value to MultiSelect
  public colorValues: string[] = ['#75523C', '#FF843D', '#3B8289'];
  // set the placeholder to MultiSelect input element
  public waterMark: string = 'Favorite Colors';
  // set the type of mode for how to visualized the selected items in input element.
  // public box: string = 'Box';
  // bind the tagging event
  public onTagging = (e: TaggingEventArgs) => {
    // set the current selected item text as class to chip element.
    e.setClass((e.itemData as any)[this.fields.text].toLowerCase());
  }

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

    this.cities = [
      { item_id: 1, item_text: 'Child 1' },
      { item_id: 2, item_text: 'Child 2' },
      { item_id: 3, item_text: 'Child 3' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter
    };
    this.myForm = this.fb.group({
      city: [this.selectedItems]
    });
    // city List
    // this.cities = [
    //   { item_id: 1, item_text: 'Delhi' },
    //   { item_id: 2, item_text: 'Jakarta' },
    //   { item_id: 3, item_text: 'Surabaya' },
    //   { item_id: 4, item_text: 'Bandung' },
    // ];
    // this.selectedItems = [{ item_id: 4, item_text: 'Bandung' }, { item_id: 3, item_text: 'Surabaya' }];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: this.ShowFilter
    // };
    // this.myForm = this.fb.group({
    //   city: [this.selectedItems]
    // });
  }
  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }
  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
  }

  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
    }
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

  // async openPicker() {
  //   let opts:  {
  //     buttons: [
  //       'Dog',
  //       'Cat',
  //       'Bird',
  //       'Lizard',
  //       'Chinchilla'
  //     ],
  //     colums: [

  //     ]

  //   };
  //   let picker = await this.pickerCtrl.create(opts);
  // }
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
