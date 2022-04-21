const { faker } = require("@faker-js/faker");
//const { should } = require("chai");
/// <reference types="cypress" />

describe("KataTest", () => {
  it("Scénario 1", () => {
    cy.visit("ISSAMQCM.html");
    cy.get("[data-cy=Q1]").should("be.visible");
    cy.get("[data-cy=Q2]").should("be.visible");
    cy.get("[id=Oujda]").should("be.visible");
    cy.get("[id=Rabat]").should("be.visible");
    cy.get("[id=Fes]").should("be.visible");
    cy.get("[id=xavi]").should("be.visible");
    cy.get("[value=iniesta]").should("be.visible");
    cy.get("[id=zidane]").should("be.visible");
    cy.get("[name=qcm]").should("be.visible"); //toutes les réponses
  });

  it("Scénario 2", () => {
    //cy.visit("ISSAMQCM.html");
    cy.get("[id=Rabat]").click();
    cy.get("[id=iniesta]").click();
    cy.get("[id=xavi]").click();
    cy.get("[type=button]").click();

    cy.get("[id=choix1]").should(
      "contains.text",
      "La réponse à la première question est correcte"
    );
    cy.get("[id=choix2]").should(
      "contains.text",
      "La réponse à la deuxième question est correcte"
    );
  });
  it("Scénario 3", () => {
    //cy.visit("ISSAMQCM.html");
    cy.get("[id=Fes]").click();
    cy.get("[id=zidane]").click();
    cy.get("[id=xavi]").click();
    cy.get("[type=button]").click();

    cy.get("[id=choix1]").should(
      "contains.text",
      "La réponse à la première question est incorrecte"
    );
    cy.get("[id=choix2]").should(
      "contains.text",
      "La réponse à la deuxième question est incorrecte"
    );
  });
});
