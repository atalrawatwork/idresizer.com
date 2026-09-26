export const metadata = {
  title: "Privacy Policy",
  description:
    "How idresizer.com handles your photos, contact form data, cookies, and analytics.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Legal</p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: September 2026</p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed text-slate-600">
          <div>
            <h2 className="text-lg font-bold text-navy">Your photos never leave your device</h2>
            <p className="mt-2">
              Every resize, crop, and compression tool on idresizer.com runs
              entirely in your web browser using the HTML5 Canvas API. When
              you upload a photo, it is processed locally on your device and
              is never transmitted to, or stored on, our servers. We have no
              access to the photos you process and cannot recover them once
              you close or refresh the page.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Contact form information</h2>
            <p className="mt-2">
              When you submit our contact form, we collect the name, email
              address, and message you provide so we can respond to your
              inquiry. This information is used only to reply to you and is
              not sold or shared with third parties, except as needed to
              operate the form itself (for example, an email delivery
              service).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Cookies and advertising</h2>
            <p className="mt-2">
              idresizer.com may display advertisements served by third-party
              ad networks, such as Google AdSense. These networks may use
              cookies or similar technologies to serve ads based on your
              prior visits to this or other websites. You can opt out of
              personalized advertising by visiting your ad network's
              settings (for Google, visit{" "}
              <a
                href="https://adssettings.google.com"
                className="text-brand-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              ), or by adjusting your browser's cookie preferences.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Analytics</h2>
            <p className="mt-2">
              We may use privacy-conscious analytics tools to understand
              aggregate traffic patterns, such as which pages are visited and
              which browsers or devices are common. This data is anonymized
              and is never linked to photos you process on this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Children's privacy</h2>
            <p className="mt-2">
              idresizer.com is not directed at children under 13, and we do
              not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Changes to this policy</h2>
            <p className="mt-2">
              We may update this privacy policy from time to time. Any
              changes will be posted on this page with an updated revision
              date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Contact us</h2>
            <p className="mt-2">
              If you have questions about this privacy policy, reach out at{" "}
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
