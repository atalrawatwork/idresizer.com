// Canonical spec list for every document photo tool on idresizer.com.
// widthPx/heightPx feed the canvas cropper directly; maxKB caps the JPEG export.
// region drives the US/UK selector on /tools. route is the tool's live URL.
// legacyRoute marks the original 6 tools that live under /tools/[slug];
// the 9 newer tools each get their own top-level route instead.
export const TOOLS = [
  // ---------- Original 6 (served at /tools/[slug]) ----------
  {
    slug: "us-visa-600x600",
    route: "/tools/us-visa-600x600",
    legacyRoute: true,
    region: "US",
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
    route: "/tools/us-passport-crop",
    legacyRoute: true,
    region: "US",
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
    route: "/tools/usps-passport-appointment",
    legacyRoute: true,
    region: "US",
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
    route: "/tools/uk-passport-35x45",
    legacyRoute: true,
    region: "UK",
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
    route: "/tools/uk-dvla-license",
    legacyRoute: true,
    region: "UK",
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
    route: "/tools/uk-railcard-resizer",
    legacyRoute: true,
    region: "UK",
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

  // ---------- US Tools (each on its own top-level route) ----------
  {
    slug: "dv-lottery",
    route: "/dv-lottery",
    region: "US",
    flag: "🇺🇸",
    name: "DV Lottery Photo Checker and Resizer",
    short: "Resize and check your photo against the official DV Lottery (Green Card Lottery) photo spec.",
    widthPx: 600,
    heightPx: 600,
    maxKB: 240,
    background: "White or off-white",
    notes:
      "The State Department's Electronic Diversity Visa (E-DV) entry system uses the same square 600x600px, sub-240KB JPEG spec as a US visa photo. Entries with a non-compliant photo are disqualified automatically, so getting the file right matters as much as the photo itself.",
  },
  {
    slug: "us-green-card",
    route: "/us-green-card",
    region: "US",
    flag: "🇺🇸",
    name: "US Green Card Photo Resizer Free",
    short: "Resize your photo to the exact spec used for US Green Card (permanent resident) applications.",
    widthPx: 600,
    heightPx: 600,
    maxKB: 240,
    background: "White or off-white",
    notes:
      "Green Card photos (Form I-485, DS-260, and related filings) follow the same 2x2 inch, 600x600px, sub-240KB format as a US visa photo, since USCIS and the State Department share the same underlying photo standard.",
  },
  {
    slug: "us-visa",
    route: "/us-visa",
    region: "US",
    flag: "🇺🇸",
    name: "Green Card / US Visa Photo Tool",
    short: "A general-purpose tool for any US visa or Green Card photo requirement.",
    widthPx: 600,
    heightPx: 600,
    maxKB: 240,
    background: "White or off-white",
    notes:
      "Covers immigrant and non-immigrant visa categories alike — the 2x2 inch, 600x600px, sub-240KB JPEG format is shared across DS-160, DS-260, and most Green Card filings.",
  },
  {
    slug: "us-driving-license",
    route: "/us-driving-license",
    region: "US",
    flag: "🇺🇸",
    name: "US Driving License / ID Photo Resizer",
    short: "Resize a photo to a standard ID-style format accepted by most state DMV pre-upload portals.",
    widthPx: 600,
    heightPx: 600,
    maxKB: 300,
    background: "White or plain light background",
    notes:
      "Exact requirements vary by state DMV, and many states still require an in-person photo. Where a state's online pre-application accepts an uploaded photo, this tool targets a widely-accepted square format — always confirm your state's current DMV requirements before submitting.",
  },

  // ---------- UK Tools (each on its own top-level route) ----------
  {
    slug: "uk-passport",
    route: "/uk-passport",
    region: "UK",
    flag: "🇬🇧",
    name: "HMPO UK Passport Photo Resizer",
    short: "Resize and crop your photo to HM Passport Office's exact digital photo spec.",
    widthPx: 413,
    heightPx: 531,
    maxKB: 500,
    background: "Light grey or cream",
    notes:
      "HM Passport Office (HMPO) requires a 35x45mm, 4:5 portrait photo. 413x531px reproduces that ratio exactly for online applications and renewals.",
  },
  {
    slug: "uk-passport-digital",
    route: "/uk-passport-digital",
    region: "UK",
    flag: "🇬🇧",
    name: "UK Passport 35x45mm Digital Photo Tool",
    short: "A dedicated digital-photo tool for the standard UK 35x45mm passport format.",
    widthPx: 413,
    heightPx: 531,
    maxKB: 500,
    background: "Light grey or cream",
    notes:
      "Built specifically for digital (online) UK passport submissions: a 4:5 portrait ratio at 413x531px, kept under GOV.UK's 500KB upload limit.",
  },
  {
    slug: "uk-driving-license",
    route: "/uk-driving-license",
    region: "UK",
    flag: "🇬🇧",
    name: "UK Driving License (DVLA) Photo Crop Tool",
    short: "Crop your photo to DVLA's exact driving license photo requirements.",
    widthPx: 413,
    heightPx: 531,
    maxKB: 500,
    background: "Light grey or cream",
    notes:
      "The DVLA uses the same 35x45mm, 4:5 portrait frame as a UK passport photo, so a compliant passport photo will typically work for a driving license application too.",
  },
  {
    slug: "uk-railcard",
    route: "/uk-railcard",
    region: "UK",
    flag: "🇬🇧",
    name: "UK Railcard Photo Resizer Online",
    short: "Resize your photo for a 16-25, 26-30, Senior, or Family & Friends Railcard application.",
    widthPx: 400,
    heightPx: 400,
    maxKB: 2000,
    background: "Any plain background",
    notes:
      "Railcard portals are the most relaxed UK photo requirement: a square 400x400px frame with a generous 2MB ceiling and no strict background color rule.",
  },
  {
    slug: "uk-student-visa",
    route: "/uk-student-visa",
    region: "UK",
    flag: "🎓",
    name: "UK Student Visa (CAS) Photo Compressor",
    short: "Resize your photo for a UK Student visa application, matching UKVI's digital photo spec.",
    widthPx: 600,
    heightPx: 750,
    maxKB: 2000,
    background: "Plain white, cream, or light grey",
    notes:
      "UKVI's guidance for digital photos on student (and most other) visa applications asks for at least 600x750 pixels at a 4:5 ratio, under roughly 10MB — this tool compresses well below that ceiling while keeping the required proportions.",
  },
];

export function getToolBySlug(slug) {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolsByRegion(region) {
  return TOOLS.filter((t) => t.region === region);
}
