import React from 'react';
import Button from '../../../components/ui/Button';

const FeaturedCaseStudy = () => {
    return (
        <section className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Visual */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/10 group">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                            {/* Placeholder generic image or gradient if no image available */}
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                <span className="text-white/20 font-bold text-4xl">CASE STUDY</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 w-full">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <span>Featured Transformation</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                            Scaling a Fintech App to 5M+ Users
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            How we used a mix of influencer marketing, performance ads, and SEO to drive 400% growth in user acquisition for our fintech partner in just 6 months.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <span className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">Influencer Growth</span>
                            <span className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">Performance Ads</span>
                            <span className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">App Store Optimization</span>
                        </div>

                        <Button
                            variant="default"
                            iconName="ArrowRight"
                            iconPosition="right"
                            className="gradient-brand"
                        >
                            Read Full Story
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudy;
