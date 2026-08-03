import { Clock } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Page() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

      <FadeIn className="relative mx-auto flex max-w-3xl flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-3 text-left">
          <span className="text-xs font-bold tracking-wider text-red-600">
            LEGAL
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            Terms &amp; Conditions
          </h1>
        </div>

        <div className="flex w-full flex-col items-center gap-4 rounded-2xl border border-neutral-200 px-6 py-16 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
            <Clock className="h-6 w-6 text-red-600" strokeWidth={2} />
          </div>
          <h2 className="text-lg font-bold text-black">Coming soon</h2>
          <p className="max-w-sm text-sm leading-6 text-neutral-500">
            We&apos;re putting together our terms &amp; conditions. Check
            back soon.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
