import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSearchComponent } from './pizza-search.component';

describe('PizzaSearchComponent', () => {
  let component: PizzaSearchComponent;
  let fixture: ComponentFixture<PizzaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
