import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TrendPredictionDashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const trendData = [
        {
            id: 1,
            title: "AI-Generated Video Content",
            category: "Content Creation",
            confidence: 92,
            impact: "High",
            timeline: "Q2 2024",
            description: "AI tools will enable brands to create personalized video content at scale, reducing production costs by 60% while increasing engagement rates.",
            implications: [
                "Reduced video production costs",
                "Personalized content at scale",
                "New creative workflow requirements",
                "Quality control challenges"
            ],
            platforms: ["TikTok", "Instagram", "YouTube"],
            icon: "Video",
            trend: "up"
        },
        {
            id: 2,
            title: "Voice Commerce Integration",
            category: "E-commerce",
            confidence: 78,
            impact: "Medium",
            timeline: "Q3 2024",
            description: "Voice-activated shopping will become mainstream across social platforms, requiring new attribution models and conversion tracking methods.",
            implications: [
                "New conversion tracking needs",
                "Voice SEO optimization",
                "Audio content strategy",
                "Privacy compliance updates"
            ],
            platforms: ["Instagram", "Facebook", "Snapchat"],
            icon: "Mic",
            trend: "up"
        },
        {
            id: 3,
            title: "Micro-Influencer Automation",
            category: "Influencer Marketing",
            confidence: 85,
            impact: "High",
            timeline: "Q1 2024",
            description: "Automated matching and campaign management for micro-influencers will scale partnership programs while maintaining authenticity.",
            implications: [
                "Scalable influencer programs",
                "Automated performance tracking",
                "Authenticity verification needs",
                "Contract automation"
            ],
            platforms: ["Instagram", "TikTok", "YouTube"],
            icon: "Users",
            trend: "up"
        },
        {
            id: 4,
            title: "Privacy-First Attribution",
            category: "Analytics",
            confidence: 96,
            impact: "Critical",
            timeline: "Q1 2024",
            description: "New attribution models will emerge to track campaign performance without relying on third-party cookies or invasive tracking.",
            implications: [
                "First-party data emphasis",
                "New measurement frameworks",
                "Consent management integration",
                "Cross-platform tracking challenges"
            ],
            platforms: ["All Platforms"],
            icon: "Shield",
            trend: "up"
        },
        {
            id: 5,
            title: "AR Shopping Experiences",
            category: "E-commerce",
            confidence: 73,
            impact: "Medium",
            timeline: "Q4 2024",
            description: "Augmented reality will transform product discovery and purchase decisions, particularly in fashion and home goods categories.",
            implications: [
                "3D product modeling needs",
                "AR development skills",
                "Mobile optimization critical",
                "Return rate improvements"
            ],
            platforms: ["Instagram", "Snapchat", "Pinterest"],
            icon: "Smartphone",
            trend: "up"
        },
        {
            id: 6,
            title: "Declining Organic Reach",
            category: "Social Media",
            confidence: 89,
            impact: "High",
            timeline: "Ongoing",
            description: "Organic reach will continue declining across major platforms, requiring increased paid media investment and community-building strategies.",
            implications: [
                "Higher paid media budgets",
                "Community platform migration",
                "Email list building priority",
                "Content quality emphasis"
            ],
            platforms: ["Facebook", "Instagram", "LinkedIn"],
            icon: "TrendingDown",
            trend: "down"
        }
    ];

    const categories = ['All', 'Content Creation', 'E-commerce', 'Influencer Marketing', 'Analytics', 'Social Media'];

    const filteredTrends = selectedCategory === 'All'
        ? trendData
        : trendData?.filter(trend => trend?.category === selectedCategory);

    const getImpactColor = (impact) => {
        switch (impact) {
            case 'Critical': return 'text-error bg-error/10 border-error/30';
            case 'High': return 'text-warning bg-warning/10 border-warning/30';
            case 'Medium': return 'text-accent bg-accent/10 border-accent/30';
            default: return 'text-muted-foreground bg-muted border-border';
        }
    };

    const getConfidenceColor = (confidence) => {
        if (confidence >= 90) return 'text-success';
        if (confidence >= 75) return 'text-warning';
        return 'text-muted-foreground';
    };

    return (
        <div className="bg-surface rounded-2xl p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shadow-brand">
                        <Icon name="TrendingUp" size={24} color="white" strokeWidth={2} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Trend Prediction Dashboard</h2>
                        <p className="text-sm text-muted-foreground">AI-powered insights into emerging martech trends</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-sm font-medium text-foreground">Last Updated</div>
                    <div className="text-xs text-muted-foreground">January 15, 2024</div>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
                {categories?.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                ? 'bg-primary text-primary-foreground shadow-brand'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredTrends?.map((trend) => (
                    <div key={trend?.id} className="bg-background rounded-xl p-5 border border-border hover:shadow-card transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center shadow-brand">
                                    <Icon name={trend?.icon} size={20} color="white" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">{trend?.title}</h3>
                                    <p className="text-sm text-muted-foreground">{trend?.category}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Icon
                                    name={trend?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'}
                                    size={16}
                                    className={trend?.trend === 'up' ? 'text-success' : 'text-error'}
                                    strokeWidth={2.5}
                                />
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {trend?.description}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                <div className="text-center">
                                    <div className={`text-lg font-bold ${getConfidenceColor(trend?.confidence)}`}>
                                        {trend?.confidence}%
                                    </div>
                                    <div className="text-xs text-muted-foreground">Confidence</div>
                                </div>
                                <div className="text-center">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getImpactColor(trend?.impact)}`}>
                                        {trend?.impact}
                                    </span>
                                    <div className="text-xs text-muted-foreground mt-1">Impact</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-sm font-medium text-foreground">{trend?.timeline}</div>
                                    <div className="text-xs text-muted-foreground">Timeline</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <h4 className="text-sm font-medium text-foreground mb-2">Key Implications</h4>
                                <div className="space-y-1">
                                    {trend?.implications?.slice(0, 2)?.map((implication, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Icon name="ArrowRight" size={12} className="text-primary" strokeWidth={2.5} />
                                            <span className="text-xs text-muted-foreground">{implication}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-foreground mb-2">Affected Platforms</h4>
                                <div className="flex flex-wrap gap-1">
                                    {trend?.platforms?.map((platform, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                                        >
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendPredictionDashboard;