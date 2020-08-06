describe("Product", () => {
  it("should edit the product when clicked from invenory", () => {
    cy.visit("/");
    cy.contains("Solder").click();
    cy.get('[data-cy="productDescription"]')
      .clear()
      .type("The description is changed")
      .should("have.value", "The description is changed");
    cy.contains("Edit Product").click();
    cy.contains("View Inventory").click();
    cy.contains("The description is changed");
  });
});
