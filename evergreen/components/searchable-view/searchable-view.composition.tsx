import { mockCards } from '@cw24/evergreen.mock-data.cards';
import { SearchableView } from './searchable-view.js';
import { GlobalStateProvider } from '@cw24/evergreen.state.global-state';

export const BasicSearchableView = () => {
  return (
    <GlobalStateProvider cards={mockCards}>
      <SearchableView />
    </GlobalStateProvider>
  );
};
