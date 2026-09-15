import { Play } from "lucide-react";
import { IoIosAppstore } from "react-icons/io";
import FadeIn from "@/components/FadeIn";

export default function GetStarted() {
  return (
    <section className="flex min-h-[500px] w-full flex-col items-center justify-center gap-5 bg-white px-6 py-20 text-center sm:gap-6">
      <FadeIn className="flex flex-col items-center gap-5 sm:gap-6">
        <span className="text-xs font-bold tracking-wider text-red-600">
          GET STARTED
        </span>

        <h2 className="max-w-xs text-3xl tracking-tight font-extrabold leading-tight text-black sm:max-w-2xl sm:text-4xl md:text-5xl">
          The introduction that changes your quarter is one tap away.
        </h2>

        <p className="max-w-xs text-sm tracking-tight text-neutral-500 sm:max-w-lg sm:text-base md:text-lg">
          Stop chasing strangers. Start getting handed to the right ones.
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
      </FadeIn>
    </section>
  );
}
