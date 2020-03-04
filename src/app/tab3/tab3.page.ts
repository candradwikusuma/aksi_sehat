import { Component, ViewChild } from '@angular/core';
import { HidenavStretchheaderComponent } from 'ionic4-hidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(HidenavStretchheaderComponent, { static: false }) hidenav: HidenavStretchheaderComponent;
  constructor(private router: Router) { }

  expand() {
    this.hidenav.toggle();
  }

  edit() {
    // this.router.navigate(['home']);
    this.router.navigateByUrl('/profil');
  }

}
