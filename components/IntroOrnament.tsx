import { siteConfig } from "@/content/site.config";

/** Decorative 3D brand object for inner-page intros (large screens only). */
export function IntroOrnament() {
  if (!siteConfig.logo) return null;
  return (
    <div
      aria-hidden="true"
      data-stage=""
      className="stage pointer-events-none absolute top-24 right-[max(1rem,calc((100vw-80rem)/2+4rem))] hidden w-80 xl:block"
    >
      <div className="stage-enter">
        <div className="[transform:rotateX(calc(10deg+var(--px)))_rotateY(calc(-22deg+var(--py)))] [transform-style:preserve-3d] transition-transform duration-700">
          <div className="float-a relative mx-auto grid size-56 place-items-center rounded-[3rem] bg-ink shadow-[0_50px_80px_-30px_rgb(20_18_28/0.6),inset_0_1px_0_rgb(255_255_255/0.15)]">
            <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,rgb(255_255_255/0.14),transparent_55%)]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={siteConfig.logo} alt="" width={121} height={108} className="w-28 [transform:translateZ(40px)]" />
          </div>
          <div className="glass float-b absolute -top-6 -left-10 flex items-center gap-2 px-4 py-3 text-xs font-semibold [transform:translateZ(80px)]">
            <span className="pulse-dot size-2 rounded-full bg-[#22a05a]" />
            Planned, run and measured
          </div>
          <div className="glass float-c absolute -right-6 -bottom-8 w-44 p-3 [transform:translateZ(60px)]">
            <svg viewBox="0 0 120 40" className="h-10 w-full" fill="none">
              <path
                d="M2 36 C20 34 30 26 45 24 S70 14 85 12 S110 4 118 3"
                stroke="url(#io-g)"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength={1}
                className="draw-path"
              />
              <defs>
                <linearGradient id="io-g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#5b47d6" />
                  <stop offset="100%" stopColor="#c9a84c" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
