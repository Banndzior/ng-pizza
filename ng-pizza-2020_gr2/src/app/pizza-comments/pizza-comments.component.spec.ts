import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCommentsComponent } from './pizza-comments.component';

describe('PizzaCommentsComponent', () => {
  let component: PizzaCommentsComponent;
  let fixture: ComponentFixture<PizzaCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
