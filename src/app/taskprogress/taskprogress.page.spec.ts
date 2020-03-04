import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskprogressPage } from './taskprogress.page';

describe('TaskprogressPage', () => {
  let component: TaskprogressPage;
  let fixture: ComponentFixture<TaskprogressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskprogressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskprogressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
