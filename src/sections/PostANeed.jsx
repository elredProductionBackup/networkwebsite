import FadeIn from "@/components/FadeIn";

const STEPS = [
  {
    number: "01",
    color: "bg-red-600",
    title: "State your problem",
    description:
      "Need a client, investor, supplier, partner, advisor, or expert — post it to your network in seconds.",
  },
  {
    number: "02",
    color: "bg-blue-600",
    title: "Your network responds",
    description:
      "Members suggest contacts, offer introductions, and share opportunities relevant to your problem.",
  },
  {
    number: "03",
    color: "bg-green-600",
    title: "Get introduced",
    description:
      "Warm introductions replace cold outreach — every connection comes with context and trust.",
  },
  {
    number: "04",
    color: "bg-amber-500",
    title: "Create new opportunities",
    description:
      "Build partnerships, close sales, secure investments, and grow through genuine collaboration.",
  },
];

export default function PostANeed() {
  return (
    <section className="flex min-h-[500px] w-full flex-col items-center justify-center gap-16 bg-neutral-100 px-6 py-20 sm:px-10 lg:px-16">
      <FadeIn>
        <h2 className="max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
          Post a problem. <span className="text-red-600">Find the right answer.</span>
        </h2>
      </FadeIn>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ number, color, title, description }, index) => (
          <FadeIn
            key={number}
            delay={index * 0.1}
            className="flex flex-col items-start gap-4 text-left"
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ${color}`}
            >
              {number}
            </div>
            <h3 className="text-base font-bold text-black">{title}</h3>
            <p className="text-sm leading-6 text-neutral-500">{description}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
