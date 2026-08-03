import {
  ArrowUpRight,
  AlignLeft,
  MessageSquare,
  ArrowUp,
  Diamond,
  Star,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

const BENEFITS = [
  { name: "More introductions", icon: ArrowUpRight },
  { name: "Better engagement", icon: AlignLeft },
  { name: "Meaningful conversations", icon: MessageSquare },
  { name: "Business growth", icon: ArrowUp },
  { name: "Knowledge sharing", icon: Diamond },
  { name: "Stronger member value", icon: Star },
];

export default function CommunityValue() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <FadeIn className="flex flex-col items-start gap-6 text-left">
          <span className="text-xs font-bold tracking-wider text-red-500">
            COMMUNITY VALUE
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Turn passive communities
            <br className="hidden lg:block" /> into active opportunity
            <br className="hidden lg:block" /> networks
          </h2>

          <p className="max-w-md text-sm text-neutral-400 sm:text-base">
            theNetwork transforms static professional communities into
            thriving ecosystems where every member creates and captures
            value.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            See it in action
            <span aria-hidden="true">→</span>
          </a>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {BENEFITS.map(({ name, icon: Icon }, index) => (
            <FadeIn
              key={name}
              delay={(index % 2) * 0.1}
              className="flex flex-col gap-3 rounded-xl bg-white/5 p-5 text-left"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-950/60">
                <Icon className="h-4 w-4 text-red-500" strokeWidth={2} />
              </div>
              <span className="text-sm font-semibold text-white">{name}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
