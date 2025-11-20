import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import SeoHelper from '../components/SeoHelper';
import CTAButton from '../components/CTAButton';
import { siteConfig } from '../constants/content';

const VERIFY_API = 'https://furlab.app.n8n.cloud/webhook/verify-email';
const BETA_API = 'https://furlab.app.n8n.cloud/webhook/submit-beta-tester-details';

// iPhone models list (iPhone 8 and later)
const IPHONE_MODELS = [
  'iPhone 8',
  'iPhone 8 Plus',
  'iPhone X',
  'iPhone XR',
  'iPhone XS',
  'iPhone XS Max',
  'iPhone 11',
  'iPhone 11 Pro',
  'iPhone 11 Pro Max',
  'iPhone SE (2nd generation)',
  'iPhone 12 mini',
  'iPhone 12',
  'iPhone 12 Pro',
  'iPhone 12 Pro Max',
  'iPhone 13 mini',
  'iPhone 13',
  'iPhone 13 Pro',
  'iPhone 13 Pro Max',
  'iPhone SE (3rd generation)',
  'iPhone 14',
  'iPhone 14 Plus',
  'iPhone 14 Pro',
  'iPhone 14 Pro Max',
  'iPhone 15',
  'iPhone 15 Plus',
  'iPhone 15 Pro',
  'iPhone 15 Pro Max',
  'iPhone 16',
  'iPhone 16 Plus',
  'iPhone 16 Pro',
  'iPhone 16 Pro Max',
  'iPhone 17',
  'iPhone 17 Air',
  'iPhone 17 Pro',
  'iPhone 17 Pro Max',
];

interface VerifyState {
  status: 'loading' | 'verified' | 'error' | 'beta-submitted';
  email?: string;
  isBeta?: boolean;
  message?: string;
}

