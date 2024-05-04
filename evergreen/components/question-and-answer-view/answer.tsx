import React from 'react';
import styled from 'styled-components';
import { IAnswer } from '@cw24/evergreen.lib';

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
  border-radius: 1rem;
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
