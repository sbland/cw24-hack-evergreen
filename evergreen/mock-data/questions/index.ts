import { IQuestion } from '@cw24/evergreen.lib';
import { mockCards } from '@cw24/evergreen.mock-data.cards';

export const exampleQuestions: IQuestion[] = [
  {
    id: '1',
    name: 'What is your favorite color?',
    answers: [
      {
        id: '1',
        name: 'Red',
        associatedCards: mockCards.slice(0, 2),
      },
      {
        id: '2',
        name: 'Blue',
        associatedCards: mockCards.slice(2, 3),
      },
      {
        id: '3',
        name: 'Green',
        associatedCards: mockCards,
      },
    ],
  },
  {
    id: '2',
    name: 'What is your favorite animal?',
    answers: [
      {
        id: '1',
        name: 'Dog',
        associatedCards: mockCards,
      },
      {
        id: '2',
        name: 'Cat',
        associatedCards: mockCards.slice(2, 3),
      },
      {
        id: '3',
        name: 'Bird',
        associatedCards: mockCards.slice(0, 3),
      },
    ],
  },
];
