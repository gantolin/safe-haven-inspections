import type { ServiceFigure } from "@/components/service-page";

/**
 * The four instruments named in the "Tools and methods we use" copy, in the
 * same order the paragraph names them. Shared so the row stays identical on
 * every page that describes the kit.
 *
 * Photographs are from real Safe Haven inspections. Captions state what the
 * instrument measures. None of them claim a photo shows mold: that is a
 * laboratory determination, not a visual one.
 */
export const EQUIPMENT_FIGURES: ServiceFigure[] = [
  {
    src: "/tool-moisture-meter.jpg",
    alt: "Pinless moisture meter held against a baseboard during an inspection",
    caption:
      "Pin and pinless moisture meters quantify moisture in drywall, framing and flooring. Readings are recorded, not just described.",
    width: 900,
    height: 675,
  },
  {
    src: "/tool-thermal-camera.jpg",
    alt: "Handheld infrared camera showing a thermal image of an interior wall",
    caption:
      "An infrared camera shows temperature difference, which can indicate hidden moisture. Anomalies are always confirmed with a meter.",
    width: 900,
    height: 675,
  },
  {
    src: "/tool-hygrometer.jpg",
    alt: "Digital hygrometer displaying relative humidity and temperature on site",
    caption:
      "A digital hygrometer records indoor temperature, relative humidity and dew point at the time of the visit.",
    width: 900,
    height: 675,
  },
  {
    src: "/tool-air-pump.jpg",
    alt: "Flow meter on an air sampling pump showing the calibrated litres per minute rate",
    caption:
      "Spore trap cassettes are drawn at a fixed flow rate for a timed run, so counts can be compared between samples.",
    width: 900,
    height: 675,
  },
];
