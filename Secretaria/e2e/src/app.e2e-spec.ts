import { AppPage } from './../page-objects/app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('The world is your oyster.');
  });
});


/*

import { AppPage } from '../page-objects/app.po';
import { LoginPage } from '../page-objects/login.po';
import { InformacionPage } from '../page-objects/informacion.po';
import { HomePage } from '../page-objects/home.po';
import { app } from 'firebase';

describe('Login', () => {

  const app = new AppPage();
  const login = new LoginPage();
  const info = new InformacionPage();
  const home = new HomePage();


  beforeEach(() => {
    app.load();
  });

  describe('Antes de hacer login', () => {
    it('se despliega la pantalla de screen', () => {
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('permite la navegacion hacia home', () => {
      login.clickSignIn();
      home.waitUntilVisible();
      login.waitUntilInvisible();
    });

    it('despliega un mensaje de error si el login falla', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('bogus');
      login.clickSignIn();
      login.waitForError();
      expect(login.getErrorMessage()).toEqual(
        'El password es invalido o no esta registrado.'
      );
    });    
  });

  describe('Una vez hecho el login', () => {
    beforeEach(() => {
      home.waitUntilVisible();
    });

    it('Permite la navegacion a la pagina de informacion', () => {
      home.clickVerificar();
      info.waitUntilVisible();
      home.waitUntilInvisible();
    });

  });
});

//https://ionicframework.com/docs/building/testing*/