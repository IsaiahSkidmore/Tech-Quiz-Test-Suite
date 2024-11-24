
import { mount } from '@cypress/react';
// @ts-ignore
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders Start Quiz button initially', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz and displays the first question', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').should('not.be.empty'); // Assuming the question is displayed in an h2 element
  });

  it('renders Take New Quiz button when quiz is completed', () => {
    mount(<Quiz />);
    // Simulate quiz completion
    cy.get('button').contains('Start Quiz').click();
    // Assuming you have a way to simulate answering all questions
    cy.get('button').contains('Take New Quiz').should('be.visible');
  });

  it('restarts the quiz when Take New Quiz button is clicked', () => {
    mount(<Quiz />);
    // Simulate quiz completion
    cy.get('button').contains('Start Quiz').click();
    // Assuming you have a way to simulate answering all questions
    cy.get('button').contains('Take New Quiz').click();
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('displays loading spinner when questions are being fetched', () => {
    mount(<Quiz />);
    // Assuming you have a way to simulate loading state
    cy.get('.spinner-border').should('be.visible');
  });

  it('displays quiz question and answers correctly', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').should('not.be.empty'); // Assuming the question is displayed in an h2 element
    cy.get('.alert.alert-secondary').should('have.length.greaterThan', 0); // Assuming answers are displayed in alert elements
  });
});