import { User } from '@tests/shared/models';
import { newUserDataObj, getAllUsers } from './user.commands';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      newUserData(): Chainable<User>;
      getAllUsers(): Chainable<Array<User>>;
    }
  }
}

Cypress.Commands.add('newUserData', newUserDataObj);
Cypress.Commands.add('getAllUsers', getAllUsers);
