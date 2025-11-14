
import React, { useState, useCallback } from 'react';
import type { AppContent, BlogPost, FAQ, Feature, FeaturePageSection, Screenshot, Testimonial, CTA } from '../types';
import ImageUploader from './ImageUploader';

// UI Components defined within the same file for simplicity
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseClasses = 'px-4 py-2 font-poppins font-semibold rounded-full transition-all duration-200 ease-in-out transform disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClasses = {
    primary: 'bg-primary text-white shadow-sticker-primary hover:shadow-sticker-primary-hover hover:-translate-y-0.5',
    secondary: 'bg-gold text-neutral-text shadow-sticker-secondary hover:shadow-sticker-secondary-hover hover:-translate-y-0.5',
    danger: 'bg-accent-coral text-white',
    ghost: 'bg-transparent text-neutral-muted hover:bg-neutral-card hover:text-neutral-text',
  };
  return <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>{children}</button>;
};

const FormInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label: string; description?: string; showUploader?: boolean; onUpload?: (url: string) => void }>(
  ({ label, description, showUploader, onUpload, ...props }, ref) => (
    <div className="w-full">
      <label className="block text-sm font-medium text-neutral-muted mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          ref={ref}
          className="block w-full px-3 py-2 bg-white border border-neutral-divider rounded-md shadow-sm placeholder-neutral-muted focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          {...props}
        />
        {showUploader && onUpload && (
          <ImageUploader 
            onUploadSuccess={onUpload}
            buttonText="📷"
            className="flex-shrink-0"
          />
        )}
      </div>
      {description && <p className="mt-1 text-xs text-neutral-muted">{description}</p>}
    </div>
  )
);

const FormTextarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; description?: string }>(
  ({ label, description, ...props }, ref) => (
    <div className="w-full">
      <label className="block text-sm font-medium text-neutral-muted mb-1">{label}</label>
      <textarea
        ref={ref}
        rows={5}
        className="block w-full px-3 py-2 bg-white border border-neutral-divider rounded-md shadow-sm placeholder-neutral-muted focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        {...props}
      />
      {description && <p className="mt-1 text-xs text-neutral-muted">{description}</p>}
    </div>
  )
);

const FormSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; children: React.ReactNode }> = ({ label, children, ...props }) => (
    <div className="w-full">
        <label className="block text-sm font-medium text-neutral-muted mb-1">{label}</label>
        <select
            className="block w-full px-3 py-2 bg-white border border-neutral-divider rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            {...props}
        >
            {children}
        </select>
    </div>
);


const FormSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-neutral-card p-6 rounded-lg border border-neutral-divider space-y-4">
    <h3 className="text-xl font-poppins font-semibold text-neutral-dark">{title}</h3>
    <hr className="border-neutral-divider" />
    {children}
  </div>
);

// Editable List Component
interface EditableListProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  onAdd: () => void;
  onRemove: (index: number) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
}
const EditableList = <T,>({ title, items, renderItem, onAdd, onRemove, onReorder }: EditableListProps<T>) => {
  const moveItem = (index: number, direction: 'up' | 'down') => {
    const toIndex = direction === 'up' ? index - 1 : index + 1;
    if (toIndex < 0 || toIndex >= items.length) return;
    onReorder(index, toIndex);
  };

  return (
    <FormSection title={title}>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-neutral-bg p-4 rounded-md border border-neutral-divider relative">
             <div className="absolute top-2 right-2 flex flex-col gap-1">
               <button onClick={() => moveItem(index, 'up')} disabled={index === 0} className="p-1 rounded-full hover:bg-neutral-divider disabled:opacity-30"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></button>
               <button onClick={() => moveItem(index, 'down')} disabled={index === items.length - 1} className="p-1 rounded-full hover:bg-neutral-divider disabled:opacity-30"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
            </div>
            {renderItem(item, index)}
            <div className="text-right mt-2">
              <Button variant="danger" onClick={() => onRemove(index)}>Remove</Button>
            </div>
          </div>
        ))}
      </div>
      <Button variant="secondary" onClick={onAdd} className="mt-4">Add New</Button>
    </FormSection>
  );
};

// Form components for each tab
type ChangeHandler = (path: (string | number)[], value: any) => void;

