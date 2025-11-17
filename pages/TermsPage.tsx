
import React from 'react';
import SeoHelper from '../components/SeoHelper';
import { siteConfig } from '../constants/content';

const TermsPage: React.FC = () => {
    return (
        <>
            <SeoHelper
                title={`Terms of Use | ${siteConfig.brandName}`}
                description={`Read the Terms of Use for ${siteConfig.brandName}.`}
                canonicalPath="/terms"
            />
            <div className="relative py-16 bg-white overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span className="block text-base text-center text-brand-indigo font-semibold tracking-wide uppercase">Legal</span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-neutral-text sm:text-4xl">
                                Terms of Use
                            </span>
                        </h1>
                        <p className="mt-8 text-base text-neutral-text-muted leading-7">
                            Last updated: November 9, 2025
                        </p>
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-neutral-text-muted mx-auto">
                        <h2>AGREEMENT TO OUR LEGAL TERMS</h2>
                        <p>
                            We are Muke Intelligent Technology Co., Ltd. ("Company," "we," "us," "our").
                        </p>
                        <p>
                            We operate the website furlab.cc and the mobile application "Furlab" available on iOS (and, in the future, other platforms), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                        </p>
                        <p>
                            You can contact us by email at <a href="mailto:contact@furlab.cc">contact@furlab.cc</a>.
                        </p>
                        <p>
                            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Muke Intelligent Technology Co., Ltd., concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
                        </p>
                        <p>
                            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
                        </p>
                        <p>
                            The Services are intended for business users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                        </p>
                        <p>
                            We recommend that you print a copy of these Legal Terms for your records.
                        </p>

                        <h2>1. OUR SERVICES</h2>
                        <p>
                            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction where such distribution or use would be contrary to law or regulation or would subject us to any registration requirement within such jurisdiction or country. Persons who access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws.
                        </p>

                        <h2>2. INTELLECTUAL PROPERTY RIGHTS</h2>
                        <p>
                            <strong>Our intellectual property:</strong> We own or license all intellectual‑property rights in our Services, including source code, databases, functionality, software, website designs, audio, video, text, photographs and graphics (the "Content"), and the trademarks, service marks and logos (the "Marks"). The Content and Marks are provided "as is" for your personal, non‑commercial use only.
                        </p>
                        <p>
                            <strong>Your use of our Services:</strong> Subject to compliance with these Terms, we grant you a non‑exclusive, non‑transferable, revocable licence to access the Services and to download or print a copy of any portion of the Content to which you have lawfully gained access for personal, non‑commercial use. Except as expressly set out, no part of the Services or Content may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed or otherwise exploited for commercial purposes without our prior written permission.
                        </p>
                        <p>
                            If you wish to make any other use of the Services, Content or Marks, you must request permission. Any breach of these intellectual‑property rights constitutes a material breach of our Terms and terminates your right to use the Services.
                        </p>
                        <p>
                            <strong>Your submissions:</strong> If you send us questions, comments, suggestions, ideas, feedback or other information ("Submissions"), you agree to assign to us all intellectual‑property rights in such submissions and allow us unrestricted use for any lawful purpose without acknowledgment or compensation. You agree not to post or transmit any unlawful, harassing, hateful, abusive, defamatory, discriminatory or misleading content; you warrant your submissions are original or you have the necessary rights to submit them; and you warrant your submissions are not confidential information. You are solely responsible for your submissions and agree to reimburse us for any losses caused by your breach of this section or any third‑party intellectual‑property rights.
                        </p>

                        <h2>3. USER REPRESENTATIONS</h2>
                        <p>
                            By using the Services you represent and warrant that (1) you have legal capacity and agree to comply with these Terms; (2) you are not a minor where you reside; (3) you will not access the Services through automated or non‑human means; (4) you will not use the Services for any illegal or unauthorised purpose; and (5) your use will not violate any applicable law or regulation. If any information you provide is untrue, inaccurate, not current or incomplete, we may suspend or terminate your account and refuse current or future use of the Services.
                        </p>

                        <h2>4. PROHIBITED ACTIVITIES</h2>
                        <p>
                            You may not access or use the Services for any purpose other than those we make available. The Services may not be used in connection with commercial endeavours except those we endorse. Examples of prohibited activities include:
                        </p>
                        <ul>
                            <li>Retrieving data or content to create a compilation or directory without written permission.</li>
                            <li>Trick, defraud or mislead us or other users, including attempts to learn sensitive account information such as passwords.</li>
                            <li>Circumvent, disable or interfere with security-related features of the Services.</li>
                            <li>Disparage or harm us or the Services; harass, abuse or harm another person.</li>
                            <li>Submit false support reports or use the Services in violation of laws.</li>
                            <li>Unauthorized framing or linking of the Services.</li>
                            <li>Upload or transmit viruses, Trojan horses or other harmful material, including spamming.</li>
                            <li>Use automated systems such as scripts, robots or data‑mining tools.</li>
                            <li>Delete copyright or proprietary notices.</li>
                            <li>Impersonate another user or use another username.</li>
                            <li>Upload material acting as a passive or active information‑collection mechanism (spyware, web bugs, cookies, etc.).</li>
                            <li>Interfere with or create an undue burden on the Services or connected networks.</li>
                            <li>Harass or threaten our employees or agents.</li>
                            <li>Attempt to bypass measures designed to prevent or restrict access.</li>
                            <li>Copy or adapt the Services' software or reverse engineer it (except as permitted by law).</li>
                            <li>Use automated systems (spiders, robots, scrapers) or unauthorised scripts.</li>
                            <li>Use a purchasing agent to make purchases or collect usernames/e‑mail addresses for unsolicited email or create accounts by automated means.</li>
                            <li>Use the Services to compete with us or for revenue‑generating enterprise.</li>
                            <li>Use the Services to advertise or offer to sell goods and services.</li>
                            <li>Sell or otherwise transfer your profile.</li>
                            <li>Reproduce, resell, or commercially use reports, screenshots, AI-generated images, or other materials produced by the Services.</li>
                            <li>Use the Services for medical diagnosis or treatment.</li>
                            <li>Copy, repurpose, or use the Services or their outputs to build or train competing products or services.</li>
                        </ul>

                        <h2>5. USER‑GENERATED CONTRIBUTIONS</h2>
                        <p>
                            The Services do not offer users the ability to post content publicly. We may allow users to create, submit, post or broadcast content ("Contributions"), including text, video, audio, photographs and other materials. Contributions may be viewable by other users and through third‑party websites. When you create Contributions, you represent and warrant that you have the rights needed to do so and that your Contributions will not violate any law or third‑party rights.
                        </p>

                        <h2>6. CONTRIBUTION LICENSE</h2>
                        <p>
                            You agree that we may access, store, process and use any information and personal data you provide and your choices (including settings). By submitting feedback, you agree that we can use and share it without compensation. We do not assert ownership over your Contributions; you retain full ownership and associated intellectual‑property rights. We are not liable for statements or representations in your Contributions, and you agree to exonerate us from any responsibility regarding your Contributions.
                        </p>

                        <h2>7. SERVICES MANAGEMENT</h2>
                        <p>
                            We reserve the right (but not the obligation) to monitor the Services for violations, take appropriate legal action against violators, refuse or limit access, remove excessive files or content and otherwise manage the Services to protect our rights and ensure proper functioning. We may also, at our discretion, establish or adjust reasonable usage thresholds and take measures to prevent activities that degrade system performance or disrupt other users' experience.
                        </p>

                        <h2>8. TERM AND TERMINATION</h2>
                        <p>
                            These Terms remain in effect while you use the Services. We may, at our sole discretion and without notice, deny access to the Services—including blocking IP addresses—for any reason, including breaches of these Terms or law. We may terminate your use or delete your content and any content or information you posted without warning, in our sole discretion. If we terminate or suspend your account, you are prohibited from registering or creating a new account under your name, a false identity, or the name of any third party, even if you are acting on behalf of another entity. In addition to termination or suspension, we reserve the right to pursue appropriate legal action, including civil, criminal, or injunctive remedies.
                        </p>

                        <h2>9. MODIFICATIONS AND INTERRUPTIONS</h2>
                        <p>
                            We may change, modify or remove content at any time without notice. We have no obligation to update information on the Services and are not liable for modifications, price changes, suspension or discontinuance of the Services. We cannot guarantee the Services will be available at all times; we may experience hardware or software problems, need maintenance or otherwise modify the Services. Nothing in these Terms obliges us to maintain or support the Services.
                        </p>

                        <h2>10. GOVERNING LAW</h2>
                        <p>
                            These Terms are governed by and interpreted under the laws of the People's Republic of China. You and we consent to the courts of Shanghai, China having exclusive jurisdiction to resolve disputes connected with these Terms.
                        </p>

                        <h2>11. DISPUTE RESOLUTION</h2>
                        <p>
                            <strong>Informal negotiations:</strong> To expedite resolution and control costs, you and we agree to attempt to resolve any dispute, controversy, or claim related to these Terms or the Services informally for at least thirty (30) days before initiating arbitration. Either party may initiate informal negotiations by providing written notice to the other.
                        </p>
                        <p>
                            <strong>Binding arbitration:</strong> If the parties are unable to resolve a dispute through informal negotiations, the dispute shall be finally resolved by binding arbitration conducted in Shanghai, China under the rules of the China International Economic and Trade Arbitration Commission (CIETAC). The arbitration shall be conducted in Chinese or English, before one (1) arbitrator appointed in accordance with those rules.
                        </p>
                        <p>
                            The arbitration proceedings and all related documents shall be confidential to the maximum extent permitted by law. The arbitral award shall be final and binding upon both parties and may be enforced in any court of competent jurisdiction.
                        </p>
                        <p>
                            <strong>Restrictions:</strong> Arbitration is limited to disputes between you and us individually; there is no right or authority for any dispute to be arbitrated on a class-action basis, to act in a representative capacity, or to consolidate claims with those of any other individual or entity.
                        </p>
                        <p>
                            <strong>Exceptions:</strong> Disputes concerning enforcement or validity of intellectual‑property rights, allegations of theft, piracy, invasion of privacy or unauthorised use, and claims for injunctive relief are not subject to the informal negotiations and arbitration provisions.
                        </p>

                        <h2>12. CORRECTIONS</h2>
                        <p>
                            We reserve the right to correct any errors, inaccuracies or omissions (including pricing or availability information) on the Services and to change or update information without prior notice.
                        </p>

                        <h2>13. DISCLAIMER</h2>
                        <p>
                            The Services are provided on an "as is" and "as available" basis. You agree that your use of the Services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Services and your use thereof, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                        </p>
                        <p>
                            We make no warranties or representations about the accuracy or completeness of the Services or any content or materials therein, and we will assume no liability or responsibility for any:
                        </p>
                        <ol>
                            <li>errors, mistakes, or inaccuracies of content and materials;</li>
                            <li>personal injury or property damage of any nature whatsoever resulting from your access to and use of the Services;</li>
                            <li>any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein;</li>
                            <li>any interruption or cessation of transmission to or from the Services;</li>
                            <li>any bugs, viruses, Trojan horses, or the like that may be transmitted to or through the Services by any third party; and/or</li>
                            <li>any errors or omissions in any content and materials, or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the Services.</li>
                        </ol>
                        <p>
                            We do not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third-party website and we will not be a party to or in any way be responsible for monitoring any transaction between you and any third-party providers of products or services. As with the purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate.
                        </p>

                        <h2>14. LIMITATIONS OF LIABILITY</h2>
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any indirect, consequential, exemplary, incidental, special, or punitive damages, or any (direct or indirect): (a) loss of data, (b) lost profit, or (c) lost revenue or other damages arising from your use of the Services, even if we have been advised of the possibility of such damages.
                        </p>
                        <p>
                            Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action will at all times be limited to the lesser of (a) the amount paid, if any, by you to us during the six (6) month period prior to any cause of action arising and (b) the sum of one hundred U.S. dollars (US $100).
                        </p>
                        <p>
                            Certain state laws and countries' laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. If these laws apply to you, some or all of the above disclaimers or limitations may not apply to you, and you may have additional rights.
                        </p>

                        <h2>15. INDEMNIFICATION</h2>
                        <p>
                            You agree to defend, indemnify and hold us (and our subsidiaries, affiliates, officers, agents, partners and employees) harmless from any loss, damage, liability, claim or demand (including reasonable attorneys' fees) arising from: your use of the Services; your breach of these Terms; breaches of your representations and warranties; your violation of a third party's rights; or any harmful act toward other users. We may assume exclusive defense at your expense and you must cooperate.
                        </p>

                        <h2>16. USER DATA</h2>
                        <p>
                            We will maintain certain data you transmit to the Services and data relating to your use of the Services for performance management. Although we perform regular backups, you are solely responsible for all data you transmit and any activity you undertake using the Services; we are not liable for any loss or corruption of data.
                        </p>

                        <h2>17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS AND SIGNATURES</h2>
                        <p>
                            Visiting the Services, sending emails and completing forms constitute electronic communications. You consent to receive electronic communications and agree that all agreements, notices and records we provide electronically satisfy any legal requirement for written communication. You agree to electronic signatures, contracts, orders and the electronic delivery of notices, policies and records of transactions. You waive rights that require original signatures or non‑electronic records.
                        </p>

                        <h2>18. MISCELLANEOUS</h2>
                        <p>
                            These Terms and any policies or operating rules posted by us constitute the entire agreement between you and us. Failure to exercise any right does not waive it. We may assign our rights and obligations at any time; we are not liable for delays due to causes beyond our control. If any provision is unlawful or unenforceable, it is severable and does not affect remaining provisions. These Terms do not create a partnership or agency relationship, and you waive any defense based on the electronic form of these Terms or the lack of signing by the parties.
                        </p>

                        <h2>19. CONTACT US</h2>
                        <p>
                            To resolve a complaint or receive further information about the Services, contact us at <a href="mailto:contact@furlab.cc">contact@furlab.cc</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsPage;
