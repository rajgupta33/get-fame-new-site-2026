import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SuccessMetrics = () => {
    const [counters, setCounters] = useState({
        campaigns: 0,
        revenue: 0,
        clients: 0,
        growth: 0
    });

    const targetValues = {
        campaigns: 1247,
        revenue: 50.2,
        clients: 500,
        growth: 340
    };

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepDuration = duration / steps;

        const intervals = Object.keys(targetValues)?.map(key => {
            const target = targetValues?.[key];
            const increment = target / steps;
            let current = 0;
            let step = 0;

            return setInterval(() => {
                step++;
                current = Math.min(increment * step, target);

                setCounters(prev => ({
                    ...prev,
                    [key]: key === 'revenue' ? Math.round(current * 10) / 10 : Math.round(current)
                }));

                if (step >= steps) {
                    clearInterval(intervals?.find(interval => interval === this));
                }
            }, stepDuration);
        });

        return () => intervals?.forEach(interval => clearInterval(interval));
    }, []);

    const metrics = [
        {
            key: 'campaigns',
            label: 'Successful Campaigns',
            value: counters?.campaigns,
            suffix: '+',
            icon: 'TrendingUp',
            color: 'text-primary',
            bgColor: 'bg-primary/10'
        },
        {
            key: 'revenue',
            label: 'Revenue Generated',
            value: counters?.revenue,
            prefix: '$',
            suffix: 'M+',
            icon: 'DollarSign',
            color: 'text-success',
            bgColor: 'bg-success/10'
        },
        {
            key: 'clients',
            label: 'Brands Transformed',
            value: counters?.clients,
            suffix: '+',
            icon: 'Users',
            color: 'text-accent',
            bgColor: 'bg-accent/10'
        },
        {
            key: 'growth',
            label: 'Average ROI',
            value: counters?.growth,
            suffix: '%',
            icon: 'Target',
            color: 'text-secondary',
            bgColor: 'bg-secondary/10'
        }
    ];

    const achievements = [
        {
            title: "Google Premier Partner",
            description: "Certified for advanced campaign management",
            icon: "Award",
            year: "2024"
        },
        {
            title: "Meta Business Partner",
            description: "Elite status for social media excellence",
            icon: "Shield",
            year: "2024"
        },
        {
            title: "TikTok Marketing Partner",
            description: "Specialized in viral content strategies",
            icon: "Star",
            year: "2024"
        },
        {
            title: "HubSpot Diamond Partner",
            description: "Top-tier inbound marketing expertise",
            icon: "Diamond",
            year: "2023"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-6">
                        <Icon name="TrendingUp" size={16} className="mr-2" />
                        Proven Results
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Success Speaks <span className="text-gradient">Louder</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Real numbers from real campaigns. Our data-driven approach consistently delivers
                        measurable results that transform brands and drive business growth.
                    </p>
                </div>

                {/* Main Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {metrics?.map((metric) => (
                        <div
                            key={metric?.key}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-surface border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                                <div className={`w-16 h-16 ${metric?.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                    <Icon name={metric?.icon} size={28} className={metric?.color} />
                                </div>

                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-foreground">
                                        {metric?.prefix}{metric?.value}{metric?.suffix}
                                    </div>
                                    <div className="text-muted-foreground font-medium">
                                        {metric?.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievements Section */}
                <div className="bg-surface/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                            Industry Recognition
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Certified partnerships and elite status with leading martech platforms,
                            ensuring access to cutting-edge tools and exclusive beta features.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements?.map((achievement, index) => (
                            <div
                                key={achievement?.title}
                                className="bg-background/50 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                        <Icon name={achievement?.icon} size={20} color="white" />
                                    </div>
                                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                                        {achievement?.year}
                                    </span>
                                </div>

                                <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {achievement?.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {achievement?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Performance Guarantee */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-4 bg-success/10 border border-success/20 rounded-full px-6 py-3">
                        <Icon name="Shield" size={20} className="text-success" />
                        <span className="text-success font-semibold">
                            Performance Guarantee: 3x ROI or we work for free
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessMetrics;