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
      "Lost power after a storm? Five practical ways to stop mold before it starts — air flow, keeping the house clean, humidity, water damage, and what to do before you evacuate.",
    date: "2026-08-04",
    readMinutes: 5,
    body: [
      { heading: "Air flow" },
      "One thing that mold spores need to begin to grow is time. If there is humid stagnant air for a long enough period of time, mold growth is inevitable. If you've lost power and the indoor humidity begins to reach levels above 60% relative humidity, cracking windows to allow a breeze to flow through the house can be enough to prevent any mold growth. Also, if you happen to have a battery-operated fan, now would be a clever time to use it — especially in areas where air flow is limited.",
      { heading: "A clean house" },
      "This might be surprising to some, but the next necessity for mold to begin to grow is food. Mold eats cellulose-based organic material, and dust and dirt can provide enough food for mold to get its roots in. Dust and dirt also happen to settle in the exact locations mold spores do, which is horizontal surfaces — the top of your baseboards or picture frames, for example. If you keep your house clean, you're removing an easy target for mold growth.",
      { heading: "Dehumidify" },
      "If you have a dehumidifier and a generator, great: use them if you're able to. For many who might not be so lucky, there are some natural ways to bring humidity down. One easy way is to remove indoor plants. There are also products you can purchase, like rock salt or DampRid, which you can pick up at a hardware store — simple, cheap, and great temporary tricks to keep humidity down.",
      { heading: "Water damage" },
      "If water does enter your place of residence, it might be worth removing some drywall. For instance, if there are a couple of inches of water in a room that came in from flooding, removing 1–2 feet of drywall on the bottom portion can prevent any further damage. Just make sure you ALWAYS take lots of pictures. You'll want everything you've got if you plan on making any kind of insurance claim — and that includes pictures of damaged items as well.",
      { heading: "Before evacuation" },
      "If you leave your home or evacuate, shut off the water supply to your house and take before pictures. You never know what condition your house will be in when you come back, and having pictures of what it looked like beforehand can really help if anything goes wrong, especially from a coverage standpoint. Shutting off your water also ensures that any water line going into your house will not have pressure behind it in the case where it cracks or breaks. Having years of remediation experience, we can't tell you how many times a homeowner called after coming home from an extended weekend to find their furniture floating. Trust us, it happens — so it's better to play it safe.",
      { heading: "If a storm has already hit" },
      "An independent assessment will tell you what's actually growing and where, before repairs close everything up. Call (561) 632-6387 or request an inspection across Martin, Palm Beach, and Broward Counties.",
    ],
    related: [
      { to: "/services/water-damage-inspection", label: "Water Damage & Post-Storm Inspection" },
      { to: "/services/humidity-testing", label: "Humidity & Moisture Testing" },
      { to: "/services/mold-inspection", label: "Full Mold Inspection" },
      { to: "/contact", label: "Request an inspection" },
    ],
  },
];

export function findPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
