import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosPresidentesPage } from './candidatos-presidentes.page';

describe('CandidatosPresidentesPage', () => {
  let component: CandidatosPresidentesPage;
  let fixture: ComponentFixture<CandidatosPresidentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosPresidentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosPresidentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
