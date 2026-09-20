/**
 * Photograph of the city itself, where a real one exists.
 *
 * Only 13 of the 27 cities do. Unsplash returns nothing at all for Coral
 * Springs, Greenacres, Hobe Sound, Pembroke Pines, Port Salerno, Royal Palm
 * Beach and Weston, and for several others it matches the word rather than the
 * place: "Sunrise" returns sunsets, "Plantation" returns farmland, and
 * "Loxahatchee" returns zebras. Those cities deliberately get no photo rather
 * than a wrong one, and lead with the map instead.
 *
 * Subjects were picked for contrast, not just correctness. Most Unsplash
 * results for these cities are near-identical turquoise beach aerials, so the
 * set spans a lighthouse, a boardwalk, a marina, a skyline and a sailboat.
 *
 * Unsplash's API terms require crediting the photographer and Unsplash
 * wherever a photo is shown, which the figcaption does.
 */
export const CITY_SCENE: Record<
  string,
  {
    src: string;
    thumb: string;
    alt: string;
    caption: string;
    by: string;
    byLink: string;
  }
> = {
  "Boca Raton": {
    src: "/city-boca-raton.jpg",
    thumb: "/thumb-boca-raton.jpg",
    alt: "Aerial view of the Boca Raton shoreline and the Atlantic",
    caption: "The Boca Raton coastline.",
    by: "Nigel Sarrag",
    byLink: "https://unsplash.com/@nsarrag",
  },
  "Boynton Beach": {
    src: "/city-boynton-beach.jpg",
    thumb: "/thumb-boynton-beach.jpg",
    alt: "People walking a boardwalk bridge over water in Boynton Beach",
    caption: "The boardwalk over the Boynton Beach waterway.",
    by: "Jeffrey Eisen",
    byLink: "https://unsplash.com/@jeisen",
  },
  "Deerfield Beach": {
    src: "/city-deerfield-beach.jpg",
    thumb: "/thumb-deerfield-beach.jpg",
    alt: "The Hillsboro Inlet lighthouse seen from the water",
    caption: "The Hillsboro Inlet Light off Deerfield Beach.",
    by: "Ken Okum",
    byLink: "https://unsplash.com/@kenographyone",
  },
  "Delray Beach": {
    src: "/city-delray-beach.jpg",
    thumb: "/thumb-delray-beach.jpg",
    alt: "A boat moored on the Intracoastal beside Delray Beach buildings",
    caption: "The Delray Beach Intracoastal waterfront.",
    by: "Jeffrey Eisen",
    byLink: "https://unsplash.com/@jeisen",
  },
  "Fort Lauderdale": {
    src: "/city-fort-lauderdale.jpg",
    thumb: "/thumb-fort-lauderdale.jpg",
    alt: "The Fort Lauderdale beachfront with the city behind it",
    caption: "The Fort Lauderdale beachfront.",
    by: "By Carl",
    byLink: "https://unsplash.com/@bycarl17",
  },
  Hollywood: {
    src: "/city-hollywood.jpg",
    thumb: "/thumb-hollywood.jpg",
    alt: "Palms and beachgoers along the Hollywood Beach Broadwalk",
    caption: "The Hollywood Beach Broadwalk.",
    by: "Zachary Kadolph",
    byLink: "https://unsplash.com/@zacharykadolph",
  },
  "Jensen Beach": {
    src: "/city-jensen-beach.jpg",
    thumb: "/thumb-jensen-beach.jpg",
    alt: "A wooden dune crossover leading to the sand at Jensen Beach",
    caption: "A dune crossover at Jensen Beach.",
    by: "Melissa",
    byLink: "https://unsplash.com/@melissamullinator",
  },
  Jupiter: {
    src: "/city-jupiter.jpg",
    thumb: "/thumb-jupiter.jpg",
    alt: "Aerial view of the Jupiter Inlet, marina and surrounding buildings",
    caption: "The Jupiter Inlet and marina from the air.",
    by: "Chase Baker",
    byLink: "https://unsplash.com/@sandbarproductions",
  },
  "Lake Worth Beach": {
    src: "/city-lake-worth-beach.jpg",
    thumb: "/thumb-lake-worth-beach.jpg",
    alt: "A sailboat at anchor on the Lake Worth Lagoon under evening cloud",
    caption: "The Lake Worth Lagoon at dusk.",
    by: "Gene Gallin",
    byLink: "https://unsplash.com/@genefoto",
  },
  "Palm Beach Gardens": {
    src: "/city-palm-beach-gardens.jpg",
    thumb: "/thumb-palm-beach-gardens.jpg",
    alt: "A palm-lined walkway and lawn in Palm Beach Gardens",
    caption: "A palm-lined walk in Palm Beach Gardens.",
    by: "Gene Gallin",
    byLink: "https://unsplash.com/@genefoto",
  },
  "Pompano Beach": {
    src: "/city-pompano-beach.jpg",
    thumb: "/thumb-pompano-beach.jpg",
    alt: "A beach volleyball game on the sand at Pompano Beach",
    caption: "Pompano Beach on a weekend.",
    by: "Ryan Arnst",
    byLink: "https://unsplash.com/@ryanarnst",
  },
  "Riviera Beach": {
    src: "/city-riviera-beach.jpg",
    thumb: "/thumb-riviera-beach.jpg",
    alt: "Sunset over Riviera Beach rooftops and the water beyond",
    caption: "Riviera Beach rooftops at sunset.",
    by: "Scott Greer",
    byLink: "https://unsplash.com/@sgreer",
  },
  "West Palm Beach": {
    src: "/city-west-palm-beach.jpg",
    thumb: "/thumb-west-palm-beach.jpg",
    alt: "The West Palm Beach skyline seen across the Intracoastal",
    caption: "The West Palm Beach skyline from across the Intracoastal.",
    by: "Richard Sagredo",
    byLink: "https://unsplash.com/@sagredophotography",
  },
};
