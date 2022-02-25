describe('verify users demo screens', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display create user screen', () => {
    cy.get('[data-testid="header"]').should('have.text', 'Users Demo - React With NodeJS');
    cy.get('[data-testid="h2-createuser"]').should('have.text', 'Create User');
    cy.get('[data-testid="lbl-firstname"]').should('have.text', 'First Name');
    cy.get('[data-testid="lbl-lastname"]').should('have.text', 'Last Name');
    cy.get('[data-testid="lbl-firstname"]').should('be.visible');
    cy.get('[data-testid="firstname"]').should('be.visible');
    cy.get('[data-testid="lbl-lastname"]').should('be.visible');
    cy.get('[data-testid="lastname"]').should('be.visible');
    cy.get('[data-testid="lbl-email"]').should('be.visible');
    cy.get('[data-testid="email"]').should('be.visible');
    cy.get('[data-testid="create-btn"]').should('be.visible');
  });

  it('should display user count screen', () => {
    cy.get('[data-testid="header"]').should('have.text', 'Users Demo - React With NodeJS');
    cy.get('[data-testid="h4-userscreated"]').should('have.text', 'Users Created');
    cy.get('[data-testid="usercount"]').should('have.text', '0');
    cy.get('[data-testid="usercount"]').should('be.visible');
    cy.get('[data-testid="btn-getallusers"]').should('be.visible');
  });
});
