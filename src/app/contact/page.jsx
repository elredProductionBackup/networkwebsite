"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin } from "lucide-react";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

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

const NAME_REGEX = /^[A-Za-z\s]{2,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d+$/;

function validate(form) {
  const errors = {};

  if (!NAME_REGEX.test(form.name.trim())) {
    errors.name = "Name must contain at least 2 letters.";
  }

  if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!PHONE_REGEX.test(form.phone.trim())) {
    errors.phone = "Phone number must contain numbers only.";
  }

  return errors;
}

export default function Page() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(false), 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      await fetch(process.env.NEXT_PUBLIC_CONTACT_US_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setForm(INITIAL_FORM);
      setToast(true);
    } catch {}
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
              value={form.name}
              onChange={handleChange}
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm text-black outline-none focus:border-red-500"
            />
            {errors.name && (
              <span className="text-xs text-red-600">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm text-black outline-none focus:border-red-500"
            />
            {errors.email && (
              <span className="text-xs text-red-600">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-black">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm text-black outline-none focus:border-red-500"
            />
            {errors.phone && (
              <span className="text-xs text-red-600">{errors.phone}</span>
            )}
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
              value={form.message}
              onChange={handleChange}
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

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-neutral-100 bg-white p-4 shadow-lg"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50">
              <CheckCircle2 className="h-5 w-5 text-red-600" strokeWidth={2} />
            </div>
            <span className="text-sm font-semibold text-black">
              Your message has been submitted successfully!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
