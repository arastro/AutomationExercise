import {test} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {SignupPage} from '../pages/SignupPage';
import {AccountCreatedPage} from '../pages/AccountCreatedPage';
import {deleteAccountPage} from '../pages/DeleteAccountPage';
import {User} from '../models/user';


test('Register User successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);
    const deleteAccountPageInstance = new deleteAccountPage(page);
    // Generate random user data
    const userData = new User();
    console.log(process.env.BASE_URL);
    await page.goto(process.env.BASE_URL as string);
    await homePage.verifyHomePageLoaded();
    await homePage.gotosignup();
    

    await loginPage.verifySignupPageVisible();
    await loginPage.fillInitialData(userData.name, userData.email);
    await loginPage.submitSignup();

    await signupPage.verifySignupFormVisible();
    await signupPage.fillAccountDetails(userData);
    await signupPage.submitSignup();

    await accountCreatedPage.verifyAccountCreated();
    await accountCreatedPage.continueToHome();

    await homePage.verifyUserLoggedIn(userData.name);
    await homePage.deleteAccount();

    await deleteAccountPageInstance.verifyAccountDeleted();
    

});