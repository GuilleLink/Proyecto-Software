import { browser, by, element, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';

export class HomePage extends PageObjectBase {
  constructor() {
    super('app-home', '/home');
  }

  waitForError() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.css('.error'))),
      3000
    );
  }

  getErrorMessage() {
    return element(by.css('.error')).getText();
  }

  enterDPI(dpi: string) {
    this.enterInputText('#dpi-input', dpi);
  }

  clickVerificar() {
    this.clickButton('#signin-button');
  }
}