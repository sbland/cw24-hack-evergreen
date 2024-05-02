import { GlobalStateProvider } from '@cw24/evergreen.state.global-state';
import { mockCards } from '@cw24/evergreen.mock-data.cards';
import { exampleQuestions } from '@cw24/evergreen.mock-data.questions';
import { Root } from './root.js';

export const BasicRoot = () => {
  return (
    <GlobalStateProvider cards={mockCards} questions={exampleQuestions}>
      <Root />
    </GlobalStateProvider>
  );
};
