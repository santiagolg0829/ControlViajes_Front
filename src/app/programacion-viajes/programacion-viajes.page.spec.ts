import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramacionViajesPage } from './programacion-viajes.page';

describe('ProgramacionViajesPage', () => {
  let component: ProgramacionViajesPage;
  let fixture: ComponentFixture<ProgramacionViajesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionViajesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramacionViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
