

/*import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be blank', () => {
    page.navigateTo();-
    expect(page.getParagraphText()).toContain('The world is your oyster.');
  });
});*/

import { AppPage } from '../page-objects/app.po';
import { LoginPage } from '../page-objects/login.po';
import { InformacionPage } from '../page-objects/informacion.po';
import { HomePage } from '../page-objects/home.po';

describe('Login', () => {

  const app = new AppPage();
  const login = new LoginPage();
  const info = new InformacionPage();
  const home = new HomePage();


  beforeEach(() => {
    app.load();
  });

  describe('before logged in', () => {
    it('displays the login screen', () => {
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('allows in-app navigation to home', () => {
      login.clickSignIn();
      home.waitUntilVisible();
      login.waitUntilInvisible();
    });


    it('displays an error message if the login fails', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('bogus');
      login.clickSignIn();
      login.waitForError();
      expect(login.getErrorMessage()).toEqual(
        'The password is invalid or the user does not have a password.'
      );
    });

    
  });

  describe('once logged in', () => {
    beforeEach(() => {
      home.waitUntilVisible();
    });

    it('allows navigation to the informacion page', () => {
      home.clickVerificar();
      info.waitUntilVisible();
      home.waitUntilInvisible();
    });

  });
});

//https://ionicframework.com/docs/building/testing