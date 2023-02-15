import { useMemo } from "react";

import ChangeAmount from "./ChangeAmount";

function CartItem({
  productId,
  name,
  price,
  voted,
  maxAmount,
}: CartItemProps) {
  const totalSum = useMemo(
    () => voted * price,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [voted]
  );
  const availableModules = useMemo(
    () => maxAmount - voted,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [voted]
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
          available={availableModules}
          maxAmount={maxAmount}
        />
      </td>
      <td className="border px-4 py-2 text-right">${price}</td>
      <td className="border px-4 py-2 text-right">${totalSum}</td>
    </tr>
  );
}

export default CartItem;