const HomeEditor: React.FC<{ content: AppContent['home']; commonContent: AppContent['common']; onChange: ChangeHandler }> = ({ content, commonContent, onChange }) => (
  <div className="space-y-6">
    <FormSection title="Hero Section">
      <FormInput label="Headline" value={content.hero.headline} onChange={e => onChange(['home', 'hero', 'headline'], e.target.value)} />
      <FormTextarea label="Subhead" value={content.hero.subhead} onChange={e => onChange(['home', 'hero', 'subhead'], e.target.value)} />
      <FormInput 
        label="Image URL" 
        type="url" 
        value={content.hero.image} 
        onChange={e => onChange(['home', 'hero', 'image'], e.target.value)}
        showUploader={true}
        onUpload={(url) => onChange(['home', 'hero', 'image'], url)}
      />
    </FormSection>

    <EditableList<CTA>
      title="Hero CTAs"
      items={content.hero.ctas}
      onAdd={() => onChange(['home', 'hero', 'ctas'], [...content.hero.ctas, { label: 'New Button', url: '/', variant: 'primary', type: 'link' }])}
      onRemove={(index) => onChange(['home', 'hero', 'ctas'], content.hero.ctas.filter((_, i) => i !== index))}
      onReorder={(from, to) => {
        const newItems = [...content.hero.ctas];
        const [movedItem] = newItems.splice(from, 1);
        newItems.splice(to, 0, movedItem);
        onChange(['home', 'hero', 'ctas'], newItems);
      }}
      renderItem={(item, index) => (
        <div className="space-y-2">
          <FormInput label="Label" value={item.label} onChange={e => onChange(['home', 'hero', 'ctas', index, 'label'], e.target.value)} />
          <FormInput label="URL" value={item.url} onChange={e => onChange(['home', 'hero', 'ctas', index, 'url'], e.target.value)} />
          <FormSelect label="Variant" value={item.variant} onChange={e => onChange(['home', 'hero', 'ctas', index, 'variant'], e.target.value)}>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="dark-hero">Dark Hero</option>
          </FormSelect>
           <FormSelect label="Type" value={item.type} onChange={e => onChange(['home', 'hero', 'ctas', index, 'type'], e.target.value)}>
            <option value="link">Link (internal)</option>
            <option value="a">Anchor (external)</option>
          </FormSelect>
        </div>
      )}
    />

    <FormSection title="Common Content">
        <FormInput label="Universal Header CTA Label" value={commonContent.header_cta_label} onChange={e => onChange(['common', 'header_cta_label'], e.target.value)} />
    </FormSection>

    <EditableList<Feature>
      title="Features"
      items={content.features}
      onAdd={() => onChange(['home', 'features'], [...content.features, { icon: 'NutritionIcon', title: '', benefit: '' }])}
      onRemove={(index) => onChange(['home', 'features'], content.features.filter((_, i) => i !== index))}
      onReorder={(from, to) => {
        const newItems = [...content.features];
        const [movedItem] = newItems.splice(from, 1);
        newItems.splice(to, 0, movedItem);
        onChange(['home', 'features'], newItems);
      }}
      renderItem={(item, index) => (
        <div className="space-y-2">
          <FormSelect label="Icon" value={item.icon as string} onChange={e => onChange(['home', 'features', index, 'icon'], e.target.value)}>
            <option value="NutritionIcon">Nutrition</option>
            <option value="HabitIcon">Habit</option>
            <option value="HealthIcon">Health</option>
          </FormSelect>
          <FormInput label="Title" value={item.title} onChange={e => onChange(['home', 'features', index, 'title'], e.target.value)} />
          <FormTextarea label="Benefit" value={item.benefit} onChange={e => onChange(['home', 'features', index, 'benefit'], e.target.value)} />
        </div>
      )}
    />

    <EditableList<Testimonial>
      title="Testimonials"
      items={content.testimonials}
      onAdd={() => onChange(['home', 'testimonials'], [...content.testimonials, { quote: '', author: '', role: '', avatar: '' }])}
      onRemove={(index) => onChange(['home', 'testimonials'], content.testimonials.filter((_, i) => i !== index))}
       onReorder={(from, to) => {
        const newItems = [...content.testimonials];
        const [movedItem] = newItems.splice(from, 1);
        newItems.splice(to, 0, movedItem);
        onChange(['home', 'testimonials'], newItems);
      }}
      renderItem={(item, index) => (
        <div className="space-y-2">
          <FormTextarea label="Quote" value={item.quote} onChange={e => onChange(['home', 'testimonials', index, 'quote'], e.target.value)} />
          <FormInput label="Author" value={item.author} onChange={e => onChange(['home', 'testimonials', index, 'author'], e.target.value)} />
          <FormInput label="Role" value={item.role} onChange={e => onChange(['home', 'testimonials', index, 'role'], e.target.value)} />
          <FormInput 
            label="Avatar URL" 
            type="url" 
            value={item.avatar} 
            onChange={e => onChange(['home', 'testimonials', index, 'avatar'], e.target.value)}
            showUploader={true}
            onUpload={(url) => onChange(['home', 'testimonials', index, 'avatar'], url)}
          />
        </div>
      )}
    />

     <EditableList<Screenshot>
      title="Screenshots"
      items={content.screenshots}
      onAdd={() => onChange(['home', 'screenshots'], [...content.screenshots, { image: '', alt: '' }])}
      onRemove={(index) => onChange(['home', 'screenshots'], content.screenshots.filter((_, i) => i !== index))}
       onReorder={(from, to) => {
        const newItems = [...content.screenshots];
        const [movedItem] = newItems.splice(from, 1);
        newItems.splice(to, 0, movedItem);
        onChange(['home', 'screenshots'], newItems);
      }}
      renderItem={(item, index) => (
        <div className="space-y-2">
          <FormInput 
            label="Image URL" 
            type="url" 
            value={item.image} 
            onChange={e => onChange(['home', 'screenshots', index, 'image'], e.target.value)}
            showUploader={true}
            onUpload={(url) => onChange(['home', 'screenshots', index, 'image'], url)}
          />
          <FormInput label="Alt Text" value={item.alt} onChange={e => onChange(['home', 'screenshots', index, 'alt'], e.target.value)} />
        </div>
      )}
    />
  </div>
);

