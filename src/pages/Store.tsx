import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FaSun } from "react-icons/fa";

import { SolarModulesActionsCreator } from "../redux/actions/solarsAction";
import { dispatchStore } from "../redux/store";

import SolarModuleItem from "../components/StoreItem";
import loader from "../assets/loader.gif";
import logoSun from "../assets/logo-sun.gif";

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
      <div className="shadow-md items-center bg-green-200 p-4">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center gap-5">
            <div></div>
            <div className="text-3xl font-semibold flex items-center text-black">
              Solar Modules
            </div>
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
      </div>
      <div className="py-20 max-sm:px-4 max-md: px-10 container mx-auto">
        {isLoading && (
          <div className="absolute top-[40%] left-[50%] translate-x-[-50%] z-100">
            <img src={loader} alt="loader" />
          </div>
        )}
        <div className="flex max-sm:justify-center justify-between flex-wrap gap-10">
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
      <div className="flex-0 flex justify-center bg-green-200 py-5 mt-auto text-center">
        <div className="flex items-center gap-2">
          <img src={logoSun} alt="logo-sun" className="h-5" />
          <div>SolarModulesStore</div>
        </div>
      </div>
    </div>
  );
}

export default SolarModuleStore;
