/** Minimal inline icon set (stroke icons, 24px grid). */
const paths: Record<string, string> = {
  play: "M7 5v14l11-7z",
  volume: "M11 5 6 9H3v6h3l5 4V5zm4.5 3.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12",
  check: "M5 12.5l4.5 4.5L19 7.5",
  x: "M6 6l12 12M18 6 6 18",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  back: "M19 12H5m6-6-6 6 6 6",
  lock: "M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3",
  flame: "M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-3.5 2-5 .8 1.2 1.5 1.8 2.5 2C11 7.5 11.5 5 12 3z",
  star: "m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8L3.5 9.7l5.9-.9z",
  book: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5",
  brush: "M14 4l6 6-8.5 8.5a3 3 0 0 1-4.2 0l-1.8-1.8a3 3 0 0 1 0-4.2zM4 20c1.5 0 3-.5 3-2",
  cards: "M8 3h11a2 2 0 0 1 2 2v11M4 7h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z",
  ear: "M7 10a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0M10 10a2 2 0 0 1 4 0",
  wave: "M2 12c2-5 4-5 6 0s4 5 6 0 4-5 6 0 2 3 2 3",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z",
  sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2m0 18v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M1 12h2m18 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
  menu: "M4 7h16M4 12h16M4 17h16",
  search: "m21 21-4.3-4.3M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H2",
  sparkle: "M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M18 6l-2.5 2.5m-7 7L6 18",
  eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  refresh: "M20 11a8 8 0 0 0-14.9-3M4 4v4h4m-4 5a8 8 0 0 0 14.9 3M20 20v-4h-4",
  download: "M12 3v12m-5-5 5 5 5-5M4 21h16",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm3.5-12.5-2 5-5 2 2-5z",
  trophy: "M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a4 4 0 0 0 4 4m8-5h4v1a4 4 0 0 1-4 4m-4 2v4m-4 3h8",
  layers: "m12 3 9 5-9 5-9-5zm-9 9 9 5 9-5m-18 4 9 5 9-5",
  info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-5v-5m0-3h.01",
  shuffle: "M16 4h4v4M4 20 20 4M20 16v4h-4M15 15l5 5M4 4l5 5",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13v5l3 2",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8 9a8 8 0 0 1 16 0",
  grid: "M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z",
};

export type IconName = keyof typeof paths;

export default function Icon({
  name,
  size = 20,
  className = "",
  fill = false,
}: {
  name: IconName;
  size?: number;
  className?: string;
  fill?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
