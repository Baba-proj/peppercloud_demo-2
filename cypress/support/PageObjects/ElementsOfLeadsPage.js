

class ElementsOfLeadsPage {
    getLeadsTitle() {
        cy.get('a[title="Leads"]');
    }
    getCreateButton() {
        cy.get('#LF1');
    }
    getFirstName() {
        cy.get('#F2');
    }
    getSecondName() {
        cy.get('#F3');
    }
    getCompanyName() {
        cy.get('#F4');
    }
    getDesignationField() {
        cy.get('#F9');
    }
    getEmialField() {
        cy.get('#F7');
    }
    getmMobile() {
        cy.get('input[name="mobile"]');
    }
    getLeadStatusField() {
        cy.get('#F6');
    }
    getSourceFiled() {
        cy.get('#F10');
    }
    getSaveButton() {
        cy.get('#SAVE');
    }
    getCreateViewButton() {
        cy.get('#popover');
    }
    getCustomCreatViewButton() {
        cy.get('#CUSTOMCREATEVIEW');
    }
    getCustomViewNameFiled() {
        cy.get('#customName');
    }
    getPhoneCheckBox() {
        cy.get('input[name="F21"]');
    }
    getAssignedCheckBox() {
        cy.get('input[name="F5"]');
    }
    getCityCheckBox() {
        cy.get('input[name="F18"]');
    }
    getClosedCheckBox() {
        cy.get('input[name="F116"]');
    }
    getCompanyCheckBox() {
        cy.get('input[name="F4"]');
    }
    getSaveBtn() {
        cy.get('#SAVE');
    }
    getKanbanViewButton() {
        cy.get('#Kanban-View');
    }
    getKanbanViewList() {
        cy.get('#kanban-page-view-btn-grp');
    }
} export default ElementsOfLeadsPage;
