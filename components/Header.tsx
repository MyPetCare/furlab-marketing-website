import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { content, siteConfig } from '../constants/content';
import CTAButton from './CTAButton';
import { MenuIcon, XIcon } from './Icons';

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `font-poppins font-semibold text-base transition-colors ${
        isActive ? 'text-brand-indigo' : 'text-neutral-text hover:text-brand-indigo'
        }`;

    return (
        <header className="bg-neutral-background/80 backdrop-blur-sm sticky top-0 z-40">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-4 flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        <Link to="/" className="flex items-center -mt-0.5">
                            <span className="sr-only">{siteConfig.brandName}</span>
                            <img className="h-12 w-auto" src={siteConfig.logoUrl} alt={`${siteConfig.brandName} Logo`} />
                        </Link>
                        <div className="hidden space-x-8 lg:flex lg:items-center">
                            {navigation.map((link) => (
                                <NavLink key={link.name} to={link.href} className={navLinkClasses}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4 hidden lg:block">
                        <CTAButton as="link" to="/download" variant="primary">
                            {content.common.header_cta_label}
                        </CTAButton>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-text hover:bg-neutral-section-bg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-indigo"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden border-t border-neutral-divider">
                        <div className="pt-4 pb-3 space-y-1">
                            {navigation.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium ${
                                        isActive ? 'bg-indigo-50 text-brand-indigo' : 'text-neutral-text hover:bg-gray-50'
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                        <div className="pt-4 pb-3 border-t border-neutral-divider">
                           <CTAButton as="link" to="/download" variant="primary" className="w-full text-center">
                                {content.common.header_cta_label}
                            </CTAButton>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;

