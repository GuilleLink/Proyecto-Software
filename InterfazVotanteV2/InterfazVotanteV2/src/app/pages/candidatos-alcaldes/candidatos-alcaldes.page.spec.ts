import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosAlcaldesPage } from './candidatos-alcaldes.page';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

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

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: FirestoreStub },
    ],
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
