import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaNavigationComponent } from './pizza-navigation.component';

describe('PizzaNavigationComponent', () => {
  let component: PizzaNavigationComponent;
  let fixture: ComponentFixture<PizzaNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
