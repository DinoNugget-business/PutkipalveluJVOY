export const SITE = {
  name: "Putkipalvelu J&V Oy",
  shortName: "Putkipalvelu J&V",
  domain: "putkipalvelujv.com",
  foundedYear: 2022,
  yTunnus: "3239668-7",
} as const;

export const CONTACT = {
  phone: "045 359 9813",
  phoneHref: "tel:+358453599813",
  email: "Janne.kurki@gmail.com",
  address: "[VERIFY]",
  postalCode: "[VERIFY]",
  city: "Uusimaa",
  fullAddress: "[VERIFY: täydellinen osoite]",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.5!2d24.945!3d60.171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDEwJzE2LjAiTiAyNMKwNTYnNDIuMCJF!5e0!3m2!1sfi!2sfi!4v1",
  googleMapsLink:
    "https://www.google.com/maps/place/Uusimaa",
} as const;

export const TEAM = [
  {
    name: "Janne Kurki",
    role: "ceo",
    phone: "045 359 9813",
    phoneHref: "tel:+358453599813",
    email: "Janne.kurki@gmail.com",
    initials: "JK",
  },
] as const;

export const SERVICES = [
  "energiaremontti",
  "maalampo",
  "kaukolampo",
  "lviUrakointi",
  "linjasaneeraus",
  "lviHuolto",
  "jaahdytys",
  "aliurakointi",
] as const;

export const SERVICE_ICONS: Record<string, string> = {
  energiaremontti: "flame",
  maalampo: "heat-pump",
  kaukolampo: "thermometer",
  lviUrakointi: "wrench",
  linjasaneeraus: "building",
  lviHuolto: "clock",
  jaahdytys: "snowflake",
  aliurakointi: "hard-hat",
} as const;

export const HOW_IT_WORKS_STEPS = [
  { key: "contact", icon: "phone" },
  { key: "assessment", icon: "clipboard" },
  { key: "execution", icon: "wrench" },
  { key: "done", icon: "shield" },
] as const;

export const TRUST_STATS = [
  { key: "founded", value: "2022" },
  { key: "area", value: "Uusimaa" },
  { key: "member", value: "Rakennusvoima ry" },
  { key: "yTunnus", value: "3239668-7" },
] as const;
