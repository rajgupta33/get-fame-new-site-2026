
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Footer from '../../components/ui/Footer';

const CaseStudyCard = ({ title, category, metric, description, image, link }) => (
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
            <Button
                asChild={!!link}
                variant="outline"
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="w-full group-hover:bg-primary/10"
            >
                {link ? (
                    <Link to={link}>Read Case Study</Link>
                ) : (
                    "Read Case Study"
                )}
            </Button>
        </div>
    </div>
);

const BlogCard = ({ title, category, date, excerpt, image, link }) => (
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
                <Link to={link || '#'}>{title}</Link>
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                {excerpt}
            </p>
            <div className="flex items-center text-sm font-medium text-primary">
                <Link to={link || '#'} className="flex items-center">
                    Read Article <Icon name="ArrowRight" size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    </div>
);

const GrowthCaseStudies = () => {
    const caseStudies = [
        {
            title: "Starbucks: Billion-Dollar Experience",
            category: "Brand Growth",
            metric: "40,000+",
            description: "How Starbucks turned coffee into a global lifestyle brand. An in-depth look at their origin, failures, and bounce-back strategy.",
            image: "/images/starbucks-case-study.png",
            link: "/growth-case-studies/starbucks-billion-dollar-experience"
        },
        {
            title: "Airbnb: Community-Led Growth",
            category: "Community Growth",
            metric: "190+",
            description: "From air mattresses to a global brand. How Airbnb used community, trust, and storytelling to disrupt the travel industry.",
            image: "/images/airbnb-case.png",
            link: "/growth-case-studies/airbnb-community-led-growth"
        },
        {
            title: "Canva: SEO & Product Growth",
            category: "SaaS Growth",
            metric: "150M+",
            description: "The free-tool SEO strategy that acquired 150M+ users without aggressive ads. A blueprint for product-led growth.",
            image: "/images/canva-case-study.png",
            link: "/growth-case-studies/canva-seo-product-growth"
        }
    ];

    const blogs = [
        {
            title: "Why SEO Is a Long-Term Asset, Not an Expense",
            category: "Strategy",
            date: "Dec 17, 2024",
            excerpt: "Is SEO a cost or an investment? Discover why smart businesses treat SEO as a compounding asset that builds wealth.",
            image: "/images/blog-seo-asset.png",
            link: "/insights/seo-asset-strategy"
        },
        {
            title: "Why Most Businesses Lose Money on Facebook & Google Ads",
            category: "PPC",
            date: "Dec 15, 2024",
            excerpt: "Burning budget on ads with no ROI? Learn the top reasons businesses in competitive markets fail at PPC and how to plug the leaks.",
            image: "/images/blog-ads-roi.png",
            link: "/insights/ads-roi-fix"
        },
        {
            title: "The Science Behind Premium Pricing",
            category: "Psychology",
            date: "Dec 10, 2024",
            excerpt: "Frightened to raise your prices? Discover the psychology of premium pricing and why clients often equate higher cost with higher value.",
            image: "/images/blog-premium-pricing.png",
            link: "/insights/premium-pricing-psychology"
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
