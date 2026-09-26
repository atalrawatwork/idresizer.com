export const BLOG_POSTS = [
  {
    slug: "why-digital-passport-visa-applications-get-rejected",
    title: "Why Do Digital Passport & Visa Applications Get Rejected?",
    date: "2025-05-20",
    readTime: "5 min read",
    excerpt:
      "Getting your US passport photo right is essential. The photo must meet specific dimension, size, and quality requirements — here's everything you need to know, and why the exact math behind it trips so many people up.",
    image: "passport",
    content: [
      {
        heading: null,
        body: "Most rejected passport and visa photos aren't rejected because the photo looks bad. They're rejected because a government portal ran a set of automated checks against the file — pixel dimensions, aspect ratio, file weight in kilobytes, and sometimes even DPI metadata — and the file failed one of them by a small margin. Understanding the math behind those checks is the fastest way to stop resubmitting.",
      },
      {
        heading: "The portal isn't looking at your face first",
        body: "Before a human ever reviews your photo, an automated intake system validates the file against a spec. The US State Department's DS-160 photo tool, for example, expects a square image, ideally 600 by 600 pixels, saved as a JPEG under roughly 240KB. If your camera exports a 4032x3024 photo at 3.8MB, the portal doesn't try to interpret it — it simply flags the upload and stops you before you reach the next step. The rejection message rarely explains that the underlying issue was pixel count or byte size, which is why so many applicants assume the problem is lighting or expression when it's actually arithmetic.",
      },
      {
        heading: "Aspect ratio is stricter than it sounds",
        body: "A ratio like 4:5 sounds like a loose guideline, but portals check it down to the pixel. The UK's GOV.UK passport and DVLA driving license tools expect a 35x45mm print equivalent, which on screen works out to 413x531 pixels — a precise 4:5 relationship. Crop your photo to 410x532 and some validators will reject it outright, because the math no longer resolves to a clean ratio. This is also why simply shrinking a photo in a generic image editor often fails: shrinking preserves the original ratio of your camera sensor (commonly 4:3 or 3:2), not the 1:1 or 4:5 ratio the application actually needs.",
      },
      {
        heading: "File size caps exist because of how these systems store images",
        body: "Government application systems process an enormous volume of uploads, and many still route photos through decades-old backend storage designed around small file footprints. A 240KB cap for a US visa photo, a 500KB cap for a UK passport photo, and a 2MB cap for a UK railcard photo aren't arbitrary — they reflect what each system was engineered to store efficiently and check quickly. Modern phone cameras routinely produce files ten to twenty times larger than these caps, which means almost every unprocessed phone photo will fail on file size alone, even when the framing and lighting are perfect.",
      },
      {
        heading: "Compression quality matters as much as compression size",
        body: "Hitting a byte target by aggressively compressing a JPEG introduces visible artifacts — blotchy skin tones, blurred edges around the face, and banding in the background — which can trigger a manual rejection for 'poor image quality' even though the file technically passed the automated size check. The better approach is resizing to the exact target pixel dimensions first, since fewer pixels naturally compress to a smaller file at a higher visual quality, and only applying moderate JPEG compression afterward to land under the cap.",
      },
      {
        heading: "Background color is a separate, equally strict check",
        body: "US portals require a plain white or off-white background, while UK portals accept a light grey or cream background but reject anything with texture, shadow, or color variation. Automated background checks sample pixels around the edges of the frame and compare them against an expected color range; a shadow cast by indoor lighting is often enough to push those edge pixels outside the accepted tolerance and cause a rejection, independent of whether the pixel dimensions and file size were correct.",
      },
      {
        heading: "The fix is processing the photo to the exact spec before you upload",
        body: "Because each portal enforces its own combination of pixel dimensions, aspect ratio, and byte ceiling, the reliable fix is to resize and crop to that exact spec locally, rather than uploading a raw camera photo and hoping the portal accepts it. That's the entire purpose of the tools on this site: each one is pre-configured with the exact pixel dimensions and file size ceiling a specific government portal expects, so the output either passes the automated check on the first attempt or fails for a reason unrelated to sizing, such as an obstructed face or an uneven background.",
      },
    ],
  },
  {
    slug: "us-passport-photo-size-requirements-2025",
    title: "US Passport Photo Size Requirements (2025)",
    date: "2025-05-20",
    readTime: "4 min read",
    excerpt:
      "Everything you need to know about US passport photo size, dimension, and quality standards before you submit your application.",
    image: "us-passport",
    content: [
      {
        heading: null,
        body: "The US Department of State specifies a narrow set of requirements for passport photos, and missing any one of them is the most common reason applications bounce back for resubmission. Here is the exact spec, broken down plainly.",
      },
      {
        heading: "Size and resolution",
        body: "Your photo must be 2x2 inches (51x51mm), which on screen for digital submission translates to 600x600 pixels at a minimum resolution of 300 DPI. Your face should measure between 1 and 1 3/8 inches (25-35mm) from chin to the top of the head, roughly 50-69% of the image's total height.",
      },
      {
        heading: "Background and lighting",
        body: "The background must be plain white or off-white, with no shadows, patterns, or objects visible behind you. Even lighting across your face, with no harsh shadows on either side or across your forehead, is required for the photo to pass automated review.",
      },
      {
        heading: "Expression and posture",
        body: "A neutral expression with both eyes open is required; slight smiles are permitted but wide grins are not. Glasses are no longer allowed in US passport photos as of recent guidance, and head coverings are only permitted for documented religious or medical reasons.",
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
    excerpt:
      "A complete UK passport photo guide, covering size, background, and expression rules enforced by GOV.UK.",
    image: "uk-passport",
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
        body: "GOV.UK accepts a light grey or cream background, which is a noticeably different requirement from the pure white background the US requires. Submitting a photo shot against a US-style white background is usually still accepted, but a cream or light grey backdrop is the officially recommended choice.",
      },
      {
        heading: "Common rejection reasons",
        body: "The most frequent rejections are photos that are too zoomed in (cropping off the top of the head), reflections on glasses, and shadows cast by overhead lighting. Our UK Passport 35x45mm Digital Photo Tool applies the correct crop automatically to avoid the framing issue entirely.",
      },
    ],
  },
  {
    slug: "uk-driving-license-photo-requirements-2025",
    title: "UK Driving License Photo Requirements (2025)",
    date: "2025-05-15",
    readTime: "3 min read",
    excerpt:
      "Everything you need to know about DVLA photo guidelines before you renew or apply for your UK driving license.",
    image: "uk-dvla",
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
        body: "Unlike a passport photo, DVLA guidance is slightly more lenient on very subtle smiles, but still requires a fully visible face with no head covering unless worn for religious or medical reasons, and no glasses glare.",
      },
    ],
  },
  {
    slug: "photo-resizer-vs-crop-tool-which-one-to-use",
    title: "Photo Resizer vs Crop Tool: Which One to Use?",
    date: "2025-05-12",
    readTime: "3 min read",
    excerpt:
      "Confused about which tool to use? This guide breaks down the difference and helps you pick the right one every time.",
    image: "resize-crop",
    content: [
      {
        heading: null,
        body: "\"Resizer\" and \"crop tool\" get used interchangeably, but they solve two different problems, and government photo portals usually need both applied together, in the right order.",
      },
      {
        heading: "Resizing changes scale",
        body: "Resizing takes an existing image and scales it up or down while keeping the same content and, usually, the same aspect ratio. If your original photo is a 4:3 rectangle, resizing it alone will never make it a square — it just makes the same rectangle bigger or smaller.",
      },
      {
        heading: "Cropping changes framing",
        body: "Cropping removes pixels from the edges of a photo to change its shape or framing. This is the step that turns a 4:3 rectangle into the 1:1 square a US visa photo needs, or the 4:5 portrait a UK passport photo needs.",
      },
      {
        heading: "Why our tools do both automatically",
        body: "Every tool on idresizer.com applies an automatic center-crop to reach the correct ratio first, then resizes the cropped image to the exact pixel dimensions a given portal expects, and finally compresses the result to fit under the required file size. You only need to upload a photo — the sequencing happens for you.",
      },
    ],
  },
  {
    slug: "photo-editing-tips-for-official-documents",
    title: "Photo Editing Tips for Official Documents",
    date: "2025-05-08",
    readTime: "4 min read",
    excerpt:
      "Common mistakes and pro tips when preparing your photo and visa applications for a smooth, first-try approval.",
    image: "editing-tips",
    content: [
      {
        heading: null,
        body: "A compliant photo starts before you ever open an editing tool. A little preparation at the point of capture avoids most of the rejections editing software can't fix afterward.",
      },
      {
        heading: "Shoot against a genuinely plain wall",
        body: "Textured walls, patterned wallpaper, and doorframes in the background are difficult to remove convincingly after the fact. A plain white or light-colored wall, photographed straight-on, gives the automatic cropping tool the cleanest result.",
      },
      {
        heading: "Use daylight, not overhead lighting",
        body: "Overhead lights cast shadows under the eyes and chin that are hard to correct after the photo is taken. Standing side-on to a window, facing the light, produces the even illumination that automated review systems expect.",
      },
      {
        heading: "Keep your phone at eye level",
        body: "Shooting from below exaggerates the chin and shortens the forehead, while shooting from above does the reverse. Eye-level framing keeps your proportions natural and gives our automatic center-crop the best source to work with.",
      },
      {
        heading: "Let the tool handle the technical spec",
        body: "Once you have a clean, well-lit source photo, upload it to the matching tool on this site. Everything after that — dimension, ratio, and file size — is handled automatically in your browser.",
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
