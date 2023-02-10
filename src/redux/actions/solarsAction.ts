import {
  GET_SOLAR_MODULES_REQUEST,
  GET_SOLAR_MODULES_SUCCESS,
  GET_SOLAR_MODULES_FAILED,
  ADD_SOLAR_MODULE_TO_CART,
  REMOVE_SOLAR_MODULE_FROM_CART
} from "./types";

import { Dispatch } from "redux";
import { API } from "../../api/solarModule";

export const SolarModulesActionsCreator = {
  fetchSolarModules() {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(SolarModulesActionsCreator.getSolarModulesRequest());
        const response = await API.getSolarModules();
        dispatch(SolarModulesActionsCreator.getSolarModulesSuccess(response));
      } catch (error) {
        console.error(error);
        dispatch(SolarModulesActionsCreator.getSolarModulesFailed(error));
      }
    };
  },

  getSolarModulesRequest: () => ({ type: GET_SOLAR_MODULES_REQUEST }),
  getSolarModulesSuccess: (solarModules: StoreItem[] | undefined) => ({
    type: GET_SOLAR_MODULES_SUCCESS,
    payload: solarModules,
  }),
  getSolarModulesFailed: (error: any) => ({
    type: GET_SOLAR_MODULES_FAILED,
    payload: error,
  }),

  addProductToCart: (productToAdd: CartItem) => ({
    type: ADD_SOLAR_MODULE_TO_CART,
    payload: productToAdd,
  }),
  
  removeProductFromCart: (productToRemove: CartItem) => ({
     type: REMOVE_SOLAR_MODULE_FROM_CART,
     payload: productToRemove,
    })
};