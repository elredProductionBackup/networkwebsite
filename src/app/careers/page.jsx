import { Briefcase } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const GOALS = [
  {
    number: "1",
    title: "Focus on the User",
    description:
      "When the users come in, customers (the one who pays) follow. Which is why our platform looks at addressing user pain points only.",
  },
  {
    number: "2",
    title: "Utility Focus",
    description:
      "Our product emphasizes utility over features, ensuring that it solves real problems for our users.",
  },
  {
    number: "3",
    title: "Platform as Facilitator",
    description:
      "We act as a platform to connect senders and receivers, givers and takers, and other parties.",
  },
  {
    number: "4",
    title: "EQ",
    description:
      "When you genuinely care about your customers, it shows. From our product design and the language used, to the services and features, we are instilling EQ as a key design element.",
  },
  {
    number: "5",
    title: "Long Term versus Short Term",
    description:
      "We aim to nurture lasting relationships versus having a touch and go system. Which is why our entire platform ecosystem is about building a long-term collaborative approach for our users.",
  },
  {
    number: "6",
    title: "Authenticity",
    description:
      "Authenticity is the key to long term collaboration success, and through our features of identity and personality we aim to build on this.",
  },
  {
    number: "7",
    title: "Abundance / Collaborative",
    description:
      "Economies of abundance rely on what users are best at and outsource what others could do better. Our platform follows this principle and everything we do is designed for users to offer what they are best at and outsource what they may not be.",
  },
];

export default function Page() {
  return (
    <div className="w-full">
      <div className="relative min-h-screen w-full overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-8">
          <FadeIn className="flex flex-col items-start gap-3 text-left">
            <span className="text-xs font-bold tracking-wider text-red-600">
              CAREERS
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              Career opportunities
            </h1>

            <p className="max-w-md text-sm leading-6 text-neutral-500 sm:text-base">
              Everything we do is designed for people to offer what they are
              best at, and outsource what they may not be.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.15}
            className="flex w-full flex-col items-center gap-4 rounded-2xl border border-neutral-200 px-6 py-16 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
              <Briefcase className="h-6 w-6 text-red-600" strokeWidth={2} />
            </div>
            <h2 className="text-lg font-bold text-black">
              No open positions right now
            </h2>
            <p className="max-w-sm text-sm leading-6 text-neutral-500">
              Sorry, we don&apos;t have any openings at the moment. Check back
              soon — we&apos;re always growing.
            </p>
          </FadeIn>
        </div>
      </div>

      <section className="w-full bg-neutral-100 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-10">
          <FadeIn className="flex flex-col items-start gap-2 text-left">
            <span className="text-xs font-bold tracking-wider text-red-600">
              THE GOALS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              What we optimise for
            </h2>
          </FadeIn>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GOALS.map(({ number, title, description }, index) => (
              <FadeIn
                key={number}
                delay={(index % 3) * 0.1}
                className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 text-left"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-sm font-bold text-red-600">
                  {number}
                </div>
                <h3 className="text-base font-bold text-black">{title}</h3>
                <p className="text-sm leading-6 text-neutral-500">
                  {description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
