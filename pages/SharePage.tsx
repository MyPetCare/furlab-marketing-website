import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { siteConfig } from '../constants/content';

// App icon - using the 192x192 version for sharp display
const APP_ICON_URL = '/icons/furlab_icon_192x192.svg';

// Custom URL Scheme (matches Xcode: URL Schemes = furlab)
const APP_SCHEME = 'furlab';

// Translations
const translations = {
    en: {
        slogan: "Track your pet's health, nutrition and care",
        downloadButton: 'Download Furlab App',
        openInAppButton: 'Open in App',
        privacyPolicy: 'Privacy Policy',
        termsOfUse: 'Terms of Use',
    },
    zh: {
        slogan: '记录宠物的健康与饮食与照护',
        downloadButton: '下载Furlab应用',
        openInAppButton: '在App中打开',
        privacyPolicy: '隐私政策',
        termsOfUse: '使用条款',
    },
};

// Fallback delay: if app doesn't open within this time, assume not installed and go to store
const OPEN_IN_APP_FALLBACK_MS = 2000;

const SharePage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const lang = searchParams.get('lang') === 'zh' ? 'zh' : 'en';
    const t = translations[lang];

    const schemeUrl = `${APP_SCHEME}://share?lang=${lang}`;

    const handleOpenInApp = () => {
        window.location.href = schemeUrl;
        setTimeout(() => {
            if (document.visibilityState === 'visible') {
                window.location.href = siteConfig.appStoreLink;
            }
        }, OPEN_IN_APP_FALLBACK_MS);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
            {/* Branding Area */}
            <div className="flex flex-col items-center text-center mb-16">
                {/* App Icon */}
                <img
                    src={APP_ICON_URL}
                    alt="Furlab"
                    className="w-24 h-24 rounded-[22px] shadow-lg mb-6"
                />
                
                {/* App Name */}
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    {siteConfig.brandName}
                </h1>
                
                {/* Slogan */}
                <p className="text-base text-gray-500 max-w-xs">
                    {t.slogan}
                </p>
            </div>

            {/* Button Area */}
            <div className="w-full max-w-sm flex flex-col gap-4 mb-16">
                {/* Primary CTA - Download App */}
                <a
                    href={siteConfig.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-brand-indigo text-white text-center text-lg font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                    {t.downloadButton}
                </a>

                {/* Secondary CTA - Open in App */}
                <button
                    onClick={handleOpenInApp}
                    className="w-full py-4 bg-white text-brand-indigo text-center text-lg font-medium rounded-full border-2 border-brand-indigo hover:bg-indigo-50 transition-colors"
                >
                    {t.openInAppButton}
                </button>
            </div>

            {/* Info Area - Links */}
            <div className="flex items-center gap-2 text-sm text-brand-indigo">
                <Link to="/privacy" className="hover:underline">
                    {t.privacyPolicy}
                </Link>
                <span className="text-gray-300">|</span>
                <Link to="/terms" className="hover:underline">
                    {t.termsOfUse}
                </Link>
            </div>
        </div>
    );
};

export default SharePage;
