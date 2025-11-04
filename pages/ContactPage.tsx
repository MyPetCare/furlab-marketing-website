import React from 'react';
import SeoHelper from '../components/SeoHelper';
import { content, siteConfig } from '../constants/content';
import FaqItem from '../components/FaqItem';
import CTAButton from '../components/CTAButton';

const ContactPage: React.FC = () => {
    const pageTitle = `Contact ${siteConfig.brandName}`;
    const pageDescription = `Get in touch with the ${siteConfig.brandName} team for support, media inquiries, or questions. Find our FAQs and contact information here.`;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.contact.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <>
            <SeoHelper
                title={pageTitle}
                description={pageDescription}
                canonicalPath="/contact"
                schema={faqSchema}
            />
            <div className="bg-neutral-background py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-text sm:text-4xl">Contact Us</h1>
                        <p className="mt-4 text-lg leading-6 text-neutral-text-muted">
                            Have questions? We'd love to hear from you. Fill out the form below or check out our FAQs.
                        </p>
                    </div>
                    <div className="mt-12">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="name" className="block text-base font-semibold text-neutral-text mb-1">Name</label>
                                <div className="mt-1">
                                    <input type="text" name="name" id="name" autoComplete="name" className="py-3 px-4 block w-full shadow-sm focus:ring-brand-indigo focus:border-brand-indigo border-neutral-divider rounded-md" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-base font-semibold text-neutral-text mb-1">Email</label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-brand-indigo focus:border-brand-indigo border-neutral-divider rounded-md" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-base font-semibold text-neutral-text mb-1">Message</label>
                                <div className="mt-1">
                                    <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-brand-indigo focus:border-brand-indigo border-neutral-divider rounded-md"></textarea>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <CTAButton type="submit" disabled className="w-full">
                                    Send
                                </CTAButton>
                                <p className="text-xs text-center mt-2 text-neutral-text-muted">Contact form is currently disabled.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-section-bg">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-neutral-text text-center">Frequently asked questions</h2>
                    <div className="mt-6 border-t-2 border-neutral-divider pt-6">
                        <dl className="divide-y divide-neutral-divider">
                            {content.contact.faqs.map((faq, index) => (
                                <FaqItem key={index} faq={faq} />
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;