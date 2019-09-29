import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNullComponent } from './card-null.component';

describe('CardNullComponent', () => {
  let component: CardNullComponent;
  let fixture: ComponentFixture<CardNullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNullComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
