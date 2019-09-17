import formData from '../fixtures/form.json';

const baseUrl = 'http://127.0.0.1:8080';

describe('start test 1', function () {
    it('load test 1', function () {
        cy.visit(baseUrl);
        cy.get('#form').click()
    })
});