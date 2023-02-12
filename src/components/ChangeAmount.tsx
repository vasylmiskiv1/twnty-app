import { useSelector } from "react-redux";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { SolarModulesActionsCreator } from "../redux/actions/solarsAction";
import { dispatchStore } from "../redux/store";

function ChangeAmount({
  productId,
  name,
  currentAmount,
  price,
  maxAmountUnits,
}: ChangeAmountProps) {
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
    <div className="flex justify-center gap-4">
      <button>
        <AiFillPlusCircle
          size={25}
          className="text-green-400 hover:text-green-500"
          onClick={onAddSolarModuleToCart}
        />
      </button>
      <div className="w-4">
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
