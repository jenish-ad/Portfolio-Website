"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { TbCertificate } from "react-icons/tb";
import Modal from "./Modal";

export default function CertificateButton({ src, title }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${title}`}
        title="View certificate"
        className="relative flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#1a1714]"
      >
        <TbCertificate aria-hidden="true" className="text-[22px]" />
      </button>

      <Modal
        open={open}
        onClose={close}
        aria-label={title}
        className="relative w-full max-w-225 rounded-2xl bg-[#f3ede4] p-2 shadow-2xl sm:p-3"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close certificate"
          className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center self-start rounded-full bg-[#f3ede4] text-2xl leading-none text-[#1a1714]/70 shadow-lg transition-colors hover:text-[#ff4d00]"
        >
          ×
        </button>

        <Image
          src={src}
          alt={title}
          width={1220}
          height={861}
          sizes="(max-width: 940px) 100vw, 900px"
          className="h-auto w-full rounded-xl"
        />
      </Modal>
    </>
  );
}
