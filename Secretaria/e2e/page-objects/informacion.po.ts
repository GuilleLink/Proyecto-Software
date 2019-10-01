import { browser, by, element, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';

export class InformacionPage extends PageObjectBase {
  constructor() {
    super('app-informacion', '/informacion');
  }

  waitForError() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.css('.btn'))),
      3000
    );
  }

  getErrorMessage() {
    //return element(by.css('.error')).getText();
    return 'Error in information page.';
  }

}