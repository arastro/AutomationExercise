import { Page, expect } from "@playwright/test";
export class SignupPage {
    readonly page: Page;
    readonly signupFormTitle;
    readonly genderMrRadio;
    readonly genderMrsRadio;
    readonly nameInput;
    readonly passwordInput;
    readonly daysSelect;
    readonly monthsSelect;
    readonly yearsSelect;
    readonly newsletterCheckbox;
    readonly offersCheckbox;
    readonly firstNameInput;
    readonly lastNameInput;
    readonly companyInput;
    readonly address1Input;
    readonly address2Input;
    readonly countrySelect;
    readonly stateInput;
    readonly cityInput;
    readonly zipCodeInput;
    readonly mobileNumberInput;
    readonly createAccountButton;
    
    constructor(page: Page) {
        this.page = page;
        this.signupFormTitle = page.locator('h2.title:nth-of-type(1) > b').first();
        this.genderMrRadio = page.locator('#id_gender1');
        this.genderMrsRadio = page.locator('#id_gender2');
        this.nameInput = page.locator('#name');
        this.passwordInput = page.locator('#password');
        this.daysSelect = page.locator('#days');
        this.monthsSelect = page.locator('#months');
        this.yearsSelect = page.locator('#years');
        this.newsletterCheckbox = page.locator('#newsletter');
        this.offersCheckbox = page.locator('#optin');
        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.companyInput = page.locator('#company');
        this.address1Input = page.locator('#address1');
        this.address2Input = page.locator('#address2');
        this.countrySelect = page.locator('#country');
        this.stateInput = page.locator('#state');
        this.cityInput = page.locator('#city');
        this.zipCodeInput = page.locator('#zipcode');
        this.mobileNumberInput = page.locator('#mobile_number');
        this.createAccountButton = page.locator('button[data-qa="create-account"]');
    }

    async verifySignupFormVisible() {
        await expect(this.signupFormTitle).toBeVisible();
    }

    async fillAccountDetails(userData: {gender: boolean,name: string,password: string,day: string,month: string,year: string,firstName: string,lastName: string,company: string,
        address1: string,address2: string,country: string,state: string,city: string,zipCode: string,mobileNumber: string}) {
        if (userData.gender) {
            await this.genderMrRadio.check();
        } else {
            await this.genderMrsRadio.check();
        }
        await this.nameInput.fill(userData.name);
        await this.passwordInput.fill(userData.password);
        await this.daysSelect.selectOption(userData.day);
        await this.monthsSelect.selectOption(userData.month);
        await this.yearsSelect.selectOption(userData.year);
        await this.newsletterCheckbox.check();
        await this.offersCheckbox.check();
        await this.firstNameInput.fill(userData.firstName);
        await this.lastNameInput.fill(userData.lastName);
        await this.companyInput.fill(userData.company);
        await this.address1Input.fill(userData.address1);
        await this.address2Input.fill(userData.address2);
        await this.countrySelect.selectOption(userData.country);
        await this.stateInput.fill(userData.state);
        await this.cityInput.fill(userData.city);
        await this.zipCodeInput.fill(userData.zipCode);
        await this.mobileNumberInput.fill(userData.mobileNumber);
    }

    async submitSignup() {
        await this.createAccountButton.click();
    }
}