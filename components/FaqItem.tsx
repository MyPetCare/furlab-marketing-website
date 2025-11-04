import React, { useState } from 'react';
import type { FAQ } from '../types';

interface FaqItemProps {
  faq: FAQ;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="py-6">
            <dt className="text-lg">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-left w-full flex justify-between items-center text-neutral-text-muted"
                    aria-expanded={isOpen}
                >
                    <span className="font-poppins font-semibold text-neutral-text">{faq.q}</span>
                    <span className="ml-6 h-7 flex items-center">
                        <svg className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
            </dt>
            {isOpen && (
                <dd className="mt-2 pr-12">
                    <p className="text-base text-neutral-text-muted">{faq.a}</p>
                </dd>
            )}
        </div>
    );
};

export default FaqItem;

