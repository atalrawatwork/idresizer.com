export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using idresizer.com's free photo tools.",
};

export default function TermsPage() {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Legal</p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: September 2026</p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed text-slate-600">
          <div>
            <h2 className="text-lg font-bold text-navy">Acceptance of terms</h2>
            <p className="mt-2">
              By using idresizer.com, you agree to these terms. If you do not
              agree, please do not use the site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Description of service</h2>
            <p className="mt-2">
              idresizer.com provides free, browser-based tools to resize and
              crop photos toward common dimension and file-size targets used
              by various government document photo portals. All processing
              happens locally in your browser.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">No guarantee of official acceptance</h2>
            <p className="mt-2">
              We provide our tools as a convenience to help you match commonly
              published pixel, ratio, and file-size specifications. We are
              not affiliated with any government agency, and we cannot
              guarantee that a processed photo will be accepted by any
              specific application portal, as requirements can change and
              other factors (such as lighting, expression, or background)
              also affect acceptance. Always verify current requirements on
              the relevant official government website before submitting
              your application.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Your responsibility</h2>
            <p className="mt-2">
              You are responsible for the photos you upload and process, and
              for ensuring they comply with the rules of the portal you
              intend to submit them to. You must not use this site to
              process photos you do not have the right to use.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">No warranty</h2>
            <p className="mt-2">
              This site is provided "as is" without warranties of any kind,
              express or implied. We do not guarantee the site will be
              error-free, uninterrupted, or fit for a particular purpose.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Limitation of liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, idresizer.com and its
              operators are not liable for any indirect, incidental, or
              consequential damages arising from your use of this site,
              including a rejected application or missed deadline.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Changes to these terms</h2>
            <p className="mt-2">
              We may update these terms from time to time. Continued use of
              the site after changes are posted constitutes acceptance of
              the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Contact us</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
              <a href="mailto:support@idresizer.com" className="text-brand-600 underline">
                support@idresizer.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
