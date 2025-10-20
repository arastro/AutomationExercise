import { faker } from '@faker-js/faker';

export class User {

    readonly gender: boolean;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly company: string;
    readonly address1: string;
    readonly address2: string;
    readonly country: string;
    readonly state: string;
    readonly city: string;
    readonly zipCode: string;
    readonly mobileNumber: string;
    readonly day: string;
    readonly month: string;
    readonly year: string;

    constructor() {
        this.gender = faker.datatype.boolean();
        this.name = faker.person.firstName();
        this.email = faker.internet.email();
        this.password = process.env.DEFAULT_PASSWORD || faker.internet.password();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.company = faker.company.name();
        this.address1 = faker.location.streetAddress();
        this.address2 = faker.location.secondaryAddress();
        this.day = faker.number.int({ min: 1, max: 28 }).toString();
        this.month = faker.number.int({ min: 1, max: 12 }).toString();
        this.year = faker.number.int({ min: 1970, max: 2003 }).toString();
        this.country = 'United States';
        this.state = faker.location.state();
        this.city = faker.location.city();
        this.zipCode = faker.location.zipCode();
        this.mobileNumber = faker.phone.number();
    }

    
  
}