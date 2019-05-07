import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentePage } from './presidente.page';

describe('PresidentePage', () => {
  let component: PresidentePage;
  let fixture: ComponentFixture<PresidentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
