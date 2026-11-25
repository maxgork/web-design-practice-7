interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}
 
export default function TestimonialCard({
  quote,
  author,
  role,
}: TestimonialCardProps) {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6">
      <blockquote className="text-slate-700">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-slate-900">
        {author}
        <span className="block font-normal text-slate-500">{role}</span>
      </figcaption>
    </figure>
  );
}
