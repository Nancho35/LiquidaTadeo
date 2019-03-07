import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePromedioComponent } from './base-promedio.component';

describe('BasePromedioComponent', () => {
  let component: BasePromedioComponent;
  let fixture: ComponentFixture<BasePromedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePromedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
