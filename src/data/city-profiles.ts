// Per-city local-SEO profile data.
//
// WHY THIS FILE EXISTS
// --------------------
// Before this file, each /mold-inspection-{slug} page rendered ~2,380 words of
// which only ~459 (19%) were unique to the city — the other 81% was
// byte-identical boilerplate across all 27 pages. Word count was never the
// problem; near-duplicate content was. Everything here exists to raise the
// unique share by giving each page real, locally-specific material:
// neighborhoods, landmarks, housing stock, seasonal risk, and market context.
//
// ACCURACY RULES (read before editing)
// ------------------------------------
// 1. Every neighborhood, landmark, and ZIP below is a real, verifiable place.
//    Do NOT invent names to pad a list — a fabricated neighborhood on a live
//    business site is worse for trust and for rankings than a short list.
// 2. `stats` intentionally carries STRUCTURAL facts (building code, housing
//    era, water/sewer, flood exposure) rather than dollar figures. Median home
//    values move constantly and would be stale the day after a static build.
//    See `medianHomeValue` below for the one place a figure may be added.
// 3. HVHZ is a genuine legal distinction, not marketing copy: the Florida
//    Building Code defines the High-Velocity Hurricane Zone as Broward and
//    Miami-Dade counties ONLY. Martin and Palm Beach are standard FBC.

import type { County } from "./cities";

export interface CityStat {
  label: string;
  value: string;
  note: string;
}

export interface Neighborhood {
  name: string;
  /** One clause on what drives moisture risk specifically here. */
  note: string;
}

export interface CityProfile {
  slug: string;
  /** Real neighborhoods/subdivisions. Powers "mold inspection near X" queries. */
  neighborhoods: Neighborhood[];
  /** Recognizable local landmarks — entity signals for local relevance. */
  landmarks: string[];
  /** ZIP codes that define the service-area boundary for this city. */
  zips: string[];
  /** Approximate city-center coordinates for LocalBusiness `geo`. */
  geo: { lat: number; lng: number };
  /** Dominant construction era of the housing stock. */
  housingEra: string;
  /** Structural local statistics rendered as the stat grid. */
  stats: CityStat[];
  /** The 3-4 moisture failures we actually find most often here. */
  commonIssues: string[];
  /** Seasonal inspection concerns specific to this city's exposure. */
  seasonal: string;
  /** Real-estate context for buyers and sellers. */
  market: string;
  /**
   * OPTIONAL and deliberately unset. If you add a figure here, cite a real
   * source and a date — and expect to refresh it, because a static site will
   * happily serve a 2026 number in 2029. Left null everywhere on purpose.
   */
  medianHomeValue?: string | null;
}

/** Shared building-code stat — accurate per Florida Building Code. */
function codeStat(county: County): CityStat {
  return county === "Broward"
    ? {
        label: "Building code",
        value: "HVHZ",
        note: "Broward sits in the High-Velocity Hurricane Zone, so openings and roof assemblies meet stricter sealing standards — tighter homes trap interior humidity.",
      }
    : {
        label: "Building code",
        value: "Standard FBC",
        note: `${county} County is outside the High-Velocity Hurricane Zone, so housing stock is mixed — original single-glazed openings alongside tighter impact retrofits.`,
      };
}

const climateStat: CityStat = {
  label: "Annual rainfall",
  value: "~61 in",
  note: "South Florida averages roughly 61 inches a year, with about two-thirds falling in the June-through-October wet season.",
};

const humidityStat: CityStat = {
  label: "Avg. humidity",
  value: "~74%",
  note: "Mold grows on cool interior surfaces once indoor relative humidity holds above roughly 60% — no leak required.",
};

