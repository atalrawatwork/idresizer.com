// Canonical spec list for every document photo tool on idresizer.com.
// widthPx/heightPx feed the canvas cropper directly; maxKB caps the JPEG export.
export const TOOLS = [
  {
    slug: "us-visa-600x600",
    flag: "🇺🇸",
    name: "US Visa 600x600 Photo Converter",
    short: "Resize your photo to 600x600 pixels for US visa requirements.",
    widthPx: 600,
    heightPx: 600,
    maxKB: 240,
    background: "White or off-white",
    notes:
      "Used for DS-160 online visa applications. The State Department's photo tool rejects files that are not a perfect square or that exceed the size cap.",
  },
  {
    slug: "us-passport-crop",
    flag: "🇺🇸",
    name: "US Passport Photo Crop Tool",
    short: "Automatically crop your photo to the correct US passport size and ratio.",
    widthPx: 600,
    heightPx: 600,
    maxKB: 240,
    background: "White or off-white",
    notes:
      "Matches the 2x2 inch (51x51mm) passport standard at 300 DPI, output as a 600x600px square JPEG.",
  },
  {
    slug: "usps-passport-appointment",
    flag: "📮",
    name: "USPS Passport Appointment Photo Resizer",
    short: "Resize your photo for USPS passport appointment requirements.",
    widthPx: 600,
    heightPx: 600,
    maxKB: 300,
    background: "White or off-white",
    notes:
      "USPS online scheduling portals accept a slightly larger file cap than the DS-160 tool but keep the same 600x600px square.",
  },
  {
    slug: "uk-passport-35x45",
    flag: "🇬🇧",
    name: "UK Passport 35x45mm Digital Photo Tool",
    short: "Resize your photo to 35x45mm for UK passport applications.",
    widthPx: 413,
    heightPx: 531,
    maxKB: 500,
    background: "Light grey or cream",
    notes:
      "GOV.UK requires a strict 4:5 portrait ratio. 413x531px reproduces the 35x45mm print ratio precisely on screen.",
  },
  {
    slug: "uk-dvla-license",
    flag: "🇬🇧",
    name: "UK Driving License (DVLA) Photo Crop",
    short: "Crop your photo to meet DVLA driving license requirements.",
    widthPx: 413,
    heightPx: 531,
    maxKB: 500,
    background: "Light grey or cream",
    notes:
      "DVLA shares the same 35x45mm portrait frame as a UK passport, so the crop logic and output size match exactly.",
  },
  {
    slug: "uk-railcard-resizer",
    flag: "🇬🇧",
    name: "UK Railcard Photo Resizer Online",
    short: "Resize your photo for UK railcard application requirements.",
    widthPx: 400,
    heightPx: 400,
    maxKB: 2000,
    background: "Any plain background",
    notes:
      "Railcard portals are the most forgiving: a square 400x400px frame with a generous 2MB ceiling.",
  },
];

export function getToolBySlug(slug) {
  return TOOLS.find((t) => t.slug === slug);
}
