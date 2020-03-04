import { Component, ViewChild, OnInit } from '@angular/core';
import { HidenavStretchheaderComponent } from 'ionic4-hidenav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  @ViewChild(HidenavStretchheaderComponent, { static: false }) hidenav: HidenavStretchheaderComponent;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  expand() {
    this.hidenav.toggle();
  }

  save() {
    this.route.navigateByUrl('/tabs')
    // this.route.navigate(['tab3']);
  }
}
