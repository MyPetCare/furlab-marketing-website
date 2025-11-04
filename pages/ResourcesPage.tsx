
import React from 'react';
import { Link } from 'react-router-dom';
import SeoHelper from '../components/SeoHelper';
import { content, siteConfig } from '../constants/content';
import type { BlogPost } from '../types';

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.cover_image} alt="" />
            </div>
            <div className="flex-1 bg-neutral-background p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <div className="flex space-x-2">
                        {post.tags.map(tag => (
                            <p key={tag} className="text-sm font-medium text-brand-indigo capitalize">
                                {tag}
                            </p>
                        ))}
                    </div>
                    <Link to={`/resources/${post.slug}`} className="block mt-2">
                        <p className="text-xl font-semibold text-neutral-text">{post.title}</p>
                        <p className="mt-3 text-base text-neutral-text-muted">{post.summary}</p>
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <span className="sr-only">{post.author}</span>
                        <div className="h-10 w-10 rounded-full bg-neutral-section-bg flex items-center justify-center font-bold text-brand-indigo">
                            F
                        </div>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-neutral-text">{post.author}</p>
                        <div className="flex space-x-1 text-sm text-neutral-text-muted">
                            <time dateTime={post.published_at}>{new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const ResourcesPage: React.FC = () => {
    const pageTitle = `Pet Wellness Resources | ${siteConfig.brandName} Blog`;
    const pageDescription = `Explore articles about pet health, nutrition, exercise, and mental well-being from the ${siteConfig.brandName} team. Find tips on topics like "how to calm anxious dogs" and "best vitamins for senior cats."`;

    return (
        <>
            <SeoHelper
                title={pageTitle}
                description={pageDescription}
                canonicalPath="/resources"
            />
            <div className="relative bg-neutral-section-bg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-neutral-background h-1/3 sm:h-2/3" />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl tracking-tight font-extrabold text-neutral-text sm:text-4xl">From the Furlab Blog</h1>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-neutral-text-muted sm:mt-4">
                            Expert advice and heartfelt stories to help you build a happier, healthier life with your pet.
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {content.blog.posts.map((post) => (
                           <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResourcesPage;
