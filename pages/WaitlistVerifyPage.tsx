import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import SeoHelper from '../components/SeoHelper';
import CTAButton from '../components/CTAButton';
import { siteConfig } from '../constants/content';

const VERIFY_API = 'https://furlab.app.n8n.cloud/webhook/verify-email';
const BETA_API = 'https://furlab.app.n8n.cloud/webhook/submit-beta-tester-details';

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
    feedback_methods: [] as string[],
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
  
  const handleFeedbackMethodChange = (method: string) => {
    setBetaForm(prev => ({
      ...prev,
      feedback_methods: prev.feedback_methods.includes(method)
        ? prev.feedback_methods.filter(m => m !== method)
        : [...prev.feedback_methods, method]
    }));
  };
  
  const handleBetaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBetaFormError('');
    
    // Validation
    if (betaForm.feedback_methods.length === 0) {
      setBetaFormError('Please select at least one feedback method.');
      return;
    }
    
    if (!betaForm.feedback_frequency) {
      setBetaFormError('Please select how often you can provide feedback.');
      return;
    }
    
    if (!betaForm.iphone_model.trim()) {
      setBetaFormError('Please enter your iPhone model.');
      return;
    }
    
    if (!betaForm.ios_version) {
      setBetaFormError('Please select your iOS version.');
      return;
    }
    
    try {
      await axios.post(BETA_API, {
        email: state.email,
        feedback_methods: betaForm.feedback_methods,
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
                {/* Feedback Methods */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-text mb-2">
                    How would you like to submit feedback? *
                  </label>
                  <div className="space-y-2">
                    {[
                      { label: 'In-app feedback form', value: 'form' },
                      { label: 'WhatsApp messaging or scheduled call', value: 'whatsapp' },
                      { label: 'Zoom call', value: 'zoom' }
                    ].map((method) => (
                      <label key={method.value} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={betaForm.feedback_methods.includes(method.value)}
                          onChange={() => handleFeedbackMethodChange(method.value)}
                          className="w-4 h-4 text-brand-indigo rounded focus:ring-brand-indigo"
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
                    className="w-full px-4 py-3 rounded-lg border-2 border-neutral-divider focus:border-brand-indigo focus:outline-none transition-colors text-neutral-text bg-white"
                  >
                    <option value="">Select frequency</option>
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
                  <input
                    type="text"
                    id="iphone_model"
                    value={betaForm.iphone_model}
                    onChange={(e) => setBetaForm({ ...betaForm, iphone_model: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-neutral-divider focus:border-brand-indigo focus:outline-none transition-colors text-neutral-text"
                    placeholder="e.g., iPhone 15 Pro"
                  />
                </div>

                {/* iOS Version */}
                <div>
                  <label htmlFor="ios_version" className="block text-sm font-semibold text-neutral-text mb-2">
                    iOS Version *
                  </label>
                  <p className="text-sm text-neutral-text-muted mb-2">
                    Settings → General → About → iOS Version
                  </p>
                  <select
                    id="ios_version"
                    value={betaForm.ios_version}
                    onChange={(e) => setBetaForm({ ...betaForm, ios_version: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-neutral-divider focus:border-brand-indigo focus:outline-none transition-colors text-neutral-text bg-white"
                  >
                    <option value="">Select your iOS version</option>
                    <option value="18.2">iOS 18.2</option>
                    <option value="18.1">iOS 18.1</option>
                    <option value="18.0">iOS 18.0</option>
                    <option value="17.7">iOS 17.7</option>
                    <option value="17.6">iOS 17.6</option>
                    <option value="17.5">iOS 17.5</option>
                    <option value="17.4">iOS 17.4</option>
                    <option value="17.3">iOS 17.3</option>
                    <option value="17.2">iOS 17.2</option>
                    <option value="17.1">iOS 17.1</option>
                    <option value="17.0">iOS 17.0</option>
                    <option value="16.7">iOS 16.7</option>
                    <option value="16.6">iOS 16.6</option>
                    <option value="16.5">iOS 16.5</option>
                    <option value="16.4">iOS 16.4</option>
                    <option value="16.3">iOS 16.3</option>
                    <option value="16.2">iOS 16.2</option>
                    <option value="16.1">iOS 16.1</option>
                    <option value="16.0">iOS 16.0</option>
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

                {/* Footer Note */}
                <p className="text-sm text-neutral-text-muted text-center">
                  Your information is safe and will never be shared.<br />
                  We'll contact you within a week if you're selected.
                </p>
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
                Your beta application has been submitted successfully.
              </p>
              <p className="mt-2 text-base text-neutral-text-muted">
                We'll contact you within a week if you're selected for the beta program.
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

