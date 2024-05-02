import React from 'react';
import styled from 'styled-components';
import { GlobalStateContext } from '@cw24/evergreen.state.global-state';
import { Cardboard } from '@cw24/evergreen.components.cardboard';
import { QuestionAndAnswerView } from '@cw24/evergreen.components.question-and-answer-view';

const PageWrap = styled.div``;

const HeaderStyle = styled.header`
  display: flex;
  height: 2rem;
  padding: 0.5rem;
  border-bottom: 1px solid grey;
`;

enum EPages {
  QandAView = 'QandAView',
  SavedCards = 'SavedCards',
}

interface IHeaderProps {
  switchPage: (pageId: EPages) => void;
}

const Header = ({ switchPage }: IHeaderProps) => (
  <HeaderStyle>
    <button onClick={() => switchPage(EPages.QandAView)}>Q and A View</button>
    <button onClick={() => switchPage(EPages.SavedCards)}>Saved Cards</button>
  </HeaderStyle>
);

export function Root() {
  const [page, setPage] = React.useState(EPages.QandAView);
  const { questions, savedCards } = React.useContext(GlobalStateContext);
  return (
    <PageWrap>
      <Header switchPage={(p) => setPage(p)} />
      {page === EPages.QandAView && (
        <QuestionAndAnswerView questions={questions} />
      )}
      {page === EPages.SavedCards && <Cardboard cards={savedCards} />}
    </PageWrap>
  );
}
