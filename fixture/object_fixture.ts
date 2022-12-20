import { test as objectFixture } from '@playwright/test';
import LoginPage from '../page-object/login-page';
import MenuPage from '../page-object/menu-page';
import PatientsPage from '../page-object/patients-page';

type Pages = {
  loginPage: LoginPage;
  menuPage: MenuPage;
  patientsPage: PatientsPage;
  
};

const testObjects = objectFixture.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  menuPage: async ({ page }, use) => {
    await use(new MenuPage(page));
  },
  patientsPage: async ({ page }, use) => {
    await use(new PatientsPage(page));
  },
});

export const test = testObjects;
