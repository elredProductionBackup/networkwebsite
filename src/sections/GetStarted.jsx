import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function GetStarted() {
  return (
    <section className="flex min-h-[500px] w-full flex-col items-center justify-center gap-5 bg-white px-6 py-20 text-center sm:gap-6">
      <FadeIn className="flex flex-col items-center gap-5 sm:gap-6">
        <span className="text-xs font-bold tracking-wider text-red-600">
          GET STARTED
        </span>

        <h2 className="max-w-xs text-3xl tracking-tight font-extrabold leading-tight text-black sm:max-w-2xl sm:text-4xl md:text-5xl">
          Your next opportunity is already in your network.
        </h2>

        <p className="max-w-xs text-sm tracking-tight text-neutral-500 sm:max-w-lg sm:text-base md:text-lg">
          Stop cold outreach. Start building trusted relationships that create
          real business outcomes.
        </p>

        <div className="flex w-full max-w-xs flex-col items-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
          <Link
            href="#"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:w-auto"
          >
            Join theNetwork
            <span aria-hidden="true">→</span>
          </Link>
          {/* <Link
            href="#"
            className="w-full rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-100 sm:w-auto"
          >
            Request demo
          </Link> */}
        </div>

        <p className="max-w-xs text-xs text-neutral-500 font-medium sm:max-w-none">
          Free to join &middot; No credit card required
        </p>
      </FadeIn>
    </section>
  );
}
