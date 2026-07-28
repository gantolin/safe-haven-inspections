// One entry per built /mold-inspection-{slug} route. `slug` MUST match the
// mold-inspection-{slug} route filename. Kept minimal so this file is the
// single source of truth for the /service-areas directory and the sitemap.
export type County = "Martin" | "Palm Beach" | "Broward";

export interface City {
  slug: string; // matches /mold-inspection-{slug}
  name: string;
  county: County;
}

export const cities: City[] = [
  // Martin County
  { slug: "stuart", name: "Stuart", county: "Martin" },
  { slug: "palm-city", name: "Palm City", county: "Martin" },
  { slug: "jensen-beach", name: "Jensen Beach", county: "Martin" },
  { slug: "hobe-sound", name: "Hobe Sound", county: "Martin" },
  { slug: "port-salerno", name: "Port Salerno", county: "Martin" },

  // Palm Beach County
  { slug: "west-palm-beach", name: "West Palm Beach", county: "Palm Beach" },
  { slug: "wellington", name: "Wellington", county: "Palm Beach" },
  { slug: "royal-palm-beach", name: "Royal Palm Beach", county: "Palm Beach" },
  { slug: "loxahatchee", name: "Loxahatchee", county: "Palm Beach" },
  { slug: "lake-worth-beach", name: "Lake Worth Beach", county: "Palm Beach" },
  { slug: "greenacres", name: "Greenacres", county: "Palm Beach" },
  { slug: "boynton-beach", name: "Boynton Beach", county: "Palm Beach" },
  { slug: "delray-beach", name: "Delray Beach", county: "Palm Beach" },
  { slug: "boca-raton", name: "Boca Raton", county: "Palm Beach" },
  { slug: "jupiter", name: "Jupiter", county: "Palm Beach" },
  { slug: "palm-beach-gardens", name: "Palm Beach Gardens", county: "Palm Beach" },
  { slug: "riviera-beach", name: "Riviera Beach", county: "Palm Beach" },

  // Broward County
  { slug: "fort-lauderdale", name: "Fort Lauderdale", county: "Broward" },
  { slug: "hollywood", name: "Hollywood", county: "Broward" },
  { slug: "pembroke-pines", name: "Pembroke Pines", county: "Broward" },
  { slug: "coral-springs", name: "Coral Springs", county: "Broward" },
  { slug: "pompano-beach", name: "Pompano Beach", county: "Broward" },
  { slug: "davie", name: "Davie", county: "Broward" },
  { slug: "plantation", name: "Plantation", county: "Broward" },
  { slug: "sunrise", name: "Sunrise", county: "Broward" },
  { slug: "deerfield-beach", name: "Deerfield Beach", county: "Broward" },
  { slug: "weston", name: "Weston", county: "Broward" },
];

export const counties: County[] = ["Martin", "Palm Beach", "Broward"];