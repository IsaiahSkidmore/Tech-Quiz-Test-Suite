describe('Quiz Component E2E Test', () => {
    beforeEach(() => {
      // Visit the page where the Quiz component is rendered
      cy.visit('http://127.0.0.1:3001/');
    });
  
    it('renders Start Quiz button initially', () => {
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  
    it('starts the quiz and displays the first question', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('h2').should('not.be.empty'); 
    });
  
    it('renders Take New Quiz button when quiz is completed', () => {
      cy.get('button').contains('Start Quiz').click();
      // Simulate answering all questions
      // Assuming you have a way to simulate answering all questions
      cy.get('button').contains('Take New Quiz').should('be.visible');
    });
  
    it('restarts the quiz when Take New Quiz button is clicked', () => {
      cy.get('button').contains('Start Quiz').click();
      // Simulate answering all questions
      // Assuming you have a way to simulate answering all questions
      cy.get('button').contains('Take New Quiz').click();
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  
    it('displays loading spinner when questions are being fetched', () => {
      // Assuming you have a way to simulate loading state
      cy.get('.spinner-border').should('be.visible');
    });
  
    it('displays quiz question and answers correctly', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('h2').should('not.be.empty'); // Assuming the question is displayed in an h2 element
      cy.get('.alert.alert-secondary').should('have.length.greaterThan', 0); // Assuming answers are displayed in alert elements
    });
  });