
import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../constants/content';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './Icons';
import type { SocialLink } from '../types';


const socialLinks: SocialLink[] = [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61584081953008', icon: FacebookIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/furlabforpets?igsh=bWU2cnYzbjdmaTJw', icon: InstagramIcon },
    { name: 'TikTok', url: 'https://www.tiktok.com/@furlab18', icon: TikTokIcon },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-section-bg border-t border-neutral-divider mt-24">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:order-2">
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => (
                                <a key={item.name} href={item.url} className="text-neutral-text-muted hover:text-brand-indigo transition-colors" aria-label={item.name}>
                                    <item.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
                            <div className="px-5 py-2">
                                <Link to="/about" className="text-base text-neutral-text-muted hover:text-neutral-text">
                                    About
                                </Link>
                            </div>
                            <div className="px-5 py-2">
                                <Link to="/features" className="text-base text-neutral-text-muted hover:text-neutral-text">
                                    Features
                                </Link>
                            </div>
                            <div className="px-5 py-2">
                                <Link to="/resources" className="text-base text-neutral-text-muted hover:text-neutral-text">
                                    Resources
                                </Link>
                            </div>
                            <div className="px-5 py-2">
                                <Link to="/contact" className="text-base text-neutral-text-muted hover:text-neutral-text">
                                    Contact
                                </Link>
                            </div>
                            <div className="px-5 py-2">
                                <Link to="/privacy" className="text-base text-neutral-text-muted hover:text-neutral-text">
                                    Privacy
                                </Link>
                            </div>
                            <div className="px-5 py-2">
                                <Link to="/terms" className="text-base text-neutral-text-muted hover:text-neutral-text">
                                    Terms
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="mt-8 text-center text-base text-neutral-text-muted">
                    &copy; {new Date().getFullYear()} {siteConfig.brandName}, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

