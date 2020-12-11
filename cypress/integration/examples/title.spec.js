/// <reference types="cypress" />
it("shows title", () => {
  cy.visit("/")
  cy.contains("Keeping it 💯 on the internet.")
});