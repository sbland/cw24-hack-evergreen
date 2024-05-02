import { ICard } from '@cw24/evergreen.lib';
import { Card } from '@cw24/evergreen.components.card';
import styled from 'styled-components';

export type CardboardProps = {
  /**
   * sets the component children.
   */
  cards: ICard[];
  style?: React.CSSProperties;
};

export const CardboardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    li {
      margin-right: 1rem;
      margin-bottom: 1rem;
      min-width: 20rem;
    }
  }
`;

export function Cardboard({ cards, style }: CardboardProps) {
  return (
    <CardboardStyle style={style || {}}>
      <ul>
        {cards?.map((card) => (
          <li key={card.id}>
            <Card key={card.id} {...card} />
          </li>
        ))}
      </ul>
    </CardboardStyle>
  );
}
