import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpLPage } from './help-l.page';

describe('HelpLPage', () => {
  let component: HelpLPage;
  let fixture: ComponentFixture<HelpLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpLPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
