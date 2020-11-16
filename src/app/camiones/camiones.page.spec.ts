import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamionesPage } from './camiones.page';

describe('CamionesPage', () => {
  let component: CamionesPage;
  let fixture: ComponentFixture<CamionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
