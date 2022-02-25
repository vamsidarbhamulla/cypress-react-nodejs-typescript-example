import { User } from '@tests/shared/models';

describe('verify create user functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should create a new user and verify the total user count', () => {
    cy.newUserData()
      .then((newUser) => {
        const user = newUser as User;
        cy.get('[data-testid="firstname"]').type(user.firstname);
        cy.get('[data-testid="lastname"]').type(user.lastname);
        cy.get('[data-testid="email"]').type(user.email);
      })
      .then(() => {
        cy.get('[data-testid="create-btn"]').click();
        cy.get('[data-testid="btn-getallusers"]').click();
        cy.getAllUsers().then((users) => {
          cy.get('[data-testid="usercount"]').should('have.text', `${users.length}`);
        });
      });
  });
});
