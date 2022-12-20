import { expect, Locator, Page } from '@playwright/test';
import menuMap from '../support/element-pattern/menu-map.json';

export default class MenuPage {
  readonly page: Page;
  // readonly menus: Locator;


  constructor(page: Page) {
    this.page = page;
    // this.menus = this.page.locator(
    //   menuMap.domElements['patients menu'].id,
    // );
  }
  
  async navMenu(menus:string) {
    await this.page.locator(menuMap.domElements[`${menus.toLowerCase()} menu`].id).click();
    if(menus === 'Patients'){
    await this.page.route('**/api/patients/find', (route) =>
    route.fulfill({
      status: 200,
    }),
    )
    await expect(this.page).toHaveURL(`**/${menus.toLowerCase()}`);
  };

  }

}
