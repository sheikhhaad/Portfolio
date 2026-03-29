import React, { useEffect, useRef } from "react";

const AnimatedBtn = ({ title, link }) => {
  const btnRef = useRef(null);

  return (
    <a
      ref={btnRef}
      href={link}
      className="group relative inline-flex items-center gap-2.5 px-9 py-3.5 bg-transparent border border-[#00FF00] text-[#00FF00] font-mono text-[0.85rem] tracking-[0.12em] uppercase no-underline rounded cursor-pointer transition-colors duration-[0.35s] ease-out z-10 overflow-hidden hover:text-[#050505]"
    >
      <span className="absolute inset-0 bg-[#00FF00] scale-x-0 origin-left transition-transform duration-[0.35s] cubic-bezier(0.76,0,0.24,1) group-hover:scale-x-100 -z-10" />
      {title}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
};

const Available = () => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#00FF00]/25 rounded-full bg-[#00FF00]/5">
    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] shadow-[0_0_8px_#00FF00] animate-pulse" />
    <span className="font-mono text-[0.7rem] tracking-[0.1em] text-[#00FF00] uppercase">
      Available for work
    </span>
  </div>
);

const ContactSec = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  /* ── Grid-line noise canvas ────────────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      // subtle dot-grid
      const step = 32;
      ctx.fillStyle = "rgba(0,255,0,0.07)";
      for (let x = step; x < w; x += step) {
        for (let y = step; y < h; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* ── Parallax glow on mouse move ───────────────────────────────────────── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const glow = el.querySelector(".glow-orb");

    const onMove = e => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 60;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 60;
      if (glow) {
        glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      }
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* ── Google Font ──────────────────────────────────────────────────── */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@500;700;800&display=swap"
        rel="stylesheet"
      />

      <div
        className="relative  mx-auto font-['Syne',sans-serif]"
        ref={containerRef}
      >
        {/* Main container */}
        <div className="relative  border border-[#222222] rounded-2xl p-16 sm:p-12 text-center overflow-hidden">

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-[1.5px] border-l-[1.5px] border-[#00FF00]/55" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-r-[1.5px] border-b-[1.5px] border-[#00FF00]/55" />

          {/* Scan-line overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 bg-repeating-linear-gradient"
            style={{
              backgroundImage: `repeating-linear-gradient(
                   to bottom,
                   transparent 0px,
                   transparent 3px,
                   rgba(0,0,0,0.18) 3px,
                   rgba(0,0,0,0.18) 4px
                 )`
            }}
          />

          {/* Central glow orb */}
          <div className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none transition-transform duration-[0.12s] ease-out z-0"
            style={{
              background: `radial-gradient(circle, rgba(0,255,0,0.08) 0%, transparent 70%)`
            }}
          />

          {/* Canvas layer */}
          <canvas className="absolute inset-0 w-full h-full z-0" ref={canvasRef} />

          {/* Inner content */}
          <div className="relative z-20 animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_both]">
            {/* Availability badge */}
            <div className="flex justify-center mb-7">
              <Available />
            </div>

            {/* Eyebrow */}
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-[#00FF00]/45 mb-7">
              — Open to collaboration —
            </p>

            {/* Heading */}
            <h1 className="text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-[1.1] text-white m-0 tracking-[-0.02em]">
              Let's create your
              <br />
              next <span className="relative inline-block text-[#00FF00] shadow-[0_0_28px_rgba(0,255,0,0.35)]">
                big idea.
                <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-[#00FF00]/40 rounded" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-mono text-[0.78rem] text-white/30 tracking-[0.04em] mt-4 mb-0">
              Design · Development · Digital Experience
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 my-9 mx-auto max-w-[220px]">
              <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00FF00]/25 to-transparent" />
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40">
                <rect x="3" y="3" width="4" height="4" fill="#00FF00" />
              </svg>
              <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00FF00]/25 to-transparent" />
            </div>

            {/* CTA Button */}
            <AnimatedBtn title="Let's Talk" link="/contact" />
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ContactSec;