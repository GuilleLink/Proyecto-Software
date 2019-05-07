import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DListaNacionalPage } from './dlista-nacional.page';

describe('DListaNacionalPage', () => {
  let component: DListaNacionalPage;
  let fixture: ComponentFixture<DListaNacionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DListaNacionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DListaNacionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
