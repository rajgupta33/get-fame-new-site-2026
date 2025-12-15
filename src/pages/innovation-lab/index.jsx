import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import BetaTestingCard from './components/BetaTestingCard';
import TechDemoCard from './components/TechDemoCard';
import ExperimentCard from './components/ExperimentCard';
import TrendPredictionDashboard from './components/TrendPredictionCard';
import PartnershipCard from './components/PartnershipCard';
import FutureInsightCard from './components/FutureInsightCard';
import BetaInterestForm from './components/BetaInterestForm';

const InnovationLab = () => {
    const [activeTab, setActiveTab] = useState('beta-programs');
    const [showBetaForm, setShowBetaForm] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const betaPrograms = [
        {
            id: 1,
            title: "AI Content Optimization",
            icon: "Brain",
            status: "Active",
            participants: 12,
            duration: "3 months",
            description: "Test AI-powered content generation and optimization tools that adapt messaging based on real-time audience engagement patterns and conversion data.",
            features: [
                "Real-time content A/B testing",
                "Automated copy variations",
                "Performance prediction modeling",
                "Cross-platform optimization"
            ],
            requirements: ["$25K+ monthly ad spend", "CRM integration", "Analytics access"],
            successRate: 87,
            avgLift: "+34%"
        },
        {
            id: 2,
            title: "Voice Commerce Attribution",
            icon: "Mic",
            status: "Active",
            participants: 8,
            duration: "4 months",
            description: "Pioneer voice-activated shopping attribution models that track customer journeys from voice search to purchase across multiple touchpoints.",
            features: [
                "Voice search optimization",
                "Audio content tracking",
                "Cross-device attribution",
                "Conversion path analysis"
            ],
            requirements: ["E-commerce platform", "Voice app presence", "Customer data access"],
            successRate: 73,
            avgLift: "+28%"
        },
        {
            id: 3,
            title: "Micro-Influencer Automation",
            icon: "Users",
            status: "Coming Soon",
            participants: 0,
            duration: "6 months",
            description: "Automated micro-influencer discovery, outreach, and campaign management system with authenticity verification and performance tracking.",
            features: [
                "Automated influencer matching",
                "Contract generation",
                "Performance monitoring",
                "Authenticity scoring"
            ],
            requirements: ["Influencer budget", "Brand guidelines", "Content approval process"],
            successRate: 0,
            avgLift: "TBD"
        }
    ];

    const techDemos = [
        {
            id: 1,
            title: "Predictive Audience Modeling",
            category: "AI Analytics",
            icon: "Target",
            readiness: "Production Ready",
            description: "AI-powered system that predicts audience behavior and optimizes targeting before campaigns launch, reducing waste and improving ROI.",
            capabilities: [
                "Behavioral pattern recognition",
                "Lookalike audience generation",
                "Churn prediction modeling",
                "Lifetime value forecasting",
                "Cross-platform audience mapping",
                "Real-time optimization"
            ],
            metrics: {
                accuracy: "94%",
                speed: "2.3s",
                efficiency: "+45%"
            },
            usedBy: 15
        },
        {
            id: 2,
            title: "Cross-Platform Campaign Orchestration",
            category: "Marketing Automation",
            icon: "Zap",
            readiness: "Beta",
            description: "Unified campaign management system that automatically optimizes budget allocation and creative deployment across all marketing channels.",
            capabilities: [
                "Automated budget reallocation",
                "Creative performance tracking",
                "Channel-specific optimization",
                "Real-time bid adjustments",
                "Attribution modeling"
            ],
            metrics: {
                accuracy: "89%",
                speed: "1.8s",
                efficiency: "+38%"
            },
            usedBy: 9
        },
        {
            id: 3,
            title: "AI Content Variation Engine",
            category: "Content Creation",
            icon: "Edit3",
            readiness: "Alpha",
            description: "Generate and test thousands of content variations automatically, learning from performance data to create increasingly effective messaging.",
            capabilities: [
                "Automated copy generation",
                "Visual content adaptation",
                "A/B testing orchestration",
                "Performance learning loops",
                "Brand voice consistency"
            ],
            metrics: {
                accuracy: "82%",
                speed: "0.9s",
                efficiency: "+52%"
            },
            usedBy: 6
        }
    ];

    const experiments = [
        {
            id: 1,
            title: "TikTok Shop Integration Testing",
            platform: "TikTok",
            icon: "ShoppingBag",
            status: "Completed",
            description: "Testing direct product integration within TikTok content to reduce friction in the purchase journey and improve conversion rates.",
            hypothesis: "Reducing steps between discovery and purchase will increase conversion rates by 25% while maintaining engagement quality.",
            variables: ["Product placement timing", "CTA button design", "Checkout flow"],
            metrics: ["Conversion rate", "Cart abandonment", "Engagement rate"],
            duration: "6 weeks",
            sampleSize: "50K users",
            results: {
                conversionRate: "+31%",
                cartAbandonment: "-18%",
                engagementRate: "+12%"
            },
            learnings: true
        },
        {
            id: 2,
            title: "LinkedIn Video Ad Optimization",
            platform: "LinkedIn",
            icon: "Video",
            status: "In Progress",
            description: "Testing optimal video length, thumbnail selection, and CTA placement for B2B lead generation campaigns on LinkedIn.",
            hypothesis: "Shorter videos (15-30s) with professional thumbnails will generate higher quality leads at lower cost per acquisition.",
            variables: ["Video length", "Thumbnail style", "CTA timing", "Audience targeting"],
            metrics: ["Lead quality score", "Cost per lead", "Click-through rate"],
            duration: "8 weeks",
            sampleSize: "25K professionals",
            results: null
        },
        {
            id: 3,
            title: "Instagram Reels Algorithm Testing",
            platform: "Instagram",
            icon: "Film",
            status: "Planning",
            description: "Analyzing how different content elements affect Reels distribution and engagement to optimize organic reach strategies.",
            hypothesis: "Content posted during specific time windows with trending audio will achieve 40% higher organic reach.",
            variables: ["Posting time", "Audio selection", "Hashtag strategy", "Content format"],
            metrics: ["Organic reach", "Engagement rate", "Share rate"],
            duration: "4 weeks",
            sampleSize: "100K impressions",
            results: null
        }
    ];

    const partnerships = [
        {
            id: 1,
            title: "Advanced Attribution Partnership",
            partnerName: "DataTech Solutions",
            partnerLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
            type: "Technology Integration",
            typeIcon: "Cpu",
            status: "Active",
            announcedDate: "Dec 2023",
            description: "Collaborative development of privacy-first attribution models that provide accurate campaign measurement without relying on third-party cookies.",
            benefits: [
                "Enhanced measurement accuracy",
                "Privacy compliance assurance",
                "Cross-platform tracking",
                "Real-time reporting capabilities"
            ],
            focusAreas: ["Attribution Modeling", "Privacy Technology", "Data Analytics"],
            metrics: {
                accuracyImprovement: "+42%",
                privacyCompliance: "100%"
            },
            teamSize: 8,
            duration: "12 months",
            isExclusive: true
        },
        {
            id: 2,
            title: "Emerging Platforms Beta Access",
            partnerName: "SocialNext Platform",
            partnerLogo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
            type: "Platform Partnership",
            typeIcon: "Smartphone",
            status: "Launching",
            announcedDate: "Jan 2024",
            description: "Early access partnership providing GetFame clients with beta testing opportunities on emerging social commerce platforms.",
            benefits: [
                "First-mover advantage",
                "Exclusive feature access",
                "Direct platform support",
                "Co-marketing opportunities"
            ],
            focusAreas: ["Social Commerce", "Beta Testing", "Platform Strategy"],
            metrics: {
                earlyAccess: "90 days",
                exclusiveFeatures: "5+"
            },
            teamSize: 5,
            duration: "6 months",
            isExclusive: false
        },
        {
            id: 3,
            title: "AI Research Collaboration",
            partnerName: "University Innovation Lab",
            partnerLogo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center",
            type: "Research Partnership",
            typeIcon: "BookOpen",
            status: "Planning",
            announcedDate: "Feb 2024",
            description: "Joint research initiative exploring the application of advanced AI models in marketing personalization and customer journey optimization.",
            benefits: [
                "Cutting-edge research access",
                "Academic credibility",
                "Publication opportunities",
                "Talent pipeline development"
            ],
            focusAreas: ["AI Research", "Marketing Science", "Academic Collaboration"],
            metrics: {
                researchPapers: "3+",
                studentInterns: "6"
            },
            teamSize: 12,
            duration: "18 months",
            isExclusive: false
        }
    ];

    const futureInsights = [
        {
            id: 1,
            title: "The Future of Martech: AI-Driven Personalization",
            venue: "MarTech Conference 2024",
            type: "Speaking",
            category: "Thought Leadership",
            icon: "Mic",
            date: "March 15, 2024",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
            description: "Keynote presentation exploring how AI will transform marketing personalization, featuring live demonstrations of predictive audience modeling and real-time content optimization.",
            topics: ["AI Personalization", "Predictive Analytics", "Real-time Optimization", "Privacy-First Marketing"],
            highlights: [
                "Live AI demonstration with real campaign data",
                "Case study: 300% ROI improvement through AI personalization",
                "Framework for implementing AI in existing martech stacks"
            ],
            audience: "500+ attendees",
            isUpcoming: true
        },
        {
            id: 2,
            title: "Privacy-First Attribution: Beyond Cookies",
            venue: "Digital Marketing Institute",
            type: "Whitepaper",
            category: "Research",
            icon: "FileText",
            date: "February 28, 2024",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            description: "Comprehensive research paper detailing new attribution methodologies that maintain measurement accuracy while respecting user privacy and complying with global regulations.",
            topics: ["Attribution Modeling", "Privacy Technology", "GDPR Compliance", "First-Party Data"],
            highlights: [
                "5 new attribution models tested across 50+ campaigns",
                "Privacy compliance framework for global markets",
                "ROI impact analysis of cookieless tracking methods"
            ],
            metrics: {
                downloads: "2.5K+",
                citations: "12"
            },
            downloadUrl: "/whitepapers/privacy-first-attribution.pdf",
            isUpcoming: true
        },
        {
            id: 3,
            title: "Emerging Platforms Strategy Workshop",
            venue: "GetFame Innovation Lab",
            type: "Conference",
            category: "Education",
            icon: "Users",
            date: "January 20, 2024",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
            description: "Interactive workshop teaching marketing professionals how to identify, evaluate, and capitalize on emerging social platforms before they become mainstream.",
            topics: ["Platform Strategy", "Early Adoption", "Risk Assessment", "ROI Forecasting"],
            highlights: [
                "Framework for evaluating new platforms",
                "Case studies from 6 emerging platform launches",
                "Hands-on platform analysis exercises"
            ],
            audience: "50 participants",
            metrics: {
                satisfaction: "4.9/5",
                implementations: "85%"
            }
        }
    ];

    const handleJoinBeta = (program) => {
        setSelectedProgram(program);
        setShowBetaForm(true);
    };

    const handleTryDemo = (demo) => {
        console.log('Demo requested:', demo?.title);
        // In a real app, this would open a demo modal or redirect to demo page
        alert(`Demo request submitted for ${demo?.title}. Our team will contact you within 24 hours.`);
    };

    const tabs = [
        { id: 'beta-programs', label: 'Beta Programs', icon: 'Rocket', count: betaPrograms?.length },
        { id: 'tech-demos', label: 'Tech Demos', icon: 'Zap', count: techDemos?.length },
        { id: 'experiments', label: 'Experiments', icon: 'FlaskConical', count: experiments?.length },
        { id: 'trends', label: 'Trend Predictions', icon: 'TrendingUp', count: null },
        { id: 'partnerships', label: 'Partnerships', icon: 'Handshake', count: partnerships?.length },
        { id: 'insights', label: 'Future Insights', icon: 'Lightbulb', count: futureInsights?.length }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Icon name="Zap" size={16} strokeWidth={2.5} />
                            <span>Innovation Lab</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                            The Future of
                            <span className="text-gradient block">Martech Innovation</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                            Where cutting-edge marketing technology meets real-world results. Join us in pioneering the next generation of digital marketing solutions through experimental campaigns, AI-powered tools, and emerging platform strategies.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Button
                                variant="default"
                                size="lg"
                                iconName="Rocket"
                                iconPosition="left"
                                iconSize={20}
                                onClick={() => setShowBetaForm(true)}
                                className="gradient-brand hover:gradient-brand-hover shadow-brand"
                            >
                                Join Beta Program
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                iconName="Calendar"
                                iconPosition="left"
                                iconSize={20}
                                asChild
                            >
                                <Link to="/contact-strategy-session">Schedule Innovation Call</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="text-center p-6 bg-surface rounded-2xl border border-border shadow-card">
                            <div className="text-3xl font-bold text-primary mb-2">25+</div>
                            <div className="text-sm text-muted-foreground">Active Experiments</div>
                        </div>
                        <div className="text-center p-6 bg-surface rounded-2xl border border-border shadow-card">
                            <div className="text-3xl font-bold text-accent mb-2">12</div>
                            <div className="text-sm text-muted-foreground">Beta Programs</div>
                        </div>
                        <div className="text-center p-6 bg-surface rounded-2xl border border-border shadow-card">
                            <div className="text-3xl font-bold text-success mb-2">89%</div>
                            <div className="text-sm text-muted-foreground">Success Rate</div>
                        </div>
                        <div className="text-center p-6 bg-surface rounded-2xl border border-border shadow-card">
                            <div className="text-3xl font-bold text-warning mb-2">6</div>
                            <div className="text-sm text-muted-foreground">Platform Partners</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Navigation Tabs */}
            <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center space-x-1 overflow-x-auto py-4">
                        {tabs?.map((tab) => (
                            <button
                                key={tab?.id}
                                onClick={() => setActiveTab(tab?.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeTab === tab?.id
                                    ? 'bg-primary text-primary-foreground shadow-brand'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                            >
                                <Icon name={tab?.icon} size={16} strokeWidth={2} />
                                <span>{tab?.label}</span>
                                {tab?.count && (
                                    <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === tab?.id
                                        ? 'bg-primary-foreground/20 text-primary-foreground'
                                        : 'bg-muted text-muted-foreground'
                                        }`}>
                                        {tab?.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            {/* Content Sections */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Beta Programs */}
                    {activeTab === 'beta-programs' && (
                        <div>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-4">Beta Testing Programs</h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    Join select clients in testing cutting-edge marketing technologies before they become industry standard. Limited spots available for qualified participants.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                                {betaPrograms?.map((program) => (
                                    <BetaTestingCard
                                        key={program?.id}
                                        program={program}
                                        onJoinBeta={handleJoinBeta}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tech Demos */}
                    {activeTab === 'tech-demos' && (
                        <div>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-4">Interactive Technology Demonstrations</h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    Experience our latest AI-powered marketing tools and automation systems through live, interactive demonstrations with real campaign data.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                                {techDemos?.map((demo) => (
                                    <TechDemoCard
                                        key={demo?.id}
                                        demo={demo}
                                        onTryDemo={handleTryDemo}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Experiments */}
                    {activeTab === 'experiments' && (
                        <div>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-4">Experimental Campaigns</h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    Transparent insights from our ongoing experiments across emerging platforms, new content formats, and innovative campaign strategies.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {experiments?.map((experiment) => (
                                    <ExperimentCard
                                        key={experiment?.id}
                                        experiment={experiment}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Trend Predictions */}
                    {activeTab === 'trends' && (
                        <div>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-4">AI-Powered Trend Predictions</h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    Our proprietary analysis of emerging marketing trends, platform changes, and consumer behavior shifts with strategic implications for your campaigns.
                                </p>
                            </div>
                            <TrendPredictionDashboard />
                        </div>
                    )}

                    {/* Partnerships */}
                    {activeTab === 'partnerships' && (
                        <div>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-4">Strategic Partnerships</h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    Collaborative initiatives with technology vendors, platform partners, and research institutions that drive innovation in marketing technology.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {partnerships?.map((partnership) => (
                                    <PartnershipCard
                                        key={partnership?.id}
                                        partnership={partnership}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Future Insights */}
                    {activeTab === 'insights' && (
                        <div>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-4">Future of Martech Insights</h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    Thought leadership content, speaking engagements, and research publications that establish GetFame's expertise in emerging marketing trends.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                                {futureInsights?.map((insight) => (
                                    <FutureInsightCard
                                        key={insight?.id}
                                        insight={insight}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center shadow-brand mx-auto mb-6">
                        <Icon name="Rocket" size={32} color="white" strokeWidth={2} />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Ready to Pioneer the Future?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Join our innovation community and get early access to cutting-edge marketing technologies that will define the industry's future. Limited spots available for qualified partners.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button
                            variant="default"
                            size="lg"
                            iconName="Users"
                            iconPosition="left"
                            iconSize={20}
                            onClick={() => setShowBetaForm(true)}
                            className="gradient-brand hover:gradient-brand-hover shadow-brand"
                        >
                            Apply for Beta Access
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            iconName="MessageCircle"
                            iconPosition="left"
                            iconSize={20}
                            asChild
                        >
                            <Link to="/contact-strategy-session">Discuss Innovation Opportunities</Link>
                        </Button>
                    </div>
                </div>
            </section>
            {/* Beta Interest Form Modal */}
            <BetaInterestForm
                isOpen={showBetaForm}
                onClose={() => {
                    setShowBetaForm(false);
                    setSelectedProgram(null);
                }}
                selectedProgram={selectedProgram}
            />
            {/* Footer */}
            <footer className="bg-foreground text-background py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shadow-brand">
                                    <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold tracking-tight">GetFame</span>
                                    <span className="text-xs text-background/70 font-medium -mt-1">Martech</span>
                                </div>
                            </div>
                            <p className="text-background/70 mb-4 leading-relaxed">
                                Pioneering the future of marketing technology through innovation, experimentation, and strategic partnerships.
                            </p>
                            <div className="flex items-center space-x-4">
                                <Icon name="Mail" size={16} className="text-background/70" />
                                <span className="text-sm text-background/70">innovation@getfame.com</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Innovation</h4>
                            <ul className="space-y-2 text-sm text-background/70">
                                <li><Link to="/innovation-lab" className="hover:text-background transition-colors">Beta Programs</Link></li>
                                <li><Link to="/innovation-lab" className="hover:text-background transition-colors">Tech Demos</Link></li>
                                <li><Link to="/innovation-lab" className="hover:text-background transition-colors">Research</Link></li>
                                <li><Link to="/innovation-lab" className="hover:text-background transition-colors">Partnerships</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Connect</h4>
                            <ul className="space-y-2 text-sm text-background/70">
                                <li><Link to="/homepage" className="hover:text-background transition-colors">Home</Link></li>
                                <li><Link to="/services-overview" className="hover:text-background transition-colors">Services</Link></li>
                                <li><Link to="/contact-strategy-session" className="hover:text-background transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-background/20 mt-8 pt-8 text-center">
                        <p className="text-sm text-background/70">
                            © {new Date()?.getFullYear()} GetFame Martech. All rights reserved. | Innovating the future of marketing technology.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default InnovationLab;