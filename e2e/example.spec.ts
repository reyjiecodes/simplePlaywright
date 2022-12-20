import { test } from '../fixture/object_fixture';

test.describe(`@regression`, async()=>{
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
  });
  
  // test(`Go to Patients Page`, async({menuPage})=>{
  //   await menuPage.navMenu(`Patients`);
  // });

  test(`Go to Patient Details page`, async({menuPage,patientsPage})=>{
    await menuPage.navMenu(`Patients`);
    await patientsPage.searchPatient(`Clinton, Dustin`);
    await patientsPage.checkPatient();
    await patientsPage.editPatient();
  });

  // test(`Go to Patient Clinical tab`, async()=>{

  // });

  // test(`Go to Patient Immunisation tab`, async()=>{

  // });
  
  // test(`Create immunisation`, async()=>{

  // });
});