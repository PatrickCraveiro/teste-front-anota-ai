export type CardType = 1 | 2 | 3;

export interface ICardResponse {
  description: string;
  id: number;
  img: string;
  title: string;
  type: CardType;
}
