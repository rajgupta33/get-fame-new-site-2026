import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

// Reusable component for each service section (SEO, Social, etc.)
const MarketingServiceSection = ({
    id,
    title,
    content,
    features,
    aiAdvantage,
    platforms,
    badge,
    isEven
}) => {
    // Accordion states for mobile
    const [openAccordion, setOpenAccordion] = useState(null); // 'overview', 'features', 'ai'

    const toggleAccordion = (section) => {
        setOpenAccordion(openAccordion === section ? null : section);
    };

    return (
        <section id={id} className="py-16 lg:py-24 px-6 lg:px-8 border-b border-border/50 scroll-mt-32">
            <div className="max-w-7xl mx-auto">

                {/* Desktop Layout (Grid) */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-start">
                    {/* Text Content */}
                    <div className={`${isEven ? 'order-2' : 'order-1'}`}>
                        {badge && (
                            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                <Icon name="Sparkles" size={12} />
                                <span>{badge}</span>
                            </div>
                        )}
                        <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {content}
                        </p>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4">What We Deliver</h3>
                            <ul className="space-y-3">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                                        <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Visual / AI Advantage / Platforms */}
                    <div className={`${isEven ? 'order-1' : 'order-2'} space-y-8`}>
                        {platforms && (
                            <div className="bg-surface border border-border rounded-xl p-6">
                                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Platforms We Scale</h4>
                                <div className="flex flex-wrap gap-3">
                                    {platforms.map((platform, idx) => (
                                        <span key={idx} className="px-3 py-1.5 bg-muted rounded-md text-sm font-medium text-foreground">
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {aiAdvantage && (
                            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-6 lg:p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Icon name="Cpu" size={64} />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center space-x-2">
                                    <Icon name="Cpu" size={20} className="text-primary" />
                                    <span>The AI Advantage</span>
                                </h3>
                                <ul className="space-y-3 relative z-10">
                                    {aiAdvantage.map((item, idx) => (
                                        <li key={idx} className="flex items-center space-x-2 text-base text-foreground/90">
                                            <Icon name="Zap" size={16} className="text-secondary" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Layout (Accordions) */}
                <div className="lg:hidden flex flex-col space-y-6">
                    {badge && (
                        <div className="inline-flex self-start items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            <Icon name="Sparkles" size={12} />
                            <span>{badge}</span>
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-foreground leading-tight">
                        {title}
                    </h2>

                    {/* Accordion 1: Strategy Overview */}
                    <div className="border border-border rounded-lg bg-surface overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('overview')}
                            className="w-full flex items-center justify-between p-4 text-left font-medium text-foreground bg-muted/20"
                        >
                            <span>Strategy Overview</span>
                            <Icon name={openAccordion === 'overview' ? "Minus" : "Plus"} size={16} className="text-primary" />
                        </button>
                        {openAccordion === 'overview' && (
                            <div className="p-4 text-sm text-muted-foreground leading-relaxed border-t border-border/50">
                                {content}
                            </div>
                        )}
                    </div>

                    {/* Accordion 2: What We Deliver */}
                    <div className="border border-border rounded-lg bg-surface overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('features')}
                            className="w-full flex items-center justify-between p-4 text-left font-medium text-foreground bg-muted/20"
                        >
                            <span>What We Deliver</span>
                            <Icon name={openAccordion === 'features' ? "Minus" : "Plus"} size={16} className="text-primary" />
                        </button>
                        {openAccordion === 'features' && (
                            <div className="p-4 border-t border-border/50">
                                <ul className="space-y-3">
                                    {features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                            <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Accordion 3: AI Advantage (if exists) */}
                    {aiAdvantage && (
                        <div className="border border-border rounded-lg bg-surface overflow-hidden">
                            <button
                                onClick={() => toggleAccordion('ai')}
                                className="w-full flex items-center justify-between p-4 text-left font-medium text-foreground bg-muted/20"
                            >
                                <span className="flex items-center gap-2">
                                    <Icon name="Cpu" size={16} className="text-primary" />
                                    The AI Advantage
                                </span>
                                <Icon name={openAccordion === 'ai' ? "Minus" : "Plus"} size={16} className="text-primary" />
                            </button>
                            {openAccordion === 'ai' && (
                                <div className="p-4 border-t border-border/50 bg-primary/5">
                                    <ul className="space-y-3">
                                        {aiAdvantage.map((item, idx) => (
                                            <li key={idx} className="flex items-center space-x-2 text-sm text-foreground/90">
                                                <Icon name="Zap" size={14} className="text-secondary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Platforms Chips for Mobile */}
                    {platforms && (
                        <div className="pt-2">
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Platforms</h4>
                            <div className="flex flex-wrap gap-2">
                                {platforms.map((platform, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-muted rounded text-xs font-medium text-foreground">
                                        {platform}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default MarketingServiceSection;
