import { useSelector } from "react-redux";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { SolarModulesActionsCreator } from "../redux/actions/solarsAction";
import { dispatchStore } from "../redux/store";
import { useMemo } from "react";

function ChangeAmount({
  productId,
  name,
  currentAmount,
  price,
  maxAmountUnits,
}: ChangeAmountProps) {
  const votedAmount = useMemo(() => maxAmountUnits - currentAmount, [currentAmount])

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
    <div className="flex justify-center gap-4">
      <button>
        <AiFillPlusCircle
          size={25}
          className="text-green-400 hover:text-green-500"
          onClick={onAddSolarModuleToCart}
        />
      </button>
      <div className="w-4">
        {votedAmount}
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
