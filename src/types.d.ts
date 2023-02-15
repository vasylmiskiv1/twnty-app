interface ActionReducer {
  type: string;
  payload?: any;
}

interface Params {
  method: string;
  headers?: {
    "Content-Type": string;
  };
  body?: string;
}

interface StoreItem {
  productId: string;
  name: string;
  price: number;
  maxAmount: number;
  available: number;
}

interface CartItem {
  productId: string;
  name: string;
  price: number;
  maxAmount: number;
  voted: number;
}

interface ProductToRemove {
  productId: string;
  price: number;
}

interface initialState {
  solarModuleStore: StoreItem[];
  solarModuleCart: CartItem[];
  cartCounter: number;
  cartTotalPrice: number;
  isLoading: boolean;
  error: string;
}

type ChangeAmountProps = {
  productId: string;
  name: string;
  available: number;
  price: number;
  maxAmount: number;
};

type StoreItemProps = {
  name: string;
  productId: string;
  price;
  maxAmount: number;
  available: number;
};

type CartItemProps = {
  productId: string;
  name: string;
  price: number;
  voted: number;
  maxAmount: number;
}
