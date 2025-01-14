/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('Overthought index', () => {
  it('should render post', () => {
    cy.visit('/overthought/adding-dark-mode-with-next-js');
    cy.get('[data-cy="overthought-post"]')
      .scrollIntoView()
      .should('be.visible');
  });

  it('should render 404', () => {
    cy.visit('/overthought/foobar');
    cy.get('[data-cy="overthought-not-found"]')
      .scrollIntoView()
      .should('be.visible');
  });

  it('should render newsletter', () => {
    cy.visit('/overthought/adding-dark-mode-with-next-js');
    cy.contains('Newsletter')
      .scrollIntoView()
      .should('be.visible');
  });
});
