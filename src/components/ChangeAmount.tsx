import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { SolarModulesActionsCreator } from "../redux/actions/solarsAction";
import { dispatchStore } from "../redux/store";
import { useMemo } from "react";

function ChangeAmount({
  productId,
  name,
  available,
  price,
  maxAmount,
}: ChangeAmountProps) {
  const voted = useMemo(() => maxAmount - available, [available, maxAmount])

  const onAddSolarModuleToCart = () => {
    if (available > 0) {
      dispatchStore(
        SolarModulesActionsCreator.addProductToCart({
          productId,
          name,
          price,
          maxAmount,
          voted,
        })
      );
    }
  };

  const onRemoveSolarModuleFromCart = () => {
    if (available < maxAmount) {
      dispatchStore(
        SolarModulesActionsCreator.removeProductFromCart({productId, price})
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
        {voted}
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
