import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcaldesPage } from './alcaldes.page';

describe('AlcaldesPage', () => {
  let component: AlcaldesPage;
  let fixture: ComponentFixture<AlcaldesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcaldesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcaldesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
