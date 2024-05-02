import React from 'react';
import { GlobalStateContext } from '@cw24/evergreen.state.global-state';
import { ICard } from '@cw24/evergreen.lib';
import { BtnRow, CardStyle, ToggleButton } from './styles.js';
import { SimilarCardList } from './similar-card-list.js';

export function Card(props: ICard) {
  const { id, name, description, image, tags, relatedCards, difficulty } =
    props;
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { cards, addSavedCard, savedCards, removeSavedCard } =
    React.useContext(GlobalStateContext);

  const isSaved = savedCards.find((c) => c.id === id) !== undefined;
  return (
    <CardStyle className="card">
      <h1>{name}</h1>
      <img src={image} width="100%" alt={name} />
      <p>
        {tags?.map((t) => (
          <button key={t.id}>{t.name}</button>
        ))}
      </p>
      <p>
        <b>Difficulty:</b>
        {difficulty.name}
      </p>
      <p>{description}</p>
      <BtnRow>
        <button onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        <ToggleButton
          on={isSaved}
          onClick={() => (isSaved ? removeSavedCard(id) : addSavedCard(props))}
        >
          {isSaved ? 'Un-save' : 'Save'}
        </ToggleButton>
      </BtnRow>
      {isExpanded && (
        <div>
          <h2>This is some extra info</h2>
          <p>Some extra info...</p>
          <h2>Related Cards</h2>
          <SimilarCardList
            cards={relatedCards?.map((r) => cards.find((c) => c.id === r))}
          />
        </div>
      )}
    </CardStyle>
  );
}