const FeaturesEditor: React.FC<{ content: AppContent['features_page'], commonContent: AppContent['common']; onChange: ChangeHandler }> = ({ content, commonContent, onChange }) => (
    <div className="space-y-6">
        <EditableList<FeaturePageSection>
        title="Feature Sections"
        items={content.sections}
        onAdd={() => onChange(['features_page', 'sections'], [...content.sections, { title: '', description: '', screenshot: '' }])}
        onRemove={(index) => onChange(['features_page', 'sections'], content.sections.filter((_, i) => i !== index))}
        onReorder={(from, to) => {
            const newItems = [...content.sections];
            const [movedItem] = newItems.splice(from, 1);
            newItems.splice(to, 0, movedItem);
            onChange(['features_page', 'sections'], newItems);
        }}
        renderItem={(item, index) => (
            <div className="space-y-2">
            <FormInput label="Title" value={item.title} onChange={e => onChange(['features_page', 'sections', index, 'title'], e.target.value)} />
            <FormTextarea label="Description" value={item.description} onChange={e => onChange(['features_page', 'sections', index, 'description'], e.target.value)} />
            <FormInput 
              label="Screenshot URL" 
              type="url" 
              value={item.screenshot} 
              onChange={e => onChange(['features_page', 'sections', index, 'screenshot'], e.target.value)}
              showUploader={true}
              onUpload={(url) => onChange(['features_page', 'sections', index, 'screenshot'], url)}
            />
            </div>
        )}
        />
        <FormSection title="Page CTA">
            <FormInput label="Features Page CTA Label" value={commonContent.features_cta_label} onChange={e => onChange(['common', 'features_cta_label'], e.target.value)} />
        </FormSection>
    </div>
);

