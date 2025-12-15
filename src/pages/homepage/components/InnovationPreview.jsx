import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const InnovationPreview = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const innovations = [
        {
            title: "AI-Powered Content Optimization",
            description: "Machine learning algorithms that analyze performance data to automatically optimize content for maximum engagement and conversion.",
            status: "Beta Testing",
            impact: "+67% engagement improvement",
            icon: "Brain",
            color: "from-purple-500 to-indigo-500",
            features: ["Real-time A/B testing", "Predictive analytics", "Auto-optimization"]
        },
        {
            title: "Cross-Platform Attribution",
            description: "Advanced tracking system that provides complete customer journey visibility across all touchpoints and platforms.",
            status: "Live",
            impact: "94% attribution accuracy",
            icon: "GitBranch",
            color: "from-blue-500 to-cyan-500",
            features: ["Multi-touch attribution", "Privacy-compliant tracking", "Real-time reporting"]
        },
        {
            title: "Viral Prediction Engine",
            description: "Proprietary algorithm that predicts content virality potential before publication, optimizing for maximum organic reach.",
            status: "Coming Soon",
            impact: "3x viral content rate",
            icon: "Zap",
            color: "from-pink-500 to-rose-500",
            features: ["Virality scoring", "Trend analysis", "Optimal timing"]
        },
        {
            title: "Influencer Matching AI",
            description: "Smart matching system that identifies the perfect influencer partnerships based on audience overlap and engagement patterns.",
            status: "Beta Testing",
            impact: "+180% campaign ROI",
            icon: "Users",
            color: "from-emerald-500 to-teal-500",
            features: ["Audience analysis", "Performance prediction", "Automated outreach"]
        }
    ];

    const upcomingFeatures = [
        {
            name: "Voice Commerce Integration",
            description: "Optimize campaigns for voice search and smart speaker commerce",
            timeline: "Q2 2025"
        },
        {
            name: "AR/VR Campaign Tools",
            description: "Create immersive brand experiences with augmented reality",
            timeline: "Q3 2025"
        },
        {
            name: "Blockchain Attribution",
            description: "Transparent, decentralized campaign performance tracking",
            timeline: "Q4 2025"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                        <Icon name="Zap" size={16} className="mr-2" />
                        Innovation Lab
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        The Future of <span className="text-gradient">Martech</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Cutting-edge technologies and experimental features that give our clients
                        a competitive advantage in the rapidly evolving digital landscape.
                    </p>
                </div>

                {/* Main Innovation Showcase */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Feature List */}
                    <div className="space-y-4">
                        {innovations?.map((innovation, index) => (
                            <div
                                key={innovation?.title}
                                className={`relative cursor-pointer transition-all duration-300 ${activeFeature === index ? 'scale-105' : 'hover:scale-102'
                                    }`}
                                onClick={() => setActiveFeature(index)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 rounded-2xl blur-xl ${activeFeature === index ? 'opacity-20' : 'group-hover:opacity-10'
                                    }`}
                                    style={{ background: `linear-gradient(135deg, ${innovation?.color?.split(' ')?.[0]?.replace('from-', '')}, ${innovation?.color?.split(' ')?.[2]?.replace('to-', '')})` }} />

                                <div className={`relative bg-surface border rounded-2xl p-6 transition-all duration-300 ${activeFeature === index
                                        ? 'border-primary shadow-brand'
                                        : 'border-border hover:border-primary/30'
                                    }`}>
                                    <div className="flex items-start space-x-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${innovation?.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                                            <Icon name={innovation?.icon} size={24} color="white" />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg font-bold text-foreground">
                                                    {innovation?.title}
                                                </h3>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${innovation?.status === 'Live' ? 'bg-success/10 text-success'
                                                        : innovation?.status === 'Beta Testing' ? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
                                                    }`}>
                                                    {innovation?.status}
                                                </span>
                                            </div>

                                            <p className="text-muted-foreground text-sm mb-3">
                                                {innovation?.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <span className="text-primary font-semibold text-sm">
                                                    {innovation?.impact}
                                                </span>
                                                {activeFeature === index && (
                                                    <Icon name="ChevronRight" size={16} className="text-primary" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active Feature Details */}
                    <div className="lg:sticky lg:top-8">
                        <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-floating">
                            <div className="mb-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${innovations?.[activeFeature]?.color} flex items-center justify-center shadow-lg mb-4`}>
                                    <Icon name={innovations?.[activeFeature]?.icon} size={32} color="white" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    {innovations?.[activeFeature]?.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {innovations?.[activeFeature]?.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <h4 className="font-semibold text-foreground">Key Features:</h4>
                                <div className="space-y-2">
                                    {innovations?.[activeFeature]?.features?.map((feature, index) => (
                                        <div key={feature} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 mb-6">
                                <div className="flex items-center space-x-3 mb-2">
                                    <Icon name="TrendingUp" size={20} className="text-success" />
                                    <span className="font-semibold text-foreground">Performance Impact</span>
                                </div>
                                <div className="text-2xl font-bold text-primary">
                                    {innovations?.[activeFeature]?.impact}
                                </div>
                            </div>

                            <Link to="/innovation-lab">
                                <Button
                                    variant="default"
                                    iconName="ArrowRight"
                                    iconPosition="right"
                                    className="gradient-brand hover:gradient-brand-hover text-white w-full"
                                >
                                    Explore Innovation Lab
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Upcoming Features */}
                <div className="bg-surface/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                            Coming Soon
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Exciting new features in development that will further revolutionize
                            how brands approach digital marketing and customer engagement.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {upcomingFeatures?.map((feature, index) => (
                            <div
                                key={feature?.name}
                                className="bg-background/50 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-muted to-border rounded-lg flex items-center justify-center">
                                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                                    </div>
                                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                                        {feature?.timeline}
                                    </span>
                                </div>

                                <h4 className="font-bold text-foreground mb-2">
                                    {feature?.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {feature?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Beta Access CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center space-x-4 bg-accent/10 border border-accent/20 rounded-full px-6 py-3 mb-6">
                        <Icon name="Zap" size={20} className="text-accent" />
                        <span className="text-accent font-semibold">
                            Get early access to beta features
                        </span>
                    </div>
                    <Link to="/innovation-lab">
                        <Button
                            variant="outline"
                            size="lg"
                            iconName="Rocket"
                            iconPosition="left"
                            className="border-accent/20 text-accent hover:bg-accent/10 px-8 py-4"
                        >
                            Join Innovation Program
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default InnovationPreview;