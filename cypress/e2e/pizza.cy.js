
describe('Pizza Form Test', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza")
  })
 
  it('Test Pass', () => {
    cy.contains("Pizza")
  })

  const nameText = () => cy.get(`[data-cy="name-text"]`)
  const sizeSelect = () => cy.get(`[data-cy="size-drop"]`)
  const pupperoniCheck = () => cy.get(`[data-cy="pupperoni-check"]`)
  const mooshroomCheck = () => cy.get(`[data-cy="mooshroom-check"]`)
  const licoriceCheck = () => cy.get(`[data-cy="licorice-check"]`)
  const bagelbitesCheck = () => cy.get(`[data-cy="bagelbites-check"]`)
  const specialText = () => cy.get(`[data-cy="special-text"]`)
  const submitButton = () => cy.get(`[data-cy="submit-button"]`)

  it("Add text to able-inputs", function() {
    nameText().should("have.value", "")
    .type("Daneil")
    .should("have.value", "Daneil")
    //
    specialText().should("have.value", "")
    .type("My name is actually 'Daneil' not 'Daniel' thanks.")
    .should("have.value", "My name is actually 'Daneil' not 'Daniel' thanks.")
  })

  it("Check mulitiple toppings", function() {
    pupperoniCheck().should("not.be.checked").click().should("be.checked")
    mooshroomCheck().should("not.be.checked").click().should("be.checked")
    licoriceCheck().should("not.be.checked").click().should("be.checked")
    bagelbitesCheck().should("not.be.checked").click().should("be.checked")
  })

  it("Can submit form", function(){
    nameText().should("have.value", "")
    .type("Daneil")
    .should("have.value", "Daneil")
    specialText().should("have.value", "")
    .type("Thanks for the pizza")
    .should("have.value", "Thanks for the pizza")
    //
    sizeSelect().should("have.value", "")
    .select('Atomic')
    .should("have.value", "Atomic")
    //
    licoriceCheck().should("not.be.checked").click().should("be.checked")
    bagelbitesCheck().should("not.be.checked").click().should("be.checked")
    //
    submitButton().click()
    cy.url("http://localhost:3000/pizza/order-submit")
  })

})