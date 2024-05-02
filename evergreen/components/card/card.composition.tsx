import { mockCards } from '@cw24/evergreen.mock-data.cards';
import { Card } from './card.js';

export const BasicCard = () => {
  return <Card {...mockCards[0]} />;
};
