import React from 'react';
import SeoHelper from '../components/SeoHelper';
import { content, siteConfig } from '../constants/content';
import CTAButton from '../components/CTAButton';

const FeaturesPage: React.FC = () => {
    const pageTitle = `App Features | ${siteConfig.brandName}`;
    const pageDescription = `Explore the powerful features of ${siteConfig.brandName}, the ultimate pet health tracking app. From AI nutrition analysis to habit tracking and health reminders, see how we make pet care simple.`;

    const appSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": siteConfig.brandName,
        "operatingSystem": "iOS, Android",
        "applicationCategory": "HealthApplication",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <>
            <SeoHelper
                title={pageTitle}
                description={pageDescription}
                canonicalPath="/features"
                schema={appSchema}
            />
            <div className="py-16 bg-neutral-background overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-neutral-text sm:text-5xl md:text-6xl">
                            Wellness, Simplified.
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-neutral-text-muted sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                           Our dog care app provides everything you need to proactively manage your pet's health. Explore the features that give you peace of mind.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-12 bg-neutral-section-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {content.features_page.sections.map((section, index) => (
                        <div key={section.title} className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mt-12 first:mt-0">
                            <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                                <img
                                    className="rounded-lg shadow-lg w-full"
                                    src={section.screenshot}
                                    alt={`Screenshot of ${section.title} feature`}
                                />
                            </div>
                            <div className={`mt-8 lg:mt-0 ${index % 2 === 0 ? 'lg:order-1' : ''}`}>
                                <h2 className="text-3xl font-extrabold text-neutral-text tracking-tight sm:text-4xl">
                                    {section.title}
                                </h2>
                                <p className="mt-4 text-lg text-neutral-text-muted">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

             <div className="bg-neutral-background">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-neutral-text sm:text-4xl">
                        <span className="block">Ready to take control?</span>
                        <span className="block text-brand-indigo">Start your pet's wellness journey today.</span>
                    </h2>
                    <CTAButton as="link" to="/waitlist" variant="primary" className="mt-8">
                        Join Waitlist
                    </CTAButton>
                </div>
            </div>
        </>
    );
};

export default FeaturesPage;