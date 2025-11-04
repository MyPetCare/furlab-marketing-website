
import React from 'react';
import { Link } from 'react-router-dom';
import SeoHelper from '../components/SeoHelper';
import { siteConfig } from '../constants/content';

const NotFoundPage: React.FC = () => {
    return (
        <>
            <SeoHelper
                title={`404 - Page Not Found | ${siteConfig.brandName}`}
                description="The page you are looking for does not exist."
            />
            <div className="min-h-[50vh] flex flex-col items-center justify-center bg-neutral-background text-center px-4">
                <h1 className="text-6xl font-extrabold text-brand-indigo">404</h1>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-text sm:text-4xl">Page Not Found</h2>
                <p className="mt-4 text-lg text-neutral-text-muted">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-6">
                    <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-indigo hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-indigo">
                        Go back home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
