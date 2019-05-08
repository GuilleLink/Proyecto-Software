import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazPage } from './interfaz.page';

describe('InterfazPage', () => {
  let component: InterfazPage;
  let fixture: ComponentFixture<InterfazPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfazPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
