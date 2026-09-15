import Image from "next/image";
import { TRIBE_DATA } from "@/data/tribe";
import FadeIn from "@/components/FadeIn";

export default function Page() {
  return (
    <div className="relative w-full overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-12">
        <FadeIn className="flex flex-col items-start gap-4 text-left">
          <span className="text-xs font-bold tracking-wider text-red-600">
            OUR TRIBE
          </span>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            No hierarchies. Just communication, transparency &amp; craft.
          </h1>

          <p className="max-w-lg text-sm leading-6 text-neutral-500 sm:text-base">
            The people building theNetwork — makers who believe collaboration
            should be easy and seamless.
          </p>
        </FadeIn>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRIBE_DATA.map(({ name, image, role, description, quote }, index) => (
            <FadeIn
              key={name}
              delay={(index % 4) * 0.08}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200"
            >
              <div className="relative aspect-[3/4] w-full bg-neutral-100">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col items-start gap-2 p-5 text-left">
                <h3 className="text-base font-bold text-black">{name}</h3>
                <p className="text-sm font-semibold text-red-600">{role}</p>
                {description ? (
                  <p className="text-sm leading-6 text-neutral-500">
                    {description}
                  </p>
                ) : null}

                <div className="mt-auto flex w-full flex-col gap-2 pt-4">
                  <div className="border-t border-neutral-200" />
                  <p className="text-xs italic leading-5 text-neutral-400">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
