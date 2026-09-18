import { Diamond, Zap, AlignLeft, Calendar } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PhoneMockup from "@/components/PhoneMockup";
import { VIDEO_DATA } from "@/data/video";

const FEATURES = [
  {
    videoId: "video1",
    icon: Diamond,
    title: "Find your partner",
    description:
      "The landing page brings together each member’s role, professional skills, company profile, and partnership preferences, helping others understand their strengths, discover synergies, and collaborate more meaningfully.",
  },
  {
    videoId: "video2",
    icon: Zap,
    title: "Solve problems",
    description:
      " Members can put business problems before the right people, with a dedicated thread created for every problem, enabling focused responses without becoming another noisy group that gets archived.",
  },
  {
    videoId: "video3",
    icon: AlignLeft,
    title: "Find customers",
    description:
      "When any problem shared in the network matches your skills, product or service, you’re notified immediately, helping you identify the member behind it as a potential customer for your business.",
  },
  {
    videoId: "video4",
    icon: Calendar,
    title: "Collaboration at events",
    description:
      "Before every event, members know exactly who is likely to be most valuable to them, with AI identifying the most relevant people to meet, connect with and explore opportunities.",
  },
];

export default function HowItWorks() {
  return (
    <section className="flex min-h-[500px] w-full flex-col items-center justify-center gap-10 bg-white px-6 py-20 sm:px-10 lg:px-16">
      <FadeIn className="flex flex-col items-center gap-3 text-center">
        
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
         Built to unlock the full potential of your network
        </h2>

      </FadeIn>

      <FadeIn className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ videoId, icon: Icon, title, description }) => {
            const video = VIDEO_DATA.find((v) => v.id === videoId);

            return (
              <div
                key={title}
                className="overflow-hidden rounded-2xl border border-neutral-200"
              >
                <div className="flex h-80 items-center justify-center bg-neutral-100 py-6">
                  {video ? (
                    <PhoneMockup width="150px" thin>
                      <video
                        src={video.url}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </PhoneMockup>
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
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
