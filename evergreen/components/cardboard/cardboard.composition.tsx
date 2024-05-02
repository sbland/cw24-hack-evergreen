import { mockCards } from '@cw24/evergreen.mock-data.cards';
import { Cardboard } from './cardboard.js';

export const BasicCardboard = () => {
  return <Cardboard cards={mockCards} />;
};

