/* eslint-disable no-undef */

/// <reference types="Cypress" />
context("My-Hello-world-starter", () => {
  before(() => {
    cy.visit("http://localhost:8002")
  })
  it("it should have a button showing a plus symbol", () => {
    cy.get("button").should("contain", "+")
  })
  it("it should have a button add to order", () => {
    cy.get("button").should("contain", "add to order")
  })
  it("add a custom note", () => {
    cy.get("#fname")
  })

  it("accepts radio input", () => {
    cy.get("input").should("class", "radio-input")
  })
})
