// Reusable ad placeholder. Drop your real ad network script (Google AdSense,
// Ezoic, Mediavine, etc.) inside the marked spot below — the wrapper sizing
// and spacing around it will keep the layout stable either way.
//
// Example for Google AdSense, once your site is approved:
//   1. Add the AdSense loader script once in app/layout.js <head>:
//      <script
//        async
//        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
//        crossOrigin="anonymous"
//      />
//   2. Replace the placeholder <div> below with:
//      <ins className="adsbygoogle" style={{ display: "block" }}
//        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
//        data-ad-slot="XXXXXXXXXX"
//        data-ad-format="auto"
//        data-full-width-responsive="true" />
//      then call (window.adsbygoogle = window.adsbygoogle || []).push({})
//      in a useEffect on the client.

export default function AdSlot({ label = "Advertisement", size = "banner" }) {
  const heights = {
    banner: "h-24 sm:h-28",
    square: "h-64",
    leaderboard: "h-24",
  };

  return (
    <div className="container-page">
      <div
        className={`flex w-full items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-xs font-medium text-slate-400 ${heights[size] || heights.banner}`}
      >
        {label}
      </div>
    </div>
  );
}
