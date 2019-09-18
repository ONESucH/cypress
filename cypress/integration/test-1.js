import getForm from '../fixtures/getForm';

const baseUrl = 'http://127.0.0.1:8080';

describe('start test 1', () => {
    it('load test 1', () => {
        cy.visit(baseUrl);

        cy.get('[name="name"]').focus().type(getForm.name);
        cy.get('[name="family"]').focus().type(getForm.family);
        cy.get('[name="floor"]').check();
        cy.wait(3000);
        cy.get('#form').submit();
    });

    it('load test 2', () => {
        cy.get('[name="name"]').focus().type(getForm.name);
        cy.get('[name="family"]').focus().type(getForm.family);
        cy.get('[name="floor"]').check();
        cy.get('#form').submit();
        cy.wait(3000);
    });

    it('load test 3', () => {
        cy.get('[name="name"]').focus().type(getForm.name);
        cy.wait(2000);
        cy.get('[name="family"]').focus().type(getForm.family);
        cy.wait(2000);
        cy.get('[name="floor"]').check();
        cy.wait(2000);
        cy.get('#form').submit();
    });

    it('api example', () => {
        cy.server();
        /*cy.route({
            method: 'GET',
            url: '**!/customer/organizations/save',
            response: getForm
        }).as('getForm');*/

        /*cy.wait('@getForm').then(res => {
            if (!res.response.body) return;
            const json = res.response.body;
            console.log('-->>json', json);
        });*/

        cy.request('https://api.github.com/users/onesuch')
            .then(res => {

                expect(res).property('status').to.equal(200);
                
                const data = res.body;
                console.log('-->>data', data);
                
                // используем then, чтобы обратиться к DOM тегу.
                cy.get('#title').then(el => el.html(data.html_url));
            });

        cy.server({ enable: false }) // выключили сервер
    })
});