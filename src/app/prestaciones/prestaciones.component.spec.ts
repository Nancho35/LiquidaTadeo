import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestacionesComponent } from './prestaciones.component';

describe('PrestacionesComponent', () => {
  let component: PrestacionesComponent;
  let fixture: ComponentFixture<PrestacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
