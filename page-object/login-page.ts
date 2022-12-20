import { Locator, Page } from '@playwright/test';
import loginMap from '../support/element-pattern/login-map.json';
import uitestAccount from '../support/properties/uitest-map.json';

export default class LoginPage {
  readonly page: Page;
  readonly emailSAML: Locator;
  readonly continueSAML: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailSAML = this.page.locator(
      loginMap.domElements['email-saml'].id,
    );
    this.continueSAML = this.page.locator(
        loginMap.domElements['continueButton-saml'].id,
      );
    this.usernameInput = this.page.locator(
    loginMap.domElements.username.id
    );
    this.passwordInput = this.page.locator(
        loginMap.domElements.password.id
    );
    this.loginBtn = this.page.locator(
        loginMap.domElements.loginButton.id
    );
  }
  
  async loginToApp() {
    await this.emailSAML.fill(uitestAccount.airclaim.airclaim_email_value_4);
    await this.continueSAML.click();
    await this.usernameInput.fill(uitestAccount.airclaim.airclaim_username_value_4);
    await this.passwordInput.fill(uitestAccount.airclaim.airclaim_password_value);
    await this.loginBtn.click();
    await this.page.route('**/sumTotalAmount', (route) =>
    route.fulfill({
      status: 200,
    }),
  );

  }

}
