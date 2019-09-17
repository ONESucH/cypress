import formData from '../fixtures/form.json';

const baseUrl = 'http://127.0.0.1:8080';

describe('start test 1', () => {
    it('load test 1', () => {
        cy.visit(baseUrl);

        cy.get('[name="name"]').focus().type(formData.name);
        cy.get('[name="family"]').focus().type(formData.family);
        cy.get('[name="male"]').check();
        cy.get('[name="female"]').check();
        cy.wait(5000);
        cy.get('#form').submit();
    });

    it('load test 2', () => {
        cy.get('[name="name"]').focus().type(formData.name);
        cy.get('[name="family"]').focus().type(formData.family);
        cy.get('[name="male"]').check();
        cy.get('[name="female"]').check();
        cy.get('#form').submit();
        cy.wait(5000);
    });

    it('load test 3', () => {
        cy.get('[name="name"]').focus().type(formData.name);
        cy.wait(2000);
        cy.get('[name="family"]').focus().type(formData.family);
        cy.wait(2000);
        cy.get('[name="male"]').check();
        cy.wait(2000);
        cy.get('[name="female"]').check();
        cy.wait(2000);
        cy.get('#form').submit();
    });
});