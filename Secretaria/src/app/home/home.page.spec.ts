import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { isComponentView } from '@angular/core/src/view/util';
import { Router, RouterModule } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';

// describe('HomePage', () => {
//   let component: HomePage;
//   let fixture: ComponentFixture<HomePage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomePage ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomePage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Obtener_DPI', () => {
  let prueba : HomePage;
  let router: Router;
  let postPvdr: PostProvider;
  let storage: Storage;
  let toastCtrl: ToastController;
  beforeEach(() => {
    prueba = new HomePage(router,postPvdr,storage,toastCtrl);
    spyOn(prueba,'loadVotante');
  });

  it('Get data in reload', () => {
    prueba.ionViewWillEnter();
    expect(prueba.loadVotante()).toHaveBeenCalled();
  });
});
