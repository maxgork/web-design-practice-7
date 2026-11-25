interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}
 
export default function PricingCard({
  name,
  price,
  period,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={
        highlighted
          ? "rounded-2xl border border-emerald-600 bg-emerald-600 p-8 text-white shadow-lg"
          : "rounded-2xl border border-slate-200 bg-white p-8 text-slate-900 motion-safe:transition-shadow hover:shadow-lg"
      }
    >
      {highlighted && (
        <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-800">
          Most Popular
        </span>
      )}
      <h3 className={highlighted ? "text-lg font-semibold text-white" : "text-lg font-semibold text-slate-900"}>
        {name}
      </h3>
      <p className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold">{price}</span>
        <span className={highlighted ? "text-emerald-100" : "text-slate-500"}>
          /{period}
        </span>
      </p>
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span aria-hidden="true">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
