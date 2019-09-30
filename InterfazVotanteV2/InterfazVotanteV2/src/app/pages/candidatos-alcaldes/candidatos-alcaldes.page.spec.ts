import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosAlcaldesPage } from './candidatos-alcaldes.page';

describe('CandidatosAlcaldesPage', () => {
  let component: CandidatosAlcaldesPage;
  let fixture: ComponentFixture<CandidatosAlcaldesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosAlcaldesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosAlcaldesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
