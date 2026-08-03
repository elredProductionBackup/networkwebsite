"use client";

import { Mail, MapPin } from "lucide-react";

const CONTACT_INFO = [
  {
    label: "Email us at",
    value: "info@rextonedigital.com",
    icon: Mail,
  },
  {
    label: "Reach us at",
    value: "16, Yashodham Center, Film City Road, Goregaon (E), Mumbai 400063",
    icon: MapPin,
  },
];

export default function Page() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col items-start gap-6 text-left">
          <span className="text-xs font-bold tracking-wider text-red-600">
            CONTACT
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            Got questions?
          </h1>

          <p className="max-w-sm text-sm leading-6 text-neutral-500 sm:text-base">
            Connect with theNetwork team, and we&apos;ll be happy to help!
          </p>

          <div className="flex w-full max-w-md flex-col gap-4">
            {CONTACT_INFO.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-neutral-200 p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <Icon className="h-5 w-5 text-red-600" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-neutral-500">{label}</span>
                  <span className="text-sm font-semibold text-black">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-5 rounded-2xl border border-neutral-100 bg-white p-8 shadow-lg"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-black">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm text-black outline-none focus:border-red-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm text-black outline-none focus:border-red-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-black">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm text-black outline-none focus:border-red-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="resize-none rounded-lg border border-neutral-300 px-3 py-2 text-sm text-black outline-none focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
