import { siteConfig } from "@/content/site.config";

/**
 * CSS-built illustrations for the homepage service showcase. Decorative, no numbers.
 * Each sits in a soft gradient frame and leans in 3D on hover (via the parent's [data-tilt]).
 */
function Frame({
  children,
  tone,
  className = "aspect-[5/4]",
}: {
  children: React.ReactNode;
  tone: "violet" | "gold" | "sky" | "green";
  className?: string;
}) {
  const bg = {
    violet: "bg-[radial-gradient(120%_90%_at_0%_0%,#f7f0e2,transparent_60%),radial-gradient(100%_80%_at_100%_100%,#fde8dc,transparent_60%),#fbf8f2]",
    gold: "bg-[radial-gradient(120%_90%_at_100%_0%,#fff2cf,transparent_60%),radial-gradient(100%_80%_at_0%_100%,#e8f6fb,transparent_60%),#fffaf0]",
    sky: "bg-[radial-gradient(120%_90%_at_0%_100%,#e2f6fb,transparent_60%),radial-gradient(100%_80%_at_100%_0%,#f8f1e4,transparent_60%),#f6fbfd]",
    green: "bg-[radial-gradient(120%_90%_at_100%_100%,#e3f6ea,transparent_60%),radial-gradient(100%_80%_at_0%_0%,#fff4d6,transparent_60%),#f6fbf7]",
  }[tone];
  return (
    <div aria-hidden="true" className={`relative grid place-items-center overflow-hidden rounded-[1.5rem] ${className} ${bg}`}>
      <div className="grid-fade" />
      <div className="relative w-full [transform-style:preserve-3d]">{children}</div>
    </div>
  );
}

function Logo({ className }: { className: string }) {
  if (!siteConfig.logo) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={siteConfig.logo} alt="" width={121} height={108} loading="lazy" className={className} />;
}

export function MetaArt({ className }: { className?: string }) {
  return (
    <Frame tone="violet" className={className}>
      <div className="mx-auto w-[46%] rounded-[1.6rem] border-[5px] border-ink bg-white p-2 shadow-[0_30px_60px_-25px_rgb(13_27_46/0.45)] [transform:translateZ(40px)]">
        <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-ink/80" />
        <div className="flex items-center gap-1.5 px-1">
          <span className="size-5 rounded-full bg-gradient-to-br from-gold to-[#e9a46a]" />
          <span className="flex-1">
            <span className="bar h-1.5 w-2/3" />
            <span className="mt-0.5 block text-[0.5rem] text-mute">Sponsored</span>
          </span>
        </div>
        <div className="mt-2 grid aspect-square place-items-center rounded-xl bg-[radial-gradient(circle_at_30%_20%,#fff6dc,transparent_60%),linear-gradient(135deg,#f6efe0,#e6f6fb)]">
          <Logo className="w-1/2 drop-shadow-[0_10px_16px_rgb(133_96_15/0.35)]" />
        </div>
        <div className="mt-2 flex items-center gap-2 px-1 text-[#e8475f]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 20s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.5-8 11-8 11Z" />
          </svg>
          <span className="bar h-1.5 w-1/3" />
          <span className="ml-auto rounded-md bg-ink px-2 py-0.5 text-[0.5rem] font-semibold text-white">Shop now</span>
        </div>
      </div>
      <div className="glass float-b absolute top-[12%] right-[6%] w-[30%] p-2.5 [transform:translateZ(80px)]">
        <span className="text-[0.55rem] font-semibold text-mute uppercase">Audience</span>
        <div className="mt-1.5 flex -space-x-1.5">
          {["#c9a24a", "#e9a46a", "#3fb5d6", "#ff8fa8"].map((c) => (
            <span key={c} className="size-5 rounded-full border-2 border-white" style={{ background: c }} />
          ))}
        </div>
      </div>
      <div className="glass float-c absolute bottom-[10%] left-[5%] w-[32%] p-2.5 [transform:translateZ(70px)]">
        <span className="text-[0.55rem] font-semibold text-mute uppercase">Lead form</span>
        <span className="bar mt-1.5 h-1.5" />
        <span className="bar mt-1 h-1.5 w-3/4" />
        <span className="mt-1.5 block rounded-md bg-ink py-1 text-center text-[0.5rem] font-semibold text-white">Submit</span>
      </div>
    </Frame>
  );
}

