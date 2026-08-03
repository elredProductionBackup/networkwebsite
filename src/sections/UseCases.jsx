import { Diamond, Building2, Landmark, TrendingUp, GraduationCap, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const USE_CASES = [
  { name: "Founder networks", icon: Diamond },
  { name: "CEO communities", icon: Building2 },
  { name: "Industry associations", icon: Landmark },
  { name: "Investor groups", icon: TrendingUp },
  { name: "Alumni communities", icon: GraduationCap },
  { name: "Professional networks", icon: Star },
];

export default function UseCases() {
  return (
    <section className="flex min-h-[500px] w-full flex-col items-center justify-center gap-5 bg-neutral-100 px-6 py-20 text-center sm:gap-6">
      <FadeIn className="flex flex-col items-center gap-5 sm:gap-6">
        <span className="text-xs font-bold tracking-wider text-red-600">
          USE CASES
        </span>

        <h2 className="max-w-xs text-3xl tracking-tight font-extrabold leading-tight text-black sm:max-w-2xl sm:text-4xl md:text-5xl">
          Designed for high-value communities
        </h2>

        <p className="max-w-xs text-sm tracking-tight text-neutral-500 sm:max-w-lg sm:text-base md:text-lg">
          From founder circles to enterprise networks — theNetwork scales with
          the communities that matter most.
        </p>
      </FadeIn>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {USE_CASES.map(({ name, icon: Icon }, index) => (
          <FadeIn
            key={name}
            delay={(index % 3) * 0.08}
            className="flex items-center gap-4 rounded-xl bg-white p-5 text-left"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
              <Icon className="h-5 w-5 text-red-600" strokeWidth={2} />
            </div>
            <span className="text-sm font-semibold text-black">{name}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
