import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoricoViajesPage } from './historico-viajes.page';

describe('HistoricoViajesPage', () => {
  let component: HistoricoViajesPage;
  let fixture: ComponentFixture<HistoricoViajesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoViajesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoricoViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
