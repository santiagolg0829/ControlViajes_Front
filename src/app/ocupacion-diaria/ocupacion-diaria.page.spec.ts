import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OcupacionDiariaPage } from './ocupacion-diaria.page';

describe('OcupacionDiariaPage', () => {
  let component: OcupacionDiariaPage;
  let fixture: ComponentFixture<OcupacionDiariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupacionDiariaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OcupacionDiariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
