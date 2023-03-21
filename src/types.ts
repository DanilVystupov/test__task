export type CardItemType = {
  id: number;
  name: string;
  email: string;
  body: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type CardsProps = {
  addToCard: (card: CardItemType) => void;
};

export type CardItemProps = {
  card: CardItemType;
  addToCard: (card: CardItemType) => void;
};

export type CardBasketProps = {
  cardItems: CardItemType[];
  setCardItems: React.Dispatch<React.SetStateAction<CardItemType[]>>;
};

export type CardListProps = {
  cards: CardItemType[];
  addToCard: (card: CardItemType) => void;
};