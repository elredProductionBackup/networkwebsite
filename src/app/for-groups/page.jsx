import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import groupCard1 from "@/images/cards/group-card1.jpeg";
import groupCard2 from "@/images/cards/group-card2.jpeg";
import groupCard3 from "@/images/cards/group-card3.jpeg";

const ADMIN_FEATURES = [
  "Onboard thousands with a click — a single window to manage all members.",
  "A trusted network — onboarding uses registered phone numbers & email, keeping it private and trusted.",
  "All members can instantly network with each other, even without saving numbers.",
  "Get instant ratings from everyone that visits your profile.",
  "Promote your events.",
  // "Integrated — get an API with your current platform.",
  "Non-distracting & private — members join only if you invite them.",
];

const FEATURE_IMAGES = [groupCard1, groupCard2, groupCard3];
const SMALLEST_FEATURE_IMAGE = FEATURE_IMAGES.reduce((smallest, img) =>
  img.width * img.height < smallest.width * smallest.height ? img : smallest
);
const FEATURE_IMAGE_ASPECT_RATIO = `${SMALLEST_FEATURE_IMAGE.width} / ${SMALLEST_FEATURE_IMAGE.height}`;

const FEATURES = [
  {
    screenLabel: "Collaboration screen",
    image: groupCard1,
    title: "Attract & retain members",
    description:
      "Members can collaborate seamlessly within network.",
  },
  {
    screenLabel: "Network of networks",
    image: groupCard2,
    title: "Network of networks",
    description:
      "Interconnect all your chapters, groups, clubs & networks — free of cost.",
  },
  {
    screenLabel: "Monetise",
    image: groupCard3,
    title: "Monetise your network",
    description:
      "Get sponsors & partnerships, or let members subscribe to your network.",
  },
];

export default function Page() {
  return (
    <div className="w-full">
      <div className="relative min-h-screen w-full overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-12">
          <FadeIn className="flex flex-col items-start gap-4 text-left">
            <span className="text-xs font-bold tracking-wider text-red-600">
              FOR GROUPS &amp; NETWORKS
            </span>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              Attract, retain and monetise your network.
            </h1>

            <p className="max-w-lg text-sm leading-6 text-neutral-500 sm:text-base">
              We interconnect large networks — BNI, alumni and business ones —
              so members can collaborate seamlessly, without the noise of
              large WhatsApp or LinkedIn groups.
            </p>
          </FadeIn>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ screenLabel, image, title, description }, index) => (
              <FadeIn
                key={title}
                delay={index * 0.1}
                className="overflow-hidden rounded-2xl border border-dashed border-neutral-300"
              >
                {image ? (
                  <div
                    className="relative w-full bg-neutral-100"
                    style={{ aspectRatio: FEATURE_IMAGE_ASPECT_RATIO }}
                  >
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video flex-col items-center justify-center gap-2 bg-neutral-100">
                    <ImageIcon
                      className="h-5 w-5 text-neutral-300"
                      strokeWidth={1.5}
                    />
                    <span className="text-xs text-neutral-400">
                      {screenLabel}
                    </span>
                  </div>
                )}

                <div className="flex flex-col items-start gap-2 p-5 text-left">
                  <h3 className="text-base font-bold text-black">{title}</h3>
                  <p className="text-sm leading-6 text-neutral-500">
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <section className="w-full bg-neutral-100 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-10">
          <FadeIn className="flex flex-col items-start gap-2 text-left">
            <span className="text-xs font-bold tracking-wider text-red-600">
              EVERYTHING INCLUDED
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Built for network admins
            </h2>
          </FadeIn>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADMIN_FEATURES.map((feature, index) => (
              <FadeIn
                key={feature}
                delay={(index % 4) * 0.06}
                className="rounded-2xl bg-white p-5 text-left text-sm leading-6 text-black"
              >
                {feature}
              </FadeIn>
            ))}
          </div>

          <a
            href="#"
            className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Get started, it&apos;s free
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
