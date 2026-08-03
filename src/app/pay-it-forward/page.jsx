import FadeIn from "@/components/FadeIn";
import BookCard from "@/components/BookCard";
import { PAY_IT_FORWARD_DATA } from "@/data/payitforward";

export default function Page() {
  return (
    <div className="relative w-full overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-3xl flex-col gap-12">
        <FadeIn className="flex flex-col items-start gap-6 text-left">
          <span className="text-xs font-bold tracking-wider text-red-600">
            PAY IT FORWARD
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            Notes worth re-reading.
          </h1>

          <div className="w-full rounded-2xl border-l-4 border-red-600 bg-neutral-100 px-6 py-6">
            <p className="text-sm leading-7 text-neutral-600 sm:text-base">
              Hello Friends,
              <br />
              <br />
              theNetwork has been inspired by many great books. I use a
              Kindle to highlight the parts I would love to reread. Sharing
              those here, hoping it would come of use to someone. Pay it
              forward.
              <br />
              <br />
              Regards, Saurabh
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {PAY_IT_FORWARD_DATA.map((book, index) => (
            <BookCard key={book.title} book={book} delay={(index % 4) * 0.06} />
          ))}
        </div>
      </div>
    </div>
  );
}
