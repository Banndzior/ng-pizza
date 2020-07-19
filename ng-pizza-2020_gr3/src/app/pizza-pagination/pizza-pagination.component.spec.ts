import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPaginationComponent } from './pizza-pagination.component';

describe('PizzaPaginationComponent', () => {
  let component: PizzaPaginationComponent;
  let fixture: ComponentFixture<PizzaPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
