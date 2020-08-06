describe("My First Test", () => {
  it("visit the page", () => {
    cy.visit("/");
    cy.contains("Solder").click();
    cy.url().should("include", "/products");
  });
});
