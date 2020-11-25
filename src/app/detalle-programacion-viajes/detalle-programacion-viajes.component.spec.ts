import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleProgramacionViajesComponent } from './detalle-programacion-viajes.component';

describe('DetalleProgramacionViajesComponent', () => {
  let component: DetalleProgramacionViajesComponent;
  let fixture: ComponentFixture<DetalleProgramacionViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleProgramacionViajesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleProgramacionViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
