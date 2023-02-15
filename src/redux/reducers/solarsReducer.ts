import {
  GET_SOLAR_MODULES_REQUEST,
  GET_SOLAR_MODULES_SUCCESS,
  GET_SOLAR_MODULES_FAILED,
  ADD_SOLAR_MODULE_TO_CART,
  REMOVE_SOLAR_MODULE_FROM_CART,
  CLEAR_ALL_DATA,
} from "../actions/types";

const initialState: initialState = {
  solarModuleStore: [],
  solarModuleCart: [],
  cartCounter: 0,
  cartTotalPrice: 0,
  isLoading: false,
  error: "",
};

export default function postsReducer(
  state = initialState,
  action: ActionReducer
) {
  switch (action.type) {
    case GET_SOLAR_MODULES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_SOLAR_MODULES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        solarModuleStore: action.payload,
      };

    case GET_SOLAR_MODULES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ADD_SOLAR_MODULE_TO_CART:
      let objectExists = state.solarModuleCart.find(
        (product) => product.productId === action.payload.productId
      );

      if (!objectExists) {
        return {
          ...state,
          cartCounter: state.cartCounter + 1,
          cartTotalPrice: state.cartTotalPrice + action.payload.price,
          solarModuleStore: state.solarModuleStore.map((product: StoreItem) =>
            product.productId === action.payload.productId
              ? { ...product, available: product.available - 1 }
              : product
          ),
          solarModuleCart: [
            ...state.solarModuleCart,
            { ...action.payload, voted: 1 },
          ],
        };
      }

      return {
        ...state,
        cartCounter: state.cartCounter + 1,
        cartTotalPrice: state.cartTotalPrice + action.payload.price,
        solarModuleStore: state.solarModuleStore.map((product: StoreItem) =>
          product.productId === action.payload.productId
            ? { ...product, available: product.available - 1 }
            : product
        ),
        solarModuleCart: state.solarModuleCart.map((product: CartItem) =>
          product.productId === action.payload.productId
            ? { ...product, voted: product.voted + 1 }
            : product
        ),
      };

    case REMOVE_SOLAR_MODULE_FROM_CART:
      return {
        ...state,
        cartCounter: state.cartCounter - 1,
        cartTotalPrice: state.cartTotalPrice - action.payload.price,
        solarModuleStore: state.solarModuleStore.map((product: StoreItem) =>
          product.productId === action.payload.productId
            ? { ...product, available: product.available + 1 }
            : product
        ),
        solarModuleCart: state.solarModuleCart
          .map((product: CartItem) =>
            product.productId === action.payload.productId
              ? { ...product, voted: product.voted - 1 }
              : product
          )
          .filter((product: CartItem) => product.voted),
      };

    case CLEAR_ALL_DATA:
      return {
        solarModuleStore: [],
        solarModuleCart: [],
        cartCounter: 0,
        cartTotalPrice: 0,
        isLoading: false,
        error: "",
      };

    default:
      return state;
  }
}
