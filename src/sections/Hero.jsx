import Image from "next/image";
import { Play } from "lucide-react";
import { IoIosAppstore } from "react-icons/io";
import FadeIn from "@/components/FadeIn";
import PhoneMockup from "@/components/PhoneMockup";
import heroScreen from "@/images/screens/attach-hero.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        <FadeIn className="flex max-w-2xl flex-col items-start gap-6 text-left">
          <span className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-bold tracking-wider text-red-600 shadow-md shadow-red-200/50">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            WHERE COLLABORATION STARTS
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-balance text-black sm:text-5xl md:text-6xl">
            Designed for large{" "}
            <span className="text-red-600">groups</span> and communities.
          </h1>

          <p className="max-w-lg text-base leading-7 text-neutral-500 sm:text-lg">
            Designed around two core actions: find the right partners within the larger community, and find the right solutions by sharing problems with the wider network.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://apps.apple.com/in/app/el-red/id6468586886"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white transition-colors hover:bg-neutral-800"
            >
              <IoIosAppstore className="h-7 w-7" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[11px] text-neutral-300">
                  Download on the
                </span>
                <span className="text-base font-semibold">App Store</span>
              </span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.elredmod.one&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-neutral-300 px-5 py-3 text-black transition-colors hover:bg-neutral-50"
            >
              <Play className="h-6 w-6 text-black" fill="currentColor" strokeWidth={0} />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[11px] text-neutral-500">Get it on</span>
                <span className="text-base font-semibold">Google Play</span>
              </span>
            </a>
          </div>

          <p className="text-xs font-medium text-neutral-500">
            No cold DMs, ever.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="flex justify-center lg:justify-center">
          <PhoneMockup>
            <Image
              src={heroScreen}
              alt="theNetwork app"
              fill
              sizes="288px"
              className="object-cover"
              priority
            />
          </PhoneMockup>
        </FadeIn>
      </div>
    </section>
  );
}
