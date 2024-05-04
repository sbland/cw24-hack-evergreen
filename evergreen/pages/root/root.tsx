import React from 'react';
import styled from 'styled-components';
import { GlobalStateContext } from '@cw24/evergreen.state.global-state';
import { Cardboard } from '@cw24/evergreen.components.cardboard';
import { QuestionAndAnswerView } from '@cw24/evergreen.components.question-and-answer-view';
import { SearchableView } from '@cw24/evergreen.components.searchable-view';

const PageWrap = styled.div``;

const HeaderStyle = styled.header`
  display: flex;
  height: 2rem;
  padding: 0
  border-bottom: 1px solid grey;
`;

enum EPages {
  QandAView = 'QANDAVIEW',
  SearchView = 'SEARCHVIEW',
  SavedCards = 'SAVEDCARDS',
}

interface IHeaderProps {
  currentPage: EPages;
  switchPage: (pageId: EPages) => void;
}

const HeaderItem = styled.button<{ isSelected: boolean }>`
  background: ${({ isSelected }) => (isSelected ? 'yellow' : '#eee')};
  border: none;
  border-right: 1px solid grey;
  height: 100%;
  mergin-right: 1rem;
  cursor: pointer;
`;

const Header = ({ switchPage, currentPage }: IHeaderProps) => (
  <HeaderStyle>
    <HeaderItem
      isSelected={currentPage === EPages.QandAView}
      onClick={() => switchPage(EPages.QandAView)}
    >
      Q and A View
    </HeaderItem>
    <HeaderItem
      isSelected={currentPage === EPages.SearchView}
      onClick={() => switchPage(EPages.SearchView)}
    >
      Search
    </HeaderItem>
    <HeaderItem
      isSelected={currentPage === EPages.SavedCards}
      onClick={() => switchPage(EPages.SavedCards)}
    >
      Saved Cards
    </HeaderItem>
  </HeaderStyle>
);

const ContentWrap = styled.div`
  padding: 1rem;
`;

export function Root() {
  const [page, setPage] = React.useState(EPages.QandAView);
  const { questions, savedCards } = React.useContext(GlobalStateContext);
  return (
    <PageWrap>
      <Header currentPage={page} switchPage={(p) => setPage(p)} />
      <ContentWrap>
        {page === EPages.QandAView && (
          <QuestionAndAnswerView questions={questions} />
        )}
        {page === EPages.SearchView && <SearchableView />}
        {page === EPages.SavedCards &&
          (savedCards?.length > 0 ? (
            <Cardboard cards={savedCards} />
          ) : (
            <p>You have no saved cards!</p>
          ))}
      </ContentWrap>
    </PageWrap>
  );
}
