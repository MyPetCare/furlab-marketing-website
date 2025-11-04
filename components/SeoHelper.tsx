
import React, { useEffect } from 'react';
import { siteConfig } from '../constants/content';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  schema?: object;
}

const SeoHelper: React.FC<SeoProps> = ({ title, description, canonicalPath, ogImage, schema }) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setProperty = (property: string, content: string) => {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    setMeta('description', description);
    
    // Open Graph
    setProperty('og:title', title);
    setProperty('og:description', description);
    setProperty('og:type', 'website');
    if(ogImage) setProperty('og:image', ogImage);
    if(canonicalPath) setProperty('og:url', `${siteConfig.siteUrl}/#${canonicalPath}`);

    // Canonical link
    const canonicalUrl = `${siteConfig.siteUrl}/#${canonicalPath || '/'}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);


    // JSON-LD Schema
    const oldSchema = document.getElementById('json-ld-schema');
    if (oldSchema) {
      oldSchema.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById('json-ld-schema');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, canonicalPath, ogImage, schema]);

  return null;
};

export default SeoHelper;

