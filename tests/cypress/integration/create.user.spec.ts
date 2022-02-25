import { User } from '@tests/shared/models';
// import { apiListUsersTask } from "../plugins/freshUser";
// import Chainable = Cypress.Chainable;

describe('verify create user screens', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display create user screen', () => {
    cy.task('freshUser')
      .then((newUser) => {
        const user = newUser as User;
        cy.get('[data-testid="firstname"]').type(user.firstname);
        cy.get('[data-testid="lastname"]').type(user.lastname);
        cy.get('[data-testid="email"]').type(user.email);
      })
      .then(() => {
        cy.get('[data-testid="create-btn"]').click();
        cy.get('[data-testid="btn-getallusers"]').click();
        cy.get('[data-testid="usercount"]').then(($ele) => {
          const userCount = $ele.text();
          expect(Number(userCount)).to.be.above(0);
        });
      });
  });

  it('should match all the users count with the api response', () => {
    cy.task('freshUser')
      .then((newUser) => {
        const user = newUser as User;
        return cy.task('apiCreateUser', user);
      })
      .then(() => {
        return cy.task('apiListUsers');
      })
      .then((usersList) => {
        const currentUsers = usersList as Array<User>;
        cy.get('[data-testid="btn-getallusers"]').click();
        cy.get('[data-testid="usercount"]').then(($ele) => {
          const userCount = $ele.text();
          expect(Number(userCount)).to.be.eq(currentUsers.length);
        });
      });
  });
});
