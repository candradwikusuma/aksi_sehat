import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PackagetaskPage } from './packagetask.page';

describe('PackagetaskPage', () => {
  let component: PackagetaskPage;
  let fixture: ComponentFixture<PackagetaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagetaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PackagetaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
