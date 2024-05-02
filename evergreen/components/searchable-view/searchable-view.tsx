import React from 'react';
import { Cardboard } from '@cw24/evergreen.components.cardboard';
import { GlobalStateContext } from '@cw24/evergreen.state.global-state';

export function SearchableView() {
  const [searchString, setSearchString] = React.useState('');
  const { cards } = React.useContext(GlobalStateContext);
  const filteredCards = cards.filter((c) => c.name.includes(searchString));
  return (
    <div>
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Cardboard cards={filteredCards} />
    </div>
  );
}