const WaitlistVerifyPage: React.FC = () => {
  const location = useLocation();
  const [state, setState] = useState<VerifyState>({ status: 'loading' });
  
  const [betaForm, setBetaForm] = useState({
    feedback_method: '',
    feedback_frequency: '',
    iphone_model: '',
    ios_version: ''
  });
  
  const [betaFormError, setBetaFormError] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      const urlParams = new URLSearchParams(location.search);
      const token = urlParams.get('token');
      
      if (!token) {
        setState({ status: 'error', message: 'Invalid verification link. No token provided.' });
        return;
      }
      
      try {
        // Decode token
        const tokenData = JSON.parse(atob(token));
        const { email, is_beta } = tokenData;
        
        if (!email) {
          setState({ status: 'error', message: 'Invalid token format.' });
          return;
        }
        
        // Call verification API (Mock for now - will work when n8n is configured)
        try {
          await axios.post(VERIFY_API, {
            email,
            is_beta
          });
          
          setState({ 
            status: 'verified',
            email,
            isBeta: is_beta 
          });
        } catch (apiError) {
          console.log('API not configured yet, using mock verification');
          // Mock success for testing
          setState({ 
            status: 'verified',
            email,
            isBeta: is_beta 
          });
        }
        
      } catch (error) {
        setState({ status: 'error', message: 'Invalid token format. Please check your verification link.' });
      }
    };
    
    verifyEmail();
  }, [location.search]);
  
  
  const handleBetaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBetaFormError('');
    
    // Validation
    if (!betaForm.feedback_method) {
      setBetaFormError('Please select a feedback method.');
      return;
    }
    
    if (!betaForm.feedback_frequency) {
      setBetaFormError('Please select how often you can provide feedback.');
      return;
    }
    
    if (!betaForm.iphone_model) {
      setBetaFormError('Please select your iPhone model.');
      return;
    }
    
    if (!betaForm.ios_version) {
      setBetaFormError('Please select your iOS version.');
      return;
    }
    
    try {
      await axios.post(BETA_API, {
        email: state.email,
        feedback_method: betaForm.feedback_method,
        feedback_frequency: betaForm.feedback_frequency,
        iphone_model: betaForm.iphone_model,
        ios_version: betaForm.ios_version
      });
      
      setState(prev => ({ ...prev, status: 'beta-submitted' }));
    } catch (error) {
      console.log('API not configured yet, using mock submission');
      // Mock success for testing
      setState(prev => ({ ...prev, status: 'beta-submitted' }));
    }
  };

  // Loading State
  if (state.status === 'loading') {
    return (
      <>
        <SeoHelper
          title={`Verifying... | ${siteConfig.brandName}`}
          description="Verifying your email address"
          canonicalPath="/waitlist/verify"
        />
        
        <section className="py-16 bg-neutral-background sm:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-brand-indigo mb-6"></div>
              <h1 className="text-3xl font-extrabold text-neutral-text sm:text-4xl">
                Verifying your email...
              </h1>
              <p className="mt-4 text-lg text-neutral-text-muted">
                Please wait a moment
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Error State
  if (state.status === 'error') {
    return (
      <>
        <SeoHelper
          title={`Verification Failed | ${siteConfig.brandName}`}
          description="Email verification failed"
          canonicalPath="/waitlist/verify"
        />
        
        <section className="py-16 bg-neutral-background sm:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-accent-coral/20 mb-6">
                <svg className="h-8 w-8 text-accent-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-3xl font-extrabold text-neutral-text sm:text-4xl">
                Verification Failed
              </h1>
              <p className="mt-4 text-lg text-neutral-text-muted">
                {state.message || 'This verification link is invalid or has expired.'}
              </p>
              <p className="mt-2 text-base text-neutral-text-muted">
                Please submit the form again or contact support if the problem persists.
              </p>
              <div className="mt-8">
                <CTAButton as="link" to="/waitlist" variant="primary">
                  Join Waitlist
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Verified State (Non-Beta)
  if (state.status === 'verified' && !state.isBeta) {
    return (
      <>
        <SeoHelper
          title={`Email Verified! | ${siteConfig.brandName}`}
          description="Your email has been verified"
          canonicalPath="/waitlist/verify"
        />
        
        <section className="py-16 bg-neutral-background sm:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-accent-mint/20 mb-6">
                <svg className="h-8 w-8 text-accent-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-extrabold text-neutral-text sm:text-4xl">
                Email Verified! 🎉
              </h1>
              <p className="mt-4 text-lg text-neutral-text-muted">
                You're on the FurLab waitlist.
              </p>
              <p className="mt-2 text-base text-neutral-text-muted">
                We'll notify you when early access is available.
              </p>
              <div className="mt-8">
                <CTAButton as="link" to="/" variant="primary">
                  Back to Home
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Verified State (Beta) - Show Beta Form
  if (state.status === 'verified' && state.isBeta) {
    return (
      <>
        <SeoHelper
          title={`Complete Beta Application | ${siteConfig.brandName}`}
          description="Complete your beta tester application"
          canonicalPath="/waitlist/verify"
        />
        
        <section className="py-16 bg-neutral-background sm:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Success Message */}
            <div className="text-center mb-12">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-accent-mint/20 mb-6">
                <svg className="h-8 w-8 text-accent-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-extrabold text-neutral-text sm:text-4xl">
                Email Verified! 🎉
              </h1>
              <p className="mt-4 text-lg text-neutral-text-muted">
                Now, let's complete your beta application.
              </p>
            </div>

            {/* Beta Form */}
            <div className="bg-neutral-section-bg rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-neutral-text mb-6">
                Beta Tester Information
              </h2>
              
              <form onSubmit={handleBetaSubmit} className="space-y-6">
                {/* Feedback Method (Single Choice) */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-text mb-2">
                    How would you like to submit feedback? *
                  </label>
                  <div className="space-y-2">
                    {[
                      { label: 'In-app feedback form', value: 'in-app-form' },
                      { label: 'WhatsApp messaging or scheduled call', value: 'whatsapp' },
                      { label: 'Zoom call', value: 'zoom' }
                    ].map((method) => (
                      <label key={method.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="feedback_method"
                          value={method.value}
                          checked={betaForm.feedback_method === method.value}
                          onChange={(e) => setBetaForm({ ...betaForm, feedback_method: e.target.value })}
                          className="w-4 h-4 text-brand-indigo focus:ring-brand-indigo"
                        />
                        <span className="ml-2 text-neutral-text">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Feedback Frequency */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-text mb-2">
                    How often would you be willing to provide feedback? *
                  </label>
                  <select
                    value={betaForm.feedback_frequency}
                    onChange={(e) => setBetaForm({ ...betaForm, feedback_frequency: e.target.value })}
                    className="w-full pl-4 pr-12 py-3 rounded-lg border-2 border-neutral-divider focus:border-brand-indigo focus:outline-none transition-colors text-neutral-text bg-white cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232D2D2D'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 0.75rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5rem 1.5rem'
                    }}
                  >
                    <option value="" disabled>Please select..</option>
                    <option value="weekly">Quick feedback after each release (weekly to bi-weekly)</option>
                    <option value="occasionally">Occasionally</option>
                    <option value="once">Once</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* iPhone Model */}
                <div>
                  <label htmlFor="iphone_model" className="block text-sm font-semibold text-neutral-text mb-2">
                    What iPhone model do you have? *
                  </label>
                  <select
                    id="iphone_model"
                    value={betaForm.iphone_model}
                    onChange={(e) => setBetaForm({ ...betaForm, iphone_model: e.target.value })}
                    required
                    className="w-full pl-4 pr-12 py-3 rounded-lg border-2 border-neutral-divider focus:border-brand-indigo focus:outline-none transition-colors text-neutral-text bg-white cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232D2D2D'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 0.75rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5rem 1.5rem'
                    }}
                  >
                    <option value="" disabled>Please select..</option>
                    {IPHONE_MODELS.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>

                {/* iOS Version */}
                <div>
                  <label htmlFor="ios_version" className="block text-sm font-semibold text-neutral-text mb-2">
                    iOS Version *
                  </label>
                  {/*<p className="text-sm text-neutral-text-muted mb-2">*/}
                  {/*  Settings → General → About → iOS Version*/}
                  {/*</p>*/}
                  <select
                    id="ios_version"
                    value={betaForm.ios_version}
                    onChange={(e) => setBetaForm({ ...betaForm, ios_version: e.target.value })}
                    required
                    className="w-full pl-4 pr-12 py-3 rounded-lg border-2 border-neutral-divider focus:border-brand-indigo focus:outline-none transition-colors text-neutral-text bg-white cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232D2D2D'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 0.75rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5rem 1.5rem'
                    }}
                  >
                    <option value="" disabled>Please select..</option>
                    <option value="26.x">iOS 26</option>
                    <option value="18.x">iOS 18</option>
                    <option value="17.x">iOS 17</option>
                    <option value="16.x">iOS 16</option>
                  </select>
                </div>

                {/* Error Message */}
                {betaFormError && (
                  <div className="bg-accent-coral/20 border-2 border-accent-coral rounded-lg p-4">
                    <p className="text-neutral-text text-sm">{betaFormError}</p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <CTAButton
                    as="button"
                    type="submit"
                    variant="primary"
                    className="w-full text-center"
                  >
                    Submit Beta Application
                  </CTAButton>
                </div>
                <br/>
                {/*/!* Footer Note *!/*/}
                {/*<p className="text-sm text-neutral-text-muted text-center">*/}
                {/*  Your information is safe and will never be shared.<br />*/}
                {/*  We'll contact you within a week if you're selected.*/}
                {/*</p>*/}
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Beta Submitted State
  if (state.status === 'beta-submitted') {
    return (
      <>
        <SeoHelper
          title={`Application Submitted! | ${siteConfig.brandName}`}
          description="Your beta application has been submitted"
          canonicalPath="/waitlist/verify"
        />
        
        <section className="py-16 bg-neutral-background sm:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-accent-mint/20 mb-6">
                <svg className="h-8 w-8 text-accent-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl font-extrabold text-neutral-text sm:text-4xl">
                Thanks for Applying! 🎉
              </h1>
              <p className="mt-4 text-lg text-neutral-text-muted">
                Your beta application has been submitted successfully, we'll contact you soon.
              </p>
              <p className="mt-2 text-base text-neutral-text-muted">
                
              </p>
              <div className="mt-8 space-y-3">
                <div>
                  <CTAButton as="link" to="/" variant="primary">
                    Back to Home
                  </CTAButton>
                </div>
                <p className="text-sm text-neutral-text-muted">
                  Keep an eye on your inbox for updates!
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return null;
};

export default WaitlistVerifyPage;

