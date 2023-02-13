import { useMemo } from "react";

import ChangeAmount from "./ChangeAmount";

function CartItem({
  productId,
  name,
  price,
  votedAmount,
  maxAmountUnits,
}: CartItemProps) {
  const totalSum = useMemo(() => votedAmount * price, [votedAmount]);
  const availableModules = useMemo(
    () => maxAmountUnits - votedAmount,
    [votedAmount]
  );

  return (
    <tr className="text-gray-700 transition hover:bg-gray-200 duration-200">
      <td className="border px-6 py-2">{name}</td>
      <td className="border px-6 py-2 text-right">{availableModules}</td>
      <td className="border py-2">
        <ChangeAmount
          productId={productId}
          name={name}
          price={price}
          currentAmount={availableModules}
          maxAmountUnits={maxAmountUnits}
        />
      </td>
      <td className="border px-4 py-2 text-right">${price}</td>
      <td className="border px-4 py-2 text-right">${totalSum}</td>
    </tr>
  );
}

export default CartItem;
