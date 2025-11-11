import React, { useState, useEffect } from "react";

const TermsAndConditions = () => {
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
      id: "introduction",
      title: "Introduction",
      descrption: `   Izah Pays Microfinance Bank Limited (“Izah Pays”, the “Company”, “Our,” “We” or “Us”) maintains this website, mobile application and other digital or internet-enabled services (the “Platform”) to provide You (“you”, “yours” or the “User”) with information about the products and services which we provide, and with information about Izah Pays.

Please read these General Terms and Conditions (“Terms” or “GTC”) carefully before accessing or using the Platform, services or products. We reserve the sole right to change, modify, add, or remove portions of this GTC at any time, as we determine is required by business or other circumstances. Please check these Terms periodically for changes. If you have any questions about these Terms, please contact us via email at hello@Izah Pays.com`,
    },
    {
      id: "acceptanceofterms",
      title: "Acceptance of Terms",
      descrption: `By accessing or using the Platform, our services or products, you agree to this GTC. You further agree that this GTC constitutes a legally binding agreement between you (whether personally or on behalf of any entity which you represent) and Izah Pays concerning your access to and use of any of our Platforms and all the services linked, related, or otherwise connected thereto.`,
    },
    {
      id: "agerestriction",
      title: "Age Restriction",
      descrption: `This Platform (including Izah Pays’s service and products) is not intended for the use of minors (those below the age of eighteen (18)). By using this Platform, you represent and warrant that you are at least eighteen (18) years of age and may legally agree to this Agreement. If you are a minor, you shall not use this Platform without the assistance and consent of a parent or guardian. Izah Pays assumes no responsibility or liability for any misrepresentation of your age.`,
    },
    {
      id: "creatinganaccount",
      title: "Creating an Account",
      descrption: `While you can access certain parts of the Platform without creating an account, you may be required to create an account to access certain services on the Platform. If you create an account, you agree to provide accurate, complete, and correct information and to accurately maintain and update any information about yourself that you have previously provided to Izah Pays.

Izah Pays reserves the right to deny the creation of an account if:

In its opinion, you have provided false or inaccurate information about yourself;
It violates any law, regulation or mandate by government authorities; or
It is in breach of Izah Pays’s policies.
You agree to keep your account details, username and password confidential and to log out from your account at the end of each session.

You are responsible for changing your password promptly if you think it has been compromised. You may not transfer or share your password with anyone or create more than one account unless approved to do so by Izah Pays. You also agree to immediately notify Izah Pays of any unauthorised use of your username, password or any other breach of security that you become aware of involving or relating to the Platform by emailing hello@Izah Pays.com.

Izah Pays shall not bear the liability for transactions carried out where access to your account has been compromised by you, malware or human interference outside of our control. Izah Pays may also take any and all actions it deems necessary or reasonable to maintain the security of the Platform.

Know Your Customer (“KYC”) Requirements

The Company is regulated by the Central Bank of Nigeria (“CBN”) and mandated by law to independently verify the details that you provide to us for the purpose of creating an account or transacting on the Platform. You agree and authorise Izah Pays, whether through its affiliates or service providers, to collect and verify information including, but not limited to, your Bank Verification Number (BVN), residential or other address, your mobile phone number, and such other information as Izah Pays requires to discharge its lawful duties.

Where you provide the details of a person as a guarantor, you hereby confirm that you have the prior approval of that person to be named as a guarantor. Izah Pays explicitly disclaims liability for any and all losses and damages arising from your failure to comply with this section.`,
    },
    {
      id: "transactingontheplatform",
      title: "Transacting on the Platform",
      descrption: `You may initiate transactions on your account directly through the Platform. In line with regulatory requirements, we may restrict certain activities on your account until your KYC documents/information is satisfactorily verified. The Platform may require you to provide your pre-configured Personal Identification Number (“PIN”) and/or One-Time-Password (“OTP”) for authorisation. You agree that you are solely responsible for maintaining the confidentiality of your authorisation details and that Izah Pays shall not bear any liability if such details are compromised.

Your Savings and Fixed-Deposit Account (RenVault) Izah Pays offers different savings products and fixed-deposit accounts, subject to specific terms and conditions. If you opt to use the lock feature in respect of any savings product or fixed-deposit account, note that you will be unable to withdraw the locked funds before your designated maturity date. You hereby authorise Izah Pays to place an irrevocable restriction on the locked funds until your preferred maturity date. Note that interest rates on our savings products may change from time to time. We will endeavour to notify you of such change, where applicable.
Upfront Interest When opening a RenVault account, Izah Pays offers the option of taking your interest upfront, no questions asked. If you choose this option, your principal will not be withdrawable until the maturity date stated on your certificate of investment. By choosing to receive your interest upfront, you irrevocably waive your right to withdraw any portion of your investment prior to maturity.
Roll Over: We shall send a notice of your investment maturity date at least 48 hours before the maturity date stated on your certificate of investment, with a request for payout instructions. If we do not receive a payout instruction from you on the maturity date, we will roll over the entire amount invested for the same tenor, at the current Izah Pays rate. The terms applicable herein shall remain applicable on the rolled-over investment, and interest on the rolled-over investment shall be paid upfront.

Interest on Maturity (Maturity Investment) When opening a RenVault account, Izah Pays also offers the option of taking your interest on the maturity date of the investment. If you choose this option, your principal and the interest will not be withdrawable until the maturity date stated on your certificate of investment. However, should you request full/partial liquidation before the maturity date, a penal charge equivalent to 50% of the accrued interest on your investment as of the date of approval will be applied.
– Promotional Offers In the event that you opt to utilize any promotional offers on Maturity Investment, and subsequently decide to liquidate your investment prior to its maturity date, you will forfeit the entirety of the accrued interest at the date of liquidation.

Roll Over: We shall send a notice of your investment maturity date at least 48 hours before the maturity date stated on your certificate of investment with a request for payout instructions. If we do not receive a payout instruction from you on the maturity date, we will roll over the entire amount invested for the same tenor, at the current Izah Pays rate. The terms applicable herein shall remain applicable on the rolled-over investment, and interest on the rolled-over investment shall be paid to you on the next maturity date.

Withholding Tax The interest on all Renvault investments is subject to 10% Withholding Tax.
Izah Pays Loans Izah Pays provides consumer financing on a general cash loan basis, subject to specific terms and conditions that will be presented to you in a loan offer letter. When you commence an application for a Izah Pays loan, we will create a Izah Pays account for you (Izah Pays NUBAN Account) as part of the application process. You hereby consent to the creation of the Izah Pays NUBAN Account, and you agree that you shall not argue to the contrary before any court of law, tribunal administrative authority or any other body acting in any judicial or quasi-judicial capacity.
Electronic Money Transfer Levy You may be charged an Electronic Money Transfer Levy (“EMTL”) on deposits received from non-Izah Pays NUBAN accounts into your account.`,
    },
    {
      id: "closinganaccount",
      title: "Closing An Account",
      descrption: `You may request that we close your account with a credit or zero balance. To close your account, kindly send an email to hello@Izah Pays.com with the following details: (i) your full name and account number; (ii) your email address; and (iii) where the funds, if any, in the account are to be transferred.

However, Izah Pays reserves the right not to honour your request to close your account on the following grounds: (i) if the request does not come from you or your legal representative; (ii) where there is an ongoing investigation on the account; (iii) where there is a loan or a yet-to-mature fixed placement on the account; or (iv) if Izah Pays reasonably suspects that the request is fraudulent or violates any law, regulation or mandate by the CBN.`,
    },
    {
      id: "Breach, Suspension and Termination",
      title: "Breach, Suspension and Termination",
      descrption: `Izah Pays reserves the right to deny access to, and to suspend or terminate your access to the Platform or to any features or portions thereof, or to execute or reverse any transaction at any time and for any reason, including if you violate GTC or if we believe there is suspicious or unusual activity related to your account. Neither suspension nor termination under this section shall affect your liability or obligations under this GTC. In the event that we suspend or terminate your access to the Platform, you will continue to be bound by the GTC that was in effect as of the date of your suspension or termination.

We also reserve the right, in our sole discretion, to report any suspicious activity to the relevant law enforcement agency for further investigations.`,
    },
    {
      id: "Viruses",
      title: "Viruses",
      descrption: `Due to the pervasive nature of computer viruses within the Internet, we cannot give any assurances that the Platform, our software or our systems will always be free from viruses and other malicious software. It is your responsibility to scan all downloaded materials received from the Internet, including from this Platform. We shall not be liable, and you agree not to hold Izah Pays responsible, for any damages or losses caused by any viruses or other malicious software which may affect your computer equipment or other property on account of your access to, use of, or downloading from the Platform, software or systems.`,
    },
    {
      id: "Limitation of Liability",
      title: "Limitation of Liability",
      descrption: `Nothing in this GTC, or otherwise in connection with it, whether in contract, tort (including in negligence), breach of statutory duty or otherwise (whether or not foreseeable and howsoever arising), shall be construed as making Izah Pays liable in respect of any indirect or consequential losses or expenses of the User or related third parties.`,
    },
    {
      id: "Indemnity",
      title: "Indemnity",
      descrption: `You agree to indemnify and hold Izah Pays, its subsidiaries or affiliates, and their respective directors, officers, employees, and agents, harmless against all liabilities, claims and expenses, including reasonable attorneys’ fees, arising from: (i) a breach of this GTC or any other related policy by your use or access of the Platform or any internet site linked to or from the Platform, or in connection with the transmission of any content on the Platform; (ii) your negligence or willful misconduct whether in contribution or forming the subject of a claim; (iii) providing Izah Pays with false or misleading information or signatures; (iv) lack of notification of a change in name, address or other contact details; (v) the actions of a third party in respect of any transactions on your account(s); or (v) the directives of the court or a law enforcement agency.`,
    },
    {
      id: "Authorised Use",
      title: "Authorised Use",
      descrption: `The information provided on this Platform is solely for personal use. You are authorised to view and use the information available on this Platform for personal purposes only. Except for personal use, you may not reproduce, modify, display, distribute, perform, disseminate, transmit, transfer, sell, license, publish, use to create a derivative work or use for any public or commercial purposes any of the content of the Platform without the express prior written consent of Izah Pays. You also agree to access and use the Platform for lawful purposes only.`,
    },
    {
      id: "Links To This Platform",
      title: "Links To This Platform",
      descrption: `The Platform may contain links to other websites as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (“Third-Party Content”). Such third-Party websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any third-Party websites accessed through the Site or any Third-Party Content posted on, available through, or installed from our Platform. We do not propose any endorsement, authorisation, sponsorship of or affiliation with the material contained on any linked site or any Third-Party material by providing them on the Platform. Izah Pays is not responsible for the content on any site linked to the Platform. Your connection to and use of any such linked site is at your own risk.`,
    },
    {
      id: "Intellectual Property",
      title: "Intellectual Property",
      descrption: `The copyright of the pages and the screens displaying the pages, and the information and material therein, is owned by Izah Pays unless otherwise indicated may not be distributed, modified, reproduced or licenced in whole or in part without the prior written permission of Izah Pays. The display of trademarks herein does not imply that a license of any kind has been granted. Any downloading, re-transmission, or other copying or modification of the trademarks and/or the contents herein may be a violation of applicable laws and regulations and could subject the offender to legal action. The trademarks, brand names, taglines or logos (collectively the “Trademarks”) displayed on this site, unless otherwise indicated, are registered and unregistered Trademarks of Izah Pays and its subsidiaries and affiliates. The Trademarks may only be used publicly with the permission of Izah Pays with proper acknowledgement. The use of Izah Pays’s intellectual property right without the prior written consent of Izah Pays may constitute an infringement or passing-off action in violation of applicable laws.`,
    },
    {
      id: "breach",
      title: "BREACH/PRIVACY VIOLATION",
      descrption: `In the event of a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to your personal data, we shall within 72 (seventy-two) hours of having knowledge of such breach report the details of the breach to the appropriate government agency. Where we ascertain that such breach is detrimental to your rights and freedoms in relation to your personal data, we shall within 7 (seven) days of knowledge of the occurrence of such breach take steps to inform you of the breach incident, the risk to your rights and freedoms resulting from such breach and any course of action to remedy said breach.`,
    },
    {
      id: "Prohibited Activity",
      title: "Prohibited Activity",
      descrption: `You may not retrieve data from the Platform to create a business that shall compete with us in any form or manner or for any other commercial benefit, gain or revenue-generating purpose. You may not retrieve data from our site to constitute databases, compilations, stocks, inventories or directories, without express permission from us.

You may not download, sell, re-publish or otherwise give out for profit, any service, information or content made available on the Platform. You may not defraud, or mislead other users, in an attempt to learn sensitive account information or attempt to impersonate a user or person through the use of their information, however, it is gotten.`,
    },
    {
      id: "Licence to Use Content",
      title: "Licence to Use Content",
      descrption: `We acknowledge your right to provide feedback (“Comment”) to Izah Pays on its services and products via any format (telephone calls, email, social media comments). Please be informed that Izah Pays may collect, process and store such feedback for the purpose of improving or marketing its services or products.

You hereby grant Izah Pays a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media. Izah Pays shall take into account the impact of collecting or processing your personal information and may employ techniques such as anonymization or pseudonymization to protect your personal information.`,
    },
    {
      id: "Security",
      title: "Security",
      descrption: `We welcome your email correspondence. But internet and email communications are not confidential. Information transmitted to us may be read or obtained by other parties. To protect your privacy, our email responses do not include personal account information such as your BVN or bank account numbers. Email is an important communication channel for our Platform’s visitors. We will use your email address and the content of any email for correspondence purposes to meet our legal and regulatory requirements regarding customer communications. On occasion, we may use your email address to send you communications with information about service and product information that we believe may be of interest to you. If you do not want to receive such unsolicited communications from us, please send us a message to this effect.`,
    },
    {
      id: "User Representations",
      title: "User Representations",
      descrption: `By using the Platform, you represent and warrant that:

all registration information you submit will be true, accurate, current, and complete.
you will maintain the accuracy of such information and promptly update such registration information, as necessary.
you have the legal capacity, and agree to comply with this GTC.
you are not a minor in the jurisdiction in which you reside.
you will not access the Platform through automated or non-human means, whether through a bot, script or otherwise.
you will not use the Platform for any illegal or unauthorised purpose.
your use of the Platform will not violate any applicable law or regulation.
If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse all current or future use of the Platform (or any portion thereof).`,
    },
    {
      id: "Dispute Resolution",
      title: "Dispute Resolution",
      descrption: `By using the Platform, you represent and warrant that disputes, differences, or claims arising out of or in connection with or concerning the use of Izah Pays’s services or the Platform shall be settled amicably through our internal dispute resolution system.

To commence the use of the internal dispute resolution system, you agree to send a written notice of the dispute to Izah Pays and such notice of dispute shall state the cause of the dispute and propose a date for negotiations to occur.

Where Parties are unable to reach an amicable resolution after exhausting Izah Pays’s internal dispute regulation mechanism, the dispute will be resolved by the courts in Nigeria or through an agreed alternative means of dispute resolution.`,
    },
    {
      id: "Governing Law",
      title: "Governing Law",
      descrption: `You agree that the use of this site shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. You further agree to submit to the jurisdiction of the courts of the Federal Republic of Nigeria.`,
    },
    {
      id: "Communication Lines",
      title: "Communication Lines",
      descrption: `If you wish to contact us, or if any condition in these Terms requires you to give notice to Izah Pays, you may send such communication to us by e-mail to hello@Izah Pays.com or to such e-mail address that may be communicated to you from time to time. We will confirm receipt of this by contacting you in writing by e-mail.

If we have to contact you or give you notice in writing, we may do so by posting such notice on our website; the mobile application, by e-mail or SMS to the mobile phone number or e-mail address you provided to us.`,
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
            Izah Pays Terms & Conditions
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Last updated September 2024
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
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
          <p>Privacy Poliicy</p>
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

export default TermsAndConditions;
