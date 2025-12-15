import React from 'react';
import Icon from '../../../components/AppIcon';

const CorePositioning = () => {
    const highlights = [
        "Platform-specific growth strategies",
        "Data-driven content planning",
        "Consistent reach & engagement growth"
    ];

    return (
        <section className="py-16 lg:py-20 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    We Don’t Just Post Content — <span className="text-gradient">We Engineer Growth</span>
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    At GetFame, we don’t believe in random posting or copy-paste trends. We create competitive growth strategies based on platform algorithms, audience psychology, and content virality frameworks — designed to grow influence, not just impressions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-start sm:items-center">
                    {highlights.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-surface px-4 py-2 rounded-lg border border-border shadow-sm">
                            <Icon name="CheckCircle" size={18} className="text-success" />
                            <span className="font-medium text-sm lg:text-base">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorePositioning;
