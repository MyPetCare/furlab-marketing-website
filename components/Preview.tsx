import React from 'react';
import { AppContent } from '../types';
import { NutritionIcon, HabitIcon, HealthIcon } from './Icons';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  NutritionIcon,
  HabitIcon,
  HealthIcon
};

const MarkdownRenderer: React.FC<{ content: string; className?: string }> = ({ content, className }) => {
  const rawMarkup = (window as any).marked.parse(content || '');
  return <div className={`prose prose-sm max-w-none text-neutral-muted ${className}`} dangerouslySetInnerHTML={{ __html: rawMarkup }} />;
};

const PreviewSection: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <section className={`py-12 px-4 ${className}`}>
    <h2 className="text-3xl font-poppins font-bold text-center text-neutral-dark mb-8">{title}</h2>
    {children}
  </section>
);

const HomePreview: React.FC<{ content: AppContent['home'] }> = ({ content }) => (
  <div className="bg-white">
    {/* Hero */}
    <div className="bg-neutral-card p-8 text-center">
      <h1 className="text-4xl font-poppins font-bold text-primary mb-4">{content.hero.headline}</h1>
      <p className="text-lg text-neutral-muted max-w-2xl mx-auto mb-6">{content.hero.subhead}</p>
      <div className="flex items-center justify-center gap-4">
        {content.hero.ctas.map((cta, index) => {
            const variantClasses = {
                primary: 'bg-primary text-white shadow-sticker-primary hover:shadow-sticker-primary-hover',
                secondary: 'bg-gold text-neutral-text shadow-sticker-secondary hover:shadow-sticker-secondary-hover',
                'dark-hero': 'bg-neutral-dark text-white' // Example, adjust as needed
            };
            return (
                <a key={index} href={cta.url} className={`inline-block px-6 py-3 font-poppins font-bold text-lg rounded-full transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 ${variantClasses[cta.variant]}`}>
                    {cta.label}
                </a>
            )
        })}
      </div>
      <img src={content.hero.image} alt="Hero" className="mt-8 rounded-lg shadow-lg mx-auto max-h-96" />
    </div>

    {/* Features */}
    <PreviewSection title="How Furlab Helps">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {content.features.map((feature, index) => {
          const Icon = typeof feature.icon === 'string' ? iconMap[feature.icon] : feature.icon;
          return (
            <div key={index} className="text-center p-4">
              {Icon && <Icon className="mx-auto text-primary mb-4" />}
              <h3 className="text-xl font-poppins font-semibold text-neutral-dark mb-2">{feature.title}</h3>
              <p className="text-neutral-muted">{feature.benefit}</p>
            </div>
          );
        })}
      </div>
    </PreviewSection>

    {/* Testimonials */}
    <PreviewSection title="Happy Pet Parents" className="bg-neutral-card">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {content.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-neutral-divider">
                <p className="text-neutral-text font-inter italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <p className="font-poppins font-semibold text-neutral-dark">{testimonial.author}</p>
                        <p className="text-neutral-muted text-sm">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        ))}
       </div>
    </PreviewSection>

    {/* Screenshots */}
    <PreviewSection title="See It in Action">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.screenshots.map((screen, index) => (
                <img key={index} src={screen.image} alt={screen.alt} className="rounded-lg shadow-lg border border-neutral-divider" />
            ))}
        </div>
    </PreviewSection>
  </div>
);

const FeaturesPreview: React.FC<{ content: AppContent['features_page'] }> = ({ content }) => (
    <div className="bg-white p-4">
        {content.sections.map((section, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 py-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-poppins font-bold text-neutral-dark mb-4">{section.title}</h2>
                    <p className="text-lg text-neutral-muted">{section.description}</p>
                </div>
                <div className="md:w-1/2">
                    <img src={section.screenshot} alt={section.title} className="rounded-lg shadow-xl border border-neutral-divider" />
                </div>
            </div>
        ))}
    </div>
);

const BlogPreview: React.FC<{ content: AppContent['blog'] }> = ({ content }) => (
    <div className="bg-white p-4">
        <PreviewSection title="Furlab Blog">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {content.posts.map((post) => (
                    <div key={post.slug} className="bg-neutral-card rounded-lg shadow-md border border-neutral-divider overflow-hidden">
                        <img src={post.cover_image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-poppins font-bold text-primary mb-2">{post.title}</h3>
                            <p className="text-neutral-muted mb-4">{post.summary}</p>
                            <div className="text-sm text-neutral-muted">By {post.author} on {post.published_at}</div>
                            <div className="mt-2">
                                {post.tags.map(tag => <span key={tag} className="inline-block bg-accent-sky text-primary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PreviewSection>
         {content.posts.length > 0 && (
          <div className="max-w-3xl mx-auto mt-12 p-6 border border-neutral-divider rounded-lg">
              <h3 className="text-2xl font-poppins font-bold text-neutral-dark mb-4">Full Post Preview: {content.posts[0].title}</h3>
              <MarkdownRenderer content={content.posts[0].body} />
          </div>
         )}
    </div>
);

const ContactPreview: React.FC<{ content: AppContent['contact'] }> = ({ content }) => (
    <div className="bg-white p-4">
        <PreviewSection title="Frequently Asked Questions">
            <div className="max-w-3xl mx-auto space-y-4">
                {content.faqs.map((faq, index) => (
                    <details key={index} className="bg-neutral-card p-4 rounded-lg border border-neutral-divider cursor-pointer">
                        <summary className="font-poppins font-semibold text-neutral-dark">{faq.q}</summary>
                        <div className="mt-2">
                            <MarkdownRenderer content={faq.a} />
                        </div>
                    </details>
                ))}
            </div>
        </PreviewSection>
    </div>
);


interface PreviewProps {
    activeTab: string;
    content: AppContent;
}

const Preview: React.FC<PreviewProps> = ({ activeTab, content }) => {
    const renderActivePreview = () => {
        switch (activeTab) {
            case 'Home':
                return <HomePreview content={content.home} />;
            case 'Features':
                return <FeaturesPreview content={content.features_page} />;
            case 'Blog':
                return <BlogPreview content={content.blog} />;
            case 'Contact':
                return <ContactPreview content={content.contact} />;
            default:
                return <div className="p-8 text-center text-neutral-muted">Preview will appear here.</div>;
        }
    };
    return <div className="bg-neutral-card border-l border-neutral-divider">{renderActivePreview()}</div>;
};

export default Preview;





