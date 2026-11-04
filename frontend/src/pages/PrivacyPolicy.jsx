import PageWrapper from '../components/PageWrapper'

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 dark:text-white text-gray-900">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: November 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">1. Introduction</h2>
              <p>
                ZahrionTech ("we," "us," or "our") operates the website zahriontech.com. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website or contact us
                for our services. Please read this policy carefully. If you disagree with its terms, please discontinue
                use of our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Personal identification information</strong> – name, email address, phone number, and company name provided through our contact forms.</li>
                <li><strong>Usage data</strong> – pages visited, time spent on pages, browser type, IP address, and referring URL, collected automatically via analytics tools.</li>
                <li><strong>Cookies</strong> – small data files stored on your device to remember preferences and improve site performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to inquiries and provide requested services</li>
                <li>Improve website content and user experience</li>
                <li>Analyze site traffic through aggregated, anonymized analytics</li>
                <li>Comply with legal obligations</li>
                <li>Display relevant advertising via Google AdSense (see Section 7)</li>
              </ul>
              <p className="mt-3">We do not sell, trade, or rent your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">4. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can control cookies through your
                browser settings. Disabling cookies may affect some site functionality. Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Strictly necessary cookies</strong> – required for the site to function (e.g., language preference)</li>
                <li><strong>Analytics cookies</strong> – help us understand how visitors use our site (e.g., Google Analytics)</li>
                <li><strong>Advertising cookies</strong> – used by Google AdSense to show relevant ads based on your interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">5. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary for the purposes stated in this policy or as required
                by law. Contact form submissions are retained for up to 24 months and then deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">6. Your Rights (GDPR)</h2>
              <p>If you are located in the European Economic Area, you have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data ("right to be forgotten")</li>
                <li>Object to or restrict our processing of your data</li>
                <li>Request data portability</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-3">To exercise these rights, contact us at: <a href="mailto:privacy@zahriontech.com" className="text-brand-500 hover:underline">privacy@zahriontech.com</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">7. Google AdSense & Advertising</h2>
              <p>
                We use Google AdSense to display advertisements on our site. Google AdSense uses cookies and similar
                tracking technologies to serve ads based on your prior visits to our website and other sites on the
                internet. You may opt out of personalised advertising by visiting{' '}
                <a href="https://www.google.com/settings/ads" className="text-brand-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  Google's Ads Settings
                </a>.
              </p>
              <p className="mt-3">
                Google's use of advertising cookies enables it and its partners to serve ads based on your visit to
                our site and/or other sites on the internet. For more information see Google's{' '}
                <a href="https://policies.google.com/privacy" className="text-brand-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">8. Third-Party Services</h2>
              <p>We use the following third-party services that may collect data independently:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Google Analytics</strong> – website traffic analysis (<a href="https://policies.google.com/privacy" className="text-brand-500 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
                <li><strong>Google AdSense</strong> – advertising services (<a href="https://policies.google.com/privacy" className="text-brand-500 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
                <li><strong>Vercel</strong> – website hosting and deployment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">9. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal information
                against accidental loss, misuse, or unauthorised access. However, no internet transmission is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">10. Children's Privacy</h2>
              <p>
                Our website is not directed at children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you believe we have inadvertently collected such information,
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating
                the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white text-gray-800">12. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Email: <a href="mailto:privacy@zahriontech.com" className="text-brand-500 hover:underline">privacy@zahriontech.com</a></li>
                <li>Website: <a href="/contact" className="text-brand-500 hover:underline">zahriontech.com/contact</a></li>
              </ul>
            </section>

          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
