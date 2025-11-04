
import React from 'react';
import SeoHelper from '../components/SeoHelper';
import { siteConfig } from '../constants/content';

const PrivacyPage: React.FC = () => {
    return (
        <>
            <SeoHelper
                title={`Privacy Policy | ${siteConfig.brandName}`}
                description={`Read the Privacy Policy for ${siteConfig.brandName}.`}
                canonicalPath="/privacy"
            />
            <div className="relative py-16 bg-white overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span className="block text-base text-center text-brand-indigo font-semibold tracking-wide uppercase">Legal</span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-neutral-text sm:text-4xl">
                                Privacy Policy
                            </span>
                        </h1>
                        <p className="mt-8 text-xl text-neutral-text-muted leading-8">
                            This is placeholder text for the Privacy Policy. It is important to replace this with a comprehensive and legally sound document that accurately reflects your data handling practices. This policy should detail what personal information you collect from users, how you use it, with whom you share it, and the rights users have over their data.
                        </p>
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-neutral-text-muted mx-auto">
                        <h2>1. Information We Collect</h2>
                        <p>
                            Placeholder: Detail the types of data collected (e.g., account information, pet data, usage data, device information).
                        </p>
                        <h2>2. How We Use Your Information</h2>
                        <p>
                            Placeholder: Explain the purposes for using the data (e.g., to provide and improve the service, for personalization, for communication, for security).
                        </p>
                        <h2>3. Sharing Your Information</h2>
                        <p>
                            Placeholder: Describe any third-party sharing of data (e.g., service providers, legal requirements).
                        </p>
                        <h2>4. Data Security</h2>
                        <p>
                           Placeholder: Outline the security measures in place to protect user data.
                        </p>
                         <h2>5. Your Rights</h2>
                        <p>
                           Placeholder: Inform users of their rights regarding their data (e.g., access, correction, deletion).
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

export default PrivacyPage;
