import React from 'react';
import Icon from '../../../components/AppIcon';

const PainPointsSection = () => {
    const painPoints = [
        "Poor UI that fails to build trust",
        "Slow loading speeds that kill conversions",
        "Apps that break when users increase",
        "High development cost with zero ROI"
    ];

    return (
        <section className="py-12 lg:py-16 px-4 lg:px-8 bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 lg:mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 lg:mb-4">Why Most Websites & Apps Fail After Launch</h2>
                    <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">We fix these problems using modern UI/UX systems, advanced development frameworks, and growth-focused architecture.</p>
                </div>

                {/* Mobile: Horizontal Swipe / Desktop: Grid */}
                <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x space-x-4 lg:grid lg:grid-cols-4 lg:space-x-0 lg:gap-6 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 scrollbar-hide">
                    {painPoints.map((point, index) => (
                        <div key={index} className="flex-none w-[280px] lg:w-auto snap-center bg-surface p-6 rounded-xl border border-destructive/20 hover:border-destructive/40 transition-all shadow-sm group">
                            <div className="flex flex-col items-center text-center space-y-4 h-full justification-center">
                                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                    <Icon name="X" size={24} className="text-destructive" />
                                </div>
                                <p className="font-medium text-foreground">{point}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPointsSection;
