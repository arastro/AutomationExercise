import { faker } from '@faker-js/faker';

export const createUserData = () => {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: process.env.DEFAULT_PASSWORD || faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    country: 'United States',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobile: faker.phone.number(),
  };
};
