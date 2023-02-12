import ChangeAmount from "./ChangeAmount";

function SolarModuleCard({
  name,
  amount,
  price,
  productId,
  maxAmountUnits,
}: SolarModuleCardProps) {
  return (
    <div className="p-10 h-60 w-[360px] md:w-[320px] xl:w-[450px] flex shadow-lg justify-between border border-slate-400 rounded-lg transition hover:scale-105 duration-200 hover:bg-gray-100">
      <div className="text-2xl">{name}</div>
      <div className="flex flex-col justify-between">
        <div className="text-center">Available: {amount}</div>
        <div>
          <ChangeAmount
            productId={productId}
            name={name}
            price={price}
            currentAmount={amount}
            maxAmountUnits={maxAmountUnits}
          />
          <div className="mt-5 flex items-center gap-5">
            Price: <span className="text-lg font-semibold">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarModuleCard;
