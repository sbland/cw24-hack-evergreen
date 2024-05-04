import { ICard } from '@cw24/evergreen.lib';
import styled from 'styled-components';
import { CardPreview } from './card-preview.js';

export type CardboardProps = {

  cards: ICard[];
  style?: React.CSSProperties;
};

export const CardboardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-right: 1rem;
      height: 100%;
    }
  }
`;

export function SimilarCardList({ cards, style }: CardboardProps) {
  return (
    <CardboardStyle style={style || {}}>
      <ul>
        {cards?.map((card) => (
          <li key={card.id}>
            <CardPreview key={card.id} {...card} />
          </li>
        ))}
      </ul>
    </CardboardStyle>
  );
}
