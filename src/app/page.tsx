import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
 
const features = [
  {
    "icon": "🔧",
    "title": "Vehicle Inspection",
    "description": "Check your vehicle before your next trip."
  },
  {
    "icon": "🛢️",
    "title": "Oil Service",
    "description": "Keep your engine running smoothly."
  },
  {
    "icon": "🛞",
    "title": "Tire Care",
    "description": "Maintain safe tires in every season."
  },
  {
    "icon": "🔋",
    "title": "Battery Check",
    "description": "Find battery problems before a breakdown."
  },
  {
    "icon": "📅",
    "title": "Service Reminders",
    "description": "Keep track of your next maintenance visit."
  }
];

const pricingPlans = [
  {
    "name": "Basic",
    "price": "$29",
    "period": "visit",
    "features": [
      "Vehicle inspection",
      "Battery check",
      "Service report"
    ],
    "highlighted": false
  },
  {
    "name": "Care Plus",
    "price": "$79",
    "period": "visit",
    "features": [
      "Oil service",
      "Tire inspection",
      "Battery check",
      "Priority booking"
    ],
    "highlighted": true
  },
  {
    "name": "Complete",
    "price": "$149",
    "period": "visit",
    "features": [
      "Full inspection",
      "Oil and filter service",
      "Tire rotation",
      "Maintenance report"
    ],
    "highlighted": false
  }
];

const testimonials = [
  {
    "quote": "The inspection helped me prepare for a long road trip.",
    "author": "Alex Morgan",
    "role": "Daily commuter"
  },
  {
    "quote": "Booking my oil service was simple and convenient.",
    "author": "Jamie Reed",
    "role": "Car owner"
  },
  {
    "quote": "The maintenance report made everything easy to understand.",
    "author": "Taylor Brooks",
    "role": "Family driver"
  }
];

const faqItems = [
  {
    "question": "What vehicles can I bring?",
    "answer": "Our fictional service supports everyday passenger cars."
  },
  {
    "question": "How long does a visit take?",
    "answer": "The duration depends on the selected service."
  },
  {
    "question": "Can I choose a service plan?",
    "answer": "Yes, compare the three offers on this page."
  },
  {
    "question": "Do I need an appointment?",
    "answer": "Appointments are recommended."
  },
  {
    "question": "Is DriveFlow a real workshop?",
    "answer": "No, this is a web design learning project."
  }
];

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-bold text-emerald-600">
            DriveFlow
          </a>
          <nav aria-label="Main navigation" className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#testimonials" className="hover:text-slate-900">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button href="#features" variant="secondary">
              Services
            </Button>
            <Button href="#pricing" variant="primary">
              View Packages
            </Button>
          </div>
        </div>
      </header>
 
      <main id="top">
        <section className="bg-emerald-50 px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Car Maintenance Made Simple
            </p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
              Keep your car ready for every journey
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              DriveFlow brings inspections, oil service, and maintenance
              reminders together in one convenient service.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="#pricing" variant="primary">
                View Packages
              </Button>
              <Button href="#features" variant="secondary">
                Explore Services
              </Button>
            </div>
          </div>
        </section>
 
        <section id="features" className="scroll-mt-28 px-6 py-20">
          <SectionTitle
            eyebrow="Maintenance"
            title="Everything your car needs"
            description="Five services to help you maintain your vehicle."
          />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isNew={feature.title === "Service Reminders"}
              />
            ))}
          </div>
        </section>
 
        <section id="pricing" className="scroll-mt-28 bg-stone-100 px-6 py-20">
          <SectionTitle
            eyebrow="Packages"
            title="Choose your maintenance package"
            description="Compare service packages for your vehicle."
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            ))}
          </div>
        </section>
 
        <section id="testimonials" className="scroll-mt-28 px-6 py-20">
          <SectionTitle
            eyebrow="Testimonials"
            title="What drivers say about DriveFlow"
          />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </section>
 
        <section id="faq" className="scroll-mt-28 bg-stone-100 px-6 py-20">
          <SectionTitle eyebrow="Questions and Answers" title="Vehicle Service Questions" />
          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-200 bg-white p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
                  {item.question}
                  <span className="ml-4 text-emerald-600 motion-safe:transition-transform group-open:rotate-180" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
 
        <section className="bg-slate-900 px-6 py-20 text-white">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready for your next journey?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Choose a maintenance package and explore our services.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="#pricing" variant="primary">
                View Packages
              </Button>
            </div>
          </div>
        </section>
      </main>
 
      <footer className="border-t border-slate-200 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>&copy; 2026 DriveFlow. Learning project.</p>
          <nav aria-label="Footer links" className="flex gap-6">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
