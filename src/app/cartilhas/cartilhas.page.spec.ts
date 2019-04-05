import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartilhasPage } from './cartilhas.page';

describe('CartilhasPage', () => {
  let component: CartilhasPage;
  let fixture: ComponentFixture<CartilhasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartilhasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartilhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
