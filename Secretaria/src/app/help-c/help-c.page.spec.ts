import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCPage } from './help-c.page';

describe('HelpCPage', () => {
  let component: HelpCPage;
  let fixture: ComponentFixture<HelpCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
