import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Katana Webstudios explaining how we collect, use and protect information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <div className="shell legal-content">
        <div className="legal-header">
          <p className="legal-eyebrow">Legal</p>

          <h1>Privacy Policy</h1>

          <p className="legal-updated">
            Last updated: September 21, 2026
          </p>
        </div>

        <div className="legal-body">
          <section>
            <h2>1. Introduction</h2>

            <p>
              Welcome to Katana Webstudios. We respect your privacy and are
              committed to protecting the personal information you provide
              when using our website and services.
            </p>

            <p>
              This Privacy Policy explains what information we may collect,
              how we use it, how we protect it, and your choices regarding
              your information when you visit or interact with our website.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>

            <p>
              When you contact us, request a consultation, submit an enquiry,
              or communicate with us, we may collect information that you
              voluntarily provide.
            </p>

            <p>This may include:</p>

            <ul>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number, if provided</li>
              <li>Your company or business name, if provided</li>
              <li>Information contained in your message or enquiry</li>
              <li>Other information you voluntarily provide</li>
            </ul>
          </section>

          <section>
            <h2>3. Information Collected Automatically</h2>

            <p>
              When you visit our website, certain technical information may
              be collected automatically. This may include browser type,
              device type, pages visited, approximate usage information, and
              other technical information used to understand website
              performance.
            </p>

            <p>
              We use Google Analytics to understand how visitors interact
              with our website and to improve our services and website
              experience.
            </p>
          </section>

          <section>
            <h2>4. How We Use Your Information</h2>

            <p>We may use the information we collect to:</p>

            <ul>
              <li>Respond to your enquiries and messages</li>
              <li>Provide information about our services</li>
              <li>Discuss potential projects and consultations</li>
              <li>Communicate with you regarding your enquiry</li>
              <li>Improve our website and user experience</li>
              <li>Understand website traffic and usage</li>
              <li>Maintain website security and functionality</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>5. Cookies and Analytics</h2>

            <p>
              Our website may use cookies or similar technologies to provide
              essential functionality and understand how visitors interact
              with the website.
            </p>

            <p>
              We use Google Analytics to collect information about website
              usage. This information helps us understand which pages are
              visited and how users interact with our website.
            </p>

            <p>
              You can control or disable cookies through your browser
              settings. Disabling certain cookies may affect some website
              functionality.
            </p>
          </section>

          <section>
            <h2>6. Contact Forms</h2>

            <p>
              If you submit information through a contact or enquiry form on
              our website, the information you provide may be used to respond
              to your request and communicate with you regarding our services.
            </p>

            <p>
              Please avoid submitting sensitive personal information through
              general contact forms unless it is specifically requested and
              necessary for your enquiry.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>

            <p>
              We may use trusted third-party services to operate, maintain,
              analyse, or communicate through our website.
            </p>

            <p>
              These services may include website hosting, analytics, email
              delivery, payment providers, and other tools required to
              provide our services.
            </p>

            <p>
              Third-party services may process information according to their
              own privacy policies and terms.
            </p>
          </section>

          <section>
            <h2>8. Data Security</h2>

            <p>
              We take reasonable measures to protect the information we
              collect from unauthorised access, misuse, alteration, or
              disclosure.
            </p>

            <p>
              However, no method of transmission or storage over the internet
              can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2>9. Data Retention</h2>

            <p>
              We retain personal information only for as long as reasonably
              necessary for the purposes described in this Privacy Policy,
              including responding to enquiries, maintaining business
              records, resolving disputes, and complying with applicable
              legal obligations.
            </p>
          </section>

          <section>
            <h2>10. Your Privacy Choices</h2>

            <p>
              Depending on applicable law, you may have rights regarding your
              personal information, including requesting access to,
              correction of, or deletion of certain information.
            </p>

            <p>
              To make a privacy-related request, please contact us using the
              contact information provided on our website.
            </p>
          </section>

          <section>
            <h2>11. Children&apos;s Privacy</h2>

            <p>
              Our website and services are not intentionally directed toward
              children. We do not knowingly collect personal information from
              children through our website.
            </p>
          </section>

          <section>
            <h2>12. Changes to This Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time to reflect
              changes to our services, website, technology, or applicable
              legal requirements.
            </p>

            <p>
              Any updates will be posted on this page with a revised
              &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2>13. Contact Us</h2>

            <p>
              If you have any questions about this Privacy Policy or how your
              information is handled, please contact Katana Webstudios using
              the contact information available on our website.
            </p>

            <div className="legal-contact">
              <strong>Katana Webstudios</strong>
              <span>{`Website: ${siteUrl}`}</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

const siteUrl = "https://katanawebstudios.com";