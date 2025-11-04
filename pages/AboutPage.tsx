
import React from 'react';
import SeoHelper from '../components/SeoHelper';
import { siteConfig } from '../constants/content';

const AboutPage: React.FC = () => {
    const pageTitle = `About ${siteConfig.brandName}`;
    const pageDescription = `Learn about ${siteConfig.brandName}'s mission to simplify pet wellness, empower pet parents, and celebrate the human-animal bond through smarter daily care.`;
    
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteConfig.brandName,
        "url": siteConfig.siteUrl,
        "logo": siteConfig.logoUrl,
        "description": "An AI-powered pet wellness companion app.",
        "contactPoint": {
            "@type": "ContactPoint",
            "email": siteConfig.contactEmail,
            "contactType": "customer support"
        }
    };

    return (
        <>
            <SeoHelper
                title={pageTitle}
                description={pageDescription}
                canonicalPath="/about"
                schema={organizationSchema}
            />
            <div className="bg-neutral-section-bg py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-brand-indigo tracking-wide uppercase">Our Mission</h2>
                        <h1 className="mt-1 text-4xl font-extrabold text-neutral-text sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Empowering Pet Parents
                        </h1>
                        <p className="max-w-3xl mt-5 mx-auto text-xl text-neutral-text-muted">
                            We believe that pet care shouldn't be complicated. Our goal is to provide you with the clarity and confidence to make the best decisions for your furry family members, every single day.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-neutral-background overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h2 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-neutral-text sm:text-4xl">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-x-8 md:gap-y-12">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-neutral-text">Simplify Pet Wellness</h3>
                            <p className="mt-2 text-base text-neutral-text-muted">
                                AI-powered nutrition analysis, habit tracking, and health reminders—all in one intuitive place. We cut through the noise to bring you what matters most.
                            </p>
                        </div>
                        <div className="text-center">
                             <h3 className="text-xl font-bold text-neutral-text">Empower with Knowledge</h3>
                            <p className="mt-2 text-base text-neutral-text-muted">
                                We give owners clear, data-driven insights. Knowledge is power, and we put that power in your hands to foster proactive, not reactive, pet care.
                            </p>
                        </div>
                        <div className="text-center">
                             <h3 className="text-xl font-bold text-neutral-text">Celebrate Companionship</h3>
                            <p className="mt-2 text-base text-neutral-text-muted">
                                We're here to strengthen the incredible bond between people and their pets through smarter, more mindful daily care. Because every moment together counts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
