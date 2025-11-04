import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import type { ButtonVariant } from '../types';

// Base props shared by all variants
interface BaseCTAButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

// Props when rendered as a <button>
type ButtonProps = BaseCTAButtonProps & {
  as?: 'button';
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

// Props when rendered as an <a>
type AnchorProps = BaseCTAButtonProps & {
  as: 'a';
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'>;

// Props when rendered as a <Link>
type LinkRouterProps = BaseCTAButtonProps & {
  as: 'link';
} & Omit<LinkProps, 'className' | 'children'>;


type CTAButtonProps = ButtonProps | AnchorProps | LinkRouterProps;

const CTAButton: React.FC<CTAButtonProps> = (props) => {
  const { variant = 'primary', className = '', children } = props;

  const baseClasses = 'inline-block font-poppins font-bold text-base md:text-lg px-8 py-4 rounded-full transition-transform duration-200 ease-in-out transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-brand-indigo disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-brand-indigo text-white shadow-sticker-indigo',
    secondary: 'bg-brand-gold text-neutral-text shadow-sticker-gold',
    'dark-hero': 'bg-neutral-text text-white shadow-sticker-dark',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (props.as === 'link') {
    const { as: _as, variant: _variant, className: _className, children: _children, ...rest } = props;
    return <Link className={combinedClasses} {...rest}>{children}</Link>;
  }

  if (props.as === 'a') {
    const { as: _as, variant: _variant, className: _className, children: _children, ...rest } = props;
    return <a className={combinedClasses} {...rest}>{children}</a>;
  }
  
  const { as: _as, variant: _variant, className: _className, children: _children, ...rest } = props as ButtonProps;
  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default CTAButton;

