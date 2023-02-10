import React from "react";
import { useSelector } from "react-redux";
import { SolarModulesActionsCreator } from "../redux/actions/solarsAction";
import { dispatchStore } from "../redux/store";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function ChangeAmount({ productId, name, currentAmount, price, maxAmountUnits }: any) {
  const { solarModuleCart } = useSelector((state: initialState) => state);

  const onAddSolarModuleToCart = () => {
    if (currentAmount > 0) {
      dispatchStore(
        SolarModulesActionsCreator.addProductToCart({
          productId,
          name,
          price,
          maxAmountUnits,
          votedAmount: currentAmount,
        })
      );
    } 
  };

  const onRemoveSolarModuleFromCart = () => {
    if (currentAmount < maxAmountUnits) {
      dispatchStore(
        SolarModulesActionsCreator.removeProductFromCart({
          productId,
          name,
          price,
          maxAmountUnits,
          votedAmount: currentAmount,
        })
      );
    }
  };
  
  return (
    <div className="mt-5 flex gap-4">
      <button>
        <AiFillPlusCircle
          size={25}
          className="text-green-400 hover:text-green-500"
          onClick={onAddSolarModuleToCart}
        />
      </button>
      <div>
        {solarModuleCart.find((product) => product.productId === productId)
          ?.votedAmount || 0}
      </div>
      <button>
        <AiFillMinusCircle
          size={25}
          className="text-green-400 hover:text-green-500"
          onClick={onRemoveSolarModuleFromCart}
        />
      </button>
    </div>
  );
}

export default ChangeAmount;
