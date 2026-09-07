import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import {
  pageMeta,
  faqSchema,
  jsonLdScript,
  type FaqItem,
  serviceSchema,
  breadcrumbSchema,
} from "@/lib/seo";

const DESCRIPTION =
  "Asbestos testing in Palm Beach County and across South Florida. A certified asbestos inspector collects the samples, an accredited lab analyzes them, report in 24 hours.";

/*
 * FAQ questions are written to match how people actually search, because the
 * same array feeds both the on-page <details> list and the FAQPage JSON-LD.
 * Editing a question here changes both at once, which is what keeps the
 * structured data matching the visible text.
 *
 * Scope guard: Safe Haven tests. It does not abate, remove, or encapsulate,
 * and it does not test for lead. Nothing in these answers should imply
 * otherwise, even where the search term bundles the services together.
 */
const faqs: FaqItem[] = [
  {
    q: "What is asbestos testing?",
    a: "Asbestos testing is the process of collecting small samples of suspect building materials and having a laboratory determine whether they actually contain asbestos fibers. The lab work is the definitive part. You cannot tell by looking: a popcorn ceiling, a floor tile, and a length of pipe wrap all look exactly the same whether they contain asbestos or not. Testing replaces the guess with a written answer.",
  },
  {
    q: "How much does asbestos testing cost?",
    a: "Asbestos testing cost comes down to three things: how many samples the property needs, how difficult those materials are to reach safely, and whether you need rush turnaround. A single popcorn ceiling in one room is a very different job from a whole-house survey before a gut renovation. We look at what you are actually planning, tell you how many samples that calls for, and quote it before we schedule. There are no per-sample surprises added afterward.",
  },
  {
    q: "How long does asbestos testing take?",
    a: "The on-site visit for a typical home is usually under an hour. Sampling itself is quick; most of the time is spent walking the property and identifying which materials are worth testing. Samples go to Eurofins Built Environment under chain of custody, and you have lab results and a written report back within 24 hours in most cases.",
  },
  {
    q: "When is asbestos testing required?",
    a: "Asbestos testing may be required before renovation or demolition work that would disturb suspect materials. Federal rules and Florida practice both push toward surveying first and cutting second, and many building departments want to see a survey before they issue a permit. Requirements vary by the scope of your project and by the jurisdiction, so confirm with your local building department. If you are pulling a permit, ask them what they need before you book the contractor.",
  },
  {
    q: "What year is asbestos testing required?",
    a: "Homes built before 1980 are the main concern, and that is the year most people have heard. It is not a hard cutoff. Asbestos-containing products were still being installed in some materials into the 1990s, and old stock sat in warehouses and on job sites for years after it stopped being made. Age narrows the odds. It does not rule anything out, which is why a 1988 house with original vinyl tile still gets sampled.",
  },
  {
    q: "Is popcorn ceiling asbestos?",
    a: "Sometimes, and that is the honest answer. Popcorn ceiling asbestos was common in ceilings sprayed before the late 1970s, but plenty of popcorn ceilings from that era contain none at all, and some later ones do. There is no visual test. A popcorn ceiling asbestos test takes a small scraping from an inconspicuous spot and settles it in a day. Do not sand, scrape, or dry-brush the ceiling to find out for yourself, because that is exactly the action that releases fibers.",
  },
  {
    q: "How is asbestos testing done?",
    a: "We walk the property and identify suspect materials, then wet the sampling area to keep fibers down, cut or scrape a small representative piece, seal it in a labeled container, and patch the spot. Each sample is logged under chain of custody and sent to an accredited lab, where it is analyzed by polarized light microscopy. Polarized light microscopy is the standard method for identifying asbestos fiber types and estimating their percentage in the material.",
  },
  {
    q: "How many samples are needed?",
    a: "It depends on how many distinct materials are in play, not on the size of the house. Every material that looks different is its own question, so a kitchen might need one sample for the floor tile, one for the mastic under it, and one for the joint compound in the wall. Homogeneous materials sometimes need more than one sample so the result fairly represents the whole area. We scope this on the call and explain what each sample is for.",
  },
  {
    q: "Where can I send a sample for asbestos testing?",
    a: "Accredited labs will accept a mailed sample, which is why home asbestos test kits exist. The lab is not the weak link in that plan, though. Collecting the sample is: scraping a ceiling or snapping a floor tile without wetting the material or containing the area can release fibers into the room you are standing in, and a sample taken from the wrong spot can come back clean on a material that does contain asbestos. We collect samples with proper controls and chain of custody, which is the part a kit cannot mail you.",
  },
  {
    q: "Do you do asbestos and mold testing on the same visit?",
    a: "Yes, and it is usually the smarter way to book it. Mold and asbestos testing on one visit means one appointment, one site walkthrough, and one report window, which matters when you are trying to close on a house or start a renovation on schedule. The two questions also tend to arrive together, since water damage in an older home raises both at once.",
  },
  {
    q: "Do you do lead testing too?",
    a: "No. People often search for lead and asbestos testing together because both come up in pre-1978 homes, but we test for asbestos and mold only. If your project needs lead paint assessment as well, we will tell you plainly that it is outside what we do, so you can line up a lead-certified assessor rather than assume it was covered.",
  },
  {
    q: "Do you remove asbestos?",
    a: "No. We test, we report, and that is where our involvement ends. Removal and encapsulation are done by licensed asbestos abatement contractors, who work under containment with negative air and specific disposal requirements. We are happy to explain what a proper abatement scope should look like and what documentation to ask for when the contractor is finished, precisely because we are not the ones bidding the job.",
  },
];

