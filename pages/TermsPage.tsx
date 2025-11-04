
import React from 'react';
import SeoHelper from '../components/SeoHelper';
import { siteConfig } from '../constants/content';

const TermsPage: React.FC = () => {
    return (
        <>
            <SeoHelper
                title={`Terms of Service | ${siteConfig.brandName}`}
                description={`Read the Terms of Service for ${siteConfig.brandName}.`}
                canonicalPath="/terms"
            />
            <div className="relative py-16 bg-white overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span className="block text-base text-center text-brand-indigo font-semibold tracking-wide uppercase">Legal</span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-neutral-text sm:text-4xl">
                                Terms of Service
                            </span>
                        </h1>
                        <p className="mt-8 text-xl text-neutral-text-muted leading-8">
                           This is placeholder text for the Terms of Service. This is a crucial legal document that forms a binding agreement between you and your users. It should be drafted or reviewed by a legal professional. Key sections often include user responsibilities, acceptable use, intellectual property rights, disclaimers of liability, and termination clauses.
                        </p>
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-neutral-text-muted mx-auto">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            Placeholder: By using the Furlab application ("Service"), you agree to be bound by these Terms of Service.
                        </p>
                        <h2>2. Description of Service</h2>
                        <p>
                           Placeholder: Furlab provides users with tools for tracking pet wellness. This service is for informational purposes only and is not a substitute for professional veterinary advice.
                        </p>
                        <h2>3. User Conduct</h2>
                        <p>
                           Placeholder: Detail acceptable and prohibited uses of the application.
                        </p>
                        <h2>4. Disclaimers and Limitation of Liability</h2>
                        <p>
                           Placeholder: Clarify that the service is provided "as is" and limit your liability for any damages arising from its use.
                        </p>
                        <h2>5. Governing Law</h2>
                        <p>
                            Placeholder: Specify the jurisdiction whose laws will govern the terms.
                        </p>
                        <p>
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsPage;
