import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaNavComponent } from './pizza-nav.component';

describe('PizzaNavComponent', () => {
  let component: PizzaNavComponent;
  let fixture: ComponentFixture<PizzaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
