import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SolarModulesActionsCreator } from "../redux/actions/solarsAction";
import { dispatchStore } from "../redux/store";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FaSun } from "react-icons/fa";

import SolarModuleItem from "../components/StoreItem";
import loader from "../assets/loader.gif";
import { Link } from "react-router-dom";

function SolarModuleStore() {
  const { solarModuleStore, cartCounter, cartTotalPrice, isLoading } =
    useSelector((state: initialState) => state);

  useEffect(() => {
    if (!solarModuleStore.length) {
      dispatchStore(SolarModulesActionsCreator.fetchSolarModules());
    }
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-stretch">
      <div className="flex shadow-md justify-around items-center bg-green-200 p-4">
        <div className="flex items-center gap-5">
          <div>
            <FaSun size={28} />
          </div>
          <h1 className="text-3xl font-semibold">Solar Modules</h1>
        </div>

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
      <div className="py-20 xl:w-[1260px] m-auto">
        {isLoading && (
          <div className="absolute top-[40%] left-[50%] translate-x-[-50%] z-100">
            <img src={loader} alt="loader" />
          </div>
        )}
        <div className="store-grid-container">
          {solarModuleStore && solarModuleStore.length
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
      <div className="flex-0 bg-green-200 py-5 text-center">
        SolarModulesStore
      </div>
    </div>
  );
}

export default SolarModuleStore;
