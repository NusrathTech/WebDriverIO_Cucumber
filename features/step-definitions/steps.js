import { Given, When, Then } from "@cucumber/cucumber";
import faker from "faker";
import createPage from "../pages/accountcreation.page";
import indexPage from "../pages/index.page";
import defaultPage from "../pages/default.page";
import myaccount from "../pages/myaccount.page";

Then(/^create an account with valid email$/, async () => {
  console.log("account creation ");

  const randomStr = Math.random().toString(36).substr(3, 8);
  const emailId = `${randomStr}_xyz@gmail.com`;

  const addressObj = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    address1: faker.address.streetAddress(),
    address2: faker.random.alphaNumeric(5),
  };

  global.SharedVariable.email = emailId;
  global.SharedVariable.address = addressObj;
  await createPage.createAccount(emailId, addressObj);
});

Given(/^the user is on the signin page$/, async () => {
  if (await indexPage.btnSignOut.isExisting()) {
    await createPage.signOut();
  }

  await expect(indexPage.btnSignIn).toBeDisplayed();
  await expect(indexPage.img_Logo).toBeDisplayed();
  await expect(indexPage.link_Contact).toBeDisplayed();

  await indexPage.navigateToLoginPage();
  
});

Given(/^login with registered credentials$/, async () => {
  await createPage.signIn(global.SharedVariable.email);
});

Given(/^user is on landing page$/, async () => {
    await defaultPage.openHomePage();
  
    await expect(indexPage.btnSignIn).toBeDisplayed();
    await expect(indexPage.img_Logo).toBeDisplayed();
    await expect(indexPage.link_Contact).toBeDisplayed();
  });
  
  Then(/^navigate to signin page$/, async () => {
    await indexPage.navigateToLoginPage();
    console.log("Navigated to Authentication page ");
  });
  
  Then(/^verify account information$/, async () => {
      await myaccount.navigateToAddress();
    }
  );
  
  Given(/^I am on the myaccount page$/, async() => {
      await expect(myaccount.myAccountSection).toBeExisting();
    }
  );
  
  Then(/^add to cart and proceed to checkout page$/, async() => {
      // await myaccount.navigateToWomenSection();
      await myaccount.navigateToTshirtSection();
      // await expect(browser).toHaveTitleContaining('Women');
      await expect(browser).toHaveTitleContaining('T-shirts');
      await myaccount.navigateToProductPage();
      await $("#add_to_cart").click();      
      await myaccount.navigateToCheckOutPage();  
    }
  );