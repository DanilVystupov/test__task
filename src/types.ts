export type CartItemType = {
  id: number;
  name: string;
  email: string;
  body: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotosProps = {
  addToCart: (photo: CartItemType) => void;
};

export type PhotoProps = {
  photo: CartItemType;
  addToCart: (photo: CartItemType) => void;
};

export type PhotoCartProps = {
  cartItems: CartItemType[];
  addToCart: (photo: CartItemType) => void;
};

export type PhotoListProps = {
  photos: CartItemType[];
  addToCart: (photo: CartItemType) => void;
};