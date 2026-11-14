/** Small stroke icon set (24px grid). Decorative: always aria-hidden. */
const paths: Record<string, string> = {
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z",
  layers: "m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5",
  eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  zap: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm9 2-4-4",
  sparkles: "M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6",
  video: "M3 6h12v12H3zM15 10l6-3v10l-6-3",
  cart: "M3 4h2l2.4 11h11L21 8H6.2M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  bot: "M12 3v3M5 9h14v10H5zM9 14h.01M15 14h.01M2 13v3m20-3v3",
  users: "M16 20v-2a4 4 0 0 0-8 0v2m4-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 8v-2a4 4 0 0 0-2-3.5M20 10a3 3 0 0 0-2-5.6M6 20v-2a4 4 0 0 1 2-3.5M4 10a3 3 0 0 1 2-5.6",
  layout: "M3 4h18v16H3zM3 9h18M9 9v11",
  flag: "M5 21V4m0 0h11l-2 4 2 4H5",
  bag: "M5 8h14l-1 12H6L5 8Zm4 0V6a3 3 0 0 1 6 0v2",
  cap: "m2 9 10-5 10 5-10 5L2 9Zm4 2v5c3 2.5 9 2.5 12 0v-5",
  heart: "M12 20s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.5-8 11-8 11Z",
  building: "M4 21V5l8-2v18m0-12h8v12M8 9h.01M8 13h.01M8 17h.01M16 13h.01M16 17h.01M2 21h20",
  briefcase: "M3 8h18v12H3zM8 8V5h8v3M3 13h18",
  cloud: "M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 18 18H7Z",
  bed: "M3 19V6m0 8h18v5M3 14V11h7v3m4-3h5a2 2 0 0 1 2 2v1",
  check: "m5 12 5 5 9-10",
  minus: "M6 12h12",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c2.5 2.7 3.5 5.7 3.5 9s-1 6.3-3.5 9c-2.5-2.7-3.5-5.7-3.5-9s1-6.3 3.5-9Z",
  arrow: "M5 12h14m-6-6 6 6-6 6",
};

export type IconName = keyof typeof paths;

export function Icon({ name, size = 22, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
