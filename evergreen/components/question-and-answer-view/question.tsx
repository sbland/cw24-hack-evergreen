import React from 'react';
import { IQuestion, IAnswer } from '@cw24/evergreen.lib';
import { Cardboard } from '@cw24/evergreen.components.cardboard';
import { AnswerComponent, AnswersListStyle } from './answer.js';
import { QuestionHeaderStyle, QuestionStyle } from './styles.js';

export const QuestionComponent = ({ name, answers }: IQuestion) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<IAnswer | null>(
    null
  );
  return (
    <QuestionStyle>
      <QuestionHeaderStyle>{name}</QuestionHeaderStyle>
      <AnswersListStyle>
        {answers?.map((answer) => (
          <AnswerComponent
            key={answer.id}
            {...answer}
            isSelected={selectedAnswer?.id === answer.id}
            onSelect={() => setSelectedAnswer(answer)}
          />
        ))}
      </AnswersListStyle>
      {selectedAnswer && (
        <Cardboard
          style={{ marginRight: '2rem' }}
          cards={selectedAnswer?.associatedCards || []}
        />
      )}
    </QuestionStyle>
  );
};
