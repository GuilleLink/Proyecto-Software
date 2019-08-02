import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcustomerTestPage } from './showcustomer-test.page';

describe('ShowcustomerTestPage', () => {
  let component: ShowcustomerTestPage;
  let fixture: ComponentFixture<ShowcustomerTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcustomerTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcustomerTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
