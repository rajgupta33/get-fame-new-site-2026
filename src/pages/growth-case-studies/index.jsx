
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Footer from '../../components/ui/Footer';

const CaseStudyCard = ({ title, category, metric, description, image }) => (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
        <div className="aspect-video w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
        </div>
        <div className="relative z-20 p-6 -mt-20">
            <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md mb-3">
                {category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold text-gradient">{metric}</span>
                <span className="text-sm text-muted-foreground">growth</span>
            </div>
            <p className="text-muted-foreground mb-6 line-clamp-2">
                {description}
            </p>
            <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right" className="w-full group-hover:bg-primary/10">
                Read Case Study
            </Button>
        </div>
    </div>
);

const BlogCard = ({ title, category, date, excerpt, image }) => (
    <div className="group flex flex-col h-full overflow-hidden rounded-xl border border-white/10 bg-card/50 hover:bg-card/80 transition-colors">
        <div className="aspect-[1.5] overflow-hidden">
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
        <div className="flex flex-col flex-grow p-6">
            <div className="flex items-center space-x-4 mb-4 text-xs text-muted-foreground">
                <span className="text-primary font-medium">{category}</span>
                <span>•</span>
                <span>{date}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                {excerpt}
            </p>
            <div className="flex items-center text-sm font-medium text-primary">
                Read Article <Icon name="ArrowRight" size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
            </div>
        </div>
    </div>
);

const GrowthCaseStudies = () => {
    const caseStudies = [
        {
            title: "Scaling SaaS to 10M",
            category: "B2B Marketing",
            metric: "+450%",
            description: "How we helped a fintech startup dominate their niche through targeted LinkedIn campaigns and content strategy.",
            image: "/images/case-saas.jpg"
        },
        {
            title: "Fashion Brand Virality",
            category: "Influencer Growth",
            metric: "2.1M",
            description: "Orchestrating a TikTok takeover with 50 micro-influencers that generated millions of organic views in one week.",
            image: "/images/case-fashion.jpg"
        },
        {
            title: "E-commerce Optimization",
            category: "IT Services",
            metric: "3.5x",
            description: "Rebuilding a legacy platform to Next.js, improving site speed by 400% and tripling conversion rates.",
            image: "/images/case-ecom.jpg"
        }
    ];

    const blogs = [
        {
            title: "The Future of AI in Digital Marketing",
            category: "Trends",
            date: "Dec 12, 2024",
            excerpt: "Artificial Intelligence isn't just a buzzword using it to personalize customer journeys at scale is the new competitive advantage.",
            image: "/images/blog-ai.jpg"
        },
        {
            title: "Why Micro-Influencers Drive Better ROI",
            category: "Strategy",
            date: "Dec 08, 2024",
            excerpt: "Engagement rates plummet as follower counts rise. Here's why smart brands are pivoting to smaller, niche creators.",
            image: "/images/blog-influencer.jpg"
        },
        {
            title: "Web Vitals: The SEO Killer",
            category: "Technical",
            date: "Nov 28, 2024",
            excerpt: "Google's latest update punishes slow sites harder than ever. A deep dive into Core Web Vitals and how to optimize them.",
            image: "/images/blog-seo.jpg"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Growth Case Studies & Insights - GetFame</title>
                <meta name="description" content="Real results from our client partners and the latest insights in digital growth." />
            </Helmet>
            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20 backdrop-blur-sm">
                                <Icon name="BarChart" size={16} />
                                <span>Proven Results</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8">
                                We Don't Guess. <br />
                                <span className="text-gradient">We Grow.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Explore how we've helped ambitious brands shatter their ceilings. Plus, deep dives into the strategies that are working right now.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Case Studies Section */}
                <section className="py-20 px-6 lg:px-8 bg-black/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4">Case Studies</h2>
                                <p className="text-muted-foreground">Real experiments. Real data. Real growth.</p>
                            </div>
                            <Button variant="ghost" className="hidden md:flex">
                                View All Cases <Icon name="ArrowRight" className="ml-2" />
                            </Button>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {caseStudies.map((study, idx) => (
                                <CaseStudyCard key={idx} {...study} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Section */}
                <section className="py-20 px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center space-x-2 mb-2 text-primary font-medium uppercase tracking-wider text-sm">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            <span>Intelligence</span>
                        </div>
                        <h2 className="text-4xl font-bold text-foreground mb-16">Latest Insights</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {blogs.map((blog, idx) => (
                                <BlogCard key={idx} {...blog} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default GrowthCaseStudies;