const BlogEditor: React.FC<{ content: AppContent['blog']; onChange: ChangeHandler }> = ({ content, onChange }) => {
    const generateSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    const handleTitleChange = (index: number, newTitle: string) => {
        onChange(['blog', 'posts', index, 'title'], newTitle);
        onChange(['blog', 'posts', index, 'slug'], generateSlug(newTitle));
    };
    
    return (
        <EditableList<BlogPost>
        title="Blog Posts"
        items={content.posts}
        onAdd={() => onChange(['blog', 'posts'], [...content.posts, { title: '', slug: '', summary: '', body: '', cover_image: '', tags: [], author: '', published_at: new Date().toISOString().split('T')[0], seo: { title: '', description: '', og_image: '' } }])}
        onRemove={(index) => onChange(['blog', 'posts'], content.posts.filter((_, i) => i !== index))}
         onReorder={(from, to) => {
            const newItems = [...content.posts];
            const [movedItem] = newItems.splice(from, 1);
            newItems.splice(to, 0, movedItem);
            onChange(['blog', 'posts'], newItems);
        }}
        renderItem={(item, index) => (
            <div className="space-y-4">
                <FormInput label="Title" value={item.title} onChange={e => handleTitleChange(index, e.target.value)} />
                <FormInput label="Slug" value={item.slug} onChange={e => onChange(['blog', 'posts', index, 'slug'], e.target.value)} description="Auto-generated from title, but can be overridden." />
                <FormTextarea label="Summary" value={item.summary} onChange={e => onChange(['blog', 'posts', index, 'summary'], e.target.value)} />
                <FormTextarea label="Body (Markdown)" value={item.body} onChange={e => onChange(['blog', 'posts', index, 'body'], e.target.value)} rows={10}/>
                <FormInput 
                  label="Cover Image URL" 
                  type="url" 
                  value={item.cover_image} 
                  onChange={e => onChange(['blog', 'posts', index, 'cover_image'], e.target.value)}
                  showUploader={true}
                  onUpload={(url) => onChange(['blog', 'posts', index, 'cover_image'], url)}
                />
                <FormInput label="Tags (comma separated)" value={item.tags.join(', ')} onChange={e => onChange(['blog', 'posts', index, 'tags'], e.target.value.split(',').map(t => t.trim()))} />
                <FormInput label="Author" value={item.author} onChange={e => onChange(['blog', 'posts', index, 'author'], e.target.value)} />
                <FormInput label="Published Date" type="date" value={item.published_at} onChange={e => onChange(['blog', 'posts', index, 'published_at'], e.target.value)} />
                <div className="p-3 bg-neutral-divider/30 rounded-md space-y-2">
                    <h4 className="font-semibold">SEO Meta Tags</h4>
                    <FormInput label="Meta Title" value={item.seo.title} onChange={e => onChange(['blog', 'posts', index, 'seo', 'title'], e.target.value)} maxLength={60} description={`${item.seo.title.length}/60 chars`} />
                    <FormTextarea label="Meta Description" value={item.seo.description} onChange={e => onChange(['blog', 'posts', index, 'seo', 'description'], e.target.value)} maxLength={160} description={`${item.seo.description.length}/160 chars`}/>
                    <FormInput 
                      label="OpenGraph Image URL" 
                      type="url" 
                      value={item.seo.og_image} 
                      onChange={e => onChange(['blog', 'posts', index, 'seo', 'og_image'], e.target.value)}
                      showUploader={true}
                      onUpload={(url) => onChange(['blog', 'posts', index, 'seo', 'og_image'], url)}
                    />
                </div>
            </div>
        )}
        />
    )
};

const ContactEditor: React.FC<{ content: AppContent['contact']; onChange: ChangeHandler }> = ({ content, onChange }) => (
    <EditableList<FAQ>
      title="FAQs"
      items={content.faqs}
      onAdd={() => onChange(['contact', 'faqs'], [...content.faqs, { q: '', a: '' }])}
      onRemove={(index) => onChange(['contact', 'faqs'], content.faqs.filter((_, i) => i !== index))}
      onReorder={(from, to) => {
        const newItems = [...content.faqs];
        const [movedItem] = newItems.splice(from, 1);
        newItems.splice(to, 0, movedItem);
        onChange(['contact', 'faqs'], newItems);
      }}
      renderItem={(item, index) => (
        <div className="space-y-2">
          <FormInput label="Question" value={item.q} onChange={e => onChange(['contact', 'faqs', index, 'q'], e.target.value)} />
          <FormTextarea label="Answer (Markdown)" value={item.a} onChange={e => onChange(['contact', 'faqs', index, 'a'], e.target.value)} />
        </div>
      )}
    />
);

interface EditorProps {
    activeTab: string;
    content: AppContent;
    onContentChange: (path: (string | number)[], value: any) => void;
}

export default function Editor({ activeTab, content, onContentChange }: EditorProps) {
    const renderActiveEditor = () => {
        switch (activeTab) {
            case 'Home':
                return <HomeEditor content={content.home} commonContent={content.common} onChange={onContentChange} />;
            case 'Features':
                return <FeaturesEditor content={content.features_page} commonContent={content.common} onChange={onContentChange} />;
            case 'Blog':
                return <BlogEditor content={content.blog} onChange={onContentChange} />;
            case 'Contact':
                return <ContactEditor content={content.contact} onChange={onContentChange} />;
            default:
                return <div>Select a tab to start editing.</div>;
        }
    };

    return <div className="p-4 space-y-4">{renderActiveEditor()}</div>;
};





