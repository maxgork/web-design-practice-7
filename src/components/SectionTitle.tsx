interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
}
 
export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      )}
    </div>
  );
}
