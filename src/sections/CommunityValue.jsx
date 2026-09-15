import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function CommunityValue() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />

      <FadeIn className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
        <span className="text-xs font-bold tracking-wider text-red-500">
          RUN A COMMUNITY?
        </span>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          Give your members a reason they can&apos;t afford to leave.
        </h2>

        <p className="max-w-md text-sm text-neutral-400 sm:text-base">
          Turn your group into the place where collaborations are made and problems get
          solved. When membership starts paying for itself, engagement and
          retention take care of themselves.
        </p>

        <Link
          href="/for-groups"
          className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
        >
          Bring your community on
          <span aria-hidden="true">→</span>
        </Link>
      </FadeIn>
    </section>
  );
}
