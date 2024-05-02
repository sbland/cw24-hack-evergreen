import React from 'react';
import { IQuestion, IAnswer, ICard } from '@cw24/evergreen.lib';
import { Cardboard } from '@cw24/evergreen.components.cardboard';
import styled from 'styled-components';

export const AnswersListStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const AnswersItemStyle = styled.li`
  margin: 0;
  padding: 0;
  background: white;
  border: 1px solid grey;
  border-radius: 2rem;
  margin-right: 2rem;
  width: 100%;
  min-height: 4rem;
  button {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export const AnswerComponent = ({
  name,
  onSelect,
}: IAnswer & { isSelected: boolean; onSelect: () => void }) => {
  return (
    <AnswersItemStyle>
      <button onClick={onSelect}>{name}</button>
    </AnswersItemStyle>
  );
};

export const QuestionComponent = ({ name, answers }: IQuestion) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<IAnswer | null>(
    null
  );
  return (
    <div>
      <h1>{name}</h1>
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
    </div>
  );
};

export type QuestionAndAnswerViewProps = {
  /**
   * sets the component children.
   */
  questions: IQuestion[];
};

export function QuestionAndAnswerView({
  questions,
}: QuestionAndAnswerViewProps) {
  return (
    <div>
      {questions?.map((q) => (
        <QuestionComponent key={q.id} {...q} />
      ))}
    </div>
  );
}
