import React from 'react';
import { content, siteConfig } from '../constants/content';
import SeoHelper from '../components/SeoHelper';
import CTAButton from '../components/CTAButton';
import type { Feature, Testimonial, Screenshot } from '../types';
import { Carousel } from '../components/Carousel';
import FaqItem from '../components/FaqItem';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="text-center p-6 bg-neutral-background rounded-lg shadow-sm h-full">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent-sky mx-auto">
            <feature.icon className="h-8 w-8 text-brand-indigo" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-neutral-text">{feature.title}</h3>
        <p className="mt-2 text-base text-neutral-text-muted">{feature.benefit}</p>
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="p-8 bg-neutral-background rounded-lg shadow-sm flex flex-col min-h-[280px]">
        <blockquote className="flex-grow">
            <p className="text-lg text-neutral-text">"{testimonial.quote}"</p>
        </blockquote>
        <footer className="mt-6">
            <div className="flex items-center">
                <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.author} />
                <div className="ml-4">
                    <div className="text-base font-medium text-neutral-text">{testimonial.author}</div>
                    <div className="text-base text-neutral-text-muted">{testimonial.role}</div>
                </div>
            </div>
        </footer>
    </div>
);

const HomePage: React.FC = () => {
    const pageTitle = `${siteConfig.brandName} | AI Pet Wellness Companion`;
    const pageDescription = 'Keep your pet healthy, happy, and active with Furlab. Our AI pet wellness app provides smart nutrition analysis, habit tracking, and health reminders—all in one place.';

    return (
        <>
            <SeoHelper title={pageTitle} description={pageDescription} canonicalPath="/" />

            {/* Hero Section */}
            <section className="bg-neutral-section-bg overflow-hidden">
                <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center py-16 sm:py-24 lg:py-32">
                        <div className="lg:text-left sm:text-center">
                            <h1 className="text-4xl tracking-tight font-extrabold text-neutral-text sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">All-in-one pet wellness,</span>{' '}
                                <span className="block text-brand-indigo xl:inline">made simple.</span>
                            </h1>
                            <p className="mt-3 text-base text-neutral-text-muted sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                {content.home.hero.subhead}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                {content.home.hero.ctas.map((cta, index) => (
                                    <div key={cta.label} className={index > 0 ? "mt-3 sm:mt-0 sm:ml-3" : ""}>
                                        {cta.type === 'link' ? (
                                            <CTAButton as="link" to={cta.url} variant={cta.variant}>
                                                {cta.label}
                                            </CTAButton>
                                        ) : (
                                            <CTAButton as="a" href={cta.url} variant={cta.variant}>
                                                {cta.label}
                                            </CTAButton>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-56 w-full sm:h-72 md:h-96 lg:h-full lg:relative">
                        <img
                            className="w-full h-full object-cover lg:absolute lg:inset-0"
                            src={content.home.hero.image}
                            alt="A happy pet with its owner"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-neutral-background sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-neutral-text sm:text-4xl">A smarter way to care</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-text-muted">
                            Furlab gives you the tools to be a more proactive and confident pet parent.
                        </p>
                    </div>
                    <div className="mt-20">
                        <Carousel
                            items={content.home.features}
                            renderItem={(feature, isActive) => <FeatureCard feature={feature} />}
                            containerClassName="max-w-md mx-auto"
                            itemClassName="px-4 pb-2"
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-neutral-section-bg pt-16 pb-24 px-4 sm:px-6 lg:pt-24 lg:pb-32 lg:px-8">
                 <div className="max-w-lg mx-auto lg:max-w-2xl">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-neutral-text sm:text-4xl">Trusted by pet parents like you</h2>
                    </div>
                    <div className="mt-20">
                        <Carousel
                            items={content.home.testimonials}
                            renderItem={(testimonial, isActive) => <TestimonialCard testimonial={testimonial} />}
                            itemClassName="px-4 pb-2"
                        />
                    </div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section className="bg-neutral-background py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-neutral-text sm:text-4xl">See Furlab in Action</h2>
                         <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-text-muted">
                            An intuitive interface designed to make pet health tracking simple and enjoyable.
                        </p>
                    </div>
                    <div className="mt-20 max-w-3xl mx-auto">
                       <Carousel
                            items={content.home.screenshots}
                            renderItem={(shot, isActive) => (
                                <div className="flex justify-center px-4">
                                    <img src={shot.image} alt={shot.alt} className="rounded-lg shadow-xl object-contain max-h-[600px]" />
                                </div>
                            )}
                        />
                    </div>
                </div>
            </section>

             {/* FAQ Section */}
            <section className="py-16 bg-neutral-section-bg sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-neutral-text text-center sm:text-4xl">Frequently Asked Questions</h2>
                        <div className="mt-12 border-t-2 border-neutral-divider">
                            <dl className="divide-y divide-neutral-divider">
                                {content.contact.faqs.map((faq, index) => (
                                    <FaqItem key={index} faq={faq} />
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;