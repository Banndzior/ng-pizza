import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Klikacz1Component } from './klikacz1.component';

describe('Klikacz1Component', () => {
  let component: Klikacz1Component;
  let fixture: ComponentFixture<Klikacz1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Klikacz1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Klikacz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