export const Route = createFileRoute("/services/asbestos-testing")({
  head: () => {
    const base = pageMeta({
      path: "/services/asbestos-testing/",
      title: "Asbestos Testing in Palm Beach County | Safe Haven",
      description: DESCRIPTION,
    });
    return {
      ...base,
      scripts: [
        jsonLdScript(faqSchema(faqs)),
        jsonLdScript(
          serviceSchema({
            name: "Asbestos Testing",
            description: DESCRIPTION,
            path: "/services/asbestos-testing/",
            serviceType: "Asbestos testing and inspection",
          }),
        ),
        jsonLdScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "Asbestos Testing", path: "/services/asbestos-testing/" },
          ]),
        ),
      ],
    };
  },
  component: AsbestosTestingPage,
});

function AsbestosTestingPage() {
  return (
    <ServicePage
      eyebrow="Service"
      h1="Asbestos Testing"
      intro={
        <>
          Asbestos testing tells you whether the material you are about to sand,
          cut, or tear out contains asbestos fibers, before the demolition starts
          rather than after. It matters most in South Florida homes built before
          1980, where popcorn ceilings, floor tile, pipe wrap, and old joint
          compound are all suspect until a lab says otherwise. Landon Heinrichs is
          a certified asbestos inspector as well as a Florida-licensed mold
          assessor, so Safe Haven can collect the samples, run them through an
          accredited lab, and hand you a written answer in 24 hours. We test. We
          do not remove, which is exactly why the answer is worth something.
        </>
      }
      independence={{
        h2: "An asbestos inspector who does not sell abatement",
        body: "Safe Haven Inspections performs asbestos sampling and lab analysis only. We do not remove, encapsulate, or subcontract abatement, and we take no referral fee from the contractors who do. That matters more with asbestos than almost anything else we test for, because the company telling you a material is positive is very often the company quoting you to remove it. When the result comes from someone with nothing to sell on the other side of it, a negative result is just as trustworthy as a positive one.",
      }}
      sections={[
        {
          h2: "What we test",
          intro:
            "Asbestos was valued because it was cheap, fireproof, and durable, so it ended up in dozens of ordinary building products. These are the materials we sample most often in Palm Beach, Broward, and Martin County homes.",
          bullets: [
            "Popcorn and other sprayed or textured ceilings, the single most common request we get",
            "Vinyl floor tile, sheet flooring, and the black mastic adhesive underneath it",
            "Drywall joint compound and textured wall finishes",
            "Pipe insulation, duct wrap, and the fibrous backing on old HVAC components",
            "Roofing felt, shingles, mastic, and flashing cement",
            "Cement siding, soffit board, and transite panels",
            "Window glazing putty and door core material in older construction",
            "Storm-damaged or water-damaged materials that are already crumbling and need to be handled",
          ],
        },
        {
          h2: "How asbestos testing works",
          intro:
            "The process is deliberately unexciting. Careful sampling and an accredited lab are what make the report defensible.",
          steps: [
            {
              n: "01",
              h: "Scoping call",
              b: "You tell us the age of the building and what you are planning to do to it. Renovation, demolition, a purchase, or storm repair all point at different materials, and that determines what needs sampling.",
            },
            {
              n: "02",
              h: "On-site walkthrough",
              b: "A certified asbestos inspector walks the property and identifies suspect materials by type, location, and condition. Material that is intact and undisturbed gets noted differently from material that is already damaged.",
            },
            {
              n: "03",
              h: "Controlled sample collection",
              b: "We wet the area, take a small representative piece from an inconspicuous spot, seal it in a labeled container, and patch behind ourselves. Controlling fiber release during sampling is the entire reason this step belongs to a trained inspector.",
            },
            {
              n: "04",
              h: "Chain of custody",
              b: "Every sample is logged, sealed, and tracked from your property to the laboratory bench. Chain of custody is what lets a building department, an insurer, or a buyer's attorney rely on the result later.",
            },
            {
              n: "05",
              h: "Accredited lab analysis",
              b: "Samples are analyzed at Eurofins Built Environment by polarized light microscopy, the standard method for identifying asbestos fiber types and estimating percentage content. We do not analyze our own samples.",
            },
            {
              n: "06",
              h: "Written report in 24 hours",
              b: "You receive an asbestos inspection report listing each sample by location and material, the lab result for each, and plain-language notes on what is positive, what is negative, and what that means for the work you were planning.",
            },
          ],
        },
        {
          h2: "Asbestos survey before renovation or demolition",
          paragraphs: [
            "If you are gutting a kitchen, taking down walls, replacing a roof, or demolishing a structure outright, a pre demolition asbestos survey is the step that comes first. The survey is broader than a single spot check: it inventories every suspect material the project will disturb, samples each one, and produces an asbestos survey report your contractor and your building department can both work from.",
            "Doing it in that order is not just about compliance. A contractor who finds asbestos halfway through a demolition has to stop, and stopping mid-job costs far more than sampling would have. The survey also protects you as the property owner, because once material has been disturbed, proving what it was and who disturbed it becomes an argument rather than a document.",
            "Requirements vary by scope and jurisdiction. Your local building department is the authority on what your specific permit needs, and we would rather you call them first than take our word for it.",
          ],
        },
        {
          h2: "Mold and asbestos testing on one visit",
          paragraphs: [
            "Mold and asbestos inspection tend to become the same conversation, usually after water gets somewhere it should not have. A 1974 house with a roof leak has a mold question in the ceiling drywall and an asbestos question in the ceiling texture directly above it, and nobody wants to schedule two companies, two visits, and two report windows to answer them.",
            "Because Safe Haven holds both the Florida mold assessor license and asbestos inspector certification, one visit covers both. That is one walkthrough, one set of chain-of-custody paperwork, and one 24-hour turnaround, which is often the difference between making a real estate inspection deadline and asking for an extension.",
            "It also produces a better report. Knowing that the wet ceiling texture is asbestos-containing changes the remediation sequence entirely, and finding that out from a single assessor beats finding it out from a remediator who has already started cutting.",
          ],
        },
        {
          h2: "Asbestos testing cost",
          paragraphs: [
            "We do not publish a price, because an honest asbestos testing cost depends on your building rather than on a menu. Three things move it: the number of distinct materials that need sampling, how hard those materials are to reach safely, and whether you need results faster than the standard 24-hour turnaround.",
            "What we can promise is that the quote comes before the work and does not grow afterward. If the walkthrough turns up a material we did not expect, we tell you what another sample would add and let you decide. A homeowner testing one popcorn ceiling should not be paying for the scope of a full pre-demolition survey, and we scope it that way.",
            "Call (561) 632-6387 and describe the property and the project. You will get a straight quote from the person who would actually be doing the sampling.",
          ],
        },
        {
          h2: "Asbestos testing near me: where we work",
          intro:
            "Safe Haven is based in Greenacres and covers three counties. Asbestos testing services are available anywhere in the service area, typically within a few days of your call.",
          bullets: [
            "Palm Beach County, including West Palm Beach, Boca Raton, Lake Worth, Wellington, Delray Beach, and Jupiter",
            "Broward County, including Fort Lauderdale, Hollywood, Pembroke Pines, and Coral Springs",
            "Martin County, including Stuart, Palm City, and Jensen Beach",
            "Older single-family homes, condos and HOA-managed buildings, rentals, and small commercial properties",
          ],
        },
      ]}
      faqs={faqs}
      related={[
        {
          to: "/services/mold-inspection/",
          label: "Mold Inspection",
          blurb:
            "The flagship service, and the one most often booked alongside asbestos sampling on the same visit.",
        },
        {
          to: "/services/air-quality-testing/",
          label: "Indoor Air Quality Testing",
          blurb:
            "Spore-trap air sampling with outdoor controls when the question is what you are breathing, not what is in the ceiling.",
        },
        {
          to: "/services/post-remediation-verification/",
          label: "Post-Remediation Verification",
          blurb:
            "Independent clearance testing after remediation, so the company that did the work is not the one grading it.",
        },
      ]}
      furtherReading={{
        href: "/blog/asbestos-test-kits-what-they-get-right/",
        label: "Asbestos test kits: what they get right, and the part they cannot mail you",
        blurb:
          "The lab in a mail-in kit is usually fine. Collecting the sample is the hazardous step, and that is the half the box does not cover.",
      }}
      ctaTitle="Book asbestos testing"
      ctaBody="Find out what is in the material before you disturb it. Certified asbestos inspector, accredited lab, written report in 24 hours."
    />
  );
}
