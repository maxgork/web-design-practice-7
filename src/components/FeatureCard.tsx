import Badge from "./Badge";

interface FeatureCardProps {
  icon: string;
  isNew?: boolean;
  title: string;
  description: string;
}
 
export default function FeatureCard({
  icon,
  isNew = false,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
        {icon}
      </div>
      {isNew && <Badge>New</Badge>}
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}
