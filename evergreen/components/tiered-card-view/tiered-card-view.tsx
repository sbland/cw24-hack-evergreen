import React from 'react';
import styled from 'styled-components';
import { ICard } from '@cw24/evergreen.lib';
import { Card } from '@cw24/evergreen.components.card';
import { Cardboard } from '@cw24/evergreen.components.cardboard';

export type TieredCardViewProps = {
  /**
   * sets the component children.
   */
  cardsData: ICard[];
  topCardsData: ICard[];
};

export const CardTierListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  li {
    margin: 0;
    padding: 0;
  }
`;

export const CardButton = styled.button<{ selected?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    .card {
      border-color: green;
    }
  }

  ${({ selected }) =>
    selected &&
    `
    .card {
      border-color: orange;
    }
  `}
`;

export const CardTier = ({
  tierTitle,
  cards,
  onSelectCard,
  selectedCard,
}: {
  tierTitle: string;
  cards: ICard[];
  onSelectCard: (c: ICard) => void;
  selectedCard?: ICard;
}) => {
  return (
    <div>
      <h1>{tierTitle}</h1>
      <CardTierListStyle>
        {cards?.map((card) => (
          <CardButton
            key={card.id}
            onClick={() => onSelectCard(card)}
            selected={selectedCard?.id === card.id}
          >
            <Card {...card} />
          </CardButton>
        ))}
      </CardTierListStyle>
    </div>
  );
};

export function TieredCardView({
  cardsData,
  topCardsData,
}: TieredCardViewProps) {
  const [selectedCard, setSelectedCard] = React.useState<ICard | null>(null);

  return (
    <div>
      <h1>Tiered Card View</h1>
      <p>Pick from the following cards to view further Info</p>
      <CardTier
        tierTitle="Top Cards"
        cards={topCardsData}
        onSelectCard={(c) => setSelectedCard(c)}
        selectedCard={selectedCard}
      />
      {selectedCard?.subCards && (
        <CardTier
          tierTitle={selectedCard.name}
          onSelectCard={(c) => setSelectedCard(c)}
          cards={selectedCard.subCards?.map((c) =>
            cardsData.find((cc) => cc.id === c)
          )}
        />
      )}
    </div>
  );
}
