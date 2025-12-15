import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ItServiceCard from './components/ItServiceCard';
import ROICalculator from '../services-overview/components/ROICalculator';
import Button from '../../components/ui/Button';
import PainPointsSection from './components/PainPointsSection';
import DifferentiatorSection from './components/DifferentiatorSection';
import EmotionalSection from './components/EmotionalSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from '../../components/ui/Footer';

const ServicesIT = () => {
    const [expandedService, setExpandedService] = useState(null);
    const [calculatorService, setCalculatorService] = useState(null);
    const [showStickyCta, setShowStickyCta] = useState(false);

    // Scroll listener for sticky CTA
    useEffect(() => {
        const handleScroll = () => {
            // Show after 30% of viewport height (approx hero section scroll)
            if (window.scrollY > window.innerHeight * 0.3) {
                setShowStickyCta(true);
            } else {
                setShowStickyCta(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const services = [
        {
            id: 'web-dev',
            name: 'Website Development',
            tagline: 'High-Performance Website Development',
            icon: 'Monitor',
            description: `We build custom, high-performance websites using modern frameworks that load faster, rank better on Google, and convert visitors into customers.`,
            features: [
                'Custom React / Next.js Development',
                'SEO-Optimized Website Architecture',
                'CMS & Headless Integrations',
                'Progressive Web Apps (PWA)',
                'Performance & Accessibility Optimization'
            ],
            perfectFor: [
                'Startups', 'Influencers', 'Service Businesses', 'E-commerce Brands'
            ],
            valueHighlights: [
                '⚡ Ultra-Fast Load Speeds',
                '📈 Conversion-Focused Design',
                '🔍 SEO-Ready Structure'
            ],
            isNew: false
        },
        {
            id: 'mobile-app',
            name: 'Custom Mobile App',
            tagline: 'From Idea to App Store — Seamlessly',
            icon: 'Smartphone',
            description: `We design and develop custom Android and iOS mobile applications with modern UI/UX, scalable backend systems, and smooth performance.`,
            features: [
                'React Native / Flutter Development',
                'Native Android & iOS Apps',
                'Push Notifications & User Engagement',
                'Offline Capabilities',
                'Secure Biometric Authentication'
            ],
            weSolve: [
                'No buggy apps',
                'No poor UX',
                'No scalability limits'
            ],
            perfectFor: [
                'Startup Apps', 'Influencer Platforms', 'Booking Apps', 'SaaS Products'
            ],
            isNew: false
        },
        {
            id: 'enterprise-software',
            name: 'Enterprise Software',
            tagline: 'Built for Scale • Secured for Growth',
            icon: 'Server',
            description: `We engineer custom enterprise software, backend systems, APIs, and cloud infrastructure designed to handle growth and complex business logic.`,
            features: [
                'Microservices Architecture',
                'API Development & Integrations',
                'Cloud Migration & Infrastructure',
                'Database Design & Optimization',
                'Security Audits & Compliance'
            ],
            weSolve: [
                'System failures as business grows',
                'Poor integration between tools',
                'Security & compliance risks'
            ],
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
                <title>IT Services - GetFame Tech</title>
                <meta name="description" content="Premium IT services including Website Development, Custom Mobile Apps, and Enterprise Software solutions." />
            </Helmet>
            <div className="min-h-screen bg-background pb-20 lg:pb-0"> {/* Padding bottom for sticky CTA on mobile */}
                <Header />

                {/* Hero Section */}
                <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 lg:px-8 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-cyan-500/10 rounded-full blur-[100px] lg:blur-[150px]"></div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-500 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium mb-6 border border-cyan-500/20 backdrop-blur-sm">
                            <Icon name="Cpu" size={14} className="lg:w-4 lg:h-4" />
                            <span>Enterprise-Grade Technology • Growth-Focused Development</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight flex flex-col gap-2">
                            <span className="font-medium">Building</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-bold">Scalable Digital Products</span>
                            <span className="font-semibold">That Power Real Business Growth</span>
                        </h1>

                        {/* Animated Subheading */}
                        <div className="h-8 mb-6 overflow-hidden">
                            <div className="animate-slide-up-fade text-lg lg:text-2xl font-medium text-muted-foreground">
                                Websites • Mobile Apps • Enterprise Software
                            </div>
                        </div>

                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto line-clamp-3 lg:line-clamp-none opacity-90">
                            We design and develop modern websites, mobile apps, and enterprise software using advanced tools and scalable architecture — built for growth, speed, and security.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center w-full sm:w-auto">
                            <Button
                                variant="default"
                                size="lg"
                                iconName="MessageSquare"
                                iconPosition="left"
                                className="gradient-brand shadow-brand animate-pulse-slow w-full sm:w-auto justify-center"
                            >
                                Get Free Tech Consultation
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                iconName="Layers"
                                iconPosition="left"
                                className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:w-auto justify-center"
                            >
                                View Tech Stack
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Pain Points Section */}
                <PainPointsSection />

                {/* Services Grid */}
                <section className="py-12 lg:py-20 px-4 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {services.map((service) => (
                                <ItServiceCard
                                    key={service.id}
                                    service={service}
                                    isExpanded={expandedService === service.id}
                                    onToggle={handleToggleExpand}
                                    onCalculate={handleOpenCalculator}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Differentiator Section */}
                <DifferentiatorSection />

                {/* Emotional Pain Point Section */}
                <EmotionalSection />

                {/* FAQ Section */}
                <FaqSection />

                {/* Final CTA Section */}
                <FinalCtaSection />

                {/* Footer */}
                <Footer />

                {/* ROI Calculator Modal */}
                {calculatorService && (
                    <ROICalculator
                        service={calculatorService}
                        isOpen={!!calculatorService}
                        onClose={handleCloseCalculator}
                    />
                )}

                {/* Sticky Mobile CTA */}
                <div className={`fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-md border-t border-border z-50 transition-transform duration-300 lg:hidden ${showStickyCta ? 'translate-y-0' : 'translate-y-full'}`}>
                    <Button
                        variant="default"
                        size="lg"
                        className="w-full gradient-brand shadow-lg justify-center"
                    >
                        Get Free Tech Consultation
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ServicesIT;
