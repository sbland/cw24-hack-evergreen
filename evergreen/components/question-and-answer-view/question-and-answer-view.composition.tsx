import { mockCards } from '@cw24/evergreen.mock-data.cards';
import { GlobalStateProvider } from '@cw24/evergreen.state.global-state';
import { exampleQuestions } from '@cw24/evergreen.mock-data.questions';
import { QuestionAndAnswerView } from './question-and-answer-view.js';

export const BasicQuestionAndAnswerView = () => {
  return (
    <GlobalStateProvider cards={mockCards} questions={exampleQuestions}>
      <QuestionAndAnswerView questions={exampleQuestions} />
    </GlobalStateProvider>
  );
};
