import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaNavigatorComponent } from './pizza-navigator.component';

describe('PizzaNavigatorComponent', () => {
  let component: PizzaNavigatorComponent;
  let fixture: ComponentFixture<PizzaNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
