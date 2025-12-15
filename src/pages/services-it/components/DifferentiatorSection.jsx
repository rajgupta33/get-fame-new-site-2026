import React from 'react';
import Icon from '../../../components/AppIcon';

const DifferentiatorSection = () => {
    const differentiators = [
        {
            icon: 'Palette',
            title: 'Modern UI/UX Systems',
            description: 'Clean, premium interfaces inspired by global SaaS brands',
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
        },
        {
            icon: 'Cpu',
            title: 'Advanced Development Stack',
            description: 'Scalable frameworks and cloud-native architecture',
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            icon: 'Lock',
            title: 'Security-First Development',
            description: 'Secure code, encrypted data, compliant systems',
            color: 'text-green-500',
            bg: 'bg-green-500/10'
        },
        {
            icon: 'DollarSign',
            title: 'Affordable Pricing',
            description: 'Enterprise quality without enterprise cost',
            color: 'text-pink-500',
            bg: 'bg-pink-500/10'
        }
    ];

    return (
        <section className="py-12 lg:py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 lg:mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">What Makes Our Technology Different</h2>
                </div>
                {/* 2 columns on mobile, 4 on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {differentiators.map((item, index) => (
                        <div key={index} className="bg-surface p-4 lg:p-6 rounded-xl border border-border hover:border-primary/50 transition-all shadow-card hover:shadow-lg group flex flex-col items-center text-center">
                            <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg ${item.bg} flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform`}>
                                <Icon name={item.icon} size={20} className={`${item.color} lg:w-6 lg:h-6`} />
                            </div>
                            <h3 className="text-sm lg:text-lg font-bold text-foreground mb-1 lg:mb-2 leading-tight">{item.title}</h3>
                            <p className="text-xs lg:text-sm text-muted-foreground line-clamp-2 lg:line-clamp-none">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DifferentiatorSection;
