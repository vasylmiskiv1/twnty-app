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
  maxAmountUnits: number;
  currentAmount: number;
}

interface CartItem {
  productId: string;
  name: string;
  price: number;
  maxAmountUnits: number;
  votedAmount: number;
}

interface initialState {
  solarModuleStore: StoreItem[];
  solarModuleCart: CartItem[];
  cartCounter: number;
  cartTotalPrice: number;
  isLoading: boolean;
  error: string;
}

type SolarModuleCardProps = {
  name: string;
  productId: string;
  price;
  maxAmountUnits: number;
  amount: number;
};

type ChangeAmountProps = {
  productId: string;
  name: string;
  currentAmount: number;
  price: number;
  maxAmountUnits: number;
};
