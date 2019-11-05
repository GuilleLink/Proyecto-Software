import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosDistritoelectoralPage } from './candidatos-distritoelectoral.page';

describe('CandidatosDistritoelectoralPage', () => {
  let component: CandidatosDistritoelectoralPage;
  let fixture: ComponentFixture<CandidatosDistritoelectoralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosDistritoelectoralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosDistritoelectoralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
