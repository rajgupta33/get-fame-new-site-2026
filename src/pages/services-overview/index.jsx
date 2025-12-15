import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ROICalculator from './components/ROICalculator';
import PlatformCertifications from './components/PlatformCertifications';
import ClientTestimonials from './components/ClientTestimonials';
import ServiceComparison from './components/ServiceComparison';

const ServicesOverview = () => {
    const [expandedService, setExpandedService] = useState(null);
    const [calculatorService, setCalculatorService] = useState(null);

    const services = [
        {
            id: 'social-media',
            name: 'Social Media Marketing',
            tagline: 'Build communities that convert',
            icon: 'Share2',
            description: `Transform your social presence into a revenue-generating machine through strategic content creation, community building, and data-driven optimization across all major platforms.`,
            features: [
                'Content Strategy & Calendar',
                'Community Management',
                'Paid Social Campaigns',
                'Influencer Collaborations',
                'Social Commerce Setup',
                'Real-time Analytics'
            ],
            metrics: [
                { value: '340%', label: 'Avg Engagement Boost' },
                { value: '2.8x', label: 'Follower Growth' },
                { value: '185%', label: 'Conversion Rate' }
            ],
            methodology: [
                { title: 'Audit', description: 'Current presence analysis' },
                { title: 'Strategy', description: 'Platform-specific planning' },
                { title: 'Create', description: 'Content production' },
                { title: 'Optimize', description: 'Performance enhancement' }
            ],
            timeline: {
                setup: '2-3 weeks',
                implementation: '4-6 weeks',
                optimization: 'Ongoing'
            },
            tools: ['Meta Business', 'Hootsuite', 'Canva Pro', 'Sprout Social', 'Later', 'Buffer'],
            isNew: false
        },
        {
            id: 'influencer',
            name: 'Influencer Partnerships',
            tagline: 'Authentic voices, measurable results',
            icon: 'Users',
            description: `Connect with the perfect creators for your brand through our vetted network of 10,000+ influencers, with end-to-end campaign management and performance tracking.`,
            features: [
                'Creator Network Access',
                'Campaign Strategy',
                'Contract Management',
                'Content Approval',
                'Performance Tracking',
                'ROI Attribution'
            ],
            metrics: [
                { value: '10K+', label: 'Creator Network' },
                { value: '4.2x', label: 'Avg Campaign ROI' },
                { value: '95%', label: 'Brand Safety Score' }
            ],
            methodology: [
                { title: 'Match', description: 'Creator-brand alignment' },
                { title: 'Plan', description: 'Campaign development' },
                { title: 'Execute', description: 'Content creation' },
                { title: 'Measure', description: 'Impact analysis' }
            ],
            timeline: {
                setup: '3-4 weeks',
                implementation: '6-8 weeks',
                optimization: 'Ongoing'
            },
            tools: ['AspireIQ', 'Grin', 'Upfluence', 'Creator.co', 'Klear', 'HypeAuditor'],
            isNew: true
        },
        {
            id: 'analytics',
            name: 'Performance Analytics',
            tagline: 'Data-driven decisions, guaranteed growth',
            icon: 'BarChart3',
            description: `Unlock actionable insights with custom dashboards, predictive analytics, and attribution modeling that connects every touchpoint to revenue impact.`,
            features: [
                'Custom Dashboards',
                'Attribution Modeling',
                'Predictive Analytics',
                'Automated Reporting',
                'Competitive Intelligence',
                'ROI Tracking'
            ],
            metrics: [
                { value: '95%', label: 'Attribution Accuracy' },
                { value: '3.5x', label: 'Decision Speed' },
                { value: '190%', label: 'ROAS Improvement' }
            ],
            methodology: [
                { title: 'Connect', description: 'Data source integration' },
                { title: 'Model', description: 'Attribution setup' },
                { title: 'Visualize', description: 'Dashboard creation' },
                { title: 'Predict', description: 'Forecasting models' }
            ],
            timeline: {
                setup: '1-2 weeks',
                implementation: '3-4 weeks',
                optimization: 'Ongoing'
            },
            tools: ['Google Analytics 4', 'Mixpanel', 'Amplitude', 'Tableau', 'Looker', 'Triple Whale'],
            isNew: false
        },
        {
            id: 'strategy',
            name: 'Brand Strategy',
            tagline: 'From unknown to unforgettable',
            icon: 'Target',
            description: `Develop a comprehensive brand strategy that positions you uniquely in the market, with messaging frameworks and go-to-market plans that drive sustainable growth.`,
            features: [
                'Brand Positioning',
                'Competitive Analysis',
                'Messaging Framework',
                'Go-to-Market Strategy',
                'Brand Guidelines',
                'Market Research'
            ],
            metrics: [
                { value: '480%', label: 'Brand Awareness Lift' },
                { value: '2.1x', label: 'Market Share Growth' },
                { value: '125%', label: 'Customer LTV' }
            ],
            methodology: [
                { title: 'Research', description: 'Market & competitor analysis' },
                { title: 'Position', description: 'Unique value proposition' },
                { title: 'Develop', description: 'Strategy framework' },
                { title: 'Launch', description: 'Go-to-market execution' }
            ],
            timeline: {
                setup: '4-6 weeks',
                implementation: '8-12 weeks',
                optimization: 'Quarterly reviews'
            },
            tools: ['SEMrush', 'Ahrefs', 'BrandWatch', 'Mention', 'SimilarWeb', 'Typeform'],
            isNew: false
        },
        {
            id: 'content',
            name: 'Content Creation',
            tagline: 'Stories that stop the scroll',
            icon: 'PenTool',
            description: `Professional content production that captures attention and drives action, from viral social videos to conversion-optimized landing pages.`,
            features: [
                'Video Production',
                'Graphic Design',
                'Copywriting',
                'Photography',
                'Animation',
                'Content Calendar'
            ],
            metrics: [
                { value: '310%', label: 'Engagement Rate' },
                { value: '2.5x', label: 'Content Velocity' },
                { value: '220%', label: 'Share Rate' }
            ],
            methodology: [
                { title: 'Brief', description: 'Content requirements' },
                { title: 'Create', description: 'Production process' },
                { title: 'Review', description: 'Quality assurance' },
                { title: 'Distribute', description: 'Multi-channel publishing' }
            ],
            timeline: {
                setup: '2-3 weeks',
                implementation: '4-6 weeks',
                optimization: 'Ongoing'
            },
            tools: ['Adobe Creative Suite', 'Figma', 'Canva Pro', 'Loom', 'ClickUp', 'Notion'],
            isNew: false
        },
        {
            id: 'paid-media',
            name: 'Paid Media Optimization',
            tagline: 'Every dollar working harder',
            icon: 'Zap',
            description: `Maximize your advertising ROI through advanced campaign optimization, creative testing, and conversion rate optimization across all major platforms.`,
            features: [
                'Campaign Setup',
                'Bid Management',
                'Creative Testing',
                'Landing Page Optimization',
                'Audience Targeting',
                'Performance Monitoring'
            ],
            metrics: [
                { value: '390%', label: 'ROAS Average' },
                { value: '45%', label: 'CPA Reduction' },
                { value: '280%', label: 'Conversion Rate' }
            ],
            methodology: [
                { title: 'Setup', description: 'Campaign architecture' },
                { title: 'Launch', description: 'Initial deployment' },
                { title: 'Test', description: 'Creative & audience testing' },
                { title: 'Scale', description: 'Performance optimization' }
            ],
            timeline: {
                setup: '1-2 weeks',
                implementation: '2-4 weeks',
                optimization: 'Ongoing'
            },
            tools: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'Unbounce', 'Optimizely'],
            isNew: false
        }
    ];

    const handleToggleExpand = (serviceId) => {
        setExpandedService(expandedService === serviceId ? null : serviceId);
    };

    const handleOpenCalculator = (service) => {
        setCalculatorService(service);
    };

    const handleCloseCalculator = () => {
        setCalculatorService(null);
    };

    return (
        <>
            <Helmet>
                <title>Services Overview - GetFame Martech | Comprehensive Digital Marketing Solutions</title>
                <meta name="description" content="Explore GetFame's comprehensive martech services including social media marketing, influencer partnerships, performance analytics, brand strategy, content creation, and paid media optimization." />
                <meta name="keywords" content="digital marketing services, martech solutions, social media marketing, influencer marketing, performance analytics, brand strategy" />
            </Helmet>
            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="pt-24 pb-16 px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
                                <Icon name="Sparkles" size={16} />
                                <span>Comprehensive Martech Solutions</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                                Services That
                                <span className="text-gradient block">Architect Fame</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                From viral social campaigns to data-driven performance optimization, our integrated martech services transform brands into market leaders through measurable, scalable growth strategies.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            {[
                                { value: '6', label: 'Core Services', icon: 'Layers' },
                                { value: '500+', label: 'Clients Served', icon: 'Users' },
                                { value: '340%', label: 'Avg ROI Increase', icon: 'TrendingUp' },
                                { value: '95%', label: 'Client Retention', icon: 'Heart' }
                            ]?.map((stat, index) => (
                                <div key={index} className="text-center p-6 bg-surface rounded-xl border border-border shadow-card">
                                    <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <Icon name={stat?.icon} size={20} color="white" />
                                    </div>
                                    <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat?.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                Our Service Universe
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Interactive service modules with live demonstrations, ROI calculators, and detailed methodology frameworks
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services?.map((service) => (
                                <ServiceCard
                                    key={service?.id}
                                    service={service}
                                    isExpanded={expandedService === service?.id}
                                    onToggle={handleToggleExpand}
                                    onCalculate={handleOpenCalculator}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Certifications */}
                <section className="py-16 px-6 lg:px-8 bg-muted/30">
                    <div className="max-w-7xl mx-auto">
                        <PlatformCertifications />
                    </div>
                </section>

                {/* Client Testimonials */}
                <section className="py-16 px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <ClientTestimonials />
                    </div>
                </section>

                {/* Service Comparison Tool */}
                <section className="py-16 px-6 lg:px-8 bg-muted/30">
                    <div className="max-w-7xl mx-auto">
                        <ServiceComparison />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                Ready to Architect Your Fame?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Book a strategy session to discover which services will deliver the biggest impact for your brand. Get a custom roadmap and ROI projections.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    iconName="Calculator"
                                    iconPosition="left"
                                    iconSize={18}
                                    className="border-primary/20 text-primary hover:bg-primary/10"
                                >
                                    Calculate Your ROI
                                </Button>
                                <Button
                                    variant="default"
                                    size="lg"
                                    iconName="Calendar"
                                    iconPosition="left"
                                    iconSize={18}
                                    className="gradient-brand hover:gradient-brand-hover shadow-brand"
                                >
                                    Book Strategy Session
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-6 lg:px-8 border-t border-border">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                                <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
                                    <Icon name="Zap" size={20} color="white" />
                                </div>
                                <div>
                                    <span className="text-xl font-bold text-foreground">GetFame</span>
                                    <span className="text-sm text-muted-foreground ml-2">Martech</span>
                                </div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                © {new Date()?.getFullYear()} GetFame Martech. All rights reserved.
                            </div>
                        </div>
                    </div>
                </footer>

                {/* ROI Calculator Modal */}
                {calculatorService && (
                    <ROICalculator
                        service={calculatorService}
                        isOpen={!!calculatorService}
                        onClose={handleCloseCalculator}
                    />
                )}
            </div>
        </>
    );
};

export default ServicesOverview;