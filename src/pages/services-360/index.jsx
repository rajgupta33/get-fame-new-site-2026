import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import Why360Section from './components/Why360Section';
import ServicesOverview from './components/ServicesOverview';
import MarketingServiceSection from './components/MarketingServiceSection';
import CenterCtaSection from './components/CenterCtaSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import StickyServiceNav from './components/StickyServiceNav';
import Footer from '../../components/ui/Footer';
import Button from '../../components/ui/Button';

const Services360 = () => {
    const [showStickyCta, setShowStickyCta] = useState(false);

    // Scroll listener for sticky CTA
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.3) {
                setShowStickyCta(true);
            } else {
                setShowStickyCta(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Handle scroll position on initial load if hash is present
        if (window.location.hash) {
            setTimeout(() => {
                const id = window.location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const serviceSections = [
        {
            id: "seo",
            badge: "Primary Focus",
            title: "AI-Driven SEO Services That Rank, Convert & Sustain",
            content: "We don’t do outdated SEO. Our AI-powered SEO strategies combine technical optimization, content intelligence, search intent mapping, and continuous performance tracking to deliver long-term rankings and consistent traffic growth.",
            features: [
                "Technical SEO & site optimization",
                "AI-based keyword & intent research",
                "Content optimization & internal linking",
                "On-page & off-page SEO",
                "Local SEO & GMB optimization"
            ],
            aiAdvantage: [
                "Keyword clustering",
                "Content gap analysis",
                "SERP behavior tracking",
                "Search intent prediction"
            ]
        },
        {
            id: "social-media",
            title: "Social Media Marketing That Builds Influence & Demand",
            content: "We don’t just post content. We build data-backed social media strategies designed to increase reach, engagement, brand recall, and conversions across platforms.",
            features: [
                "AI-assisted content planning",
                "Reels & short-form growth strategy",
                "Audience engagement systems",
                "Brand voice & consistency",
                "Influencer & collaboration strategy"
            ],
            platforms: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube"],
            aiAdvantage: [
                "Content performance prediction",
                "Trend identification",
                "Caption & hook optimization"
            ]
        },
        {
            id: "paid-ads",
            title: "Performance Marketing & Paid Ads That Scale Profitably",
            content: "Our paid advertising strategies focus on data, creatives, funnels, and conversion optimization — not just impressions. We help brands scale leads, sales, and ROAS across platforms.",
            features: [
                "Funnel-based ad strategy",
                "Creative testing using AI insights",
                "Audience segmentation",
                "Landing page alignment"
            ],
            platforms: ["Google Ads", "Meta (Facebook & Instagram)", "YouTube Ads", "LinkedIn Ads"],
            aiAdvantage: [
                "Ad creative testing",
                "Budget optimization",
                "Performance forecasting"
            ]
        },
        {
            id: "brand-strategy",
            title: "Brand Strategy That Builds Authority & Trust",
            content: "We help brands define clear positioning, messaging, and identity so every marketing effort feels consistent, premium, and memorable.",
            features: [
                "Brand messaging & tone",
                "Visual & content alignment",
                "Market & competitor analysis"
            ]
        },
        {
            id: "lead-generation",
            title: "Lead & Demand Generation Systems",
            content: "We design full-funnel lead generation systems that attract, nurture, and convert high-intent audiences into customers.",
            features: [
                "Funnel strategy",
                "Landing pages",
                "Lead magnets",
                "CRM & automation"
            ]
        },
        {
            id: "content",
            title: "Content Creation That Converts Attention Into Action",
            content: "From reels to ads to long-form content, we create high-quality content optimised for platforms, algorithms, and human psychology.",
            features: [
                "Short-form video (Reels/Shorts)",
                "Ad creatives",
                "Long-form content (Blogs/Articles)",
                "Platform-specific optimization"
            ]
        },
        {
            id: "local-marketing",
            title: "Local & Platform-Specific Marketing",
            content: "Perfect for restaurants, cafes, clinics, and local brands needing hyper-local visibility.",
            features: [
                "Google My Business (GMB) Optimization",
                "Zomato & Swiggy Marketing",
                "Local citation building",
                "Hyper-local ad targeting"
            ]
        },
        {
            id: "ecommerce",
            title: "E-Commerce Marketing That Drives Sales",
            content: "Specialized strategies for online stores to maximize transaction value and repeat purchases.",
            features: [
                "Product SEO",
                "Shopping Ads & Performance Max",
                "Conversion rate optimization (CRO)",
                "Marketplace strategy (Amazon/Flipkart)"
            ]
        },
        {
            id: "reviews",
            title: "Online Reviews & Reputation Growth",
            content: "We help brands improve ratings, reviews, and trust signals across Google and platforms to build social proof.",
            features: [
                "Review generation campaigns",
                "Negative feedback management",
                "Trust signal enhancement",
                "Reputation monitoring"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>360° Digital Marketing - GetFame Martech</title>
                <meta name="description" content="Integrated 360-degree digital marketing solutions tailored for growth. SEO, Social Media, Paid Ads, and Brand Strategy working in unison." />
            </Helmet>
            <div className="min-h-screen bg-background pb-20 lg:pb-0">
                <Header />

                {/* Sticky Service Navigation (Mobile) */}
                <StickyServiceNav />

                <HeroSection />

                <Why360Section />

                <ServicesOverview />

                {/* Primary Services with increased spacing */}
                <div className="flex flex-col gap-8 lg:gap-0">
                    {serviceSections.slice(0, 3).map((service, index) => (
                        <MarketingServiceSection
                            key={service.id}
                            {...service}
                            isEven={index % 2 !== 0}
                        />
                    ))}
                </div>

                {/* Mid-Page CTA */}
                <CenterCtaSection />

                {/* Remaining Services with increased spacing */}
                <div className="flex flex-col gap-8 lg:gap-0">
                    {serviceSections.slice(3).map((service, index) => (
                        <MarketingServiceSection
                            key={service.id}
                            {...service}
                            isEven={(index + 3) % 2 !== 0}
                        />
                    ))}
                </div>

                <div className="mt-12 lg:mt-0">
                    <FaqSection />
                </div>

                <FinalCtaSection />

                {/* Footer */}
                <Footer />

                {/* Sticky Mobile CTA */}
                <div className={`fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-md border-t border-border z-50 transition-transform duration-300 lg:hidden ${showStickyCta ? 'translate-y-0' : 'translate-y-full'}`}>
                    <Button
                        variant="default"
                        size="lg"
                        className="w-full gradient-brand shadow-lg justify-center"
                    >
                        Get Free Growth Audit
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Services360;
