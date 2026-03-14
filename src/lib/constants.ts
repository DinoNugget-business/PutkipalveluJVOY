export const SITE = {
  name: "Putkipalvelu JV Oy",
  shortName: "Putkipalvelu JV",
  domain: "putkipalvelujv.fi",
} as const;

export const CONTACT = {
  phone: "000 000 0000",
  phoneHref: "tel:+3580000000000",
  email: "info@putkipalvelujv.fi",
  address: "Osoite 1",
  postalCode: "00000",
  city: "KAUPUNKI",
  fullAddress: "Osoite 1, 00000 KAUPUNKI",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.5!2d24.945!3d60.171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDEwJzE2LjAiTiAyNMKwNTYnNDIuMCJF!5e0!3m2!1sfi!2sfi!4v1",
  googleMapsLink:
    "https://www.google.com/maps/place/Helsinki",
} as const;

export const SERVICES = [
  "putkityot",
  "lammitys",
  "vesijohtotyot",
  "viemariotyot",
  "kylpyhuoneremontti",
  "huolto",
] as const;

export const SERVICE_ICONS: Record<string, string> = {
  putkityot: "wrench",
  lammitys: "flame",
  vesijohtotyot: "droplet",
  viemariotyot: "pipe",
  kylpyhuoneremontti: "home",
  huolto: "clock",
} as const;
