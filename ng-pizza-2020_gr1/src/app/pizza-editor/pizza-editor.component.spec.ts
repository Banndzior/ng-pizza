import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaEditorComponent } from './pizza-editor.component';

describe('PizzaEditorComponent', () => {
  let component: PizzaEditorComponent;
  let fixture: ComponentFixture<PizzaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});