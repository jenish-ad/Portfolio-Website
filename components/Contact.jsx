"use client";

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
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-8 pt-6 pb-10 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-[340px] w-[340px] rounded-full bg-[#ff4d00]/12 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1050px]">
        {/* Heading */}
        <div className="mb-7 text-center">
          <h1 className="text-4xl font-black uppercase tracking-[-0.04em] text-white">
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
          {/* Left form */}
          <div>
            <div className="rounded-xl border border-white/15 bg-white/[0.025] p-5">
              <div className="mb-5">
                <h2 className="text-[22px] font-semibold tracking-[-0.04em] text-white">
                  Send a Message
                </h2>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/65">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="h-11 w-full rounded-md border border-white/10 bg-black/30 px-4 text-[14px] font-medium text-white outline-none transition placeholder:text-white/20 focus:border-[#ff4d00]/80 focus:bg-black/50"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/65">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
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
                    placeholder="What would you like to discuss?"
                    className="h-11 w-full rounded-md border border-white/10 bg-black/30 px-4 text-[14px] font-medium text-white outline-none transition placeholder:text-white/20 focus:border-[#ff4d00]/80 focus:bg-black/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/65">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell me a little about your project, role, or idea..."
                    className="w-full resize-none rounded-md border border-white/10 bg-black/30 px-4 py-3 text-[14px] font-medium text-white outline-none transition placeholder:text-white/20 focus:border-[#ff4d00]/80 focus:bg-black/50"
                  />
                </div>
              </form>
            </div>

            {/* Send button outside form box */}
            <button className="group mt-3 flex h-10 w-fit items-center justify-center gap-2 rounded-full border border-[#ff4d00] bg-[#ff4d00]/5 px-5 text-sm font-bold text-white shadow-[0_0_16px_rgba(255,77,0,0.16)] transition duration-300 hover:bg-[#ff4d00]/80">
              <FaPaperPlane className="text-sm text-[#ff4d00] transition group-hover:text-white" />
              Send
            </button>
          </div>

          {/* Right side */}
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