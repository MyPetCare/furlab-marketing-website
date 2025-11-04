
import React from 'react';
import SeoHelper from '../components/SeoHelper';
import { siteConfig } from '../constants/content';
import { AppleAppStoreIcon, GooglePlayStoreIcon } from '../components/Icons';

const DownloadPage: React.FC = () => {
    const pageTitle = `Download ${siteConfig.brandName} for iOS & Android`;
    const pageDescription = `Get the ${siteConfig.brandName} app to start tracking your pet's wellness today. Available on the Apple App Store and Google Play Store.`;

    return (
        <>
            <SeoHelper
                title={pageTitle}
                description={pageDescription}
                canonicalPath="/download"
            />
            <div className="bg-neutral-section-bg py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-neutral-text sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Start your journey.
                        </h1>
                        <p className="max-w-2xl mt-5 mx-auto text-xl text-neutral-text-muted">
                            Take the first step towards a more confident and proactive approach to pet care. Download Furlab from your favorite app store.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                             <a
                                href={siteConfig.appStoreLink}
                                className="inline-flex items-center justify-center px-6 py-4 w-64 h-20 bg-neutral-text text-white rounded-lg transition-transform duration-200 ease-in-out transform hover:-translate-y-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AppleAppStoreIcon className="h-10 w-10 mr-3" />
                                <span className="text-left">
                                    <span className="block text-xs">Download on the</span>
                                    <span className="block text-xl font-semibold">App Store</span>
                                </span>
                            </a>
                            <a
                                href={siteConfig.playStoreLink}
                                className="inline-flex items-center justify-center px-6 py-4 w-64 h-20 bg-neutral-text text-white rounded-lg transition-transform duration-200 ease-in-out transform hover:-translate-y-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GooglePlayStoreIcon className="h-10 w-10 mr-3" />
                                <span className="text-left">
                                    <span className="block text-xs">GET IT ON</span>
                                    <span className="block text-xl font-semibold">Google Play</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DownloadPage;
