import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

import ChangeAmount from "../components/ChangeAmount";

function SolarModuleCart() {
  const { solarModuleStore, solarModuleCart, cartTotalPrice, isLoading, error } = useSelector(
    (state: initialState) => state
  );

  const navigate = useNavigate();

  const onGoBack = () => {
    navigate("/store");
  };

  return (
    <div className="py-20 flex flex-col items-center gap-10">
      <button className="px-5 py-2 bg-slate-400" onClick={onGoBack}>
        Go back
      </button>
      <div className="text-2xl font-semibold">Your orders:</div>
      <div className="flex flex-col gap-5">
        {solarModuleCart.map((solarModule) => (
          <CartItem
            key={solarModule.productId}
            productId={solarModule.productId}
            name={solarModule.name}
            price={solarModule.price}
            votedAmount={solarModule.votedAmount}
            maxAmountUnits={solarModule.maxAmountUnits}
          />
        ))}
      </div>
      <div className="text-xl">
        Total price: <span className="font-semibold">{cartTotalPrice}$</span>
      </div>
    </div>
  );
}

export default SolarModuleCart;
