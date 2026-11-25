interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}
 
export default function Button({
  href,
  variant = "primary",
  children,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600";
  const variantClasses =
    variant === "primary"
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : "border border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50";
 
  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </a>
  );
}
