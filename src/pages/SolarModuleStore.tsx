import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SolarModulesActionsCreator } from "../redux/actions/solarsAction";
import { dispatchStore } from "../redux/store";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";

import SolarModuleItem from "../components/StoreItem";
import loader from "../assets/loader.gif";
import { Link } from "react-router-dom";

function SolarModuleStore() {
  const { solarModuleStore, cartCounter, cartTotalPrice, isLoading, error } =
    useSelector((state: initialState) => state);

  useEffect(() => {
    if (!solarModuleStore.length) {
      dispatchStore(SolarModulesActionsCreator.fetchSolarModules());
    }
  }, []);

  return (
    <>
      <div className="flex justify-around items-center bg-green-200 p-4">
        <h1 className="text-3xl font-semibold">Solar Modules</h1>
        <div className="flex items-center gap-10">
          <Link
            to="/cart"
            className="flex items-center gap-4 transition hover:text-green-600 duration-200 "
          >
            <AiOutlineShoppingCart size={25} />
            <div className="font-semibold">{cartCounter}</div>
          </Link>
          |
          <div className="flex items-center gap-4">
            <BiDollar size={22} />
            <div className="font-semibold">{cartTotalPrice || 0}</div>
          </div>
        </div>
      </div>
      <div className="px-40">
        {isLoading && (
          <div className="mt-60 flex justify-center">
            <img src={loader} alt="loader" className="h-20" />
          </div>
        )}
        <div className="mt-10 grid grid-cols-4 gap-10">
          {solarModuleStore.length
            ? solarModuleStore.map((solarModule: StoreItem) => (
                <SolarModuleItem
                  key={solarModule.productId}
                  productId={solarModule.productId}
                  price={solarModule.price}
                  name={solarModule.name}
                  maxAmountUnits={solarModule.maxAmountUnits}
                  amount={solarModule.currentAmount}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default SolarModuleStore;
