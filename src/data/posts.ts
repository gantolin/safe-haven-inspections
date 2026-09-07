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
  /** Optional override for the <title> meta tag; falls back to `${title} | Safe Haven Inspections`. */
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
  /**
   * Primary sources for the factual claims in the post, rendered as a list at
   * the end of the article. These are deliberately dofollow: linking out to
   * EPA, CDC, CPSC and the Florida Statutes is the citation trail that backs
   * the claims up, and burying it behind nofollow would defeat the point.
   */
  sources?: { label: string; href: string; note?: string }[];
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
    sources: [
      { label: "EPA, A Brief Guide to Mold, Moisture and Your Home", href: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home", note: "on keeping indoor relative humidity below 60 percent." },
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
    sources: [
      { label: "EPA, Mold Testing or Sampling", href: "https://www.epa.gov/mold/mold-testing-or-sampling", note: "on why sampling should be done by professionals with specific experience, and on the absence of any EPA or federal standard for airborne mold." },
      { label: "EPA, A Brief Guide to Mold, Moisture and Your Home", href: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home", note: "on sampling being unnecessary when growth is visible, and on the 30 to 60 percent humidity range." },
      { label: "CDC, Mold and Health", href: "https://www.cdc.gov/mold-health/about/index.html", note: "on species identification: you do not need to know the type of mold." },
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
    sources: [
      { label: "EPA, Protect Your Family from Exposures to Asbestos", href: "https://www.epa.gov/asbestos/protect-your-family-exposures-asbestos", note: "on leaving intact asbestos-containing material undisturbed and using trained professionals." },
      { label: "CPSC, Asbestos In The Home", href: "https://www.cpsc.gov/safety-education/safety-guides/home/asbestos-home", note: "on sampling: taking samples yourself is not recommended, and analysis belongs at an NVLAP-accredited laboratory." },
    ],
    related: [
      { to: "/services/asbestos-testing/", label: "Asbestos Testing" },
      { to: "/services/mold-inspection/", label: "Full Mold Inspection" },
      { to: "/services/real-estate-mold-inspection/", label: "Mold Inspection When Buying a House" },
      { to: "/contact/", label: "Request an inspection" },
    ],
  },
  {
    slug: "does-homeowners-insurance-cover-mold-in-florida",
    title: "Does Homeowners Insurance Cover Mold in Florida?",
    titleTag: "Does Homeowners Insurance Cover Mold in Florida? | Safe Haven",
    description:
      "Usually yes, if the water was sudden and accidental, and usually no if it was slow. Here is how Florida carriers actually decide a mold claim, and what changes the answer.",
    date: "2026-09-05",
    readMinutes: 7,
    image: {
      src: "/post-insurance-thermal.jpg",
      mobileSrc: "/post-insurance-thermal-mobile.jpg",
      alt: "Thermal image showing a cool moisture plume spreading across a ceiling.",
    },
    body: [
      "The honest answer is that it depends on one thing far more than any other, and it is not how much mold there is or how sick anyone feels. It is where the water came from.",
      { heading: "Sudden and accidental versus slow and boring" },
      "Almost every Florida homeowners policy is built around the same distinction. Water that arrives suddenly and by accident is generally covered. A supply line that lets go under the sink, a water heater that splits, a roof opened by a storm, a washing machine hose that fails while you are at work. Mold that grows out of one of those events is usually covered too, because it is treated as a consequence of the covered loss.",
      "Water that arrives slowly is generally not. A shower pan that has been weeping into the subfloor for two years, a window seal that has been letting rain track down inside the wall since the last hurricane, condensation on ductwork that has been dripping every summer. Carriers call this long-term seepage, and most policies exclude it by name. So does deferred maintenance, which is the category adjusters reach for when a roof was already past its service life.",
      "You can see why this matters in a place like South Florida, where a slow leak in a humid house produces exactly the same visible result as a fast one. The mold looks identical. The claim outcome is not.",
      { heading: "The number nobody reads until it is too late" },
      "Even on a covered claim, most Florida policies cap mold separately from everything else. It is called a mold sublimit, and it sits in the mold endorsement rather than on the declarations page most people glance at. It is often a small fraction of the dwelling limit.",
      "This catches people badly. A homeowner with substantial dwelling coverage assumes that number applies to the mold, discovers the sublimit partway through, and finds the remediation estimate is several times the cap. Worth reading your endorsement now, while nothing is wet, rather than during the week you are trying to get walls opened.",
      { heading: "The clock is shorter than it used to be" },
      "Florida reformed its claim statutes in December 2022, and the windows tightened. There are deadlines running against your carrier once you give notice, and there are deadlines running against you from the date of loss. Both matter, and both have moved in recent years, so confirm the current numbers rather than relying on a blog post, including this one.",
      "The practical version is simpler: notify early, because delay itself becomes an argument. Carriers deny claims on late notice, and a genuinely covered loss can fail on the calendar alone.",
      "There is a second clock too, and it is biological. Mold colonizes wet material in roughly 24 to 48 hours in South Florida conditions. That is not a scare number, it is just how fast things grow when it is 80 degrees and humid. The longer the material stays wet, the more the damage looks like the slow kind the policy excludes, whatever actually happened.",
      { heading: "Why the remediation company's report lands differently" },
      "Here is a thing homeowners find out the hard way. If the report documenting the damage comes from the company that will be paid to fix the damage, an adjuster reads it with that in mind.",
      "Florida actually legislates the separation. A licensed mold assessor cannot remediate a property their company assessed within the previous twelve months, and a remediator cannot assess one their company remediated in that window. So the report and the invoice are supposed to come from different companies, and when they do not, that is a problem before anyone even reads the findings.",
      "This is the whole reason independent assessment exists as a category. Not because remediators are dishonest, but because a scope written by the party who bills for the scope has an obvious pull on it, and adjusters price that pull into how much weight the document gets.",
      { heading: "What actually moves a claim" },
      "Adjusters are not persuaded by how bad it looks. They are persuaded by documentation that lets them reconstruct what happened without having been there. In practice that means moisture readings taken in the materials themselves rather than described in general terms, thermal images showing how far the water traveled, photographs keyed to specific locations, and lab results when sampling was warranted.",
      "The single most valuable thing in a mold claim file is usually causation evidence. Not proof that mold exists, which nobody disputes, but a documented account of where the water came in and how it spread. That is the argument the claim actually turns on, and it is the part that disappears the moment demolition starts.",
      { heading: "If your claim was already denied" },
      "Denials in this space are usually about causation, not about whether mold is present. The adjuster concluded the water was the slow kind. That conclusion can be wrong, and it can be argued, but only with something specific to argue from.",
      "An independent assessment after a denial gives you a documented alternative account: where the moisture readings actually are, what the growth pattern suggests about direction and duration, what the thermal survey shows about the path. That is a different conversation from disagreeing with an adjuster's opinion.",
      { heading: "What to do in the first hour" },
      "Photograph everything before you move it, including the source if you can see it. Stop the water. Call your carrier and open the claim. Do not let anyone start cutting until the condition has been documented, because once the wall is open the evidence of what happened is in a dumpster.",
      "Then get an assessment from someone who does not sell the cleanup. Read more about how we build documentation for adjusters, or call (561) 632-6387 anywhere in Palm Beach, Broward, or Martin County. We are a licensed mold assessor, not a public adjuster and not an attorney. We document the property accurately and hand you a report. Arguing the claim is somebody else's job, and keeping those jobs separate is exactly what makes the report worth something.",
    ],
    sources: [
      { label: "Florida Statutes 627.70131, Insurer duties and claim deadlines", href: "https://www.flsenate.gov/Laws/Statutes/2024/627.70131", note: "the insurer acknowledgement, inspection and pay-or-deny windows, as amended in December 2022. Confirm the current text before relying on any specific number." },
      { label: "Florida Statutes 468.8419, Prohibitions and penalties", href: "https://www.flsenate.gov/Laws/Statutes/2024/468.8419", note: "the bar on assessing and remediating the same property within twelve months." },
      { label: "EPA, Flood Cleanup to Protect Indoor Air Quality", href: "https://www.epa.gov/indoor-air-quality-iaq/flood-cleanup-protect-indoor-air-quality", note: "on the 24 to 48 hour window before wet material is assumed to be growing mold." },
    ],
    related: [
      { to: "/services/insurance-claim-mold-inspection/", label: "Mold Inspection for Insurance Claims" },
      { to: "/services/water-damage-inspection/", label: "Water Damage & Moisture Intrusion Assessment" },
      { to: "/services/mold-assessment-report/", label: "Mold Assessment Report & Written Protocol" },
      { to: "/contact/", label: "Request an inspection" },
    ],
  },
  {
    slug: "what-black-mold-actually-is",
    title: "What Black Mold Actually Is, and What It Isn't",
    titleTag: "What Black Mold Actually Is (and Isn't) | Safe Haven",
    description:
      "Color tells you almost nothing about mold. Here is what Stachybotrys really is, why the black mold panic outran the evidence, and when species identification genuinely matters.",
    date: "2026-09-04",
    readMinutes: 6,
    image: {
      src: "/post-black-mold.jpg",
      mobileSrc: "/post-black-mold-mobile.jpg",
      alt: "Moisture meter pressed against a wall above the baseboard in an older Florida home.",
    },
    body: [
      "Nearly every call that starts with the words black mold is really a call about a dark patch on a wall. That is a completely reasonable thing to be worried about. It is just not the same question as the one the phrase implies.",
      { heading: "Black is a color, not a species" },
      "Dozens of molds present as dark green, brown, or black. Cladosporium is extremely common and often looks black on a bathroom wall. Aspergillus and Penicillium species can read dark depending on what they are growing on and how mature the colony is. Even ordinary soot and mildew staining get called black mold by people who are, understandably, not mycologists.",
      "When most people say black mold they are thinking of Stachybotrys chartarum, which is a real organism that genuinely does grow in buildings. It is greenish black, it prefers material with high cellulose content and sustained wetness, and it turns up on drywall paper, on the back of wallpaper, and in ceiling material that has been wet for a long stretch rather than a short one.",
      "You cannot tell any of them apart by looking. Neither can we, which is the entire reason a lab exists.",
      { heading: "How the panic got ahead of the evidence" },
      "In the 1990s a cluster of infant illnesses was tentatively linked to Stachybotrys exposure in homes. The story moved fast, the term toxic black mold entered the language, and an industry grew around it. The original link was later reexamined and the causal conclusion did not hold up as first reported.",
      "What is genuinely supported is narrower and less dramatic. Stachybotrys can produce mycotoxins under some conditions. Damp indoor environments are associated with respiratory symptoms, aggravated asthma, and allergic reactions, and that association is well documented across many mold types rather than one villain species. People with asthma, allergies, or compromised immune systems have a harder time in damp buildings, which is not controversial at all.",
      "What is not well established is the dramatic version: that ordinary household Stachybotrys reliably causes severe systemic illness in otherwise healthy people. That claim outran its evidence, and it is still being sold.",
      "We are an assessment company, not a medical one. If someone in your home is unwell, that is a conversation for a physician and we will say so. Our job is telling you accurately what is in the building.",
      { heading: "The practical answer that annoys people" },
      "Here is the part that disappoints callers hoping for a dramatic verdict. For deciding what to do about it, the species usually does not change much.",
      "Public health guidance from the CDC and EPA lands in roughly the same place: mold growing indoors should be removed and the moisture feeding it should be fixed, regardless of type. Nobody recommends leaving a non-Stachybotrys colony in a wall because it scored better on identification. The fix is the same fix. Find the water, stop the water, clean up what grew, verify it is done.",
      "So a homeowner who wants to know whether to act does not usually need a species name. They need to know where the moisture is coming from, which is a different investigation entirely and the one we spend most of our time on.",
      { heading: "When identification actually matters" },
      "There are real cases where it does, and they are worth naming because otherwise this reads as an argument against testing, which it is not.",
      "Insurance and legal files often need it. A claim or a dispute is a document exercise, and a lab result with chain of custody is evidence in a way that an opinion is not. Real estate transactions frequently need it for the same reason, because a buyer and a seller need one neutral document rather than two arguments.",
      "Medical context can call for it, when a physician is treating someone with a specific sensitivity and wants to know what is actually present. Clearance testing needs it after remediation, because verifying that a specific problem is gone requires knowing what the problem was. And unusual findings sometimes warrant it: growth in an odd location, or a pattern that does not match the moisture story we were told, occasionally means the situation is not what anyone assumed.",
      { heading: "How we would actually answer your question" },
      "If you have a dark patch, the sequence is not glamorous. We look at it, we take moisture readings in the material around it, we scan for what is happening behind the surface, and we work out whether there is an active water source or a historical one. If a name is needed, black mold testing is a swab, tape lift, or bulk sample sent to an accredited lab, and the answer comes back in about a day.",
      "Most of the time the finding that changes your life is not the species. It is the failed window seal three feet away that nobody had looked at.",
      "Call (561) 632-6387 if you have something dark on a wall and want a straight answer about it. We test and report only, so if it turns out to be nothing, we get to tell you it is nothing.",
    ],
    sources: [
      { label: "CDC, Mold and Health", href: "https://www.cdc.gov/mold-health/about/index.html", note: "on treating all indoor mold the same way for cleanup purposes, and on the fact that you do not need to know the species." },
      { label: "EPA, A Brief Guide to Mold, Moisture and Your Home", href: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home", note: "on dampness, health effects, and fixing the moisture source rather than the growth alone." },
      { label: "EPA, Mold Testing or Sampling", href: "https://www.epa.gov/mold/mold-testing-or-sampling", note: "on the limits of sampling and the absence of federal standards to compare a result against." },
    ],
    related: [
      { to: "/services/surface-sampling/", label: "Black Mold Testing & Surface Sampling" },
      { to: "/services/mold-testing/", label: "Mold Testing: air, surface, and bulk" },
      { to: "/services/mold-inspection/", label: "Full Mold Inspection" },
      { to: "/contact/", label: "Request an inspection" },
    ],
  },
  {
    slug: "musty-smell-but-no-visible-mold",
    title: "Musty Smell but No Visible Mold? Start Here",
    titleTag: "Musty Smell but No Visible Mold? Start Here | Safe Haven",
    description:
      "That smell is not your imagination and it is not just old-house smell. Here is what actually produces it, the places it hides in a Florida home, and how to find it without opening walls.",
    date: "2026-09-03",
    readMinutes: 6,
    image: {
      src: "/post-musty-smell.jpg",
      mobileSrc: "/post-musty-smell-mobile.jpg",
      alt: "Thermal scan of a wall and floor corner showing a cold spot where moisture is present.",
    },
    body: [
      "This is the single most common call we get. Nothing is visible, nothing is obviously wet, but a room smells like a basement in a state that does not have basements.",
      { heading: "The smell is a real measurement" },
      "That odor has a name. Microbial volatile organic compounds, which is a long way of saying the gases mold gives off while it is actively metabolizing. You are not smelling the mold itself. You are smelling its exhaust.",
      "That matters for two reasons. First, the smell means something is currently growing rather than something grew once and dried out. Dormant growth is much quieter. Second, gases travel. They move through wall cavities, up through floor penetrations, along duct runs, and out of a return vent two rooms away from the source. The place you smell it is frequently not the place it is happening.",
      { heading: "Why you stop noticing it" },
      "Olfactory fatigue is real and it works against you. Live with an odor and your brain filters it out within minutes. This is why guests notice things you do not, and why the smell seems to come back when you return from vacation.",
      "Use that. Walk out of the house for twenty minutes, come back in, and pay attention to the first breath through the front door. That first impression is the most honest reading you will get, and it is the same trick we use walking into a property.",
      { heading: "Six places it usually is" },
      "In South Florida the same handful of locations account for most of these calls.",
      "The air handler closet is first by a wide margin. A drain pan that is not draining, a clogged condensate line, a filter that stayed in too long, biological growth on a coil. The system then distributes the smell through every room it serves, which is why whole-house musty smell so often has a single mechanical source.",
      "Exterior wall closets are second. A closet on an outside wall, packed with clothing, with the door shut most of the time, is a pocket of still air against the coolest surface in the room. Condensation forms, nothing dries, and the smell builds behind the shoes.",
      "Under sinks and behind dishwashers, where a slow supply or drain connection has been weeping into a cabinet base long enough to soften the particleboard.",
      "Around windows, especially older single-glazed units, where the seal has failed and rain tracks down inside the wall instead of outside it. The stain shows up years after the leak starts.",
      "Ceilings below roof valleys and penetrations, where aged underlayment lets water in slowly enough that the drywall face still looks fine while the cavity above it does not.",
      "And the slab edge behind baseboards, where irrigation sprayed against stucco elevations for years pushes moisture back into the bottom of the wall.",
      { heading: "The humidity possibility" },
      "Sometimes there is no leak at all. If your indoor relative humidity spends real time above about 60 percent, surfaces stay damp enough for growth without a single drop of liquid water entering the house.",
      "The usual culprit is air conditioning that cools well and dehumidifies badly. An oversized system satisfies the thermostat quickly and shuts off before it has run long enough to pull meaningful moisture out of the air. The house is cold and clammy at the same time, and people conclude the AC is working because the temperature is right. A cheap hygrometer settles this question for about fifteen dollars and is genuinely worth owning in this climate.",
      { heading: "What you can check yourself" },
      "Open the air handler closet and look at the drain pan and the line. Standing water or a slimy line is your answer more often than not. Pull everything out of the suspect closet and feel the exterior wall with the back of your hand. Look under every sink with a flashlight, including the back corners where the cabinet meets the wall. Put a hygrometer in the room that smells worst and leave it for a few days rather than reading it once.",
      "What we would ask you not to do is start cutting drywall to find it. That is how a small investigation becomes a large repair, and open wall cavities spread spores around a house that was previously containing them.",
      { heading: "How we find it without demolition" },
      "The whole point of the equipment is that it is non-destructive. A moisture meter reads what is actually in the material rather than what it looks like. Thermal imaging shows temperature differences that flag wet areas behind surfaces, because evaporating moisture makes a wall cooler than its neighbors. Humidity and dew point logging tells us whether the house as a system is capable of drying itself out.",
      "Air sampling comes last and only where it helps, always against an outdoor control taken the same day, because indoor numbers without an outdoor baseline cannot be interpreted.",
      "Usually the smell has a boring explanation and a fixable one. Call (561) 632-6387 and describe what you are smelling and where, and we will tell you honestly whether it sounds like something worth a visit.",
    ],
    sources: [
      { label: "EPA, A Brief Guide to Mold, Moisture and Your Home", href: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home", note: "on humidity control, condensation on cool surfaces, and the 30 to 60 percent target range." },
      { label: "EPA, Mold Testing or Sampling", href: "https://www.epa.gov/mold/mold-testing-or-sampling", note: "on when sampling adds something and when it does not." },
    ],
    related: [
      { to: "/services/air-quality-testing/", label: "Indoor Air Quality Testing" },
      { to: "/services/thermal-imaging/", label: "Thermal Imaging Mold Inspection" },
      { to: "/services/humidity-testing/", label: "Humidity Testing & Psychrometrics" },
      { to: "/contact/", label: "Request an inspection" },
    ],
  },
  {
    slug: "first-48-hours-after-a-water-leak",
    title: "The First 48 Hours After a Water Leak",
    titleTag: "The First 48 Hours After a Water Leak | Safe Haven",
    description:
      "Mold colonizes wet material in about 24 to 48 hours in South Florida. Here is what to do in that window, in order, and the two mistakes that cost people the most.",
    date: "2026-09-02",
    readMinutes: 6,
    image: {
      src: "/post-water-leak.jpg",
      mobileSrc: "/post-water-leak-mobile.jpg",
      alt: "Wall opened to the studs with drying equipment running after a water loss.",
    },
    body: [
      "A supply line lets go, a water heater splits, a toilet supply fails while everyone is at work. What happens next is decided almost entirely in the first two days, and most of it is decided before anyone thinks about mold at all.",
      { heading: "Why 48 hours is the number" },
      "Mold spores are already in your house. They are in every house. What they lack, most of the time, is water. Give cellulose material sustained moisture at South Florida temperatures and colonization generally begins within roughly 24 to 48 hours.",
      "That window is why the response is urgent rather than merely important. Water extracted on day one is a plumbing problem. The same water still sitting on day four is a mold problem, and it is a substantially more expensive one.",
      { heading: "Stop the water, and know where the valve is now" },
      "The main shutoff for the house, not just the fixture. If you do not know where yours is, go find it before you finish reading this, because looking for it while water is running is how people lose an extra twenty minutes.",
      "Fixture stops under sinks and behind toilets seize up in this climate. Test them occasionally. A stop that will not turn is not a shutoff.",
      { heading: "Photograph before you touch anything" },
      "This is the step people skip and regret. Before you move furniture, before you mop, before you pull up a single piece of carpet, photograph everything. The source if you can see it. The extent of the water. The rooms it reached. Damaged contents individually.",
      "Once cleanup starts, the evidence of what happened is gone, and a claim rests on being able to reconstruct the event afterward. This is also the difference between a covered sudden loss and a disputed slow one, so the pictures are doing real work.",
      "Then notify your carrier. Early notice protects the claim, and delay itself becomes a reason for denial.",
      { heading: "Get the water out, then keep going" },
      "Extract standing water. Move what can be moved somewhere dry. Get air moving with fans, and run the air conditioning, which is a dehumidifier that happens to also cool. If you have a real dehumidifier, this is its moment.",
      "The mistake here is stopping when surfaces feel dry. A wall can feel perfectly dry to a hand while the bottom sixteen inches of drywall and the base plate behind it are saturated. Surfaces dry first and cavities dry last, sometimes by days.",
      { heading: "What dries and what does not" },
      "Some material recovers and some never does, and knowing which is which saves money in both directions.",
      "Solid wood, structural framing, tile, concrete, and most hard surfaces usually dry and are fine if the drying is fast and complete. Drywall often survives if the exposure was short and clean, though it wicks upward and the wet zone is normally higher than the tide line suggests.",
      "Carpet padding is essentially a sponge and is generally not worth saving. Particleboard and MDF cabinet bases swell and lose structure once soaked. Insulation inside a wall cavity holds water against the framing and stops the assembly from drying, which is why it usually comes out even when it looks intact.",
      "The category that catches people is contaminated water. If the source was sewage or ground water rather than a clean supply line, the material calculation changes and porous items generally go regardless of how well they dried.",
      { heading: "The two expensive mistakes" },
      "The first is closing the wall too early. Somebody dries the visible surfaces over a weekend, the drywall gets patched and painted, and eight weeks later there is a stain and a smell because the cavity behind it never dried. Now the repair is being done twice, and the second time includes remediation.",
      "The second is not documenting moisture readings while the material is still wet. Once everything has dried, proving what got wet and how far it traveled becomes an argument rather than a record. If a claim is involved, the readings taken during the wet period are the ones that matter.",
      { heading: "When testing is actually warranted" },
      "Not every leak needs mold testing, and we will tell you that on the phone rather than sell you a visit. A small, clean, fast-dried spill is usually just a spill.",
      "It is worth an assessment when the water sat for more than a day or two, when it got into wall cavities or under flooring, when the source was contaminated, when there is a claim involved, or when something smells musty weeks later. That last one is the common case, and by then the useful question has changed from how wet is it to what grew.",
      "For a leak this week, we can document moisture readings and thermal patterns while they still exist, which is worth far more than the same visit a month from now. Call (561) 632-6387 across Palm Beach, Broward, and Martin County.",
      "If the water came from a storm rather than a pipe, the sequence is a little different and we wrote about that separately in our hurricane mold prevention guide.",
    ],
    sources: [
      { label: "EPA, Flood Cleanup to Protect Indoor Air Quality", href: "https://www.epa.gov/indoor-air-quality-iaq/flood-cleanup-protect-indoor-air-quality", note: "on drying within 24 to 48 hours, and on assuming growth where that was not achieved." },
      { label: "EPA, Mold Cleanup in Your Home", href: "https://www.epa.gov/mold/mold-cleanup-your-home", note: "on which materials can be dried and saved and which are normally discarded." },
      { label: "EPA, A Brief Guide to Mold, Moisture and Your Home", href: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home", note: "on fixing the water source as the first step." },
    ],
    related: [
      { to: "/services/water-damage-inspection/", label: "Water Damage & Moisture Intrusion Assessment" },
      { to: "/services/thermal-imaging/", label: "Thermal Imaging Mold Inspection" },
      { to: "/services/insurance-claim-mold-inspection/", label: "Mold Inspection for Insurance Claims" },
      { to: "/blog/hurricane-mold-prevention-tips/", label: "Hurricane Mold Prevention Tips" },
    ],
  },
  {
    slug: "leaving-a-florida-house-empty-for-the-summer",
    title: "Leaving a Florida House Empty for the Summer",
    titleTag: "Leaving a Florida House Empty for the Summer | Safe Haven",
    description:
      "The thermostat setting that saves money is the one that grows mold. What to actually do with the AC, the water, and the house before you head north for the season.",
    date: "2026-09-01",
    readMinutes: 6,
    image: {
      src: "/post-summer-humidity.jpg",
      mobileSrc: "/post-summer-humidity-mobile.jpg",
      alt: "Handheld thermo-hygrometer reading 59.2 percent relative humidity.",
    },
    body: [
      "Half the homes we inspect in the fall have the same story attached. The owners left in May, came back in October, opened the door, and immediately knew something was wrong. Nothing dramatic happened while they were gone. That is precisely the problem.",
      { heading: "The number that matters is not temperature" },
      "The standard advice is to set the thermostat to 80 and leave. It sounds sensible and it is the single most reliable way to come home to mold.",
      "Here is why. Your air conditioner removes humidity only while it is actually running. Set to 80 in an empty house with the blinds drawn and nobody cooking or showering, the system barely reaches that setpoint, so it barely runs. Barely running means barely dehumidifying. The house stays at 80 degrees and climbs to 70 percent relative humidity, and at that level surfaces stay damp enough for growth without one drop of water entering the building.",
      "Temperature is the thing you can feel and humidity is the thing that does the damage. An empty house does not care whether it is comfortable.",
      { heading: "What to actually set" },
      "Aim to hold relative humidity below about 60 percent, and ideally in the 45 to 55 range. There are a few ways to get there.",
      "A thermostat with a built-in humidity setpoint is the cleanest option. Set the humidity target and let it call for cooling to hit that number rather than a temperature. Many modern units do this and most people never turn the feature on.",
      "A separate humidistat wired to the system does the same job on older equipment and is a modest install.",
      "If you have neither, setting temperature lower than you want to, around 76 to 78, is the crude version. It costs more in electricity than 80 and much less than remediation. This is the tradeoff people get wrong: the summer of AC bills is a fraction of what opening walls costs.",
      "Whatever you choose, a cheap wifi hygrometer that reports to your phone turns this from a hope into a fact you can check from a thousand miles away.",
      { heading: "Before you leave" },
      "Shut off the water supply to the house at the main. This is the highest-value thing on the list and it takes a minute. An unattended supply line failure is the single most destructive thing that happens to a closed-up house, and there is nobody there to notice for months.",
      "Change the air filter, because a loaded filter restricts airflow and hurts dehumidification exactly when you need it most. Clear the condensate line and pour a little vinegar through it, since a clogged line in an unoccupied house either shuts the system down or overflows into the closet.",
      "Open interior doors and closet doors. Air movement is free and stagnant pockets against exterior walls are where growth starts. Leave the fan set to auto rather than on, because continuous fan can re-evaporate moisture off the coil back into the house.",
      "Pull anything organic out of the pantry and take the trash. Photograph the house on the way out, which costs nothing and is useful if anything does go wrong.",
      { heading: "Have somebody actually walk through" },
      "Remote sensors tell you the humidity. They do not tell you that a ceiling has stained or that the closet smells. Ask a neighbor, a friend, or a property manager to walk the house every few weeks, look at ceilings and under sinks, and confirm the air handler is running and the closet floor is dry.",
      "A leak found in week two is a repair. The same leak found in month five is a renovation.",
      { heading: "When you come back" },
      "Do the first-breath test. Walk in and pay attention before your nose adapts, which takes only a few minutes. A musty first impression is real information and it is the most sensitive instrument you own.",
      "Then look at ceilings below roof valleys and around penetrations, the exterior-wall side of closets, the base of walls behind furniture, under every sink, and inside the air handler closet. Check the drain pan.",
      "If it smells and you cannot see anything, that is normal and it does not mean you are imagining it. Odor moves through cavities and ducts and shows up rooms away from its source.",
      { heading: "The seasonal pattern we see" },
      "This is not a rare failure. It is the most predictable thing in our calendar. Homes across the 55-plus and snowbird communities from Boynton to Jensen Beach sit closed from May through October, through the entire wet season, on a thermostat setting chosen to save money. We find the same growth in the same places year after year: primary bedroom exterior walls, master closets, and the underside of ceiling drywall in the coolest rooms.",
      "It is also almost entirely preventable, which is why it is worth a page rather than a shrug. Control the humidity, kill the water supply, and have someone look at the place.",
      "If you are back and something smells off, call (561) 632-6387. We inspect and test only, so if the house is fine we will tell you it is fine and you can stop worrying about it.",
    ],
    sources: [
      { label: "EPA, A Brief Guide to Mold, Moisture and Your Home", href: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home", note: "on keeping indoor relative humidity between 30 and 60 percent to prevent condensation and growth." },
      { label: "EPA, Mold Cleanup in Your Home", href: "https://www.epa.gov/mold/mold-cleanup-your-home", note: "on moisture control as the controlling variable for indoor mold." },
    ],
    related: [
      { to: "/services/humidity-testing/", label: "Humidity Testing & Psychrometrics" },
      { to: "/services/mold-inspection/", label: "Full Mold Inspection" },
      { to: "/services/air-quality-testing/", label: "Indoor Air Quality Testing" },
      { to: "/contact/", label: "Request an inspection" },
    ],
  },
];

export function findPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
