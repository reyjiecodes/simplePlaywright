import { expect, Locator, Page } from '@playwright/test';
import patientsPageMap from '../support/element-pattern/patients.json';

export default class PatientsPage {
  readonly page: Page;
  readonly patientSearchBar: Locator;
  readonly patientsGrid: Locator;
  readonly patientsEditOption: Locator;


  constructor(page: Page) {
    this.page = page;
    this.patientSearchBar = this.page.locator(
        patientsPageMap.domElements.search.id
    );
    this.patientsGrid = this.page.locator(`[name='${patientsPageMap.domElements.patientGrid.name}']`);
    this.patientsEditOption = this.page.locator(patientsPageMap.domElements.editPatientButton.id);
  }
  
  async searchPatient(patient:string) {
    await this.patientSearchBar.fill(patient);
    await this.page.keyboard.press(`Enter`);
    await this.page.route('**/api/patients/find', (route) =>
    route.fulfill({
      status: 200,
    }),
    )
  }

  async checkPatient() {
    await this.patientsGrid.click();
  }

  async editPatient() {
    await this.patientsEditOption.click();
    await this.page.waitForURL('**/details/**', {waitUntil:'networkidle'});
  }

}
