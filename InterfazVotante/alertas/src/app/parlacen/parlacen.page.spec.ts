import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParlacenPage } from './parlacen.page';

describe('ParlacenPage', () => {
  let component: ParlacenPage;
  let fixture: ComponentFixture<ParlacenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParlacenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParlacenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
