import React, { useState, useEffect } from "react";

const PrivacyPolicy = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: "towhom",
      title: "TO WHOM THIS PRIVACY NOTICE APPLY",
      descrption: `    Please note that third-party websites that may be linked
                      to this website/mobile application are not governed by
                      this Privacy Notice. We encourage visitors to our
                      platforms to review the privacy notice on each of these
                      other websites before sharing any personal data. You
                      acknowledge that you have read and understood the contents
                      of this Privacy Notice when you access our platforms; use
                      our services, content, features, technologies or functions
                      offered on our website or digital platforms; or otherwise,
                      interact with us. How we collect your personal data We
                      typically collect or obtain your personal data because you
                      give it to us (for example, in a form on our website) or
                      because other people give that information to us (for
                      example, third-party service providers that we use to help
                      operate our website). We may also collect or obtain
                      personal data from you because we observe or infer that
                      information about you from the way you interact with us.
                      In order to improve your experience when you use our
                      platforms and to ensure that our platforms function
                      effectively and securely, we (or our service providers)
                      also use cookies (small text files stored in a user’s
                      browser or mobile device) and web beacons (small graphic
                      images that are placed on a website and used to monitor a
                      user’s interaction with that website) which may collect
                      personal data. Additional information on how we use
                      cookies and other tracking technologies and how you can
                      control these can be found in our Cookies Notice , which
                      is included at the end of this document.`,
    },
    {
      id: "otherwebsites",
      title: "OTHER WEBSITES",
      descrption: `Please note that third-party websites that may be linked to this website/mobile application are not governed by this Privacy Notice. We encourage visitors to our platforms to review the privacy notice on each of these other websites before sharing any personal data.
You acknowledge that you have read and understood the contents of this Privacy Notice when you access our platforms; use our services, content, features, technologies or functions offered on our website or digital platforms; or otherwise, interact with us.
How we collect your personal data
We typically collect or obtain your personal data because you give it to us (for example, in a form on our website) or because other people give that information to us (for example, third-party service providers that we use to help operate our website). We may also collect or obtain personal data from you because we observe or infer that information about you from the way you interact with us. In order to improve your experience when you use our platforms and to ensure that our platforms function effectively and securely, we (or our service providers) also use cookies (small text files stored in a user’s browser or mobile device) and web beacons (small graphic images that are placed on a website and used to monitor a user’s interaction with that website) which may collect personal data.
Additional information on how we use cookies and other tracking technologies and how you can control these can be found in our Cookies Notice , which is included at the end of this document.`,
    },
    {
      id: "datacollect",
      title: "THE DATA WE COLLECT AND HOLD ABOUT YOU",
      descrption: `The personal data that we may collect from or about you depends on the specific services, activities or products we undertake but typically includes:

Identity Data such as first name, maiden name, last name, username or similar identifier, gender, image, biometrics, marital status, title, date of birth, Bank Verification Number, passport number and other national ID marital status, title, date of birth, passport number and other national ID numbers, employment details (for example, the organization you work for, your job title); and family circumstance. Contact Data such as address, email address, country of residence, and telephone numbers.

Financial Data such as bank account and payment card details.

Transaction Data such as details about payments to and from you and other details of products and services you have been provided by us. Technical Data such as internet protocol (IP) address, geographic location, contact lists, images and files, details of inbound and outbound calls, text messages, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.

Profile Data such as your username and password, profile picture, product or service requests made by you, your interests, preferences, feedback and survey responses.

Usage Data such as details of how you use any product or service provided by Izah Pays, details of how you like to use our website or the interactive products, tools, other technology or services we provide to you or our clients, applications installed and used on your device websites that you visited before and after visiting our website, details of how you like to interact with us, and similar information. Marketing and Communications Data such as your preferences in receiving marketing data from us, our third parties and your communication preferences.

The types of personal data and ‘sensitive’ or ‘special categories’ of personal data that we collect will vary depending on the nature of the products and services that we provide to you and how you use our platforms. In some cases, the ‘sensitive’ or ‘special categories’ of personal data that we collect may include information collected as part of Know-Your-Customer (KYC) and Anti-Money Laundering (AML) checks that we must conduct before accepting you as a customer.

In some rare circumstances, we will also gather other ‘special categories’ of personal data about you because you volunteer that data to us (for example, it appears in a copy of your resume/CV that you upload on our website) or for our legitimate interest (through CCTV for ensuring security on our premises). In some other circumstances, the personal data we collect from you is needed to meet our legal or regulatory obligations or to provide you with the products or services requested by you.

In some cases, we may also collect personal data about you indirectly from third parties including but not limited to: (i) your employer; (ii) third parties such as providers of KYC and AML services which we use to help us meet our legal obligations and verify your identity where we provide you with products or services; (iii) background check providers which we sometimes use to verify your identity when you apply to access our products; (iv) third- party service providers that help us to operate our platforms; (v) your banks and financial institutions; and (vi) credit reference organisations.`,
    },
    {
      id: "howweuse",
      title: "HOW WE USE INFORMATION ABOUT YOU",
      descrption: `We will use your personal data to provide you with products or services. As part of this, we may use your personal data in the course of correspondence relating to those products or services. Such correspondence may be with you, our customers, our service providers or public or judicial authorities with the necessary authorization. In many cases, we also use your personal data to conduct due diligence checks in advance of providing products or services to you and to process an application from you or a prospective client to receive products or services from us. If you are referred to us by an intermediary or similar third party, we typically use your personal data to assess whether to accept or reject your referral to Izah Pays by that intermediary or a similar third party.

Use of personal data collected via our platforms

We generally use your personal data collected via our platforms:

to manage and improve our products and services;

to manage and improve our platforms (including by drawing up statistics on the usage of our platforms);

to tailor the content of our platforms to provide you with a more personalised experience and draw your attention to information about products and services that may be of interest to you;

to manage and respond to any request that you submit through our platforms;

to help us learn more about you, the products and services that you receive from Izah Pays, and other products and services that you or your employer might be interested in receiving; or

to correspond with you in relation to services you use or information you provide via our platforms. This correspondence is usually with you, our service providers, or public or judicial authorities with the necessary authorization.

Use of personal data for other activities that form part of the operation of our business

We generally also use your personal data collected via platforms for the purposes of, or in connection with:

applicable legal or regulatory requirements;

requests and communications from public or judicial authorities with the necessary authorization;

financial accounting, invoicing and risk analysis purposes;

prudent operational management (including credit, fraud and risk management, audit, training and similar administrative purposes); client relationship purposes, which involve: (i) contacting you to receive feedback on Izah Pays products or services; and (iii) contacting you for other marketing or research purposes; recruitment and business development purposes services we receive from our professional advisors, such as lawyers, accountants and consultants;

arrangements we have in place with intermediaries, brokers and other individuals and entities that partner with us;

protecting our rights and those of our customers; and meeting our corporate and social responsibilities.`,
    },
    {
      id: "legalgrounds",
      title: "THE LEGAL GROUNDS WE RELY ON FOR PROCESSING PERSONAL DATA",
      descrption: `We will only use your personal data as allowed by law and documented by our data protection team. Usually, we will use your personal data in any of the following circumstances:

Where you consent to our use of your personal data when appropriate;

Where it is necessary to perform contractual obligations that we owe towards you or to take pre-contractual steps at your request;

Where we need to comply with a legal obligation or requirement;

Where it is necessary to achieve our legitimate business objectives;

To the extent that we process any sensitive personal data relating to you for any of the purposes outlined above, we will do so either because: (1) you have given us your explicit consent to process that information; (2) the processing is necessary to enter into a binding contract with you or the performance of our obligations under applicable laws; (4) the processing is necessary for reasons of substantial public interest on the basis of applicable law (for example where we are required by law or regulatory requirements to process that information in order to ensure we meet our KYC and AML obligations); or (5) the processing is necessary for the establishment, exercise or defense of legal claims; (7) the processing is necessary for archiving, historical, statistical, or scientific research purposes.

Note that where we use consent as the legal basis to process your personal data, you can withdraw your consent at any time by clicking the necessary link provided on our platforms, emails, by sending an email to dataprotection@Izah Pays.com, or by unsubscribing to our services.`,
    },
    {
      id: "disclosure",
      title: "TO WHOM WE DISCLOSE YOUR INFORMATION",
      descrption: `It may be necessary for us to share your personal data with third parties. These third parties may include persons or entities affiliated with our company, or external third parties such as our service providers, and business partners.

We generally disclose details about you to professional advisors and third parties that provide services to us (such as IT systems providers, platform providers, financial advisors, consultants including lawyers and accountants) and other goods and services providers (such as providers of marketing services where we are permitted to disclose your personal data to them); competent authorities (including any national and/or international regulatory or enforcement body or court or other form of tribunal, where we are required to do so by applicable law or regulation at their request); a potential buyer, transferee, merger partner or seller and their advisers in connection with an actual or potential transfer or merger of part or all of Izah Pays’s business or assets, or any associated rights or interests, or to acquire a business or enter into a merger with it; credit reference agencies or other organizations that help us detect criminal activity and incidence of fraud; and any federal, state or local government departments and other statutory or public bodies.

We require all third parties to respect the privacy and the ensure security of your personal data, and treat it in accordance with the law. We do not allow our third party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes in accordance with our instructions.`,
    },
    {
      id: "international",
      title: "INTERNATIONAL DATA TRANSFERS",
      descrption: `We do not routinely transfer your personal data outside of Nigeria. Whenever we transfer your personal data out of Nigeria, we ensure that a similar degree of protection is afforded to it in the country to which it is transferred by using appropriate transfer mechanisms and ensuring that appropriate safeguards are in place. In any case, we may transfer personal data outside Nigeria where the recipient country is on the data protection whitelist for the transfer of personal data as set out in the Nigeria Data Protection Regulation Framework 2020 or such other applicable regulations set out by relevant regulatory authorities`,
    },
    {
      id: "marketing",
      title: "MARKETING COMMUNICATIONS",
      descrption: `We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising. Our marketing communications have opt-out links in our emails to you through which you can inform us to stop processing your data for marketing and advertising purposes. Ideally, we would request for your consent before we send such marketing communications in the first place. However, where for some reason we inadvertently send marketing communications to you, we would provide you with the option to opt-out from receiving such marketing communications.`,
    },
    {
      id: "retention",
      title: "HOW LONG DO WE KEEP YOUR PERSONAL DATA",
      descrption: `We will hold your personal information on Izah Pays’s systems for as long as is necessary to fulfil the purpose for which it was collected or to comply with any legal, regulatory, tax, accounting, reporting requirements or internal policy requirements. We endeavour to dispose your personal data once we have concluded that we no longer require your personal data in connection with the purpose for which it was collected and if disposing such personal data would not expose us to any actions, sanctions or claims. The periods for which we hold different categories of personal data differ. For example, we may hold personal data received: from unsuccessful job applications for six (6) months after notifying the applicant of the outcome; during a request to the help desk for three (3) years after the resolution of such request; while handling customer complaints for six (6) years after the resolution of the complaint; and from customers in relation to their accounts for six (6) years after the successful closure of their accounts.

Please note that the periods stated above are subject to overriding legal obligations and public policy, and changing business realities. Therefore, we shall update the above-stated periods accordingly.`,
    },
    {
      id: "changepurpose",
      title: "CHANGE OF PURPOSE",
      descrption: `We will only use your personal data for the purposes for which we collected it unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.

If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so, and where such purpose can only be conducted based on your consent, we shall appropriately give you the opportunity to give or refuse your consent.

Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.`,
    },
    {
      id: "protection",
      title: "PROTECTION OF YOUR PERSONAL DATA",
      descrption: `We have put in place appropriate security measures to prevent your personal data from being accidentally lost, altered, disclosed, used or accessed in an unauthorised way. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties on a professional need-to-know basis. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.

We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.

We use a range of physical, electronic and managerial measures to ensure that we keep your personal data secure, accurate and up to date. These measures include: education and training of relevant staff to ensure they are aware of our privacy obligations when handling personal data as well as training around social engineering, phishing, spear phishing, and password risks; administrative and technical controls to restrict access to personal data on a ‘need to know’ basis; technological security measures, including firewalls, encryption and anti-virus software; physical security measures, such as staff security passes to access our premises; external technical assessments, security audits and vendor due diligence; endpoint security: anti-virus, portable storage device lockdown, restricted administrative privileges;

Real-time monitoring of data leakage controls;

Layered and comprehensive cybersecurity defences; and Security incident reporting and management.

Although we use appropriate security measures once we have received your personal data, the transmission of data over the internet (including by e-mail) is never completely secure. We endeavour to protect personal data, but we cannot guarantee the security of data transmitted to us or by us.`,
    },
    {
      id: "storage",
      title: "STORAGE OF YOUR DATA",
      descrption: `All personal data you provide to us may be stored on our secure cloud-based data storage as well as on our premises, offsite based locations and network accessible storage which include external drives only for authorized users. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Notice.

We erase/delete personal data in the event of any of the following:
The personal data is no longer necessary in relation to the purposes for which they were collected or processed;

You withdraw your consent where the processing was based on your consent, or you object to the processing and there is no overriding lawful basis for the processing;

The personal data was inadvertently collected or processed in the first place or in compliance with lawful directives from government regulators.`,
    },
    {
      id: "rights",
      title: "YOUR RIGHTS AND HOW TO CONTACT US",
      descrption: `You have various rights in relation to your personal data. In particular, you have a right to:

object to the processing of your personal data for reasons such as sending you marketing communication; request a copy of personal data we hold about you; ask that we update the personal data we hold about you, or correct such personal data that you think is incorrect or incomplete; ask that we delete personal data that we hold about you, or restrict the way in which we use such personal data; and to withdraw consent to our processing of your personal data (to the extent such processing is based on consent)

To exercise any of your rights, or if you have any other questions about our use of your personal data, please e- mail dataprotection@Izah Pays.com or write to Izah Pays’s Data Protection Officer at 23 Awolowo Road, Ikoyi Lagos, Nigeria.

You may also use these contact details if you wish to make a complaint to us relating to your privacy.

If you are unhappy with the way we handled your personal data or any privacy query or request that you have raised with us, you also have a right to complain to a data protection regulator in the place where you live or work, or in the place where you think an issue in relation to your data has arisen. The Nigeria Data Protection Commission (NDPC) is the data protection regulator in Nigeria with oversight on the protection of personal data.

The NDPC’s website (https://ndpc.gov.ng/) has a wealth of useful information in respect of your rights over your personal data.`,
    },
    {
      id: "breach",
      title: "BREACH/PRIVACY VIOLATION",
      descrption: `In the event of a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to your personal data, we shall within 72 (seventy-two) hours of having knowledge of such breach report the details of the breach to the appropriate government agency. Where we ascertain that such breach is detrimental to your rights and freedoms in relation to your personal data, we shall within 7 (seven) days of knowledge of the occurrence of such breach take steps to inform you of the breach incident, the risk to your rights and freedoms resulting from such breach and any course of action to remedy said breach.`,
    },
    {
      id: "cookies",
      title: "COOKIES NOTICE",
      descrption: `We use cookies on our website to improve the user experience and secure our platforms. For cookies that we use to ensure the safety and security of our platforms, are essential for the optimal functioning of our platforms and cannot be switched off. We will however, give you the option to accept or refuse non-essential cookies on your devices when using our platforms.

What are Cookies?
Cookies are small text files that are commonly downloaded to your computer or mobile device by the websites that you visit. They enable the website tag your device and recognize it as you move around the site (and potentially when you return at a later date) so that, for example, you do not have to re-enter your password each time you move between pages of the website, and your language preference is permanently identified.

Can I turn off cookies?
If you do not wish to receive cookies, you only can reject non-essential cookies on your devices, or you can set your web browser to disable non-essential cookies following the simple procedures embedded in the browser. If you decide to disable cookies, you may find that certain aspects of our website do not work as expected.`,
    },
    {
      id: "changes",
      title: "CHANGES TO OUR PRIVACY POLICY",
      descrption: `This Privacy Notice may be updated from time to time for any reason we deem appropriate and you shall be notified of such updates. This Privacy Notice was last updated September 2024.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-1 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Izah Pays Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Last updated September 2024
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          {/* <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 rounded-lg p-4">
              <h2 className="font-bold text-lg mb-4">Contents</h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside> */}

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Summary */}
            <section className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <p className="text-gray-700 mb-4">
                Izah Pays Microfinance Bank Limited ("Izah Pays", "Our", "We",
                or "Us") respects your privacy and is committed to transparency
                into how We collect and use and protect your personal data.
              </p>
              <p className="text-gray-700">
                We require your personal data to provide services, respond to
                your inquiries, fulfil our legal obligations, and when you use
                our internet-enabled platforms ("platforms", which include
                social media channels). You are afforded several privacy and
                data protection rights under the law which are set out in this
                Privacy Notice; anytime you need to exercise them, you can
                contact us.
              </p>
            </section>

            {/* Introduction */}
            <section>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Notice is designed to help you understand the
                information we gather about you, what we use that information
                for, and with whom we share that information. Please read the
                following carefully to understand our processes and practices
                regarding your personal data and how we will treat it.
              </p>
            </section>

            {/* Sections */}
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    {/* You can replace this with each section’s actual content.
                        I left this dynamic so you can modularize it later or add imports. */}
                    {/* Content for{" "} */}
                    {/* <strong>{section.title}</strong> */}
                    <strong>{section.descrption}</strong> {/* goes here. */}
                  </p>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            &copy; 2025 Izah Pays Microfinance Bank Limited. All rights
            reserved.
          </p>
          <p>Terms & Conditions</p>
          <p className="mt-2 text-gray-400">
            Contact us:{" "}
            <a
              href="mailto:czaexchange@gmail.com"
              className="text-blue-400 hover:underline"
            >
              czaexchange@gmail.com
            </a>
          </p>
          <p className="text-gray-400">
            15A Bailey Street, Bariga, Lagos, Nigeria
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
