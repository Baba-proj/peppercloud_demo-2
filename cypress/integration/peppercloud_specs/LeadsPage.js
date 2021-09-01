//<reference types="Cypress" />

import ElementsOfHomePage from "../../support/PageObjects/ElementsOfHomePage";
import ElementsOfLeadsPage from '../../support/PageObjects/ElementsOfLeadsPage';


describe("validating the leads page", function () {
  const HomePageElements = new ElementsOfHomePage();
  const LeadsPageElements = new ElementsOfLeadsPage();

  beforeEach(function () {
    //calling the data from the example.json and assigning it to data veriable.
    cy.fixture('example').then(function (data) {
      this.data = data;
      cy.visit(this.data.baseURl);                        //Opening the URL
    })
  })

  it("validating the login", function () {

    HomePageElements.getTitle().should('have.text', 'Log in to Pepper Cloud');
    //accessing the data from
    HomePageElements.getUserID().type(this.data.UserID);
    HomePageElements.getPassword().type(this.data.Password);
    HomePageElements.getLoginButton().click();
    LeadsPageElements.getLeadsTitle().should('have.text', 'Leads');

  })
  it('validating the creating leads with mandetory field', function () {
    //calling the custom commands "login"
    cy.login(this.data.UserID, this.data.Password);

    LeadsPageElements.getCreateButton().click();
    LeadsPageElements.getFirstName().type(this.data.Fname);
    LeadsPageElements.getSecondName().type(this.data.Sname);
    LeadsPageElements.getCompanyName().type(this.data.company);
    LeadsPageElements.getDesignationField().type(this.data.designation);
    LeadsPageElements.getEmialField().type(this.data.email);
    LeadsPageElements.getmMobile().type(this.data.mobile);
    LeadsPageElements.getSaveButton().click();

  })
  it('validating the kanban view', function () {
    //calling the custom commands "login"
    cy.login(this.data.UserID, this.data.Password);
    LeadsPageElements.getKanbanViewButton().click();
    LeadsPageElements.getKanbanViewList().should('be.visible');


  })
  it('validating the Creating view ', function () {
    //calling the custom commands "login"
    cy.login(this.data.UserID, this.data.Password);
    LeadsPageElements.getCreateButton().click();
    LeadsPageElements.getCustomCreatViewButton().click();
    cy.wait(2000);
    LeadsPageElements.getCustomViewNameFiled().type(this.data.CustomName);
    LeadsPageElements.getPhoneCheckBox().click({ force: true });
    LeadsPageElements.getAssignedCheckBox().click({ force: true });
    LeadsPageElements.getCityCheckBox().click({ force: true });
    LeadsPageElements.getClosedCheckBox().click({ force: true });
    LeadsPageElements.getCompanyCheckBox().click({ force: true });
    LeadsPageElements.getSaveBtn().click();
    HomePageElements.getPhoneFiled().should('have.text', 'Phone');

  })

})
