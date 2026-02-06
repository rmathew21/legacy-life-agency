import LegalLayout from "./LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <section className="space-y-10">
        <div className="space-y-4">
          {/* <h1>Privacy Policy</h1> */}
          <p className="text-base leading-7 text-slate-700">
            At Legacy Life Agency, we respect and protect the privacy of our
            clients and users who visit our websites. This Privacy Policy
            explains how we collect and use information for Legacy Life Agency,
            including the advertising services, promotions, informational
            mailings and other offers we provide. By using any services provided
            by Legacy Life Agency, you indicate that you agree to the collection
            and use of your information by Legacy Life Agency as outlined in
            this Privacy Policy.
          </p>
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-slate-600">
            Last updated: February 5, 2026
          </div>
        </div>

{/* Sections */}
        {[
            {
                title: "Why We Collect Information",
                body: `First and foremost, Legacy Life Agency collects information to
                improve the services we provide and to present you with information
                and services that will interest you. We also use your information to
                measure our success and performance. For example, aggregate
                information gives us an idea of the number of visitors we attract
                and how they navigate our websites.`
            },
            {
                title: "Use Of Personal Information",
                body: `Unless you voluntarily provide personal information for a specific
                purpose, we do not collect personal information from you. We will
                never combine any personal information about a user of our site with
                any aggregate information we collect about that user, whether
                collected on our site or our Advertising Service. If you choose to
                provide personal information during registration or when using our
                services, we use your personal information to provide you with
                particular products or services that you request. If your personal
                information changes or if you wish us to delete it from our records,
                you may correct, update or delete your information by emailing us at
                roshanskariah@legacylifeagency.net Legacy Life Agency will not sell,
                share, or rent this information to others in ways different from
                what is disclosed in this statement. However, we may transfer
                personal information in connection with a sale or merger of Legacy
                Life Agency or the division responsible for the services provided to
                you. We may also share your personal information, such as your email
                address, mailing address, etc., with our technical consultants,
                third party auditors and other third parties who make our site
                available, enhance its functionality or provide associated services
                and/or who deal with you in processing your orders and/or delivering
                content, samples, products, services and gifts and prizes. These
                third parties are not allowed to use personal information except for
                the purposes of providing the applicable services. In addition, we
                reserve the right to disclose your personally identifiable
                information as required by law and when we believe that disclosure
                is necessary to protect our rights and/or comply with a judicial
                proceeding, court order, or legal process served on our website. Our
                site and services are maintained in the United States of America. By
                using the site and/or services, you authorize the export of personal
                information to the USA and its storage and use as specified in this
                policy.`
            },
            {
                title: "Other Information We Collect And Use",
                body: `We may collect online identifiers with cookies, such as IP address,
                browser type and version, and pages you view. We also keep track of
                how you got to our site and any links you click on to leave our
                site. Once you leave our site, we do not track you. This aggregate
                information is analyzed and combined with similar aggregate
                information of other users and may be collected both on our site and
                on other sites in our client community. We may share aggregate
                information with our business partners and other third parties. Such
                aggregate information is anonymous and does not identify any
                individual user, and we do not link this automatically collected
                data to personally identifiable information. You can remove
                persistent cookies by following the directions found in your
                Internet browser’s “help” file. If you reject cookies, you may still
                use our site, but your ability to use some areas of our site may be
                limited. We use your website activity to assist us in offering you a
                personalized web experience, assist you with technical support,
                diagnose problems with our server, administer our websites, and to
                tailor our product and service offerings to you. This privacy
                statement covers the use of cookies by this site only and does not
                cover the use of cookies by any advertisers.`
            },
            {
                title: "Third Party Website Links",
                body: `Some of our websites provide links to third party websites, such as
                those of our affiliates, business partners and advertisers. We have
                no access to or control over their practices. Because Legacy Life
                Agency does not control the information policies or practices of
                these third party websites, you should review their privacy policies
                to learn more about how they collect and use personal information.`
            },
            {
                title: "Security Information",
                body: `Legacy Life Agency stores all data using industry standard security
                devices, such as firewalls and encryption protocols, to safeguard
                against unauthorized access to our data. We have put in place
                reasonable physical, electronic, and managerial procedures coupled
                with carefully developed security procedures to protect your
                information from loss, misuse or unauthorized alteration. When we
                ask for sensitive information, such as credit card numbers, we
                protect it through the use of the Secure Socket Layer (SSL)
                protocol, which provides encryption during transmission. We have put
                in place policies to restrict access to your information by our
                employees. Our employees are trained to safeguard your information.
                Additionally, we use internal and external resources to review the
                adequacy of our security procedures.`
            },
            {
                title: "Protection For Children",
                body: `We do not knowingly collect personal information from anyone under
                the age of 18. Your Right to Control and Access Your Information You
                have control over your personal information and how it is collected,
                used, and shared. For example, you have a right to: Change or
                correct personal data. You can edit any personal data with us by
                emailing roshanskariah@legacylifeagency.net. Access and take your
                data. You can also ask us for a copy of personal data you provided
                to us by emailing roshanskariah@legacylifeagency.net and we will get
                back to you within 30 days. Ask us to stop using or limit our use of
                your personal data in certain circumstances—for example, if we have
                no lawful basis to keep using your data, or if you think your
                personal data is inaccurate. Object to our use of your personal
                information for marketing purposes. You can ask us to stop sending
                you marketing messages at any time by emailing us at
                roshanskariah@legacylifeagency.net or by simply clicking the
                “Unsubscribe” link in any email you receive. Ask us to delete your
                data. You have a right to be forgotten and request your personal
                information on file be deleted by contacting us at
                roshanskariah@legacylifeagency.net.`
            },
            {
                title: "How Long We Will Keep Your Personal Information",
                body: `We retain personal information that you provide us as long as we
                consider it potentially useful in contacting you about the product
                or services you have purchased or our other services, or as needed
                to comply with our legal obligations, resolve disputes and enforce
                our agreements. We will delete this information from the servers if
                you so request, as described in “Your Right To Control and Access
                Your Information” above.`
            },
            {
                title: "Changes To This Privacy Policy",
                body: `Our Privacy Policy may change from time to time. If we decide to
                change our privacy policy, we will post these changes to this
                privacy statement on legacylifeagency.net and other places we
                deem appropriate so you are aware of what information we collect,
                how we use it, and under what circumstances, if any, we disclose it.
                We reserve the right to modify this privacy statement at any time,
                so please review it frequently. Your continued use of the site after
                such changes have been posted indicates your consent and acceptance
                of such changes.`
            },
            {
                title: "Effective Date",
                body: `This Privacy Policy is effective and was last updated on February 5,
                2026.`
            },
        ].map((s) => (
            <div 
            key={s.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
                <h2 className="text-lg font-semibold text-slate-900">{s.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">{s.body}</p>
            </div>
        ))
        }
        

        

        

        

        

        
        

        

        
      </section>
    </LegalLayout>
  );
}
