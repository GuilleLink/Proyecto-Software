import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DDistritoElectoralPage } from './ddistrito-electoral.page';

describe('DDistritoElectoralPage', () => {
  let component: DDistritoElectoralPage;
  let fixture: ComponentFixture<DDistritoElectoralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DDistritoElectoralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DDistritoElectoralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
