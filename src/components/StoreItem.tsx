import ChangeAmount from "./ChangeAmount";

function SolarModuleCard({
  name,
  amount,
  price,
  productId,
  maxAmountUnits,
}: SolarModuleCardProps) {
  return (
    <div className="p-10 h-60 flex flex-col justify-between border border-slate-400 rounded-lg transition hover:scale-105 duration-200">
      <div className="text-2xl">{name}</div>
      <div className="ml-auto flex-col gap-2">
        <div className="hover:underline underline-offset-1">
          Available: {amount}
        </div>
        <ChangeAmount
          productId={productId}
          name={name}
          price={price}
          currentAmount={amount}
          maxAmountUnits={maxAmountUnits}
        />
        <div className="mt-5 flex items-center gap-5">
          Price: <span className="text-lg font-semibold">{price}$</span>
        </div>
      </div>
    </div>
  );
}

export default SolarModuleCard;
