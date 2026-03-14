type IconName =
  | "wrench"
  | "flame"
  | "droplet"
  | "pipe"
  | "home"
  | "clock"
  | "phone"
  | "mail"
  | "map-pin"
  | "shield"
  | "users"
  | "award"
  | "calendar"
  | "truck"
  | "chevron-down"
  | "external-link"
  | "alert-circle";

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

const PATHS: Record<IconName, string> = {
  wrench:
    "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  flame:
    "M12 2c.5 2.5 2 4.5 2 6a4 4 0 11-8 0c0-1.5 1.5-3.5 2-6 1 2 2 3 4 3s3-1 4-3z M12 22c-4 0-7-2.5-7-7 0-2 1-4 3-6 1 2 2.5 3 4 3s3-1 4-3c2 2 3 4 3 6 0 4.5-3 7-7 7z",
  droplet:
    "M12 2.69l5.66 5.66a8 8 0 11-11.31 0z",
  pipe:
    "M4 6h4v12H4zM16 6h4v12h-4zM8 10h8v4H8z",
  home:
    "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
  clock: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v6l4 2",
  phone:
    "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm16 2l-8 5-8-5",
  "map-pin":
    "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 100 6 3 3 0 000-6z",
  shield:
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  users:
    "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zm14 14v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  award:
    "M12 15l-3.5 5.5 1-4.5-3.5-2 4.5-.5L12 9l1.5 4.5 4.5.5-3.5 2 1 4.5z M12 2a7 7 0 100 14 7 7 0 000-14z",
  calendar:
    "M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18",
  truck:
    "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  "chevron-down": "M6 9l6 6 6-6",
  "external-link":
    "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3",
  "alert-circle":
    "M12 2a10 10 0 100 20 10 10 0 000-20zM12 8v4m0 4h.01",
};

export default function Icon({ name, size = 24, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}

export type { IconName };
