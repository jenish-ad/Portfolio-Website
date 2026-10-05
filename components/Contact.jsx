"use client";

import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { site } from "@/lib/site";

const socialIcons = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedinIn />,
  Instagram: <FaInstagram />,
};

const fieldClass =
  "w-full rounded-md border border-[#1a1714]/10 bg-white/70 px-4 text-[14px] font-medium text-[#1a1714] outline-none transition placeholder:text-[#1a1714]/35 focus:border-[#ff4d00]/80 focus:bg-white";

const fields = [
  { name: "name", label: "Name", type: "text", half: true },
  { name: "email", label: "Email", type: "email", half: true },
  { name: "subject", label: "Subject", type: "text" },
  { name: "message", label: "Message" },
];

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);

    if (res?.ok) {
      setStatus("Message sent successfully.");
      form.reset();
    } else {
      setStatus("Message could not be sent. Please try again.");
    }
    setSending(false);
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-13 overflow-hidden px-5 pb-28 pt-12 text-[#1a1714] sm:px-8 lg:scroll-mt-19 lg:pb-16 lg:pt-6"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-85 w-85 rounded-full bg-[#ff4d00]/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-262.5">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-black uppercase tracking-[-0.04em] text-[#1a1714] sm:text-4xl">
            Contact
          </h2>

          <div className="mx-auto mt-2 h-0.75 w-38 bg-[#ff4d00]" />

          <p className="mx-auto mt-3 max-w-140 text-[14px] font-medium leading-6 tracking-[-0.01em] text-[#1a1714]/70">
            Open to full-stack roles, thoughtful projects, and collaborations
            focused on clean design, reliable systems, and practical
            engineering.
          </p>
        </div>

        <div className="mx-auto grid max-w-225 gap-5 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="rounded-xl border border-[#1a1714]/15 bg-white/50 p-5">
              <h3 className="mb-4 text-[20px] font-semibold tracking-[-0.04em] text-[#1a1714]">
                Send a Message
              </h3>

              <form id="contact-form" onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
                {fields.map(({ name, label, type, half }) => (
                  <div key={name} className={half ? "" : "sm:col-span-2"}>
                    <label
                      htmlFor={`contact-${name}`}
                      className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.04em] text-[#1a1714]/75"
                    >
                      {label}
                    </label>
                    {type ? (
                      <input id={`contact-${name}`} name={name} type={type} required className={`h-10 ${fieldClass}`} />
                    ) : (
                      <textarea id={`contact-${name}`} name={name} rows="3" required className={`resize-none py-2.5 ${fieldClass}`} />
                    )}
                  </div>
                ))}
              </form>
            </div>

            <button
              type="submit"
              form="contact-form"
              disabled={sending}
              className="group mt-3 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#ff4d00] bg-[#ff4d00]/5 px-5 text-sm font-bold text-[#1a1714] transition duration-300 hover:bg-[#ff4d00] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:w-fit"
            >
              <FaPaperPlane className="text-sm text-[#ff4d00] transition group-hover:text-white" />
              {sending ? "Sending..." : "Send"}
            </button>

            {status && (
              <p className="mt-3 text-[13px] font-medium text-[#1a1714]/70">
                {status}
              </p>
            )}
          </div>

          <div className="h-fit rounded-xl border border-[#1a1714]/15 bg-white/50 p-5">
            <div className="mb-3 flex items-center gap-3">
              <MdOutlineEmail className="text-2xl text-[#1a1714]" />
              <h3 className="text-[20px] font-semibold tracking-[-0.04em] text-[#1a1714]">
                Get In Touch
              </h3>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="text-[15px] font-semibold tracking-[-0.01em] text-[#1a1714] transition hover:text-[#ff4d00]"
            >
              {site.email}
            </a>

            <p className="mt-3 text-[14px] font-medium leading-6 tracking-[-0.01em] text-[#1a1714]/70">
              For roles, collaborations, or project discussions, reach out
              anytime.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-[#1a1714]/10 pt-5">
              {site.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 items-center gap-1.5 rounded-lg border border-[#1a1714]/15 bg-white/40 px-2.5 text-[#1a1714] transition duration-300 hover:border-[#ff4d00] hover:bg-[#ff4d00]/5"
                >
                  <span className="text-base">{socialIcons[social.name]}</span>
                  <span className="text-[13px] font-semibold tracking-[-0.01em]">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
