export interface ITag {
  id: string;
  name: string;
}

export interface IDifficulty {
  id: string;
  name: string;
  value: number;
}

export interface ICard {
  id: string;
  name: string; // Question
  description: string; // Solution
  image: string;
  tags: ITag[];
  primaryTag: ITag;
  relatedCards?: string[];
  subCards: string[];
  difficulty: IDifficulty;
}


export interface IAnswer {
  id: string;
  name: string;
  associatedCards: ICard[];
}

export interface IQuestion {
  id: string;
  name: string;
  answers: IAnswer[];
}