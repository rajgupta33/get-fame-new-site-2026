import React from 'react';
import Icon from '../../../components/AppIcon';

const PositioningSection = () => {
    const points = [
        "Not a marketing agency",
        "A Fame Growth Engine",
        "Architecting 360° Dominance"
    ];

    return (
        <section className="py-12 bg-surface border-y border-border/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                    <div className="flex-shrink-0">
                        <h2 className="text-2xl font-bold text-foreground">
                            We don't just market. <span className="text-gradient">We Architect Fame.</span>
                        </h2>
                    </div>

                    <div className="hidden md:block h-12 w-[1px] bg-border"></div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full md:w-auto justify-end">
                        {points.map((point, index) => (
                            <div key={index} className="flex items-center space-x-2 text-muted-foreground font-medium">
                                <Icon name="CheckCircle" size={18} className="text-primary flex-shrink-0" />
                                <span className="whitespace-nowrap">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PositioningSection;
