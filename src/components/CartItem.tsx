import { useMemo } from "react";
import { useSelector } from "react-redux";
import ChangeAmount from "./ChangeAmount";

function CartItem({
  productId,
  name,
  price,
  votedAmount,
  maxAmountUnits,
}: any) {
  const { solarModuleStore } = useSelector((state: initialState) => state);

  const currentAmount =
    solarModuleStore.find((product) => product.productId === productId)
      ?.currentAmount || 0;

  const totalSum = useMemo(() => votedAmount * price, [votedAmount]);

  return (
    <tr className="text-gray-700">
      <td className="border px-6 py-2">{name}</td>
      <td className="border py-2">
        <ChangeAmount
          productId={productId}
          name={name}
          price={price}
          currentAmount={currentAmount}
          maxAmountUnits={maxAmountUnits}
        />
      </td>
      <td className="border px-4 py-2">${price}</td>
      <td className="border px-4 py-2">${totalSum}</td>
    </tr>
  );
}

export default CartItem;
