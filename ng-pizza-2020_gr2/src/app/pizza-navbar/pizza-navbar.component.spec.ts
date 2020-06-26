import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaNavbarComponent } from './pizza-navbar.component';

describe('PizzaNavbarComponent', () => {
  let component: PizzaNavbarComponent;
  let fixture: ComponentFixture<PizzaNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
