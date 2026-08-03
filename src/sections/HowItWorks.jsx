import { Diamond, Zap, AlignLeft, Calendar } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { VIDEO_DATA } from "@/data/video";

const FEATURES = [
  {
    videoId: "video1",
    icon: Diamond,
    title: "Foster collaboration",
    description:
      "Your profile becomes your opportunity. Intelligent matching identifies the right members to collaborate with — whether you're seeking customers, suppliers, investors, strategic partners, or expertise.",
  },
  {
    videoId: "video2",
    icon: Zap,
    title: "Solve problems",
    description:
      "The collective intelligence of a trusted network is its greatest asset. Share your challenge, and receive targeted support from members whose experience, expertise, or connections can help move you forward.",
  },
  {
    videoId: "video3",
    icon: AlignLeft,
    title: "Find customers",
    description:
      "Every request creates opportunity. If a member is looking for exactly what you provide, you'll be notified instantly — helping you discover qualified customers without actively searching.",
  },
  {
    videoId: "video4",
    icon: Calendar,
    title: "Collaboration at events",
    description:
      "Know who's in the room before you arrive. Discover attendees, understand the value they bring, and identify the conversations, collaborations, and opportunities worth making time for.",
  },
];

export default function HowItWorks() {
  return (
    <section className="flex min-h-[500px] w-full flex-col items-center justify-center gap-10 bg-white px-6 py-20 sm:px-10 lg:px-16">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        <span className="text-xs font-bold tracking-wider text-red-600">
          HOW IT WORKS
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Noise free collaboration
        </h2>
        <p className="text-sm text-neutral-500 sm:text-base">
          Matchmaking you with those from your network.
        </p>
      </FadeIn>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
        {FEATURES.map(({ videoId, icon: Icon, title, description }, index) => {
          const video = VIDEO_DATA.find((v) => v.id === videoId);

          return (
            <FadeIn
              key={title}
              delay={index * 0.1}
              className="overflow-hidden rounded-2xl border border-neutral-200"
            >
              <div className="flex h-72 items-center justify-center bg-neutral-100">
                {video ? (
                  <video
                    src={video.url}
                    className="h-full aspect-[1/2] rounded-lg object-cover shadow-md"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : null}
              </div>

              <div className="flex flex-col items-start gap-3 p-6 text-left">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50">
                  <Icon className="h-4 w-4 text-red-600" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-black">{title}</h3>
                <p className="text-sm leading-6 text-neutral-500">
                  {description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
