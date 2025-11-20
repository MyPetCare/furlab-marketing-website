import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SeoHelper from '../components/SeoHelper';
import CTAButton from '../components/CTAButton';
import { siteConfig } from '../constants/content';

const WEBHOOK_URL = 'https://furlab.app.n8n.cloud/webhook/submit-to-wish-list';
const SUBMIT_COOLDOWN = 10 * 60 * 1000; // 10 minutes

const sourceOptions = [
  { value: '', label: '-' },
  { value: 'tiktok_ads', label: 'TikTok Ads' },
  { value: 'tiktok_organic', label: 'TikTok Video / Bio' },
  { value: 'facebook_post', label: 'Facebook / Meta Post' },
  { value: 'facebook_ads', label: 'Facebook / Meta Ads' },
  { value: 'instagram_post', label: 'Instagram Post / Story' },
  { value: 'instagram_ads', label: 'Instagram Ads' },
  { value: 'google_search', label: 'Google Search' },
  { value: 'google_ads', label: 'Google Ads' },
  { value: 'reddit_community', label: 'Reddit Community' },
  { value: 'reddit_ads', label: 'Reddit Ads' },
  { value: 'friend_referral', label: 'Friend / Shared by someone' },
  { value: 'other', label: 'Other' },
];

const WaitlistPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    pet_types: [] as string[],
    platform: '',
    want_beta_testing: false,
    source: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Check cooldown on mount and every second
  useEffect(() => {
    checkCooldown();
    const interval = setInterval(checkCooldown, 1000);
    return () => clearInterval(interval);
  }, []);

  const checkCooldown = () => {
    const lastSubmit = localStorage.getItem('waitlist_last_submit');
    if (lastSubmit) {
      const lastTime = parseInt(lastSubmit);
      const now = Date.now();
      const elapsed = now - lastTime;
      
      if (elapsed < SUBMIT_COOLDOWN) {
        const remaining = Math.ceil((SUBMIT_COOLDOWN - elapsed) / 1000 / 60);
        setCooldownRemaining(remaining);
      } else {
        setCooldownRemaining(0);
      }
    } else {
      setCooldownRemaining(0);
    }
  };

  const handlePetTypeChange = (petType: string) => {
    setFormData(prev => ({
      ...prev,
      pet_types: prev.pet_types.includes(petType)
        ? prev.pet_types.filter(p => p !== petType)
        : [...prev.pet_types, petType]
    }));
  };

  const handlePlatformChange = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platform,
      // Reset beta testing if iOS is deselected
      want_beta_testing: platform === 'ios' ? prev.want_beta_testing : false
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check cooldown
    if (cooldownRemaining > 0) {
      setErrorMessage(`Please wait ${cooldownRemaining} more minutes before submitting again.`);
      return;
    }

    // Validation
    if (!formData.email || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (formData.pet_types.length === 0) {
      setErrorMessage('Please select at least one pet type.');
      return;
    }

    if (!formData.platform) {
      setErrorMessage('Please select a platform.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Generate token for email verification with timestamp
    const tokenData = {
      is_beta: formData.want_beta_testing,
      email: formData.email,
      timestamp: Date.now() // Current timestamp in milliseconds
    };
    const token = btoa(JSON.stringify(tokenData));

    try {
      await axios.post(WEBHOOK_URL, {
        email: formData.email,
        pet_type: formData.pet_types.length > 0 ? formData.pet_types : null,
        platform: formData.platform,
        want_beta_testing: formData.want_beta_testing,
        source: formData.source || null,
        token: token,
      });

      // Success - write to localStorage
      localStorage.setItem('waitlist_last_submit', Date.now().toString());
      setSubmitStatus('success');
      checkCooldown();

      // Reset form
      setFormData({
        email: '',
        pet_types: [],
        platform: '',
        want_beta_testing: false,
        source: '',
      });
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      const errorMessage = error.response?.data?.message 
        || error.message 
        || 'Failed to submit form. Please check your connection and try again.';
      setErrorMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const showBetaOption = formData.platform === 'ios';

  return (
    <>
      <SeoHelper
        title={`Join Waitlist | ${siteConfig.brandName}`}
        description="Join the FurLab waitlist and be the first to try new features. Limited beta spots available."
        canonicalPath="/waitlist"
      />

      <section className="py-16 bg-neutral-background sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-neutral-text sm:text-5xl">
              Get Early Access to {' '}
              <span className="text-brand-indigo">Furlab</span>
            </h1>
            <br/>
            {/*<p className="mt-4 text-xl text-neutral-text-muted">*/}
            {/*  Join our waitlist and be the first to try new features.*/}
            {/*</p>*/}
            <p className="mt-2 text-lg text-brand-gold font-semibold">
              🎁 Limited beta spots available to win 1 year of free Pro membership.
            </p>
          </div>

          {submitStatus === 'success' ? (
            <div className="bg-accent-mint/20 border-2 border-accent-mint rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-neutral-text mb-4">
                🎉 You're on the list!
              </h2>
              <p className="text-lg text-neutral-text-muted">
                Please check your email inbox to confirm your spot.
              </p>
              {cooldownRemaining > 0 && (
                <p className="mt-4 text-sm text-neutral-text-muted">
                  You can submit again in {cooldownRemaining} minutes.
                </p>
              )}
            </div>
          ) : (
            <div className="bg-neutral-section-bg rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-text mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-neutral-divider focus:border-brand-indigo focus:outline-none transition-colors text-neutral-text"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Pet Type */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-text mb-2">
                    I'm a parent of.. *
                  </label>
                  <div className="flex gap-4">
                    {[
                      { label: 'Dog', value: 'dog' },
                      { label: 'Cat', value: 'cat' },
                      { label: 'Other', value: 'other' }
                    ].map((type) => (
                      <label key={type.value} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.pet_types.includes(type.value)}
                          onChange={() => handlePetTypeChange(type.value)}
                          className="w-4 h-4 text-brand-indigo rounded focus:ring-brand-indigo"
                        />
                        <span className="ml-2 text-neutral-text">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-text mb-2">
                    Platform *
                  </label>
                  <div className="flex gap-4">
                    {[
                      { label: 'Android', value: 'android' },
                      { label: 'iOS', value: 'ios' }
                    ].map((platform) => (
                      <label key={platform.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="platform"
                          value={platform.value}
                          checked={formData.platform === platform.value}
                          onChange={(e) => handlePlatformChange(e.target.value)}
                          className="w-4 h-4 text-brand-indigo focus:ring-brand-indigo"
                        />
                        <span className="ml-2 text-neutral-text">{platform.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Beta Testing (conditional) */}
                {showBetaOption && (
                  <div className="bg-accent-sky/20 border-2 border-accent-sky rounded-lg p-4">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.want_beta_testing}
                        onChange={(e) => setFormData({ ...formData, want_beta_testing: e.target.checked })}
                        className="w-4 h-4 text-brand-indigo rounded focus:ring-brand-indigo mt-1"
                      />
                      <div className="ml-3">
                        <span className="text-neutral-text font-semibold">
                          I want to apply for beta testing
                        </span>
                        <p className="text-sm text-neutral-text-muted mt-1">
                          Requires active testing + feedback. iPhone iOS 16 or above.
                        </p>
                      </div>
                    </label>
                  </div>
                )}

                {/* Source */}
                <div>
                  <label htmlFor="source" className="block text-sm font-semibold text-neutral-text mb-2">
                    Where did you hear about us?
                  </label>
                  <select
                    id="source"
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-neutral-divider focus:border-brand-indigo focus:outline-none transition-colors text-neutral-text bg-white"
                  >
                    {sourceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="bg-accent-coral/20 border-2 border-accent-coral rounded-lg p-4">
                    <p className="text-neutral-text text-sm">{errorMessage}</p>
                  </div>
                )}

                {/* Cooldown Warning */}
                {cooldownRemaining > 0 && (
                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
                    <p className="text-neutral-text text-sm">
                      ⏱️ Please wait {cooldownRemaining} more minutes before submitting again.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <CTAButton
                    as="button"
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting || cooldownRemaining > 0}
                    className="w-full text-center"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Early Access'}
                  </CTAButton>
                </div>

                {/* Footer Note */}
                <p className="text-sm text-neutral-text-muted text-center">
                  No spam. We'll only contact you about early access. Your information is safe and private.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WaitlistPage;

