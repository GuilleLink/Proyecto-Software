import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTestPage } from './customer-test.page';

describe('CustomerTestPage', () => {
  let component: CustomerTestPage;
  let fixture: ComponentFixture<CustomerTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
