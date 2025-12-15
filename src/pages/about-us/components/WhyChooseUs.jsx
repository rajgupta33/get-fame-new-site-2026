import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: 'Target',
            title: 'Data-Backed Creativity',
            description: "We don't guess. We analyze. Our creative strategies are built on deep market intelligence and consumer behavior data, ensuring every campaign hits the mark."
        },
        {
            icon: 'Zap',
            title: 'Speed & Agility',
            description: "The digital world moves fast. So do we. Our agile teams adhere to rapid deployment cycles, meaning you see results weeks, not months, faster than the competition."
        },
        {
            icon: 'Users',
            title: 'Influencer First',
            description: "We own the largest proprietary network of vetted creators in the region. We don't just 'do' influencer marketing; we wrote the playbook on authentic engagement."
        },
        {
            icon: 'Layers',
            title: 'Full-Stack Solutions',
            description: "From custom code to viral content, we handle it all in-house. No fragmentation, no blame games—just one unified team driving your growth."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Brands Choose GetFame</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    In a crowded market of "full-service" agencies, here is what sets us apart.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reasons.map((reason, index) => (
                    <div key={index} className="flex p-6 bg-surface rounded-xl border border-border shadow-sm hover:shadow-card transition-shadow">
                        <div className="shrink-0 mr-6">
                            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <Icon name={reason.icon} size={28} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
