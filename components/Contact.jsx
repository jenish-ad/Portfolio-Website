"use client";

import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/jenish-ad",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/jenish-adhikari-8bab6524a",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/jenisss.99",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("Message sent successfully.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("Message could not be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-12 text-white sm:px-8 lg:pb-10 lg:pt-6">
      <div className="pointer-events-none absolute right-0 top-20 h-[340px] w-[340px] rounded-full bg-[#ff4d00]/12 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1050px]">
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
            Contact
          </h1>

          <div id="contact" className="relative top-[100px]" />

          <div className="mx-auto mt-2 h-[2px] w-38 bg-[#ff4d00]" />

          <p className="mx-auto mt-3 max-w-[560px] text-[15px] font-medium leading-7 tracking-[-0.01em] text-white/55">
            Open to full-stack roles, thoughtful projects, and collaborations
            focused on clean design, reliable systems, and practical
            engineering.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1000px] gap-6 lg:grid-cols-[1.25fr_0.95fr]">
          <div>
            <div className="rounded-xl border border-white/15 bg-white/[0.025] p-5">
              <div className="mb-5">
                <h2 className="text-[22px] font-semibold tracking-[-0.04em] text-white">
                  Send a Message
                </h2>
              </div>

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/65">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-md border border-white/10 bg-black/30 px-4 text-[14px] font-medium text-white outline-none transition placeholder:text-white/20 focus:border-[#ff4d00]/80 focus:bg-black/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/65">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-md border border-white/10 bg-black/30 px-4 text-[14px] font-medium text-white outline-none transition placeholder:text-white/20 focus:border-[#ff4d00]/80 focus:bg-black/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/65">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-md border border-white/10 bg-black/30 px-4 text-[14px] font-medium text-white outline-none transition placeholder:text-white/20 focus:border-[#ff4d00]/80 focus:bg-black/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/65">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-md border border-white/10 bg-black/30 px-4 py-3 text-[14px] font-medium text-white outline-none transition placeholder:text-white/20 focus:border-[#ff4d00]/80 focus:bg-black/50"
                  />
                </div>
              </form>
            </div>

            <button
              type="submit"
              form="contact-form"
              disabled={loading}
              className="group mt-3 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#ff4d00] bg-[#ff4d00]/5 px-5 text-sm font-bold text-white shadow-[0_0_16px_rgba(255,77,0,0.16)] transition duration-300 hover:bg-[#ff4d00]/80 disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:w-fit"
            >
              <FaPaperPlane className="text-sm text-[#ff4d00] transition group-hover:text-white" />
              {loading ? "Sending..." : "Send"}
            </button>

            {status && (
              <p className="mt-3 text-[13px] font-medium text-white/60">
                {status}
              </p>
            )}
          </div>

          <div>
            <div className="rounded-xl border border-white/15 bg-white/[0.025] p-5">
              <div className="mb-4 flex items-center gap-3">
                <MdOutlineEmail className="text-2xl text-white" />
                <h2 className="text-[22px] font-semibold tracking-[-0.04em] text-white">
                  Get In Touch
                </h2>
              </div>

              <a
                href="mailto:adhicary.jen@gmail.com"
                className="text-[15px] font-semibold tracking-[-0.01em] text-white transition hover:text-[#ff4d00]"
              >
                adhicary.jen@gmail.com
              </a>

              <p className="mt-5 max-w-[370px] text-[14px] font-medium leading-7 tracking-[-0.01em] text-white/58">
                I build clean, practical web interfaces and data-driven systems.
                For roles, collaborations, or project discussions, reach out
                anytime.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-[21px] font-semibold tracking-[-0.04em] text-white">
                Connect Online
              </h3>

              <div className="space-y-2.5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-fit min-w-[150px] items-center gap-3 rounded-lg border border-white/15 bg-white/[0.02] px-4 text-white transition duration-300 hover:border-[#ff4d00] hover:bg-[#ff4d00]/5"
                  >
                    <span className="text-lg text-white">{social.icon}</span>
                    <span className="text-[14px] font-semibold tracking-[-0.01em]">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-4 max-w-[360px] text-[13px] font-medium leading-6 tracking-[-0.01em] text-white/42">
                View my work, follow updates, or connect directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
