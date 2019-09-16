import formData from '../fixtures/form.json';

describe('start test 1', function () {
    it('load test 1', function () {
        cy.visit('public');
        
        cy.get('#form').submit().click()
    })
});