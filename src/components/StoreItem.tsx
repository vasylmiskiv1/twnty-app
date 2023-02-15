import ChangeAmount from "./ChangeAmount";

function StoreItem({
  productId,
  name,
  available,
  price,
  maxAmount,
}: StoreItemProps) {
  return (
    <div
      className="p-10 h-60 w-[360px] md:w-[320px] xl:w-[450px]
        flex shadow-md justify-between border border-gray-400 rounded-lg
        transition-all hover:scale-[102%] duration-200 hover:shadow-lg"
    >
      <div className="text-2xl">{name}</div>
      <div className="flex flex-col justify-between">
        <div className="text-center">Available: {available}</div>
        <div>
          <ChangeAmount
            productId={productId}
            name={name}
            price={price}
            available={available}
            maxAmount={maxAmount}
          />
          <div className="mt-5 flex items-center gap-5">
            Price: <span className="text-lg font-semibold">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
