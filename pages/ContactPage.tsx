import React, { useState } from 'react';
import axios from 'axios';
import SeoHelper from '../components/SeoHelper';
import { content, siteConfig } from '../constants/content';
import FaqItem from '../components/FaqItem';
import CTAButton from '../components/CTAButton';

const WEBHOOK_URL = 'https://n8n.furlab.cc/webhook/submit-contact-form';
const SUBMIT_COOLDOWN = 10 * 60 * 1000; // 10 minutes

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

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

    const checkCooldown = (): number => {
        const lastSubmit = localStorage.getItem('contact_last_submit');
        if (lastSubmit) {
            const elapsed = Date.now() - parseInt(lastSubmit);
            if (elapsed < SUBMIT_COOLDOWN) {
                return Math.ceil((SUBMIT_COOLDOWN - elapsed) / 1000 / 60);
            }
        }
        return 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');

        // Check cooldown
        const cooldownRemaining = checkCooldown();
        if (cooldownRemaining > 0) {
            setErrorMessage(`Please wait ${cooldownRemaining} more minutes before submitting again.`);
            return;
        }

        // Validation
        if (!formData.name.trim()) {
            setErrorMessage('Please enter your name.');
            return;
        }
        if (formData.name.length > 50) {
            setErrorMessage('Name must be 50 characters or less.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        if (formData.email.length > 100) {
            setErrorMessage('Email must be 100 characters or less.');
            return;
        }

        if (!formData.message.trim()) {
            setErrorMessage('Please enter your message.');
            return;
        }
        if (formData.message.length > 500) {
            setErrorMessage('Message must be 500 characters or less.');
            return;
        }

        setIsSubmitting(true);

        try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || null;

            await axios.post(WEBHOOK_URL, {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim(),
                submitted_at: new Date().toISOString(),
                timezone,
            });

            localStorage.setItem('contact_last_submit', Date.now().toString());
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error: any) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
            setErrorMessage(
                error.response?.data?.message ||
                error.message ||
                'Failed to submit form. Please check your connection and try again.'
            );
        } finally {
            setIsSubmitting(false);
        }
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
                        {submitStatus === 'success' ? (
                            <div className="bg-accent-mint/20 border-2 border-accent-mint rounded-lg p-8 text-center">
                                <h2 className="text-2xl font-bold text-neutral-text mb-4">
                                    Thanks for your feedback!
                                </h2>
                                <p className="text-lg text-neutral-text-muted">
                                    We will contact you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <div>
                                    <label htmlFor="name" className="block text-base font-semibold text-neutral-text mb-1">Name *</label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            required
                                            maxLength={50}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-brand-indigo focus:border-brand-indigo border-neutral-divider rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-base font-semibold text-neutral-text mb-1">Email *</label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            maxLength={100}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-brand-indigo focus:border-brand-indigo border-neutral-divider rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-base font-semibold text-neutral-text mb-1">Message *</label>
                                    <div className="mt-1 relative">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            maxLength={500}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-brand-indigo focus:border-brand-indigo border-neutral-divider rounded-md"
                                        />
                                        <span className="absolute bottom-2 right-3 text-xs text-neutral-text-muted">
                                            {formData.message.length}/500
                                        </span>
                                    </div>
                                </div>

                                {errorMessage && (
                                    <div className="sm:col-span-2 bg-accent-coral/20 border-2 border-accent-coral rounded-lg p-4">
                                        <p className="text-neutral-text text-sm">{errorMessage}</p>
                                    </div>
                                )}

                                <div className="sm:col-span-2">
                                    <CTAButton type="submit" disabled={isSubmitting} className="w-full">
                                        {isSubmitting ? 'Sending...' : 'Send'}
                                    </CTAButton>
                                </div>
                            </form>
                        )}
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