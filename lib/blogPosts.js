export const BLOG_POSTS = [
  {
    slug: "why-digital-passport-visa-applications-get-rejected",
    title: "Why Do Digital Passport & Visa Applications Get Rejected?",
    date: "2025-05-20",
    readTime: "5 min read",
    relatedToolSlug: "us-passport-crop",
    excerpt:
      "Getting your US passport photo right is essential. The photo must meet specific dimension, size, and quality requirements — here's everything you need to know, and why the exact math behind it trips so many people up.",
    content: [
      {
        heading: null,
        body: "Most rejected passport and visa photos aren't rejected because the photo looks bad. They're rejected because a government portal ran a set of automated checks against the file — pixel dimensions, aspect ratio, file weight in kilobytes, and sometimes even DPI metadata — and the file failed one of them by a small margin. Understanding the math behind those checks is the fastest way to stop resubmitting.",
      },
      {
        heading: "The portal isn't looking at your face first",
        body: "Before a human ever reviews your photo, an automated intake system validates the file against a spec. The US State Department's DS-160 photo tool, for example, expects a square image, ideally 600 by 600 pixels, saved as a JPEG under roughly 240KB. If your camera exports a 4032x3024 photo at 3.8MB, the portal doesn't try to interpret it — it simply flags the upload and stops you before you reach the next step.",
      },
      {
        heading: "Aspect ratio is stricter than it sounds",
        body: "A ratio like 4:5 sounds like a loose guideline, but portals check it down to the pixel. The UK's GOV.UK passport and DVLA driving license tools expect a 35x45mm print equivalent, which on screen works out to 413x531 pixels — a precise 4:5 relationship. Crop your photo to 410x532 and some validators will reject it outright, because the math no longer resolves to a clean ratio.",
      },
      {
        heading: "File size caps exist because of how these systems store images",
        body: "Government application systems process an enormous volume of uploads, and many still route photos through backend storage designed around small file footprints. A 240KB cap for a US visa photo and a 500KB cap for a UK passport photo aren't arbitrary — they reflect what each system was engineered to store efficiently and check quickly.",
      },
      {
        heading: "The fix is processing the photo to the exact spec before you upload",
        body: "Because each portal enforces its own combination of pixel dimensions, aspect ratio, and byte ceiling, the reliable fix is to resize and crop to that exact spec locally, rather than uploading a raw camera photo and hoping the portal accepts it. That's the entire purpose of the tools on this site.",
      },
    ],
  },
  {
    slug: "us-passport-photo-size-requirements-2025",
    title: "US Passport Photo Size Requirements (2025)",
    date: "2025-05-20",
    readTime: "4 min read",
    relatedToolSlug: "us-passport-crop",
    excerpt:
      "Everything you need to know about US passport photo size, dimension, and quality standards before you submit your application.",
    content: [
      {
        heading: null,
        body: "The US Department of State specifies a narrow set of requirements for passport photos, and missing any one of them is the most common reason applications bounce back for resubmission. Here is the exact spec, broken down plainly.",
      },
      {
        heading: "Size and resolution",
        body: "Your photo must be 2x2 inches (51x51mm), which on screen for digital submission translates to 600x600 pixels at a minimum resolution of 300 DPI. Your face should measure between 1 and 1 3/8 inches (25-35mm) from chin to the top of the head.",
      },
      {
        heading: "Background and lighting",
        body: "The background must be plain white or off-white, with no shadows, patterns, or objects visible behind you. Even lighting across your face is required for the photo to pass automated review.",
      },
      {
        heading: "Expression and posture",
        body: "A neutral expression with both eyes open is required; slight smiles are permitted but wide grins are not. Glasses are no longer allowed in US passport photos as of recent guidance.",
      },
      {
        heading: "File format",
        body: "Digital uploads must be saved as a JPEG file under 240KB. Our US Passport Photo Crop Tool handles the resize, crop, and compression automatically, entirely in your browser.",
      },
    ],
  },
  {
    slug: "uk-passport-photo-size-and-guidelines",
    title: "UK Passport Photo Size and Guidelines",
    date: "2025-05-18",
    readTime: "4 min read",
    relatedToolSlug: "uk-passport-35x45",
    excerpt:
      "A complete UK passport photo guide, covering size, background, and expression rules enforced by GOV.UK.",
    content: [
      {
        heading: null,
        body: "GOV.UK applies a strict and well-documented spec for passport photos, and it differs from the US requirements in several important ways, most notably the aspect ratio.",
      },
      {
        heading: "Dimensions",
        body: "A UK passport photo must be 45mm tall by 35mm wide, a 4:5 portrait ratio rather than a square. For digital applications this works out to 413x531 pixels. Your head, from chin to crown, must measure between 29mm and 34mm.",
      },
      {
        heading: "Background",
        body: "GOV.UK accepts a light grey or cream background, a noticeably different requirement from the pure white background the US requires.",
      },
      {
        heading: "Common rejection reasons",
        body: "The most frequent rejections are photos that are too zoomed in (cropping off the top of the head), reflections on glasses, and shadows cast by overhead lighting. Our UK Passport 35x45mm Digital Photo Tool applies the correct crop automatically.",
      },
    ],
  },
  {
    slug: "uk-driving-license-photo-requirements-2025",
    title: "UK Driving License Photo Requirements (2025)",
    date: "2025-05-15",
    readTime: "3 min read",
    relatedToolSlug: "uk-dvla-license",
    excerpt:
      "Everything you need to know about DVLA photo guidelines before you renew or apply for your UK driving license.",
    content: [
      {
        heading: null,
        body: "The DVLA uses the same 35x45mm portrait frame as a UK passport photo, so if you already have a compliant passport photo, it will typically work for your driving license application as well.",
      },
      {
        heading: "Dimensions and background",
        body: "413x531 pixels, 4:5 ratio, light grey or cream background — identical to the passport spec. The DVLA online portal caps uploads at 500KB.",
      },
      {
        heading: "Additional DVLA-specific rules",
        body: "Unlike a passport photo, DVLA guidance is slightly more lenient on very subtle smiles, but still requires a fully visible face with no head covering unless worn for religious or medical reasons.",
      },
    ],
  },
  {
    slug: "photo-resizer-vs-crop-tool-which-one-to-use",
    title: "Photo Resizer vs Crop Tool: Which One to Use?",
    date: "2025-05-12",
    readTime: "3 min read",
    relatedToolSlug: "us-visa-600x600",
    excerpt:
      "Confused about which tool to use? This guide breaks down the difference and helps you pick the right one every time.",
    content: [
      {
        heading: null,
        body: "\"Resizer\" and \"crop tool\" get used interchangeably, but they solve two different problems, and government photo portals usually need both applied together, in the right order.",
      },
      {
        heading: "Resizing changes scale",
        body: "Resizing takes an existing image and scales it up or down while keeping the same content and, usually, the same aspect ratio. If your original photo is a 4:3 rectangle, resizing it alone will never make it a square.",
      },
      {
        heading: "Cropping changes framing",
        body: "Cropping removes pixels from the edges of a photo to change its shape or framing. This is the step that turns a 4:3 rectangle into the 1:1 square a US visa photo needs.",
      },
      {
        heading: "Why our tools do both automatically",
        body: "Every tool on idresizer.com applies an automatic center-crop to reach the correct ratio first, then resizes to the exact pixel dimensions, and finally compresses the result to fit under the required file size.",
      },
    ],
  },
  {
    slug: "photo-editing-tips-for-official-documents",
    title: "Photo Editing Tips for Official Documents",
    date: "2025-05-08",
    readTime: "4 min read",
    relatedToolSlug: "uk-railcard-resizer",
    excerpt:
      "Common mistakes and pro tips when preparing your photo and visa applications for a smooth, first-try approval.",
    content: [
      {
        heading: null,
        body: "A compliant photo starts before you ever open an editing tool. A little preparation at the point of capture avoids most of the rejections editing software can't fix afterward.",
      },
      {
        heading: "Shoot against a genuinely plain wall",
        body: "Textured walls and patterned wallpaper in the background are difficult to remove convincingly after the fact. A plain wall photographed straight-on gives automatic cropping the cleanest result.",
      },
      {
        heading: "Use daylight, not overhead lighting",
        body: "Overhead lights cast shadows under the eyes and chin. Standing side-on to a window, facing the light, produces the even illumination automated review systems expect.",
      },
      {
        heading: "Let the tool handle the technical spec",
        body: "Once you have a clean, well-lit source photo, upload it to the matching tool on this site. Everything after that — dimension, ratio, and file size — is handled automatically.",
      },
    ],
  },
  {
    slug: "dv-lottery-photo-requirements-explained",
    title: "DV Lottery Photo Requirements Explained",
    date: "2025-06-02",
    readTime: "4 min read",
    relatedToolSlug: "dv-lottery",
    excerpt:
      "A non-compliant photo is one of the most common reasons DV Lottery (Green Card Lottery) entries get disqualified. Here's exactly what the E-DV system checks.",
    content: [
      {
        heading: null,
        body: "The Diversity Visa Lottery has one of the least forgiving photo checks of any US application, because the Electronic Diversity Visa (E-DV) system validates your photo automatically at the moment you submit your entry — there's no manual review step to catch a borderline file.",
      },
      {
        heading: "The exact spec",
        body: "Your photo must be a square JPEG, 600x600 pixels, under 240KB, with a plain white or off-white background and a neutral expression. These match the standard US visa photo format exactly.",
      },
      {
        heading: "Why entries get disqualified over a photo",
        body: "Unlike a passport application where a rejected photo simply means resubmitting, a disqualified DV Lottery entry is gone for that year's cycle — you cannot fix and resubmit it. That makes getting the pixel dimensions and file size right on the first try especially important.",
      },
      {
        heading: "Use the checker before you submit",
        body: "Our DV Lottery Photo Checker and Resizer crops your photo to the exact 600x600 square and compresses it under 240KB automatically, so the file itself is never the reason your entry is rejected.",
      },
    ],
  },
  {
    slug: "us-green-card-photo-requirements",
    title: "US Green Card Photo Requirements: A Quick Guide",
    date: "2025-06-04",
    readTime: "3 min read",
    relatedToolSlug: "us-green-card",
    excerpt:
      "Applying for a Green Card involves several forms, but the photo spec across nearly all of them is the same. Here's what USCIS expects.",
    content: [
      {
        heading: null,
        body: "Whether you're filing Form I-485 (Adjustment of Status), DS-260 (Immigrant Visa), or a related Green Card form, the photo requirement is consistent across the board, which makes preparing one correct photo enough for the entire application.",
      },
      {
        heading: "The spec",
        body: "2x2 inches (600x600 pixels for digital), plain white or off-white background, neutral expression, both ears optionally visible, and a JPEG file under 240KB.",
      },
      {
        heading: "A common mistake",
        body: "Applicants often reuse an old passport photo that's the right size but was taken years ago. USCIS guidance asks for a photo taken within the last 6 months, so the size being correct isn't the only requirement worth double-checking.",
      },
    ],
  },
  {
    slug: "us-visa-photo-size-guide",
    title: "US Visa Photo Size Guide (All Visa Types)",
    date: "2025-06-06",
    readTime: "3 min read",
    relatedToolSlug: "us-visa",
    excerpt:
      "From tourist visas to immigrant visas, nearly every US visa category shares the same photo format. Here's the single spec to remember.",
    content: [
      {
        heading: null,
        body: "One of the more convenient facts about US visa photos is that the format barely changes across categories — B1/B2 tourist visas, F1 student visas, immigrant visas filed through DS-260, and more all use the same underlying photo standard.",
      },
      {
        heading: "The universal spec",
        body: "600x600 pixels, square, JPEG under 240KB, plain white or off-white background, neutral expression, no glasses.",
      },
      {
        heading: "One photo, multiple forms",
        body: "Because the spec is shared, a single correctly-prepared photo can typically be reused across DS-160, DS-260, and most supporting visa documentation — you don't need a different photo for each form.",
      },
    ],
  },
  {
    slug: "us-driving-license-id-photo-guide",
    title: "US Driving License & State ID Photo Guide",
    date: "2025-06-08",
    readTime: "3 min read",
    relatedToolSlug: "us-driving-license",
    excerpt:
      "Driving license photos work differently from passport photos — here's what to know before your DMV visit or online pre-application.",
    content: [
      {
        heading: null,
        body: "Unlike a passport or visa photo, most US states still require your driving license or state ID photo to be taken in person at the DMV, where the photo is captured on approved equipment rather than uploaded by you.",
      },
      {
        heading: "Where an uploaded photo does apply",
        body: "Some states allow you to pre-fill an online application with a reference photo before your in-person visit, or accept an uploaded photo for renewals in limited cases. Where that applies, a plain-background, well-lit, square photo is the safest starting point.",
      },
      {
        heading: "Always confirm with your state DMV",
        body: "Because requirements vary state by state and change over time, treat our resizer as a way to prepare a clean reference photo — always check your specific state DMV's current online guidance before relying on an uploaded photo for an official ID.",
      },
    ],
  },
  {
    slug: "hmpo-uk-passport-photo-checker-guide",
    title: "How the HMPO UK Passport Photo Checker Works",
    date: "2025-06-10",
    readTime: "3 min read",
    relatedToolSlug: "uk-passport",
    excerpt:
      "HM Passport Office runs your uploaded photo through an automated checker before your application is even reviewed. Here's what it looks for.",
    content: [
      {
        heading: null,
        body: "HM Passport Office (HMPO) uses an automated photo checker as the first gate in any online passport application. A photo that fails this check stops your application before a human ever sees it.",
      },
      {
        heading: "What the checker validates",
        body: "Dimensions (35x45mm, a 4:5 ratio), a light grey or cream background, even lighting with no shadows, a neutral expression, and a file size under HMPO's upload limit.",
      },
      {
        heading: "Preparing a photo that passes on the first try",
        body: "Resize and crop to 413x531 pixels before uploading, rather than letting HMPO's own tool crop an arbitrary photo for you — our HMPO UK Passport Photo Resizer applies the exact ratio automatically.",
      },
    ],
  },
  {
    slug: "uk-passport-digital-photo-tips",
    title: "Tips for a Perfect UK Passport Digital Photo",
    date: "2025-06-12",
    readTime: "3 min read",
    relatedToolSlug: "uk-passport-digital",
    excerpt:
      "Digital UK passport applications have their own quirks compared to a printed photo booth strip. Here's how to get it right online.",
    content: [
      {
        heading: null,
        body: "Applying for a UK passport online means submitting a digital photo file rather than a printed photo, and the digital pathway has a few requirements that don't apply to a paper application.",
      },
      {
        heading: "File requirements",
        body: "A JPEG at 413x531 pixels (the 35x45mm ratio), under 500KB, with no filters or retouching applied.",
      },
      {
        heading: "Avoid over-compressing",
        body: "Squeezing a photo down to fit the file cap with very low JPEG quality can introduce visible artifacts that trigger a manual review flag. Resizing to the correct pixel dimensions first — rather than just shrinking file size — keeps quality high while still meeting the cap.",
      },
    ],
  },
  {
    slug: "dvla-photo-crop-tool-guide",
    title: "Using a DVLA Photo Crop Tool: What to Know",
    date: "2025-06-14",
    readTime: "3 min read",
    relatedToolSlug: "uk-driving-license",
    excerpt:
      "Applying for or renewing your UK driving license online? Here's how the DVLA photo requirement compares to a passport photo.",
    content: [
      {
        heading: null,
        body: "The DVLA's online driving license application shares its photo requirement with HM Passport Office, which means the same cropped photo can often serve both purposes.",
      },
      {
        heading: "Dimensions and format",
        body: "413x531 pixels, a 4:5 portrait ratio, light grey or cream background, under 500KB as a JPEG.",
      },
      {
        heading: "One difference worth noting",
        body: "While passport photos require a strictly neutral expression, DVLA guidance is slightly more relaxed on very subtle smiles — though a fully visible, unobstructed face is still required either way.",
      },
    ],
  },
  {
    slug: "uk-railcard-photo-online-guide",
    title: "UK Railcard Photo: The Easiest Official Photo to Prepare",
    date: "2025-06-16",
    readTime: "2 min read",
    relatedToolSlug: "uk-railcard",
    excerpt:
      "Compared to a passport or visa photo, a Railcard photo has the most relaxed requirements of any UK official document photo.",
    content: [
      {
        heading: null,
        body: "If you've already fought with a passport or DVLA photo's strict background and ratio rules, a Railcard photo will feel refreshingly simple.",
      },
      {
        heading: "The spec",
        body: "A square photo, roughly 400x400 pixels, under a generous 2MB file size cap, with no strict background color requirement — any plain background is generally accepted.",
      },
      {
        heading: "Applies to every Railcard type",
        body: "16-25, 26-30, Senior, Disabled Persons, and Family & Friends Railcards all use the same photo upload requirement, so one correctly-sized photo covers every card type.",
      },
    ],
  },
  {
    slug: "uk-student-visa-cas-photo-requirements",
    title: "UK Student Visa (CAS) Photo Requirements Explained",
    date: "2025-06-18",
    readTime: "4 min read",
    relatedToolSlug: "uk-student-visa",
    excerpt:
      "Applying for a UK Student visa through your CAS (Confirmation of Acceptance for Studies)? Here's the digital photo spec UKVI expects.",
    content: [
      {
        heading: null,
        body: "A UK Student visa application, filed online through UKVI after your institution issues a CAS (Confirmation of Acceptance for Studies), requires a digital photo upload as part of the process — and UKVI's spec differs slightly from a standard passport photo.",
      },
      {
        heading: "The spec",
        body: "UKVI asks for a digital photo of at least 600x750 pixels, a 4:5 portrait ratio, under roughly 10MB, saved as a JPEG. A plain white, cream, or light grey background is accepted.",
      },
      {
        heading: "Why the minimum pixel count matters",
        body: "Because UKVI specifies a minimum resolution rather than an exact one, uploading a photo below 600x750 pixels can trigger a rejection even if the file size and background are otherwise fine — larger, correctly-cropped files are safer than smaller ones here.",
      },
      {
        heading: "One photo, multiple visa stages",
        body: "The same compliant photo is typically reused across your visa application, biometric appointment paperwork, and BRP (Biometric Residence Permit) card, so it's worth getting right the first time.",
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostByToolSlug(toolSlug) {
  return BLOG_POSTS.find((p) => p.relatedToolSlug === toolSlug);
}
