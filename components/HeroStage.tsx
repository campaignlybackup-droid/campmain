import { siteConfig } from "@/content/site.config";

/**
 * Decorative 3D "growth workspace": a dashboard window with floating cards for the channels
 * Campaignly runs. Pure HTML/CSS, no images or numbers, so it claims nothing and costs almost nothing.
 * Pointer and scroll tilt come from the Motion script via [data-stage].
 */
export function HeroStage() {
  return (
    <div aria-hidden="true" data-stage="" className="stage relative mx-auto w-full max-w-5xl select-none max-sm:overflow-x-clip max-sm:px-1 max-sm:pb-10">
      <div className="stage-enter">
        <div className="stage-inner aspect-[4/3] sm:aspect-[16/10]">
          {/* Base window */}
          <div className="glass absolute inset-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
            <div className="flex items-center gap-2 border-b border-line/80 px-4 py-3 md:px-6">
              <span className="size-2.5 rounded-full bg-[#ff6b6b]/80" />
              <span className="size-2.5 rounded-full bg-[#ffc94d]/90" />
              <span className="size-2.5 rounded-full bg-[#3ccf7a]/80" />
              <div className="ml-4 hidden gap-2 text-[0.7rem] font-semibold text-mute sm:flex">
                <span className="rounded-full bg-ink px-3 py-1 text-white">Overview</span>
                <span className="rounded-full px-3 py-1">Channels</span>
                <span className="rounded-full px-3 py-1">Pipeline</span>
                <span className="rounded-full px-3 py-1">Creative</span>
              </div>
              <span className="ml-auto flex items-center gap-2 text-[0.7rem] font-semibold text-mute">
                <span className="pulse-dot size-2 rounded-full bg-[#22a05a]" />
                Live
              </span>
            </div>
            <div className="grid h-[calc(100%-2.75rem)] grid-cols-12 gap-3 p-3 md:gap-5 md:p-6">
              {/* Sidebar */}
              <div className="col-span-1 hidden flex-col items-center gap-3 pt-1 md:flex">
                {siteConfig.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={siteConfig.logo} alt="" width={121} height={108} className="mb-2 h-6 w-auto" />
                ) : null}
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className={`size-8 rounded-xl ${i === 0 ? "bg-gold-tint ring-1 ring-gold/40" : "bg-canvas"}`} />
                ))}
              </div>
              {/* Chart */}
              <div className="col-span-12 flex flex-col rounded-2xl border border-line/70 bg-white p-3 sm:col-span-8 md:col-span-7 md:p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[0.7rem] font-semibold tracking-wide text-mute uppercase">Revenue from paid media</span>
                  <span className="rounded-full bg-[#e7f6ee] px-2 py-0.5 text-[0.65rem] font-semibold text-[#1d7a45]">Trending up</span>
                </div>
                <svg viewBox="0 0 400 170" preserveAspectRatio="none" className="mt-3 h-full w-full flex-1">
                  <defs>
                    <linearGradient id="hs-area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#c9a24a" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#c9a24a" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="hs-line" x1="0" x2="1">
                      <stop offset="0%" stopColor="#0d1b2e" />
                      <stop offset="100%" stopColor="#c9a24a" />
                    </linearGradient>
                  </defs>
                  {[40, 80, 120].map((y) => (
                    <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#eee9e0" strokeWidth="1" />
                  ))}
                  <path
                    d="M0 150 C40 145 60 130 95 128 S150 112 180 100 S235 96 260 78 S320 52 350 40 S385 22 400 16 L400 170 L0 170 Z"
                    fill="url(#hs-area)"
                  />
                  <path
                    d="M0 150 C40 145 60 130 95 128 S150 112 180 100 S235 96 260 78 S320 52 350 40 S385 22 400 16"
                    fill="none"
                    stroke="url(#hs-line)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    pathLength={1}
                    className="draw-path"
                  />
                  <path
                    d="M0 160 C50 158 90 150 130 146 S200 140 240 132 S320 118 400 104"
                    fill="none"
                    stroke="#d2cbbe"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                  />
                  <circle cx="400" cy="16" r="5" fill="#c9a24a" />
                </svg>
              </div>
              {/* Channel mix */}
              <div className="col-span-4 hidden flex-col gap-3 rounded-2xl border border-line/70 bg-white p-4 sm:flex md:p-5">
                <span className="text-[0.7rem] font-semibold tracking-wide text-mute uppercase">Channel mix</span>
                {[
                  ["Meta ads", "w-[82%]", "from-[#0d1b2e] to-[#e9a46a]"],
                  ["Google Ads", "w-[68%]", "from-[#c9a24a] to-[#e4cf8c]"],
                  ["SEO and AI", "w-[46%]", "from-[#3fb5d6] to-[#8fe0f2]"],
                  ["WhatsApp", "w-[58%]", "from-[#22a05a] to-[#6fd39a]"],
                ].map(([label, w, grad]) => (
                  <div key={label}>
                    <span className="text-[0.72rem] font-medium text-ink-soft">{label}</span>
                    <span className="mt-1 block h-2 rounded-full bg-canvas">
                      <span className={`block h-2 rounded-full bg-gradient-to-r ${w} ${grad}`} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating: ad creative */}
          <div className="layer float-a -top-6 -left-3 w-[34%] sm:-left-8 sm:w-[24%]" style={{ transform: "translateZ(90px)" }}>
            <div className="glass overflow-hidden p-2.5 md:p-3">
              <div className="flex items-center gap-2">
                <span className="size-5 rounded-full bg-gradient-to-br from-gold to-[#e9a46a] md:size-6" />
                <span className="flex-1">
                  <span className="bar w-3/4" />
                  <span className="mt-1 block text-[0.55rem] font-medium text-mute md:text-[0.6rem]">Sponsored</span>
                </span>
              </div>
              <div className="relative mt-2 grid aspect-square place-items-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_30%_20%,#fff6dc,transparent_60%),linear-gradient(135deg,#f6efe0,#e6f6fb)]">
                {siteConfig.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={siteConfig.logo} alt="" width={121} height={108} className="w-1/2 drop-shadow-[0_12px_18px_rgb(133_96_15/0.35)]" />
                ) : null}
              </div>
              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="bar w-1/2" />
                <span className="rounded-md bg-ink px-2 py-1 text-[0.55rem] font-semibold text-white md:text-[0.6rem]">Learn more</span>
              </div>
            </div>
          </div>

          {/* Floating: search ad */}
          <div className="layer float-b top-[14%] -right-3 w-[46%] sm:-right-10 sm:w-[32%]" style={{ transform: "translateZ(120px)" }}>
            <div className="glass p-3 md:p-4">
              <div className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5c5866" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <span className="bar h-1.5 w-2/3" />
              </div>
              <p className="mt-3 text-[0.6rem] font-semibold text-ink md:text-[0.68rem]">
                Sponsored <span className="font-normal text-mute">· Ad</span>
              </p>
              <p className="mt-1 text-[0.72rem] leading-snug font-semibold text-[#1a4fd6] md:text-[0.82rem]">
                The offer your buyers search for
              </p>
              <span className="bar mt-2 h-1.5 w-full" />
              <span className="bar mt-1.5 h-1.5 w-4/5" />
            </div>
          </div>

          {/* Floating: WhatsApp lead */}
          <div className="layer float-c -right-2 -bottom-8 w-[52%] sm:right-6 sm:w-[30%]" style={{ transform: "translateZ(140px)" }}>
            <div className="glass p-3 md:p-4">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-full bg-[#1f8f4e] text-white md:size-7">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" />
                  </svg>
                </span>
                <span className="text-[0.65rem] font-semibold md:text-[0.72rem]">New enquiry</span>
                <span className="ml-auto flex items-center gap-1 rounded-full bg-[#e7f6ee] px-2 py-0.5 text-[0.55rem] font-semibold text-[#1d7a45] md:text-[0.6rem]">
                  <span className="pulse-dot size-1.5 rounded-full bg-[#22a05a]" />
                  Qualified
                </span>
              </div>
              <p className="mt-2.5 w-fit rounded-2xl rounded-tl-sm bg-canvas px-3 py-1.5 text-[0.62rem] md:text-[0.7rem]">
                Hi, can I get a quote?
              </p>
              <p className="mt-1.5 ml-auto w-fit rounded-2xl rounded-tr-sm bg-[#dcf5e5] px-3 py-1.5 text-[0.62rem] md:text-[0.7rem]">
                Of course. Two quick questions first…
              </p>
            </div>
          </div>

          {/* Floating: funnel */}
          <div className="layer float-a bottom-[8%] -left-6 hidden w-[26%] sm:block" style={{ transform: "translateZ(70px)" }}>
            <div className="glass p-4">
              <span className="text-[0.62rem] font-semibold tracking-wide text-mute uppercase">Funnel</span>
              {[
                ["Visitors", "w-full", "bg-[#efe6cf]"],
                ["Leads", "w-[72%]", "bg-[#e4cf8c]"],
                ["Qualified", "w-[50%]", "bg-[#e4cf8c]"],
                ["Customers", "w-[32%]", "bg-gold"],
              ].map(([label, w, bg]) => (
                <div key={label} className="mt-2">
                  <span className={`flex h-5 items-center rounded-md px-2 text-[0.58rem] font-semibold text-ink ${w} ${bg}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
