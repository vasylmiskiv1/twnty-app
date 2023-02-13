import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { dispatchStore, persistor } from "../redux/store";
import { SolarModulesActionsCreator } from "../redux/actions/solarsAction";

import CartItem from "../components/CartItem";

function SolarModuleCart() {
  const { solarModuleCart, cartCounter, cartTotalPrice } = useSelector(
    (state: initialState) => state
  );

  const navigate = useNavigate();

  const onGoBack = () => {
    navigate("/store");
  };

  const onCartSubmit = () => {
    /* Send this cart data */
    /* If server returns status ok clear state 
      and go to the store page and get updated data 
      from the server */
    persistor.purge();
    dispatchStore(SolarModulesActionsCreator.clearAllData());
    navigate("/store");
  };

  return (
    <div className="flex">
      <div className="w-4/6 h-screen px-24 pt-10">
        <button
          className="px-5 py-2 bg-gray-200 rounded transition hover:bg-gray-400 duration-200"
          onClick={onGoBack}
        >
          Go back
        </button>
        <div className="mt-10 text-2xl uppercase font-semibold">
          Your orders:
        </div>
        <table className="mt-5 w-full overflow-y-scroll max-h-[300px]">
          <thead className="bg-green-200">
            <tr className="text-slate">
              <th className="py-2">Product Details</th>
              <th className="py-2">Available</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Price</th>
              <th className="py-2">Total</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {solarModuleCart.length
              ? solarModuleCart.map((solarModule) => (
                  <CartItem
                    key={solarModule.productId}
                    productId={solarModule.productId}
                    name={solarModule.name}
                    price={solarModule.price}
                    votedAmount={solarModule.votedAmount}
                    maxAmountUnits={solarModule.maxAmountUnits}
                  />
                ))
              : null}
          </tbody>
        </table>
        {!solarModuleCart.length && (
          <div className="mt-5 text-center text-lg">
            Your order list is empty
          </div>
        )}
      </div>
      <div className="w-2/6 bg-gray-200 p-20">
        <div className=" font-bold uppercase text-xl text-center">
          Order Summary
        </div>
        <div className="h-[2px] bg-slate-400 mt-10"></div>
        <div className="flex justify-between mt-5 font-semibold">
          <div className="text-lg">Items: {cartCounter}</div>
          <div className="text-lg">${cartTotalPrice}</div>
        </div>
        <div className="h-[2px] bg-slate-400 mt-10"></div>
        <div className="flex justify-between mt-5 font-semibold text-xl">
          <div>Total cost:</div>
          <div>${cartTotalPrice}</div>
        </div>
        <button
          type="button"
          className={`mt-10 w-full py-2 rounded ${
            !solarModuleCart.length
              ? `bg-gray-400 cursor-not-allowed`
              : `shadow-md bg-green-400 transition
             hover:bg-green-500 hover:shadow-lg duration-200`
          }`}
          onClick={onCartSubmit}
          disabled={!solarModuleCart.length}
        >
          Check out
        </button>
      </div>
    </div>
  );
}

export default SolarModuleCart;
