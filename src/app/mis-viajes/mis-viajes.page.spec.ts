import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisViajesPage } from './mis-viajes.page';

describe('MisViajesPage', () => {
  let component: MisViajesPage;
  let fixture: ComponentFixture<MisViajesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisViajesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
