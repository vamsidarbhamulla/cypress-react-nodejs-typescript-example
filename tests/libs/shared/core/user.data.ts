import { User } from '../models';

const faker = require('@faker-js/faker');

export function newUserData() {
  const user: User = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email()
  };
  return user;
}