export const cityProfiles: Record<string, CityProfile> = {
  // ---------------------------------------------------------------- MARTIN
  stuart: {
    slug: "stuart",
    neighborhoods: [
      { name: "Historic Downtown Stuart", note: "pre-1980 cottages with original wall assemblies and single-pane glazing" },
      { name: "Rocky Point", note: "low-lying waterfront parcels with sustained river humidity" },
      { name: "North River Shores", note: "1950s-70s ranch homes on the St. Lucie River" },
      { name: "Krueger Creek", note: "creek-adjacent lots where grade and drainage drive crawl-space moisture" },
      { name: "Snug Harbor", note: "older waterfront stock with docks and constant salt-air exposure" },
      { name: "Sunset Trail", note: "mid-century homes where AC retrofits often outpace envelope upgrades" },
    ],
    landmarks: ["Historic Downtown Stuart", "Stuart Riverwalk", "Roosevelt Bridge", "St. Lucie River"],
    zips: ["34994", "34996", "34997"],
    geo: { lat: 27.1973, lng: -80.2528 },
    housingEra: "1920s-1970s core, 1980s-2000s outlying",
    stats: [
      codeStat("Martin"),
      { label: "Housing era", value: "1920s-1970s", note: "The downtown and riverfront core predates modern vapor-barrier and flashing practice." },
      { label: "Flood exposure", value: "High", note: "Much of Stuart sits inside FEMA-designated flood zones along the St. Lucie River." },
      climateStat,
    ],
    commonIssues: [
      "Rot at floor plates in pre-1980 downtown cottages",
      "Mold behind original wood paneling and plaster",
      "Condensation on single-pane windows during humid months",
      "Residual subfloor moisture in homes that have flooded before",
    ],
    seasonal: "Wet-season storms driven up the St. Lucie River push water at windows and roof penetrations from June through October, while winter brings the opposite failure — snowbird homes closed up with the AC set high, letting humidity climb unchecked for months.",
    market: "Stuart's split between historic downtown stock and newer outlying subdivisions means two very different inspections. Buyers under a short inspection period on a pre-1980 riverfront home should budget for moisture mapping, not just a visual walkthrough.",
  },
  "palm-city": {
    slug: "palm-city",
    neighborhoods: [
      { name: "Martin Downs", note: "1980s-90s golf-community homes where irrigation overspray meets stucco" },
      { name: "Palm City Farms", note: "rural acreage on private wells and septic systems" },
      { name: "Canopy Creek", note: "newer construction that seals tightly and traps interior humidity" },
      { name: "Harbour Ridge", note: "riverfront country-club homes with sustained St. Lucie humidity" },
      { name: "Monarch Country Club", note: "mature landscaping and shaded elevations that dry slowly after rain" },
      { name: "Highlands Reserve", note: "2000s stock where AC sizing drives condensation complaints" },
    ],
    landmarks: ["Martin Downs Boulevard", "St. Lucie River", "Palm City Bridge", "Citrus Grove Trail"],
    zips: ["34990"],
    geo: { lat: 27.1642, lng: -80.2664 },
    housingEra: "1980s-2000s suburban, rural acreage west",
    stats: [
      codeStat("Martin"),
      { label: "Housing era", value: "1980s-2000s", note: "Suburban stock built after modern code, but old enough that original AC systems and roofs are now past service life." },
      { label: "Water & sewer", value: "Mixed", note: "Eastern subdivisions run municipal; Palm City Farms acreage is largely well and septic." },
      humidityStat,
    ],
    commonIssues: [
      "Condensation from oversized or aging AC systems in 1990s subdivisions",
      "Stucco moisture intrusion where irrigation overspray hits walls daily",
      "Well-water and septic moisture issues on Palm City Farms acreage",
      "Attic humidity in homes with original, under-ventilated roof assemblies",
    ],
    seasonal: "Summer afternoon storms saturate west-facing stucco that never fully dries before the next cell, and homes left vacant over summer with the thermostat pushed to 80 routinely test high for airborne spores by September.",
    market: "Palm City's country-club and acreage segments trade on very different terms. On acreage in particular, a well-and-septic property carries moisture variables that a standard suburban walkthrough will not surface.",
  },
  "jensen-beach": {
    slug: "jensen-beach",
    neighborhoods: [
      { name: "Hutchinson Island", note: "barrier-island exposure with direct salt spray and wind-driven rain" },
      { name: "Indian River Drive", note: "older riverfront homes with constant lagoon humidity" },
      { name: "Pineapple Plantation", note: "established stock where mature canopy slows post-rain drying" },
      { name: "Nettles Island", note: "manufactured and modular units especially sensitive to envelope leaks" },
      { name: "Ocean Breeze", note: "compact older units where interior humidity control is limited" },
      { name: "Skyline Park", note: "mid-century homes with original windows and retrofitted cooling" },
    ],
    landmarks: ["Indian River Lagoon", "Hutchinson Island", "Jensen Beach Causeway", "Downtown Jensen Beach"],
    zips: ["34957"],
    geo: { lat: 27.2542, lng: -80.2295 },
    housingEra: "1950s-1980s coastal, 1990s+ inland",
    stats: [
      codeStat("Martin"),
      { label: "Housing era", value: "1950s-1980s", note: "Coastal stock predates current flashing and window-sealing standards." },
      { label: "Coastal exposure", value: "Direct", note: "Barrier-island and lagoon-front properties take salt spray and wind-driven rain year-round." },
      climateStat,
    ],
    commonIssues: [
      "Wind-driven rain intrusion at windows and sliders on Hutchinson Island",
      "Salt-air corrosion opening gaps at flashing and fasteners",
      "Lagoon-side humidity condensing inside wall cavities",
      "Envelope leaks in manufactured units at Nettles Island",
    ],
    seasonal: "Barrier-island properties take the brunt of wet-season storms and tropical systems from June through October, and the same salt air that corrodes fasteners quietly opens the flashing gaps that let the next storm's water inside.",
    market: "Oceanfront and lagoon-front Jensen Beach listings move on condition of the envelope. A pre-purchase assessment that documents window, slider, and flashing performance is the difference between an informed offer and inheriting a decade of intrusion.",
  },
  "hobe-sound": {
    slug: "hobe-sound",
    neighborhoods: [
      { name: "Heritage Ridge", note: "1980s golf-community homes with aging roof and AC assemblies" },
      { name: "The Soundings", note: "waterfront canal homes with sustained humidity at grade" },
      { name: "Poinciana Gardens", note: "older established stock with original wall assemblies" },
      { name: "Zeus Park", note: "compact mid-century homes near the Intracoastal" },
      { name: "Hobe Sound Bridge Road corridor", note: "mixed-age stock with varied envelope quality" },
      { name: "Banyan Bay", note: "newer tight-envelope construction prone to interior condensation" },
    ],
    landmarks: ["Jupiter Island", "Hobe Sound National Wildlife Refuge", "Intracoastal Waterway", "Jonathan Dickinson State Park"],
    zips: ["33455", "33475"],
    geo: { lat: 27.0714, lng: -80.1364 },
    housingEra: "1960s-1990s",
    stats: [
      codeStat("Martin"),
      { label: "Housing era", value: "1960s-1990s", note: "Much of the stock is now at or past the service life of its original roof and AC equipment." },
      { label: "Coastal exposure", value: "High", note: "Intracoastal and Jupiter Island adjacency means salt air and wind-driven rain year-round." },
      humidityStat,
    ],
    commonIssues: [
      "Aging roof assemblies leaking at penetrations in 1980s golf communities",
      "Canal-front slab moisture wicking into baseboards and framing",
      "Original single-pane glazing condensing through humid months",
      "Air-handler closet condensation in homes with retrofitted AC",
    ],
    seasonal: "Hobe Sound's seasonal-resident pattern is the real driver — homes closed from May through October sit through the entire wet season with minimal dehumidification, which is why September and October return the highest airborne spore counts we sample here.",
    market: "Hobe Sound buyers frequently purchase sight-unseen from out of state. An independent, lab-backed assessment before closing is the only reliable way to know what a seasonally vacant home has been doing all summer.",
  },
  "port-salerno": {
    slug: "port-salerno",
    neighborhoods: [
      { name: "Manatee Pocket", note: "working waterfront with constant marine humidity and salt exposure" },
      { name: "New Monrovia", note: "1920s-platted grid with the area's oldest surviving housing stock" },
      { name: "Rocky Point", note: "low-lying waterfront parcels where drainage drives moisture" },
      { name: "Manatee Creek", note: "newer development on creek-adjacent grade" },
      { name: "Salerno Cove", note: "canal-front homes with sustained humidity at slab level" },
      { name: "Port Salerno waterfront", note: "mixed-age stock with heavy marine exposure" },
    ],
    landmarks: ["Manatee Pocket", "Port Salerno Commercial Fishing Docks", "St. Lucie Inlet", "Indian River Lagoon"],
    zips: ["34992", "34997"],
    geo: { lat: 27.1439, lng: -80.2003 },
    housingEra: "1920s platted core, 1970s-2000s outlying",
    stats: [
      codeStat("Martin"),
      { label: "Housing era", value: "1920s-2000s", note: "New Monrovia's 1920s grid holds the oldest stock; surrounding development is far newer." },
      { label: "Marine exposure", value: "Direct", note: "Manatee Pocket is a working harbor — salt air and near-constant waterfront humidity." },
      climateStat,
    ],
    commonIssues: [
      "Salt-air degradation of flashing and fasteners on waterfront homes",
      "Slab and baseboard moisture on low-lying Rocky Point parcels",
      "Original wall assemblies in the 1920s New Monrovia grid",
      "Marine humidity condensing in poorly ventilated interiors",
    ],
    seasonal: "Manatee Pocket's reputation as a hurricane hole means boats shelter here — but the homes around it still take the full wet season, and the harbor's marine humidity never really lets interiors dry between June and October.",
    market: "Port Salerno's mix of century-old platted lots and recent construction produces wildly different inspection findings block to block. Age of the specific structure, not the address, determines what we look for first.",
  },

  // ------------------------------------------------------------ PALM BEACH
  "west-palm-beach": {
    slug: "west-palm-beach",
    neighborhoods: [
      { name: "El Cid", note: "1920s Mediterranean Revival homes with original plaster and stucco" },
      { name: "Flamingo Park", note: "historic bungalows where original assemblies meet modern AC loads" },
      { name: "Northwood Shores", note: "1920s-40s stock with mature canopy and slow post-rain drying" },
      { name: "SoSo (South of Southern)", note: "mid-century homes with retrofitted cooling and original envelopes" },
      { name: "Grandview Heights", note: "early-century cottages with pier-and-beam and crawl-space moisture" },
      { name: "Historic Northwest", note: "the city's oldest surviving residential fabric" },
    ],
    landmarks: ["Clematis Street", "Rosemary Square", "Norton Museum of Art", "Palm Beach International Airport"],
    zips: ["33401", "33405", "33407", "33409", "33411"],
    geo: { lat: 26.7153, lng: -80.0534 },
    housingEra: "1920s-1940s historic core, 1950s-1990s outlying",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1920s-1940s core", note: "El Cid, Flamingo Park, and Northwood predate vapor barriers, modern flashing, and mechanical dehumidification entirely." },
      { label: "Historic districts", value: "Multiple", note: "Renovation constraints in historic districts often mean original assemblies stay in place behind new finishes." },
      humidityStat,
    ],
    commonIssues: [
      "Moisture trapped behind original plaster in 1920s historic-district homes",
      "Stucco cracking and intrusion on Mediterranean Revival elevations",
      "Crawl-space and pier-and-beam moisture in Grandview Heights",
      "Undersized or retrofitted AC failing to control humidity in historic stock",
    ],
    seasonal: "The historic core's original assemblies were designed for passive ventilation, not sealed air conditioning. Wet-season humidity from June through October condenses inside walls that were never built to handle a 74-degree interior, and winter renovation season regularly uncovers what that has been doing for years.",
    market: "West Palm Beach's historic districts carry renovation restrictions that keep original wall assemblies in service behind updated finishes. Buyers who assume a renovated interior means a renovated envelope are the ones who call us three months after closing.",
  },
  wellington: {
    slug: "wellington",
    neighborhoods: [
      { name: "Palm Beach Point", note: "equestrian acreage where barn and stable humidity migrates to residences" },
      { name: "Grand Prix Village", note: "large equestrian parcels with heavy irrigation and wash-rack runoff" },
      { name: "Binks Forest", note: "1990s golf-community homes with mature canopy and shaded elevations" },
      { name: "Olympia", note: "2000s tight-envelope construction prone to interior condensation" },
      { name: "Isles at Wellington", note: "lakefront lots with sustained humidity at grade" },
      { name: "Versailles", note: "newer estate homes where AC sizing drives humidity complaints" },
    ],
    landmarks: ["Wellington International", "International Polo Club Palm Beach", "Village Park", "Lake Wellington"],
    zips: ["33414", "33449"],
    geo: { lat: 26.6618, lng: -80.2681 },
    housingEra: "1980s-2000s master-planned",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1980s-2000s", note: "Master-planned stock built to modern code, now aging into its first major roof and AC replacement cycle." },
      { label: "Equestrian land", value: "Extensive", note: "Barns, wash racks, and heavy irrigation create sustained ground moisture uncommon in typical suburbs." },
      humidityStat,
    ],
    commonIssues: [
      "Ground moisture from wash racks and irrigation migrating into adjacent residences",
      "Barn and tack-room humidity affecting attached or nearby living space",
      "Condensation in 2000s tight-envelope homes with oversized AC",
      "Lakefront slab moisture in Isles at Wellington",
    ],
    seasonal: "Wellington's population swings with the winter equestrian season, which inverts the usual pattern — many homes and guest quarters sit empty and minimally cooled through the entire summer wet season, then get occupied in January when the humidity damage is already months old.",
    market: "Equestrian properties trade on the condition of both the residence and the ancillary structures. A mold assessment scoped only to the house misses the barn, tack room, and groom's quarters that often drive the actual moisture load.",
  },
  "royal-palm-beach": {
    slug: "royal-palm-beach",
    neighborhoods: [
      { name: "Counterpoint Estates", note: "1970s-80s stock with original wall assemblies and aging roofs" },
      { name: "La Mancha", note: "established homes where mature landscaping slows drying" },
      { name: "Madison Green", note: "1990s-2000s golf-community construction with irrigation overspray" },
      { name: "The Willows", note: "older stock with retrofitted cooling on original envelopes" },
      { name: "Saratoga Pines", note: "1990s homes now past original roof service life" },
      { name: "Victoria Grove", note: "2000s tight-envelope construction prone to condensation" },
    ],
    landmarks: ["Royal Palm Beach Commons Park", "Village Golf Club", "Okeeheelee Park", "Southern Boulevard corridor"],
    zips: ["33411", "33421"],
    geo: { lat: 26.7031, lng: -80.2306 },
    housingEra: "1970s-2000s",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1970s-2000s", note: "A wide age spread means envelope quality varies dramatically between adjacent subdivisions." },
      { label: "Inland position", value: "Low flood risk", note: "Inland location reduces storm-surge exposure but does nothing to lower ambient humidity." },
      humidityStat,
    ],
    commonIssues: [
      "Aging roof assemblies leaking at penetrations in 1970s-80s subdivisions",
      "Irrigation overspray driving stucco moisture in golf communities",
      "AC condensate line failures flooding air-handler closets",
      "Condensation in newer tight-envelope homes with oversized cooling",
    ],
    seasonal: "Royal Palm Beach's inland position means storm surge is not the concern — sustained wet-season humidity is. From June through October, homes with aging or oversized AC systems cool the air without removing enough moisture, and that shows up as growth on cool interior surfaces.",
    market: "The 30-year spread in Royal Palm Beach construction dates means two homes a mile apart can present completely different moisture profiles. Buyers should scope the inspection to the build era, not the ZIP code.",
  },
  loxahatchee: {
    slug: "loxahatchee",
    neighborhoods: [
      { name: "The Acreage", note: "rural parcels on private wells and septic systems" },
      { name: "Loxahatchee Groves", note: "dirt roads, equestrian acreage, and no municipal water system" },
      { name: "Deer Run", note: "equestrian community where barn moisture meets residential structures" },
      { name: "Fox Trail", note: "large wooded parcels with slow post-rain drying" },
      { name: "Santa Rosa Groves", note: "agricultural acreage with sustained ground moisture" },
      { name: "Citrus Grove", note: "rural stock with well-and-septic infrastructure" },
    ],
    landmarks: ["Loxahatchee Groves", "The Acreage", "Arthur R. Marshall Loxahatchee National Wildlife Refuge", "Seminole Pratt Whitney Road"],
    zips: ["33470"],
    geo: { lat: 26.6834, lng: -80.2645 },
    housingEra: "1980s-2000s rural acreage",
    stats: [
      codeStat("Palm Beach"),
      { label: "Water & sewer", value: "Well & septic", note: "There is no municipal water system across most of Loxahatchee Groves — homes draw from private wells into the Biscayne Aquifer." },
      { label: "Lot character", value: "Rural acreage", note: "Large parcels, dirt roads, and equestrian use create ground-moisture conditions unlike any suburb we serve." },
      climateStat,
    ],
    commonIssues: [
      "Septic-adjacent ground moisture migrating toward structures after heavy rain",
      "Well-pump and pressure-tank enclosures holding persistent humidity",
      "Barn and equestrian-structure moisture affecting nearby residences",
      "Slow-draining acreage keeping crawl spaces and slabs damp for days",
    ],
    seasonal: "Wet-season rainfall on large, slow-draining rural parcels is the defining issue here. After heavy summer rain, surface water can reach well depth quickly on equestrian properties, and the same saturated ground keeps structures damp long after a paved suburb would have dried.",
    market: "Loxahatchee acreage carries variables no municipal-serviced suburb does — private well, septic field, outbuildings, and slow-draining ground. A pre-purchase assessment that ignores the site and inspects only the house is answering the wrong question.",
  },
  "lake-worth-beach": {
    slug: "lake-worth-beach",
    neighborhoods: [
      { name: "Bryant Park", note: "1920s bungalows with original wood assemblies near the Intracoastal" },
      { name: "College Park", note: "historic cottages with pier-and-beam construction" },
      { name: "Parrot Cove", note: "1920s-40s stock in a designated historic district" },
      { name: "Mango Groves", note: "early-century homes with mature canopy and slow drying" },
      { name: "Tropical Ridge", note: "historic bungalows with original single-pane glazing" },
      { name: "South Palm Park", note: "older coastal-adjacent stock with salt-air exposure" },
    ],
    landmarks: ["Lake Worth Beach Casino Building", "Lake Worth Pier", "Downtown Lake and Lucerne Avenues", "Intracoastal Waterway"],
    zips: ["33460", "33461"],
    geo: { lat: 26.6167, lng: -80.0684 },
    housingEra: "1920s-1940s historic core",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1920s-1940s", note: "One of the oldest intact housing stocks in Palm Beach County — largely pre-vapor-barrier construction." },
      { label: "Historic districts", value: "Several", note: "Historic-district rules frequently keep original wall and floor assemblies in service behind updated finishes." },
      humidityStat,
    ],
    commonIssues: [
      "Rot and mold in original pier-and-beam floor assemblies",
      "Moisture behind original plaster and shiplap in historic bungalows",
      "Condensation on single-pane glazing throughout humid months",
      "Undersized AC retrofits failing to control humidity in historic homes",
    ],
    seasonal: "A 1920s bungalow was designed to breathe — cross-ventilated, unconditioned, and tolerant of humidity. Sealing one up and air conditioning it to 74 degrees creates condensation inside assemblies that have no vapor barrier, and the wet season from June through October is when that becomes visible.",
    market: "Lake Worth Beach's historic bungalow stock is the draw and the risk. Renovated interiors routinely sit on original, un-remediated floor and wall assemblies — which is exactly what a moisture-mapped inspection is for.",
  },
  greenacres: {
    slug: "greenacres",
    neighborhoods: [
      { name: "River Bridge", note: "gated 1980s-90s community of roughly 1,100 homes now past original roof life" },
      { name: "Pine Ridge", note: "condo and villa sections where shared walls complicate moisture tracing" },
      { name: "Sherbrooke Estates", note: "established single-family stock with aging AC systems" },
      { name: "Magnolia Bay", note: "gated community with lakefront lots and grade-level humidity" },
      { name: "Buttonwood", note: "gated stock where mature landscaping slows post-rain drying" },
      { name: "Original Greenacres", note: "the city's oldest housing, with original envelopes" },
    ],
    landmarks: ["Buttonwood Park", "Samuel J. Ferreri Community Park", "Lake Worth Road corridor", "John Prince Park"],
    zips: ["33413", "33463", "33467"],
    geo: { lat: 26.6276, lng: -80.1256 },
    housingEra: "1970s-1990s",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1970s-1990s", note: "Much of the stock is now 30-50 years old — original roofs and AC systems are well past service life." },
      { label: "Attached housing", value: "Common", note: "Condo and villa sections mean a neighbor's leak becomes your moisture problem through a shared assembly." },
      humidityStat,
    ],
    commonIssues: [
      "Moisture migrating through shared walls in condo and villa sections",
      "Aging roof assemblies leaking at penetrations in 1980s subdivisions",
      "AC condensate overflow in original air-handler closets",
      "Grade-level slab moisture on lakefront lots",
    ],
    seasonal: "In attached housing, wet-season leaks rarely stay in one unit. A roof or plumbing failure above or beside you migrates through shared assemblies, and by the time it surfaces on your side of the wall it has usually been wet for weeks.",
    market: "Greenacres' large share of attached housing changes the inspection question from 'is my unit wet' to 'where is the water actually coming from.' Tracing that across a shared assembly takes thermal imaging, not guesswork.",
  },
  "boynton-beach": {
    slug: "boynton-beach",
    neighborhoods: [
      { name: "Leisureville", note: "1970s 55+ villas with original assemblies and shared walls" },
      { name: "Hunters Run", note: "1980s country-club condos where shared systems spread moisture" },
      { name: "Chapel Hill", note: "established single-family stock near the Intracoastal" },
      { name: "Quantum Village", note: "newer tight-envelope construction prone to condensation" },
      { name: "Sterling Village", note: "older condo stock with aging plumbing and roof assemblies" },
      { name: "Renaissance Commons", note: "2000s mid-rise where stack effect drives humidity movement" },
    ],
    landmarks: ["Boynton Harbor Marina", "Mangrove Park", "Ocean Avenue", "Intracoastal Waterway"],
    zips: ["33426", "33435", "33436", "33437"],
    geo: { lat: 26.5254, lng: -80.0664 },
    housingEra: "1970s-1990s, with 2000s infill",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1970s-1990s", note: "A large share of the stock is 55+ and condo housing built before current moisture-control practice." },
      { label: "Attached housing", value: "Very common", note: "Condo and villa density means moisture frequently originates in an adjacent or overhead unit." },
      humidityStat,
    ],
    commonIssues: [
      "Moisture from adjacent or overhead units in condo and villa communities",
      "Aging galvanized and copper plumbing failing inside wall cavities",
      "AC condensate line blockage in 1970s-80s air-handler closets",
      "Coastal wind-driven rain at older sliders near the Intracoastal",
    ],
    seasonal: "Boynton's large seasonal-resident population leaves thousands of units minimally cooled from May through October. A closed condo with the thermostat at 80 will grow mold on interior surfaces through the wet season without a single leak involved.",
    market: "In Boynton's condo and 55+ market, associations and unit owners often disagree about where responsibility for a leak begins. An independent, lab-backed assessment documents conditions without a stake in who pays for the repair.",
  },
  "delray-beach": {
    slug: "delray-beach",
    neighborhoods: [
      { name: "Pineapple Grove", note: "historic and infill mix where old assemblies meet new construction" },
      { name: "Lake Ida", note: "mid-century homes with mature canopy and slow post-rain drying" },
      { name: "Del-Ida Park", note: "1920s historic district with original wall assemblies" },
      { name: "Tropic Isle", note: "canal-front homes with sustained humidity at slab level" },
      { name: "Seagate", note: "coastal stock taking direct salt air and wind-driven rain" },
      { name: "Osceola Park", note: "older cottages with original single-pane glazing" },
    ],
    landmarks: ["Atlantic Avenue", "Delray Municipal Beach", "Morikami Museum and Japanese Gardens", "Pineapple Grove Arts District"],
    zips: ["33444", "33445", "33483", "33484"],
    geo: { lat: 26.4615, lng: -80.0728 },
    housingEra: "1920s historic districts, 1950s-1990s outlying",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1920s-1990s", note: "Historic districts hold pre-vapor-barrier stock; outlying subdivisions are decades newer." },
      { label: "Coastal exposure", value: "Direct", note: "Seagate and beachside properties take salt air and wind-driven rain year-round." },
      humidityStat,
    ],
    commonIssues: [
      "Moisture behind original plaster in Del-Ida Park and Osceola Park historic homes",
      "Canal-front slab and baseboard moisture in Tropic Isle",
      "Salt-air degradation of window and door flashing in Seagate",
      "Condensation in renovated interiors sitting on original envelopes",
    ],
    seasonal: "Delray's beachside blocks take wind-driven rain from June through October that finds every gap salt air has opened in flashing and glazing over the preceding year. Inland historic districts fail differently — sealed, air-conditioned, and condensing inside walls built to breathe.",
    market: "Delray's renovation-heavy market produces beautiful interiors over original envelopes. A moisture-mapped assessment separates a genuine full-envelope renovation from a cosmetic one, which is precisely the distinction that changes an offer.",
  },
  "boca-raton": {
    slug: "boca-raton",
    neighborhoods: [
      { name: "Old Floresta", note: "1920s Mizner-era homes with original stucco and plaster assemblies" },
      { name: "Boca del Mar", note: "1970s-80s stock now well past original roof and AC service life" },
      { name: "Broken Sound", note: "1980s country-club homes with heavy irrigation against stucco" },
      { name: "Woodfield Country Club", note: "1990s estate homes where AC sizing drives humidity complaints" },
      { name: "Boca Bath & Tennis", note: "established community with mature canopy and shaded elevations" },
      { name: "Royal Palm Yacht & Country Club", note: "waterfront estates with sustained canal humidity" },
    ],
    landmarks: ["Mizner Park", "Florida Atlantic University", "Town Center at Boca Raton", "Red Reef Park"],
    zips: ["33427", "33431", "33432", "33433", "33434", "33486", "33487", "33496"],
    geo: { lat: 26.3683, lng: -80.1289 },
    housingEra: "1920s Old Floresta, 1970s-1990s majority",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1970s-1990s", note: "The bulk of Boca's stock is 30-50 years old, with original roofs and AC systems at end of life." },
      { label: "Country-club density", value: "High", note: "Heavy landscape irrigation running daily against stucco elevations is a persistent, under-diagnosed moisture source." },
      humidityStat,
    ],
    commonIssues: [
      "Irrigation overspray saturating stucco elevations in country-club communities",
      "Aging flat and tile roof assemblies leaking at penetrations",
      "Oversized AC short-cycling and leaving humidity uncontrolled in large homes",
      "Original stucco and plaster assemblies in Old Floresta",
    ],
    seasonal: "Boca's country-club irrigation runs year-round regardless of rainfall, so stucco elevations that never dry are a twelve-month problem here — then the June-through-October wet season adds storm loading on roof assemblies already at the end of their service life.",
    market: "Boca's luxury market rewards presentation, and presentation hides envelope condition well. On a 1980s country-club home with a recent cosmetic renovation, thermal imaging and moisture readings tell you what the finishes will not.",
  },
  jupiter: {
    slug: "jupiter",
    neighborhoods: [
      { name: "Abacoa", note: "2000s new-urbanist construction with tight envelopes and interior condensation" },
      { name: "Jupiter Farms", note: "rural acreage on private wells and septic systems" },
      { name: "Egret Landing", note: "1990s family stock now at first major roof replacement" },
      { name: "Admirals Cove", note: "waterfront estates with sustained canal and Intracoastal humidity" },
      { name: "Jonathan's Landing", note: "established waterfront community with aging envelopes" },
      { name: "Botanica", note: "newer construction where AC sizing drives humidity complaints" },
    ],
    landmarks: ["Jupiter Inlet Lighthouse", "Roger Dean Chevrolet Stadium", "Jupiter Beach", "Riverwalk Jupiter"],
    zips: ["33458", "33469", "33477", "33478"],
    geo: { lat: 26.9342, lng: -80.0942 },
    housingEra: "1980s-2000s, rural acreage west",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1980s-2000s", note: "Newer than most of the county, but 1990s stock is now cycling through first roof and AC replacement." },
      { label: "Water & sewer", value: "Mixed", note: "Eastern Jupiter runs municipal; Jupiter Farms acreage is largely private well and septic." },
      climateStat,
    ],
    commonIssues: [
      "Interior condensation in tight-envelope Abacoa construction",
      "Well-and-septic ground moisture on Jupiter Farms acreage",
      "Coastal wind-driven rain at sliders in waterfront communities",
      "First-cycle roof failures in 1990s subdivisions",
    ],
    seasonal: "Jupiter's coastal blocks take wind-driven rain through the June-to-October wet season, while Jupiter Farms acreage faces the opposite issue — large, slow-draining parcels where saturated ground keeps structures damp for days after the same storm.",
    market: "Jupiter spans oceanfront estates and rural acreage within one municipality. The inspection scope that makes sense in Admirals Cove is not the one that makes sense in Jupiter Farms, and pricing an assessment off the city name alone misses that.",
  },
  "palm-beach-gardens": {
    slug: "palm-beach-gardens",
    neighborhoods: [
      { name: "PGA National", note: "1980s golf-community stock with heavy irrigation against stucco" },
      { name: "BallenIsles", note: "established country-club homes now past original roof life" },
      { name: "Mirasol", note: "2000s estate construction with tight envelopes and oversized AC" },
      { name: "Evergrene", note: "newer stock where interior humidity control drives complaints" },
      { name: "Frenchman's Creek", note: "waterfront community with sustained Intracoastal humidity" },
      { name: "Steeplechase", note: "large-lot homes with mature canopy and slow post-rain drying" },
    ],
    landmarks: ["The Gardens Mall", "PGA Boulevard corridor", "Downtown Palm Beach Gardens", "Loggerhead Marinelife Center"],
    zips: ["33403", "33408", "33410", "33418"],
    geo: { lat: 26.8234, lng: -80.1387 },
    housingEra: "1980s-2000s master-planned",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1980s-2000s", note: "Master-planned communities built to modern code, with 1980s stock now in its second roof cycle." },
      { label: "Country-club density", value: "High", note: "Daily landscape irrigation against stucco elevations is a persistent moisture source independent of rainfall." },
      humidityStat,
    ],
    commonIssues: [
      "Irrigation overspray keeping stucco elevations permanently damp",
      "Oversized AC short-cycling in large estate homes, leaving humidity high",
      "Aging tile and flat roof assemblies leaking at penetrations",
      "Intracoastal humidity condensing in waterfront community homes",
    ],
    seasonal: "Seasonal residency is the driver in Palm Beach Gardens' country-club communities. Homes closed from May through October ride out the entire wet season with the thermostat set high and no dehumidification, which is why we sample the highest spore counts here in early fall.",
    market: "Gardens buyers frequently close remotely on seasonally vacant homes. An independent assessment before closing documents what a summer of minimal cooling actually did — something a walkthrough in January will not reveal.",
  },
  "riviera-beach": {
    slug: "riviera-beach",
    neighborhoods: [
      { name: "Singer Island", note: "barrier-island condos and homes taking direct salt spray" },
      { name: "Riviera Beach Marina District", note: "waterfront stock with constant marine humidity" },
      { name: "Ocean Walk area", note: "beachside properties exposed to wind-driven rain" },
      { name: "Mainland Riviera Beach", note: "older single-family stock with original envelopes" },
      { name: "Port District", note: "industrial-adjacent properties with mixed-age construction" },
      { name: "Intracoastal corridor", note: "canal and waterway lots with sustained grade-level humidity" },
    ],
    landmarks: ["Singer Island", "Port of Palm Beach", "Riviera Beach Marina Village", "Peanut Island"],
    zips: ["33403", "33404", "33407", "33418"],
    geo: { lat: 26.7753, lng: -80.0581 },
    housingEra: "1950s-1970s mainland, 1970s-2000s Singer Island",
    stats: [
      codeStat("Palm Beach"),
      { label: "Housing era", value: "1950s-1970s", note: "Mainland stock is among the oldest in northern Palm Beach County, largely pre-vapor-barrier." },
      { label: "Coastal exposure", value: "Direct", note: "Singer Island takes unobstructed ocean salt spray and wind-driven rain year-round." },
      climateStat,
    ],
    commonIssues: [
      "Salt-air corrosion opening flashing and fastener gaps on Singer Island",
      "Wind-driven rain intrusion at oceanfront sliders and windows",
      "High-rise stack effect moving humid air through condo assemblies",
      "Original 1950s-60s wall assemblies in mainland single-family stock",
    ],
    seasonal: "Singer Island's oceanfront exposure means salt air works on flashing and fasteners all year, quietly opening the gaps that the June-through-October wet season then drives water through. The two seasons compound rather than alternate.",
    market: "Singer Island's high-rise condo market has moisture dynamics single-family inspections do not cover — stack effect, shared risers, and building-wide envelope performance. Unit-level findings often trace to building-level causes.",
  },

  // --------------------------------------------------------------- BROWARD
  "fort-lauderdale": {
    slug: "fort-lauderdale",
    neighborhoods: [
      { name: "Victoria Park", note: "1920s-50s homes with original assemblies under renovated finishes" },
      { name: "Rio Vista", note: "waterfront estates with sustained canal humidity at grade" },
      { name: "Coral Ridge", note: "mid-century stock with original single-pane glazing" },
      { name: "Las Olas Isles", note: "canal-front homes taking salt air and tidal humidity" },
      { name: "Sailboat Bend", note: "the city's oldest surviving housing, largely pre-1940" },
      { name: "Colee Hammock", note: "historic homes with mature canopy and slow post-rain drying" },
    ],
    landmarks: ["Las Olas Boulevard", "Fort Lauderdale Beach", "Riverwalk Fort Lauderdale", "Hugh Taylor Birch State Park"],
    zips: ["33301", "33304", "33305", "33306", "33308", "33312", "33315", "33316"],
    geo: { lat: 26.1224, lng: -80.1373 },
    housingEra: "1920s-1960s core, 1970s+ outlying",
    stats: [
      codeStat("Broward"),
      { label: "Housing era", value: "1920s-1960s core", note: "Sailboat Bend, Victoria Park, and Colee Hammock predate vapor barriers and modern flashing entirely." },
      { label: "Canal frontage", value: "Extensive", note: "Roughly 165 miles of inland waterways put a large share of the housing stock at sustained waterfront humidity." },
      humidityStat,
    ],
    commonIssues: [
      "Tidal and canal humidity wicking into slabs and baseboards",
      "Original pre-1940 wall assemblies in Sailboat Bend and Victoria Park",
      "Salt-air degradation of flashing on Las Olas Isles waterfront homes",
      "HVHZ-tight renovations trapping humidity in historic envelopes",
    ],
    seasonal: "Fort Lauderdale's wet season combines heavy rainfall with king tides that raise groundwater under slabs already at sea level. Homes that stayed dry in June routinely show baseboard moisture by October without any roof or plumbing failure at all.",
    market: "Fort Lauderdale's historic neighborhoods sell renovated interiors over 1920s-50s envelopes. Because Broward is an HVHZ county, impact-window retrofits seal those old assemblies tighter than they were designed to be — which changes how they fail.",
  },
  hollywood: {
    slug: "hollywood",
    neighborhoods: [
      { name: "Hollywood Lakes", note: "1920s-40s historic homes with original wall assemblies" },
      { name: "Emerald Hills", note: "1960s-70s stock now past original roof and AC service life" },
      { name: "Hollywood Hills", note: "mid-century homes with retrofitted cooling on original envelopes" },
      { name: "Beverly Hills", note: "established stock with mature canopy and slow drying" },
      { name: "Highland Gardens", note: "older single-family homes with original glazing" },
      { name: "Oakwood", note: "compact mid-century stock near the Intracoastal" },
    ],
    landmarks: ["Hollywood Beach Broadwalk", "ArtsPark at Young Circle", "Anne Kolb Nature Center", "Hollywood North Beach Park"],
    zips: ["33019", "33020", "33021", "33023", "33024"],
    geo: { lat: 26.0112, lng: -80.1495 },
    housingEra: "1920s-1970s",
    stats: [
      codeStat("Broward"),
      { label: "Housing era", value: "1920s-1970s", note: "Hollywood Lakes holds 1920s stock; most of the city is 1950s-70s, all pre-current moisture practice." },
      { label: "Coastal exposure", value: "Direct", note: "Beachside blocks take unobstructed salt air and wind-driven rain year-round." },
      humidityStat,
    ],
    commonIssues: [
      "Moisture behind original plaster in Hollywood Lakes historic homes",
      "Wind-driven rain at beachside windows and sliders",
      "Aging roof assemblies leaking at penetrations in 1960s-70s stock",
      "Impact-window retrofits sealing humidity into old assemblies",
    ],
    seasonal: "Hollywood's beachside blocks take wind-driven rain and salt loading from June through October, while inland historic stock fails from the inside — sealed by HVHZ-compliant retrofits and condensing humidity in walls built to breathe.",
    market: "Hollywood's historic and mid-century inventory routinely sells with new impact windows over original wall assemblies. That combination looks like an upgrade and behaves like a vapor trap, and only moisture readings distinguish the two.",
  },
  "pembroke-pines": {
    slug: "pembroke-pines",
    neighborhoods: [
      { name: "Chapel Trail", note: "1990s family stock now at first major roof replacement" },
      { name: "Pembroke Falls", note: "late-1990s construction with tight envelopes and oversized AC" },
      { name: "Silver Lakes", note: "lakefront lots with sustained grade-level humidity" },
      { name: "Towngate", note: "1980s-90s stock with aging AC and original ductwork" },
      { name: "Century Village", note: "older condo community where shared assemblies spread moisture" },
      { name: "Grand Palms", note: "golf-community homes with heavy irrigation against stucco" },
    ],
    landmarks: ["Pembroke Lakes Mall", "C.B. Smith Park", "Pembroke Pines City Center", "Everglades Water Conservation Area"],
    zips: ["33024", "33026", "33027", "33028", "33029"],
    geo: { lat: 26.0034, lng: -80.2242 },
    housingEra: "1980s-2000s master-planned",
    stats: [
      codeStat("Broward"),
      { label: "Housing era", value: "1980s-2000s", note: "Rapid master-planned growth means large tracts share the same build year — and the same failure timeline." },
      { label: "Western position", value: "Everglades edge", note: "Western communities sit near the Water Conservation Area, where high groundwater slows post-rain drying." },
      humidityStat,
    ],
    commonIssues: [
      "First-cycle roof failures across same-vintage 1990s subdivisions",
      "Oversized AC short-cycling and leaving interior humidity uncontrolled",
      "High groundwater slowing drainage in western communities",
      "Shared-assembly moisture in Century Village condo stock",
    ],
    seasonal: "Because so much of Pembroke Pines went up in the same few years, roof and AC systems across whole subdivisions reach end of life simultaneously. Wet seasons from June to October now expose that at scale, street by street.",
    market: "In tract-built Pembroke Pines communities, what we find in one home is often true of its neighbors — same builder, same year, same assemblies. That makes a documented assessment useful leverage in negotiation.",
  },
  "coral-springs": {
    slug: "coral-springs",
    neighborhoods: [
      { name: "Eagle Trace", note: "1980s golf-community homes with irrigation against stucco" },
      { name: "Heron Bay", note: "1990s-2000s construction with tight envelopes and oversized AC" },
      { name: "Ramblewood", note: "1970s-80s stock now well past original roof life" },
      { name: "Coral Creek", note: "established family stock with aging AC systems" },
      { name: "Cypress Run", note: "1980s homes with mature canopy and slow post-rain drying" },
      { name: "Turtle Run", note: "1990s construction at first major roof replacement" },
    ],
    landmarks: ["Coral Springs Center for the Arts", "Coral Springs Sportsplex", "Sawgrass Expressway corridor", "Tall Cypress Natural Area"],
    zips: ["33065", "33067", "33071", "33076"],
    geo: { lat: 26.2712, lng: -80.2706 },
    housingEra: "1970s-1990s master-planned",
    stats: [
      codeStat("Broward"),
      { label: "Housing era", value: "1970s-1990s", note: "A planned city built in distinct waves — envelope quality tracks closely to subdivision build year." },
      { label: "Inland position", value: "Low surge risk", note: "Inland location reduces storm surge exposure but not rainfall loading or ambient humidity." },
      humidityStat,
    ],
    commonIssues: [
      "Aging roof assemblies leaking at penetrations in 1970s-80s subdivisions",
      "Irrigation overspray saturating stucco in golf communities",
      "AC condensate line failures flooding air-handler closets",
      "Condensation in newer tight-envelope Heron Bay construction",
    ],
    seasonal: "Coral Springs' inland position means the wet season arrives as sustained rainfall rather than storm surge. Homes with original 1980s roof assemblies take that loading from June through October, and the leaks that result are usually discovered from the ceiling down.",
    market: "Coral Springs subdivisions were built in identifiable waves, so build year predicts a great deal about what an inspection will find. Buyers should scope the assessment to the subdivision's vintage rather than the city average.",
  },
  "pompano-beach": {
    slug: "pompano-beach",
    neighborhoods: [
      { name: "Cresthaven", note: "1950s-60s stock with original wall assemblies" },
      { name: "Palm Aire", note: "1970s-80s condo and villa community with shared assemblies" },
      { name: "Harbor Village", note: "waterfront homes with sustained canal humidity" },
      { name: "Old Pompano", note: "the city's oldest housing, largely pre-1960" },
      { name: "Hillsboro Shores", note: "beachside stock taking direct salt air and wind-driven rain" },
      { name: "Cypress Bend", note: "condo community where stack effect moves humid air" },
    ],
    landmarks: ["Pompano Beach Pier", "Hillsboro Inlet Lighthouse", "Pompano Beach Fishing Village", "Intracoastal Waterway"],
    zips: ["33060", "33062", "33063", "33064", "33069"],
    geo: { lat: 26.2379, lng: -80.1248 },
    housingEra: "1950s-1980s",
    stats: [
      codeStat("Broward"),
      { label: "Housing era", value: "1950s-1980s", note: "Older Broward stock built well before current flashing, vapor-barrier, and AC-sizing practice." },
      { label: "Coastal exposure", value: "Direct", note: "Beachside and Intracoastal properties take salt air and wind-driven rain year-round." },
      humidityStat,
    ],
    commonIssues: [
      "Salt-air degradation of flashing on beachside and Intracoastal homes",
      "Original 1950s-60s wall assemblies in Cresthaven and Old Pompano",
      "Shared-assembly moisture in Palm Aire and Cypress Bend condos",
      "Wind-driven rain intrusion at aging sliders",
    ],
    seasonal: "Pompano's beachside blocks take salt loading all year and wind-driven rain from June through October — the first opens the gaps and the second exploits them. Condo stock adds stack effect, which moves humid air upward through the building regardless of season.",
    market: "Pompano's inventory splits between aging beachside single-family stock and large condo communities. The condo question is almost always whether a unit-level symptom has a building-level cause, which unit-only inspections rarely answer.",
  },
  davie: {
    slug: "davie",
    neighborhoods: [
      { name: "Forest Ridge", note: "1980s stock with mature canopy and slow post-rain drying" },
      { name: "Shenandoah", note: "large-lot homes with equestrian use and ground moisture" },
      { name: "Ivanhoe", note: "established stock with original envelopes and aging AC" },
      { name: "Rolling Hills", note: "1970s-80s homes now past original roof service life" },
      { name: "Orange Drive corridor", note: "agricultural-heritage parcels with high groundwater" },
      { name: "Long Lake Ranches", note: "large estate lots with irrigation and slow-draining ground" },
    ],
    landmarks: ["Flamingo Gardens", "Bergeron Rodeo Grounds", "Nova Southeastern University", "Tree Tops Park"],
    zips: ["33314", "33324", "33325", "33328", "33330", "33331"],
    geo: { lat: 26.0765, lng: -80.2521 },
    housingEra: "1970s-1990s, with rural acreage",
    stats: [
      codeStat("Broward"),
      { label: "Housing era", value: "1970s-1990s", note: "Suburban stock now cycling through second roof and AC replacements." },
      { label: "Lot character", value: "Equestrian & acreage", note: "Davie retains agricultural and equestrian zoning — barns, paddocks, and irrigation create ground moisture atypical for Broward." },
      humidityStat,
    ],
    commonIssues: [
      "Barn and paddock ground moisture migrating toward residences",
      "High groundwater on agricultural-heritage parcels slowing drainage",
      "Aging roof assemblies in 1970s-80s subdivisions",
      "Irrigation overspray saturating stucco on large estate lots",
    ],
    seasonal: "Davie's agricultural land holds water. After wet-season rain the ground on acreage and equestrian parcels stays saturated for days, sustaining humidity around slabs and outbuildings long after paved neighborhoods have dried out.",
    market: "Davie is the rare Broward municipality where a property may include barns, paddocks, and outbuildings. Scoping a mold assessment to the residence alone leaves the structures most likely to be wet uninspected.",
  },
  plantation: {
    slug: "plantation",
    neighborhoods: [
      { name: "Plantation Acres", note: "large-lot homes with slow-draining ground and irrigation" },
      { name: "Jacaranda", note: "1970s-80s golf-community stock past original roof life" },
      { name: "Plantation Isles", note: "canal-front homes with sustained grade-level humidity" },
      { name: "Hawaiian Gardens", note: "established condo and villa stock with shared assemblies" },
      { name: "Plantation Gardens", note: "mid-century homes with original glazing and retrofitted AC" },
      { name: "Central Plantation", note: "1960s-70s single-family stock with original envelopes" },
    ],
    landmarks: ["Plantation Heritage Park", "Broward Mall", "Volunteer Park", "Plantation Preserve Golf Course"],
    zips: ["33313", "33317", "33322", "33323", "33324", "33325"],
    geo: { lat: 26.1276, lng: -80.2331 },
    housingEra: "1960s-1990s",
    stats: [
      codeStat("Broward"),
      { label: "Housing era", value: "1960s-1990s", note: "Older central neighborhoods predate modern moisture practice; western acreage is newer." },
      { label: "Lot character", value: "Mixed", note: "Plantation Acres offers large, slow-draining western lots alongside dense central subdivisions." },
      humidityStat,
    ],
    commonIssues: [
      "Slow-draining western acreage sustaining ground moisture after rain",
      "Aging roof assemblies in 1960s-70s central neighborhoods",
      "Canal-front slab moisture in Plantation Isles",
      "Shared-assembly moisture in condo and villa communities",
    ],
    seasonal: "Plantation Acres' large western lots drain slowly, so wet-season rain from June through October leaves ground saturated for days. Central Plantation's older, denser stock fails differently — through roof assemblies that have simply run out of service life.",
    market: "Plantation's western acreage and central subdivisions present different inspection profiles entirely. Lot size and drainage matter as much as build year on the acreage side, and barely at all in the dense central neighborhoods.",
  },
  sunrise: {
    slug: "sunrise",
    neighborhoods: [
      { name: "Sunrise Lakes", note: "1970s-80s condo community where shared assemblies spread moisture" },
      { name: "Welleby", note: "1980s single-family stock past original roof service life" },
      { name: "Springtree", note: "established homes with aging AC and original ductwork" },
      { name: "Sunrise Golf Village", note: "the city's original 1960s-70s housing stock" },
      { name: "Sawgrass area", note: "newer construction with tight envelopes and interior condensation" },
      { name: "Bonaventure-adjacent western Sunrise", note: "communities near the Everglades edge with high groundwater" },
    ],
    landmarks: ["Sawgrass Mills", "Amerant Bank Arena", "Markham Park", "Sawgrass Expressway corridor"],
    zips: ["33313", "33322", "33323", "33325", "33351"],
    geo: { lat: 26.1669, lng: -80.2564 },
    housingEra: "1960s-1990s",
    stats: [
      codeStat("Broward"),
      { label: "Housing era", value: "1960s-1990s", note: "Sunrise Golf Village holds the oldest stock; western communities are two decades newer." },
      { label: "Western position", value: "Everglades edge", note: "Western Sunrise borders the Water Conservation Area, where high groundwater slows drainage after rain." },
      humidityStat,
    ],
    commonIssues: [
      "Shared-assembly moisture across Sunrise Lakes condo buildings",
      "Aging roof assemblies in 1970s-80s single-family stock",
      "High groundwater slowing post-rain drying in western communities",
      "AC condensate failures in original air-handler closets",
    ],
    seasonal: "Western Sunrise sits at the Everglades edge, where wet-season groundwater rises under slabs and stays high for weeks. Combined with condo stock old enough to have original roof assemblies, June through October is when most of our Sunrise calls come in.",
    market: "Sunrise's large 55+ and condo inventory means moisture questions frequently become association questions. Independent documentation of where water actually originates is what moves those conversations forward.",
  },
  "deerfield-beach": {
    slug: "deerfield-beach",
    neighborhoods: [
      { name: "The Cove", note: "waterfront homes with sustained canal and Intracoastal humidity" },
      { name: "Century Village", note: "large 1970s-80s condo community with shared assemblies" },
      { name: "Deer Creek", note: "1980s golf-community stock with irrigation against stucco" },
      { name: "Independence Bay", note: "1990s construction now at first roof replacement" },
      { name: "Waterford Homes", note: "established stock with aging AC systems" },
      { name: "Crystal Lakes", note: "lakefront lots with grade-level humidity" },
    ],
    landmarks: ["Deerfield Beach International Fishing Pier", "Quiet Waters Park", "Deerfield Island Park", "Hillsboro Boulevard corridor"],
    zips: ["33441", "33442", "33064"],
    geo: { lat: 26.3184, lng: -80.0998 },
    housingEra: "1970s-1990s",
    stats: [
      codeStat("Broward"),
      { label: "Housing era", value: "1970s-1990s", note: "Large condo tracts from the 1970s-80s dominate, all built before current moisture-control practice." },
      { label: "Coastal exposure", value: "Direct", note: "Beachside and Intracoastal properties take salt air and wind-driven rain year-round." },
      humidityStat,
    ],
    commonIssues: [
      "Shared-assembly moisture across Century Village condo buildings",
      "Salt-air degradation of flashing on beachside properties",
      "Canal-front slab moisture in The Cove",
      "Aging roof assemblies in 1980s golf communities",
    ],
    seasonal: "Deerfield's seasonal-resident condos sit closed and minimally cooled from May through October, and its beachside stock takes wind-driven rain across the same months. Both produce the same early-fall call, for opposite reasons.",
    market: "Deerfield's condo-heavy inventory puts most moisture disputes between unit owners and associations. A third-party assessment with lab-backed results is the documentation those conversations actually require.",
  },
  weston: {
    slug: "weston",
    neighborhoods: [
      { name: "Windmill Ranches", note: "1990s estate homes with oversized AC and interior condensation" },
      { name: "Savanna", note: "late-1990s tract stock now at first major roof replacement" },
      { name: "Weston Hills", note: "golf-community homes with heavy irrigation against stucco" },
      { name: "Bonaventure", note: "the area's oldest stock, predating Weston's incorporation" },
      { name: "Emerald Estates", note: "1990s homes with aging AC and original ductwork" },
      { name: "The Ridges", note: "established family stock near the Everglades edge" },
    ],
    landmarks: ["Weston Town Center", "Markham Park", "Everglades Water Conservation Area", "Sawgrass Expressway corridor"],
    zips: ["33326", "33327", "33331", "33332"],
    geo: { lat: 26.1004, lng: -80.3998 },
    housingEra: "1990s-2000s master-planned",
    stats: [
      codeStat("Broward"),
      { label: "Housing era", value: "1990s-2000s", note: "One of the newest housing stocks we serve — and now uniformly reaching first-cycle roof and AC replacement." },
      { label: "Western position", value: "Everglades edge", note: "Weston borders the Water Conservation Area directly; groundwater sits high and drains slowly after rain." },
      humidityStat,
    ],
    commonIssues: [
      "Interior condensation from oversized AC in large 1990s estate homes",
      "First-cycle roof failures across same-vintage subdivisions",
      "High groundwater at the Everglades edge slowing post-rain drainage",
      "Irrigation overspray saturating stucco in golf communities",
    ],
    seasonal: "Weston's newness misleads people. The homes are tight and well-built, which means wet-season humidity that gets inside has no easy way out — and with entire subdivisions sharing a build year, roof and AC systems now fail on the same schedule street by street.",
    market: "Weston buyers often assume a 1990s master-planned home is too new to have moisture problems. It is exactly old enough: original roofs and AC systems across the city are now at or past service life, and tight envelopes punish that harder than leaky ones.",
  },
};

/** Look up a profile by city slug. Returns undefined for unknown slugs. */
export function getCityProfile(slug: string): CityProfile | undefined {
  return cityProfiles[slug];
}

/** Derive the /mold-inspection-{slug} slug from a display city name. */
export function citySlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
