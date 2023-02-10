import { useSelector } from "react-redux";
import ChangeAmount from "./ChangeAmount";

function CartItem({ productId, name, price, votedAmount, maxAmountUnits }: any) {
  const { solarModuleStore, isLoading, error } = useSelector(
    (state: initialState) => state
  );

  const currentAmount =
    solarModuleStore.find((product) => product.productId === productId)
      ?.currentAmount || 0;

  return (
    <div key={productId} className="p-5 border border-slate-400 rounded-lg">
      <div>
        Name: <span className="font-semibold">{name}</span>
      </div>
      <div className="mt-5 flex gap-4">
        <div>
          Voted amount: <span className="font-semibold">{votedAmount}</span>
        </div>
        |
        <div>
          Available: <span className="font-semibold">{currentAmount}</span>
        </div>
        <div className="mt-10">
          <ChangeAmount
            productId={productId}
            name={name}
            price={price}
            votedAmount={votedAmount}
            currentAmount={currentAmount}
            maxAmountUnits={maxAmountUnits}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
