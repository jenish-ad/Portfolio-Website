export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full text-white">
      {/* very tiny top fade only */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent" />

      <div className="relative z-10 flex w-full items-center justify-between px-10 py-5">
        <div className="text-2xl font-bold tracking-[-0.08em]">
          JENISH ADHIKARI
        </div>

        <div className="flex cursor-pointer items-center gap-18">
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
            <a className="transition-colors hover:text-[#ff4d00]">
              01 / About
            </a>
            <a className="transition-colors hover:text-[#ff4d00]">
              02 / Projects
            </a>
            <a className="transition-colors hover:text-[#ff4d00]">
              03 / Contact
            </a>
          </div>

          <button className="rounded-lg px-3 py-3 text-[12px] font-medium uppercase tracking-[0.32em] text-white">
            _RESUME
          </button>
        </div>
      </div>
    </nav>
  );
}