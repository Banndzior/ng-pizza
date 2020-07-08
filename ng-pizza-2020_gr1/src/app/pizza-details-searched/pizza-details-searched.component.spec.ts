import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetailsSearchedComponent } from './pizza-details-searched.component';

describe('PizzaDetailsSearchedComponent', () => {
  let component: PizzaDetailsSearchedComponent;
  let fixture: ComponentFixture<PizzaDetailsSearchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDetailsSearchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDetailsSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
