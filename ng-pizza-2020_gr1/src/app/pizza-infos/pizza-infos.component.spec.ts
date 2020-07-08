import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaInfosComponent } from './pizza-infos.component';

describe('PizzaInfosComponent', () => {
  let component: PizzaInfosComponent;
  let fixture: ComponentFixture<PizzaInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
