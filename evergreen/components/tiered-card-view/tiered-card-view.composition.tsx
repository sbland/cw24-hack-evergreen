import { mockCards } from '@cw24/evergreen.mock-data.cards';
import { TieredCardView } from './tiered-card-view.js';
import { GlobalStateProvider } from '@cw24/evergreen.state.global-state';

export const BasicTieredCardView = () => {
  return (
    <GlobalStateProvider cards={mockCards}>
      <TieredCardView
        cardsData={mockCards}
        topCardsData={mockCards.filter((card) => card.subCards?.length > 0)}
      />
    </GlobalStateProvider>
  );
};
