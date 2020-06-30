import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Klikacz2Component } from './klikacz2.component';

describe('Klikacz2Component', () => {
  let component: Klikacz2Component;
  let fixture: ComponentFixture<Klikacz2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Klikacz2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Klikacz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
