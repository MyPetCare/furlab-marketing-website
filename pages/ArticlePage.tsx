
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { content, siteConfig } from '../constants/content';
import SeoHelper from '../components/SeoHelper';
import NotFoundPage from './NotFoundPage';

const SimpleMarkdownRenderer: React.FC<{ content: string }> = ({ content: textContent }) => {
    const lines = textContent.split('\n');
    return (
        <div className="prose prose-lg lg:prose-xl max-w-none text-neutral-text-muted">
            {lines.map((line, index) => {
                if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl md:text-3xl font-bold text-neutral-text mt-8 mb-4">{line.substring(3)}</h2>;
                }
                if (line.trim() === '') {
                    return null;
                }
                return <p key={index} className="mb-6 leading-relaxed">{line}</p>;
            })}
        </div>
    );
};


const ArticlePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = content.blog.posts.find(p => p.slug === slug);

    if (!post) {
        return <NotFoundPage />;
    }
    
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": post.cover_image,
        "author": {
            "@type": "Organization",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": siteConfig.brandName,
            "logo": {
                "@type": "ImageObject",
                "url": siteConfig.logoUrl
            }
        },
        "datePublished": post.published_at,
        "description": post.summary
    };

    return (
        <>
            <SeoHelper
                title={post.seo.title}
                description={post.seo.description}
                canonicalPath={`/resources/${post.slug}`}
                ogImage={post.seo.og_image}
                schema={articleSchema}
            />
            <div className="relative py-16 bg-neutral-background overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <Link to="/resources" className="block text-base text-center text-brand-indigo font-semibold tracking-wide uppercase">
                                Resources
                            </Link>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-neutral-text sm:text-4xl">
                                {post.title}
                            </span>
                        </h1>
                        <p className="mt-8 text-xl text-neutral-text-muted leading-8 text-center">{post.summary}</p>
                        <div className="text-center mt-4 text-sm text-neutral-text-muted">
                           <span>By {post.author}</span> &bull; <span>{new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                    </div>
                    <div className="mt-6 max-w-prose mx-auto">
                        <img className="w-full rounded-lg" src={post.cover_image} alt={`Cover for ${post.title}`} />
                    </div>
                    <div className="mt-12 mx-auto prose-indigo prose-lg text-gray-500 max-w-prose">
                         <SimpleMarkdownRenderer content={post.body} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticlePage;
