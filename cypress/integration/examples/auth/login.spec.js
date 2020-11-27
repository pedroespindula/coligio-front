/**
 * Login test cases
 */
describe('', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.get('[data-cy=login-button').click();
    });

    it('It should login in the system successfully', () => {});
});
