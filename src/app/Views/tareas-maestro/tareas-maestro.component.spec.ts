import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasMaestroComponent } from './tareas-maestro.component';

describe('TareasMaestroComponent', () => {
  let component: TareasMaestroComponent;
  let fixture: ComponentFixture<TareasMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
