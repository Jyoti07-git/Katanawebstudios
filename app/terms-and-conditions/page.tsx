import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using Katana Webstudios website and services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="legal-page">
      <div className="shell legal-content">
        <div className="legal-header">
          <p className="legal-eyebrow">Legal</p>

          <h1>Terms &amp; Conditions</h1>

          <p className="legal-updated">
            Last updated: September 21, 2026
          </p>
        </div>

        <div className="legal-body">
          <section>
            <h2>1. Introduction</h2>

            <p>
              Welcome to Katana Webstudios. By accessing or using our
              website, you agree to these Terms &amp; Conditions. If you do
              not agree with these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2>2. Our Services</h2>

            <p>
              Katana Webstudios provides website design, web development,
              WordPress development, React development, website redesign,
              maintenance, and related digital services.
            </p>

            <p>
              The exact scope, timeline, pricing, deliverables, revisions,
              and other project requirements will be agreed upon separately
              with each client.
            </p>
          </section>

          <section>
            <h2>3. Project Agreements</h2>

            <p>
              Before starting a project, the client and Katana Webstudios
              may agree on the project scope, deliverables, pricing,
              estimated timeline, payment terms, and other relevant
              requirements.
            </p>

            <p>
              Any work requested outside the agreed project scope may require
              additional fees or a separate agreement.
            </p>
          </section>

          <section>
            <h2>4. Payments</h2>

            <p>
              Payment terms will be communicated and agreed upon before or
              during the project.
            </p>

            <p>
              Where an advance payment is required, work may begin after the
              agreed payment has been received.
            </p>

            <p>
              Additional work, revisions, features, or services outside the
              original agreement may be charged separately.
            </p>
          </section>

          <section>
            <h2>5. Client Responsibilities</h2>

            <p>
              Clients are responsible for providing accurate information,
              content, images, branding materials, credentials, approvals,
              and other resources reasonably required to complete the
              project.
            </p>

            <p>
              Delays in providing required materials or approvals may affect
              the project timeline.
            </p>
          </section>

          <section>
            <h2>6. Website Content and Intellectual Property</h2>

            <p>
              Unless otherwise agreed in writing, the client is responsible
              for ensuring that any content, images, logos, text, or other
              materials supplied by the client can legally be used for the
              project.
            </p>

            <p>
              Upon completion and receipt of agreed payments, ownership or
              usage rights for final client-specific deliverables will be
              handled according to the project agreement.
            </p>

            <p>
              Katana Webstudios retains the right to use completed projects
              in its portfolio, website, social media, or marketing materials
              unless otherwise agreed with the client.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>

            <p>
              Websites may use third-party services, plugins, APIs, hosting
              providers, payment providers, analytics tools, fonts, or other
              external technologies.
            </p>

            <p>
              Katana Webstudios is not responsible for changes, outages,
              pricing, policies, or failures caused by third-party services.
            </p>
          </section>

          <section>
            <h2>8. Website Availability</h2>

            <p>
              We aim to keep our website available and functioning properly.
              However, we do not guarantee uninterrupted or error-free
              availability.
            </p>

            <p>
              Website availability may occasionally be affected by
              maintenance, hosting issues, technical problems, or third-party
              services.
            </p>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>

            <p>
              To the extent permitted by applicable law, Katana Webstudios
              will not be responsible for indirect, incidental, or
              consequential losses arising from the use of our website or
              services.
            </p>

            <p>
              Clients remain responsible for decisions and business outcomes
              resulting from the use of websites, digital products, or
              services delivered by Katana Webstudios.
            </p>
          </section>

          <section>
            <h2>10. Website Use</h2>

            <p>
              You agree not to misuse our website, attempt to gain
              unauthorised access, interfere with its operation, introduce
              malicious software, or use the website for unlawful purposes.
            </p>
          </section>

          <section>
            <h2>11. Links to Other Websites</h2>

            <p>
              Our website may contain links to third-party websites or
              services. These links are provided for convenience or
              informational purposes.
            </p>

            <p>
              Katana Webstudios does not control and is not responsible for
              the content, availability, or policies of third-party websites.
            </p>
          </section>

          <section>
            <h2>12. Changes to These Terms</h2>

            <p>
              We may update these Terms &amp; Conditions from time to time.
              Updated terms will be posted on this page with a revised
              &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2>13. Governing Law</h2>

            <p>
              These Terms &amp; Conditions shall be interpreted and governed
              in accordance with applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2>14. Contact</h2>

            <p>
              If you have any questions regarding these Terms &amp; Conditions
              or our services, please contact Katana Webstudios through the
              contact information provided on our website.
            </p>

            <div className="legal-contact">
              <strong>Katana Webstudios</strong>
              <span>Website: https://katanawebstudios.com</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}