export function GoogleArt({ className }: { className?: string }) {
  return (
    <Frame tone="gold" className={className}>
      <div className="mx-auto w-[78%] rounded-2xl bg-white p-4 shadow-[0_30px_60px_-25px_rgb(13_27_46/0.4)] [transform:translateZ(30px)]">
        <div className="flex items-center gap-2 rounded-full border border-line px-3 py-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5c5866" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <span className="text-[0.62rem] text-ink-soft">best partner for my category</span>
        </div>
        <div className="mt-3 rounded-xl border border-gold/40 bg-gold-tint/60 p-2.5">
          <p className="text-[0.55rem] font-semibold">
            Sponsored <span className="font-normal text-mute">· Ad</span>
          </p>
          <p className="mt-0.5 text-[0.72rem] font-semibold text-[#1a4fd6]">The answer to exactly that search</p>
          <span className="bar mt-1.5 h-1.5" />
        </div>
        {[0, 1].map((i) => (
          <div key={i} className="mt-2.5 px-2.5 opacity-60">
            <span className="bar h-1.5 w-1/3" />
            <span className="bar mt-1 h-2 w-2/3 bg-[#efe6cf]" />
            <span className="bar mt-1 h-1.5" />
          </div>
        ))}
      </div>
      <div className="float-a absolute right-[4%] bottom-[8%] grid w-[44%] grid-cols-3 gap-1.5 [transform:translateZ(90px)]">
        {["#f6efe0", "#fff2cf", "#e2f6fb"].map((c) => (
          <div key={c} className="glass rounded-xl p-1.5">
            <span className="block aspect-square rounded-lg" style={{ background: c }} />
            <span className="bar mt-1 h-1" />
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function CreativeArt({ className }: { className?: string }) {
  return (
    <Frame tone="sky" className={className}>
      <div className="relative mx-auto aspect-[4/5] w-[40%]">
        {[
          ["-rotate-[14deg] -translate-x-[62%]", "from-[#f6efe0] to-[#efe6cf]", "A", "translateZ(10px)"],
          ["rotate-[14deg] translate-x-[62%]", "from-[#e2f6fb] to-[#bfe9f5]", "C", "translateZ(10px)"],
          ["", "from-[#fff2cf] to-[#f0dc9c]", "B", "translateZ(60px)"],
        ].map(([pos, grad, label, z]) => (
          <div
            key={label}
            className={`absolute inset-0 rounded-2xl border-4 border-white bg-gradient-to-br shadow-[0_30px_50px_-25px_rgb(13_27_46/0.45)] ${pos} ${grad}`}
            style={{ transform: z }}
          >
            <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[0.55rem] font-bold">
              Variant {label}
            </span>
            <span className="absolute inset-0 m-auto grid size-10 place-items-center rounded-full bg-white/90 shadow-lg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0d1b2e">
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
            </span>
            <span className="absolute inset-x-2 bottom-2 h-1 overflow-hidden rounded-full bg-white/60">
              <span className="block h-1 w-2/3 rounded-full bg-ink/70" />
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function AutomationArt({ className }: { className?: string }) {
  return (
    <Frame tone="green" className={className}>
      <div className="mx-auto flex w-[92%] items-center gap-1.5 sm:gap-2">
        <div className="glass w-[50%] shrink-0 p-2.5 [transform:translateZ(40px)]">
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-full bg-[#1f8f4e] text-white">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" />
              </svg>
            </span>
            <span className="text-[0.62rem] font-semibold">WhatsApp</span>
          </div>
          <p className="mt-2 w-fit rounded-2xl rounded-tl-sm bg-canvas px-2.5 py-1 text-[0.58rem]">I saw your ad</p>
          <p className="mt-1 ml-auto w-fit rounded-2xl rounded-tr-sm bg-[#dcf5e5] px-2.5 py-1 text-[0.58rem]">What is your budget?</p>
          <p className="mt-1 w-fit rounded-2xl rounded-tl-sm bg-canvas px-2.5 py-1 text-[0.58rem]">This month</p>
          <p className="mt-1 ml-auto w-fit rounded-2xl rounded-tr-sm bg-[#dcf5e5] px-2.5 py-1 text-[0.58rem]">Booking a call now</p>
        </div>
        <svg width="22" height="20" viewBox="0 0 34 20" className="shrink-0 text-gold" fill="none">
          <path d="M1 10h30m-6-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" pathLength={1} className="draw-path" />
        </svg>
        <div className="glass float-b min-w-0 flex-1 p-2 [transform:translateZ(80px)]">
          <span className="text-[0.55rem] font-semibold text-mute uppercase">CRM</span>
          {[
            ["New", "bg-[#efe6cf]"],
            ["Qualified", "bg-[#e4cf8c]"],
            ["Booked", "bg-[#a8e6c1]"],
          ].map(([l, c], i) => (
            <div key={l} className="mt-1.5 flex items-center gap-1 rounded-lg border border-line bg-white px-1.5 py-1">
              <span className={`size-2 rounded-full ${c}`} />
              <span className="truncate text-[0.55rem] font-medium">{l}</span>
              {i === 2 ? <span className="pulse-dot ml-auto size-1.5 rounded-full bg-[#22a05a]" /> : null}
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}
