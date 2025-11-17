
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

            <div className="py-16 bg-neutral-section-bg overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h2 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-neutral-text sm:text-4xl">
                            Our Story
                        </h2>
                    </div>
                    <div className="mt-12 max-w-4xl mx-auto text-neutral-text-muted">
                        <p className="text-lg mb-6">
                            Furlab started with a simple observation:<br />
                            <strong className="text-neutral-text">caring for a pet shouldn't feel this complicated.</strong>
                        </p>

                        <p className="text-base mb-4">
                            As pet parents, we were constantly trying to make the "right" decisions — choosing food, tracking habits, noticing changes — but the information we needed lived in too many places, and none of it spoke the same language.
                        </p>

                        <p className="text-base mb-4">
                            One of us has a cat who easily overeats and gets sick. A neighbor might give him treats without realizing he'd already eaten. Another time, while the cat had to stay with a friend during a family trip, he suddenly got sick. We rushed home and took him to the hospital, but when the vet asked simple questions — <em>"When did he last eat?" "How often has he vomited?"</em> — the answers weren't clear.
                        </p>

                        <p className="text-base mb-4">
                            The other founder's dog had ongoing digestive flare-ups — sudden vomiting, inconsistent appetite, sensitive reactions to certain proteins. Every time symptoms returned, he was back at square one, comparing labels, switching formulas, and realizing how little clarity most pet foods actually provide.
                        </p>

                        <p className="text-base mb-8">
                            Different pets. Same frustration.
                        </p>

                        <hr className="my-8 border-neutral-divider" />

                        <h3 className="text-2xl font-bold text-neutral-text mb-4 text-center">
                            We built Furlab to bring clarity back to pet care.
                        </h3>

                        <p className="text-base mb-4">
                            We met at work and kept circling the same idea:<br />
                            <strong className="text-neutral-text">pet data is scattered, but the problems it could solve are universal.</strong>
                        </p>

                        <p className="text-base mb-4">
                            Furlab is our attempt to unify the essentials:
                        </p>

                        <ul className="list-disc list-inside mb-8 space-y-2 text-base">
                            <li>nutrition that's simple to understand</li>
                            <li>daily health patterns in one place</li>
                            <li>insights that adapt to each pet</li>
                            <li>signals when routines or well-being shift</li>
                        </ul>

                        <p className="text-base mb-8">
                            Not more noise — just the right information, beautifully organized.
                        </p>

                        <hr className="my-8 border-neutral-divider" />

                        <h3 className="text-2xl font-bold text-neutral-text mb-4 text-center">
                            Our focus is straightforward:
                        </h3>

                        <p className="text-lg font-semibold text-neutral-text mb-4">
                            Better data. Better decisions. Better everyday care.
                        </p>

                        <p className="text-base mb-8">
                            We're not here to replace vets or overwhelm owners with features.<br />
                            Our job is to make the important things easier to see, track, and act on — so pet parents feel informed, not anxious.
                        </p>

                        <hr className="my-8 border-neutral-divider" />

                        <h3 className="text-2xl font-bold text-neutral-text mb-4 text-center">
                            And we're still early in our journey.
                        </h3>

                        <p className="text-base mb-4">
                            We're building deliberately.<br />
                            Integrations with smart devices, deeper analytics, and predictive insights are all in motion — and we're refining them with real pet families, not in isolation.
                        </p>

                        <p className="text-base mb-4">
                            We think of Furlab as something we're co-creating with our community.<br />
                            If you have thoughts, needs, or frustrations, we want to hear them.
                        </p>

                        <p className="text-base mb-4">
                            You can reach us anytime through our <a href="/#/contact" className="text-brand-indigo font-semibold hover:underline">Contact form</a>.<br />
                            <strong className="text-neutral-text">Your feedback helps us build a tool worthy of the pets we love.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
