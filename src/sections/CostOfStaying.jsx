import FadeIn from "@/components/FadeIn";

export default function CostOfStaying() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 text-center sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

      <FadeIn className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
         There’s value in your network you haven’t discovered yet.
        </h2>
        <p className="text-sm leading-6 text-neutral-500 sm:text-base">
          Somewhere in your network, someone is looking for exactly what you offer today. Another can open a door you’ve been knocking on for months. Cut through the noise and turn relevant access into meaningful collaboration.
        </p>
      </FadeIn>
    </section>
  );
}
