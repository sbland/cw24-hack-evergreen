import { ICard } from '@cw24/evergreen.lib';

export const mockCards: ICard[] = [
  {
    id: '1',
    name: 'Hello World Card',
    description: 'This is a card',
    image: 'https://via.placeholder.com/150',
    tags: [
      { id: '1', name: 'tag1' },
      { id: '2', name: 'tag2' },
    ],
    primaryTag: { id: '1', name: 'tag1' },
    difficulty: { id: '1', name: 'easy', value: 1 },
    subCards: ['3', '4'],
    relatedCards: ['3', '4'],
  },
  {
    id: '2',
    name: 'Hello World Card 2',
    description: 'This is a card',
    image: 'https://via.placeholder.com/150',
    tags: [
      { id: '1', name: 'tag1' },
      { id: '2', name: 'tag2' },
    ],
    primaryTag: { id: '1', name: 'tag1' },
    difficulty: { id: '1', name: 'easy', value: 1 },
    subCards: ['5'],
  },
  {
    id: '3',
    name: 'Hello World Card 3',
    description: 'This is a card',
    image: 'https://via.placeholder.com/150',
    tags: [
      { id: '1', name: 'tag1' },
      { id: '2', name: 'tag2' },
    ],
    primaryTag: { id: '1', name: 'tag1' },
    difficulty: { id: '1', name: 'easy', value: 1 },
    subCards: [],
  },
  {
    id: '4',
    name: 'Hello World Card 4',
    description: 'This is a card',
    image: 'https://via.placeholder.com/150',
    tags: [
      { id: '1', name: 'tag1' },
      { id: '2', name: 'tag2' },
    ],
    primaryTag: { id: '1', name: 'tag1' },
    difficulty: { id: '1', name: 'easy', value: 1 },
    subCards: [],
  },
  {
    id: '5',
    name: 'Hello World Card 5',
    description: 'This is a card',
    image: 'https://via.placeholder.com/150',
    tags: [
      { id: '1', name: 'tag1' },
      { id: '2', name: 'tag2' },
    ],
    primaryTag: { id: '1', name: 'tag1' },
    difficulty: { id: '1', name: 'easy', value: 1 },
    subCards: [],
  },
];



export const realWorldCards = [
  {

  }
]