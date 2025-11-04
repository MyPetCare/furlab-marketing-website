
import React from 'react';

// Feature Icons
export const NutritionIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8 text-brand-indigo" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    <path d="M16 8.5c0 .83-.34 1.58-.88 2.12"></path>
  </svg>
);

export const HabitIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8 text-brand-indigo" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 10.5c.63-.63 1-1.51 1-2.5a3.5 3.5 0 00-7 0c0 .99.37 1.87 1 2.5"></path>
    <path d="M20 21a8 8 0 00-16 0"></path>
    <path d="M20 13.5V8.5a3.5 3.5 0 10-7 0v5"></path>
  </svg>
);

export const HealthIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8 text-brand-indigo" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14m-7-7h14" />
    </svg>
);

// UI Icons
export const MenuIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

// Store Icons
export const AppleAppStoreIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
        <path d="M21.5,15.97a5.92,5.92,0,0,1-3-4.48,5.84,5.84,0,0,1,2.83-6.6,2.37,2.37,0,0,0,1-2.1,2.14,2.14,0,0,0-1.27-2,6.58,6.58,0,0,0-5.46,1,6,6,0,0,0-4.2,5.2,10.6,10.6,0,0,0,1.14,5.32,5.43,5.43,0,0,1-2,5.29c-2.43,2.4-4,6.4-1.4,9.63A7.43,7.43,0,0,0,14.28,31a6.68,6.68,0,0,0,7.86-5.4,13.67,13.67,0,0,1-1-5.18A5.93,5.93,0,0,1,21.5,15.97Z" />
        <path d="M21.14,1.43a6,6,0,0,0-4,2.34,5.81,5.81,0,0,0-2.3,4.45,2.1,2.1,0,0,0,.79,1.75,2.27,2.27,0,0,0,1.86.43,6.29,6.29,0,0,0,5.12-2.83,5.18,5.18,0,0,0,1.38-4.14A5.31,5.31,0,0,0,21.14,1.43Z" />
    </svg>
);

export const GooglePlayStoreIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
        <path d="M23.1,15.4,6.5,2.8a2.12,2.12,0,0,0-1,.6L18.4,16,18.1,16,5.5,28.6a2,2,0,0,0,1,.6l16.6-12.6a2,2,0,0,0,0-1.2Z" />
        <path d="M4.6,2.4A2.16,2.16,0,0,0,3,4.3V27.7a2.16,2.16,0,0,0,1.6,1.9L18,16.4Z" />
        <path d="M26.4,13.7,24,12.5,20,16.4l4,3.9,2.4-1.2A3.1,3.1,0,0,0,26.4,13.7Z" />
    </svg>
);

// Social Icons
export const FacebookIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
    </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

