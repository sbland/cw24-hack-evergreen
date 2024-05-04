import React from 'react';
import { ICard, IQuestion } from '@cw24/evergreen.lib';

export interface IGlobalState {
  cards: ICard[];
  questions: IQuestion[];
  savedCards: ICard[];
  addSavedCard: (card: ICard) => void;
  removeSavedCard: (cardId: string) => void;
}

export const GlobalStateContext = React.createContext<IGlobalState>(null);

export const GlobalStateProvider = ({
  children,
  cards,
  questions=[],
}: {
  children: React.ReactNode;
  cards: ICard[];
  questions?: IQuestion[];
}) => {
  const [savedCards, setSavedCards] = React.useState<ICard[]>([]);

  const removeSavedCard = (cardId: string) => {
    setSavedCards((prev) => prev.filter((c) => c.id !== cardId));
  };

  const addSavedCard = (card: ICard) => {
    setSavedCards((prev) => [...prev, card]);
  };

  return (
    <GlobalStateContext.Provider
      value={{ cards, savedCards, removeSavedCard, addSavedCard, questions }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
