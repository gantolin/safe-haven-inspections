/**
 * A block of post content: a plain string is a paragraph, `{ heading }` is a
 * subheading. Modelled explicitly rather than with a magic "## " prefix so the
 * JSON-LD articleBody can tell prose from headings instead of shipping markdown
 * syntax to search engines.
 */
export type PostBlock = string | { heading: string };

export interface Post {
  slug: string;
  title: string;
  /** Optional override for the <title> meta tag; falls back to `${title} — Safe Haven Inspections`. */
  titleTag?: string;
  description: string;
  date: string;
  readMinutes: number;
  /**
   * Optional header photo. Both files live in /public with .webp siblings;
   * the mobile crop exists because the header band is wide and short on
   * desktop but nearly square on a phone. Posts without one fall back to the
   * plain secondary-coloured header.
   */
  image?: { src: string; mobileSrc: string; alt: string };
  body: PostBlock[];
  related?: { to: string; label: string }[];
}

/*
 * The blog was reduced to this single article on 2026-08-04 at the owner's
 * direction. Eleven previously published posts were removed; they remain in
 * git history if any need to be restored. Their URLs are no longer generated,
 * so they 404 and have been dropped from the sitemap.
 */
export const posts: Post[] = [
  {
    slug: "hurricane-mold-prevention-tips",
    title: "Hurricane Mold Prevention Tips",
    titleTag: "Hurricane Mold Prevention Tips | Safe Haven",
    description:
      "Lost power after a storm? Five practical ways to stop mold before it starts: air flow, cleanliness, humidity, water damage, and what to do before you evacuate.",
    date: "2026-08-04",
    readMinutes: 5,
    // Unsplash AAHL8DtvBcg by Dorin Vancea, standard Unsplash License.
    image: {
      src: "/post-hurricane.jpg",
      mobileSrc: "/post-hurricane-mobile.jpg",
      alt: "Dark storm clouds gathering over a lit house at dusk.",
    },
    body: [
      { heading: "Air flow" },
      "One thing that mold spores need to begin to grow is time. If there is humid stagnant air for a long enough period of time, mold growth is inevitable. If you've lost power and the indoor humidity begins to reach levels above 60% relative humidity, cracking windows to allow a breeze to flow through the house can be enough to prevent any mold growth. Also, if you happen to have a battery-operated fan, now would be a clever time to use it, especially in areas where air flow is limited.",
      { heading: "A clean house" },
      "This might be surprising to some, but the next necessity for mold to begin to grow is food. Mold eats cellulose-based organic material, and dust and dirt can provide enough food for mold to get its roots in. Dust and dirt also happen to settle in the exact locations mold spores do, which is horizontal surfaces: the top of your baseboards or picture frames, for example. If you keep your house clean, you're removing an easy target for mold growth.",
      { heading: "Dehumidify" },
      "If you have a dehumidifier and a generator, great: use them if you're able to. For many who might not be so lucky, there are some natural ways to bring humidity down. One easy way is to remove indoor plants. There are also products you can purchase, like rock salt or DampRid, which you can pick up at a hardware store: simple, cheap, and great temporary tricks to keep humidity down.",
      { heading: "Water damage" },
      "If water does enter your place of residence, it might be worth removing some drywall. For instance, if there are a couple of inches of water in a room that came in from flooding, removing 1–2 feet of drywall on the bottom portion can prevent any further damage. Just make sure you ALWAYS take lots of pictures. You'll want everything you've got if you plan on making any kind of insurance claim, and that includes pictures of damaged items as well.",
      { heading: "Before evacuation" },
      "If you leave your home or evacuate, shut off the water supply to your house and take before pictures. You never know what condition your house will be in when you come back, and having pictures of what it looked like beforehand can really help if anything goes wrong, especially from a coverage standpoint. Shutting off your water also ensures that any water line going into your house will not have pressure behind it in the case where it cracks or breaks. Having years of remediation experience, we can't tell you how many times a homeowner called after coming home from an extended weekend to find their furniture floating. Trust us, it happens, so it's better to play it safe.",
      { heading: "If a storm has already hit" },
      "An independent assessment will tell you what's actually growing and where, before repairs close everything up. Call (561) 632-6387 or request an inspection across Martin, Palm Beach, and Broward Counties.",
    ],
    related: [
      { to: "/services/water-damage-inspection/", label: "Water Damage & Post-Storm Inspection" },
      { to: "/services/humidity-testing/", label: "Humidity Testing & Psychrometrics" },
      { to: "/services/mold-inspection/", label: "Full Mold Inspection" },
      { to: "/contact/", label: "Request an inspection" },
    ],
  },
  {
    slug: "do-mold-test-kits-work",
    title: "Do Mold Test Kits Work?",
    titleTag: "Do Mold Test Kits Work? An Assessor's Answer | Safe Haven",
    description:
      "Home mold test kits almost always find mold, because every house has mold spores in the air. Here is what a petri dish can tell you, what it cannot, and what to do instead.",
    date: "2026-09-07",
    readMinutes: 6,
    // Landon's own field photo: the calibrated spore-trap pump, which is the
    // professional counterpart to the petri dish this post is about.
    image: {
      src: "/post-air-sampling.jpg",
      mobileSrc: "/post-air-sampling-mobile.jpg",
      alt: "Calibrated air sampling pump with its flow meter set during a mold inspection.",
    },
    body: [
      "Every few weeks somebody calls us holding a petri dish they bought at the hardware store, and the conversation always opens the same way: it grew something, so now what? It is a fair question, and the answer is more interesting than either yes or no.",
      { heading: "The short answer" },
      "A twelve dollar settle-plate kit will almost always grow mold. That is not evidence your house has a problem. It is evidence that you live on Earth. Mold spores are in the air of every building in South Florida, including brand new ones, including the clean ones, including ours. Give those spores a dish of nutrient agar and a few warm days and they will do exactly what they are designed to do.",
      "So the kit is not lying to you. It is answering a question you did not need answered.",
      { heading: "The question that actually matters" },
      "Nobody hires a mold assessor to find out whether mold exists. The useful questions are narrower than that, and they sound like this. Is the level inside my house higher than the level outside it? Is there a moisture source feeding growth somewhere I cannot see? Is what is growing here the kind of thing that matters, or is it the same background mix that blew in through the front door?",
      "A petri dish cannot reach any of those. It has no outdoor comparison, no moisture data, and no idea where in the house it was sitting.",
      { heading: "There is no number to compare your result to" },
      "This is the part most people are surprised by. There is no federal standard for an acceptable indoor mold spore count. No EPA threshold, no OSHA limit, no legal line that says above this number your home is unsafe. None of that exists.",
      "Which means a kit result has nothing to be measured against. When a lab report says 1,400 spores per cubic meter, that number only becomes meaningful when it sits next to an outdoor control sample taken the same day, in the same weather, at the same property. Fourteen hundred spores indoors against 4,000 outdoors is an unremarkable house. Fourteen hundred indoors against 300 outdoors is a house with something going on inside it. Same indoor number, opposite conclusions.",
      "A kit gives you the first number and never the second.",
      { heading: "What the EPA actually says" },
      "The EPA guidance is more blunt than most people expect. If you can see mold or smell it, sampling is usually unnecessary. You already know. Spend the money on finding and fixing the water instead of confirming what your eyes and nose have told you.",
      "And when sampling is warranted, the EPA says it should be done by professionals with specific experience, using established methods, with the results interpreted by someone who understands what they mean. That is not a marketing line invented by inspectors. It is in the agency published guidance on mold in homes and buildings.",
      { heading: "Mail-in lab kits are better, and still incomplete" },
      "There is a real difference between the petri dish kits and the ones that ship your sample to an actual laboratory. The mail-in versions use accredited labs doing legitimate analysis, and the numbers that come back are real numbers.",
      "The gap is everything around the number. No outdoor baseline taken at your address on the day of sampling. No moisture meter readings in the wall below the stain. No thermal scan of the ceiling under the roof valley. No humidity logging in the closet where the smell is worst. Nobody standing in the room noticing that the air handler closet has a rusted drain pan.",
      "The lab result is a single data point. An inspection is the context that turns it into an answer.",
      { heading: "The three things a kit cannot do" },
      "First, it cannot find the water. Mold is a symptom, and moisture is the disease. Every real mold problem we have ever documented had a source: a roof penetration, a failed window seal, a supply line sweating in a wall cavity, an oversized air handler that cools the house without ever pulling the humidity down. A dish on a countertop cannot locate any of that.",
      "Second, it cannot tell you the scale. A positive result gives you no idea whether you are looking at a square foot behind a baseboard or forty square feet inside a wall. That distinction is the entire difference between a weekend and a remediation contract.",
      "Third, it cannot produce anything anyone else will accept. If you are filing an insurance claim, negotiating a repair credit before closing, or documenting a landlord dispute, a hardware store petri dish carries no weight with an adjuster, an agent, or an attorney. A licensed assessment with chain of custody and lab analysis does.",
      { heading: "So when is a kit worth buying?" },
      "Honestly, there is a case for it. If you are simply curious, if nothing smells, nothing looks wrong, nobody in the house is symptomatic, and you want to poke at the question for the price of a sandwich, buy the kit. It is a fine way to satisfy an itch.",
      "What we would ask is that you do not make a decision with it. Do not skip an inspection because the dish stayed clear, and do not panic and call a remediation company because it did not. Neither result earns that much authority.",
      { heading: "What we do instead" },
      "A mold inspection starts with the building, not the sample. We walk the property looking at the places water actually gets in, take moisture readings in the materials themselves, scan with infrared where the meter suggests something is behind the surface, and log temperature and humidity to see whether the house is capable of drying itself out.",
      "Sampling comes after that, because by then we know where to sample and why. An outdoor control goes first, every time. Then indoor samples in the areas the walkthrough flagged. Everything ships to an accredited third-party lab under chain of custody, and you get a written report that puts the numbers side by side and says plainly what they mean for your house.",
      "And because Safe Haven does inspection and testing only, there is no cleanup contract waiting at the end of it. If your house is fine, we get to tell you your house is fine, and that is the whole job.",
      { heading: "If you already ran a kit" },
      "Bring the result. Genuinely. It is a data point and we will look at it. Just let us put a proper baseline, a moisture map, and a set of eyes around it before you decide what it means. Call (561) 632-6387 or request an inspection anywhere in Palm Beach, Broward, or Martin County.",
    ],
    related: [
      { to: "/services/mold-testing/", label: "Mold Testing: air, surface, and bulk sampling" },
      { to: "/services/air-quality-testing/", label: "Indoor Air Quality Testing" },
      { to: "/services/mold-inspection/", label: "Full Mold Inspection" },
      { to: "/contact/", label: "Request an inspection" },
    ],
  },
  {
    slug: "asbestos-test-kits-what-they-get-right",
    title: "Asbestos Test Kits: What They Get Right, and the Part They Cannot Mail You",
    titleTag: "Do Asbestos Test Kits Work? The Sampling Problem | Safe Haven",
    description:
      "Mail-in asbestos kits use real accredited labs, so the analysis is usually fine. The risk is in the scraping. Here is why collecting the sample is the hazardous half.",
    date: "2026-09-06",
    readMinutes: 6,
    image: {
      src: "/post-asbestos-sampling.jpg",
      mobileSrc: "/post-asbestos-sampling-mobile.jpg",
      alt: "Safe Haven inspector taking an instrument reading on wall and baseboard material in a South Florida home.",
    },
    body: [
      "Asbestos kits deserve a fairer hearing than mold kits, and we want to start there, because the internet is full of inspectors telling you every DIY kit is worthless. That is not true here, and the reason it is not true is worth understanding.",
      { heading: "The lab is not the problem" },
      "When you mail a chip of floor tile to an accredited laboratory, a technician puts it under a polarized light microscope and identifies whether it contains asbestos fibers and roughly what percentage. That is standard, well-established analysis. The lab does not know or care whether the sample came from a certified inspector or from a homeowner with a box cutter. The result is the result.",
      "So if you are wondering whether the analysis in a mail-in kit is real science: yes, generally it is. That half of the kit works.",
      { heading: "The sampling is the problem" },
      "Here is the part the box does not dwell on. Asbestos in intact, undisturbed material is not doing anything to you. It sits in the ceiling texture or the tile or the pipe wrap, bound up, stable, harmless while nobody touches it. The hazard begins when the material is broken, scraped, sanded, cut, or crumbled, because that is what puts fibers into the air where they can be breathed.",
      "Which means the act of collecting a sample is, precisely, the act of disturbing the material. A homeowner scraping a popcorn ceiling dry, with no water, no containment, no respirator, standing directly underneath it, has just performed the one activity the test was meant to help them avoid. And they have done it in their own living room, with the air conditioning running, before they had any idea whether the material was positive.",
      "That is the asymmetry. A professional sample and a DIY sample produce the same lab report. They do not produce the same room.",
      { heading: "A bad sample can come back clean" },
      "The second issue is quieter and catches more people. Building materials are not uniform. A house may have been re-textured in one wing and not the other, or had tile replaced in the kitchen but not the hallway, or been patched after a leak with a completely different compound. Grab a scraping from a spot that happens to be the newer material and the result comes back negative on a house that still has asbestos in it.",
      "A negative result on the wrong sample is worse than no test at all, because now you have documentation telling you to proceed. Representative sampling, meaning knowing which materials are genuinely distinct and taking enough samples to cover them, is most of the skill in this work. It is also the part a kit cannot ship you in an envelope.",
      { heading: "What the EPA and CPSC say" },
      "Both agencies land in the same place. The EPA guidance on protecting your family from asbestos and the Consumer Product Safety Commission guidance on asbestos in the home both direct homeowners to have sampling done by a trained, accredited asbestos professional rather than doing it themselves, and both stress leaving intact material alone in the meantime.",
      "The reasoning is exactly what is described above. It is not that homeowners cannot follow instructions. It is that the instructions require wetting agents, containment, respiratory protection, and judgment about which materials are distinct, and the consequence of getting it wrong is measured in fibers you cannot see and will not notice for thirty years.",
      { heading: "What proper sampling looks like" },
      "In practice it is unglamorous. The area gets misted so nothing goes airborne. A small piece is cut or scraped from an inconspicuous spot, not chipped off with a hammer. It goes straight into a sealed, labeled container. The spot gets patched. Every sample is logged under chain of custody so a building department or an insurer can rely on it later.",
      "The whole visit for a typical home is usually under an hour, and most of that hour is walking the property deciding what is worth sampling, not the sampling itself.",
      { heading: "The popcorn ceiling question" },
      "This is the single most common reason anyone calls us about asbestos, so here is the direct answer. Popcorn ceilings sprayed before the late 1970s often contain asbestos. Plenty from the same era contain none. Some ceilings installed later do contain it, because old stock sat on shelves and job sites for years after manufacturing stopped.",
      "There is no way to tell by looking. Not by texture, not by color, not by how it crumbles. And please do not test it by rubbing at it to see what happens, which is a thing people do more often than you would think.",
      "If you are planning to scrape, cover, or knock down a popcorn ceiling in a house built before roughly 1990, test it first. It is a small sample, a one day turnaround, and it changes the entire cost and legality of the job you were about to start.",
      { heading: "When a kit makes sense" },
      "If the material is already broken, if it is somewhere you will never touch, and you simply want to know for your own records, a mail-in kit with careful wetting and a mask is a defensible choice. Plenty of people do it and are fine.",
      "But if you are about to renovate, if you are pulling a permit, if you are buying the house, or if the result will be shown to anyone other than you, get it sampled properly. The document matters as much as the number by then, and chain of custody is what makes a document mean something.",
      { heading: "What we do" },
      "Landon is a certified asbestos inspector as well as a Florida-licensed mold assessor, which means one visit can answer both questions. Samples go to Eurofins Built Environment and results come back within 24 hours with a written report listing each sample, its location, and what the lab found.",
      "We test only. We do not remove asbestos, we do not subcontract abatement, and we take nothing from the contractors who do. A negative result from us is worth the same as a positive one, which is the entire point of hiring the person who has nothing to sell you afterward.",
      "Call (561) 632-6387 or request testing anywhere in Palm Beach, Broward, or Martin County.",
    ],
    related: [
      { to: "/services/asbestos-testing/", label: "Asbestos Testing" },
      { to: "/services/mold-inspection/", label: "Full Mold Inspection" },
      { to: "/services/real-estate-mold-inspection/", label: "Mold Inspection When Buying a House" },
      { to: "/contact/", label: "Request an inspection" },
    ],
  },
];

export function findPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
