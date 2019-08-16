import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomerTestPage } from './addcustomer-test.page';

describe('AddcustomerTestPage', () => {
  let component: AddcustomerTestPage;
  let fixture: ComponentFixture<AddcustomerTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcustomerTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomerTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
