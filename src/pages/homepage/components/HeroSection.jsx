import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e?.clientX / window.innerWidth) * 100,
                y: (e?.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const realTimeMetrics = [
        { label: "Active Campaigns", value: "247", trend: "+12%", icon: "TrendingUp" },
        { label: "Engagement Rate", value: "8.4%", trend: "+2.1%", icon: "Heart" },
        { label: "Conversion Rate", value: "12.7%", trend: "+5.3%", icon: "Target" },
        { label: "ROI Generated", value: "$2.4M", trend: "+18%", icon: "DollarSign" }
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden flex items-center">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div
                    className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
                    style={{
                        background: 'linear-gradient(135deg, #FF1B8D 0%, #00D4FF 100%)',
                        left: `${mousePosition?.x * 0.1}%`,
                        top: `${mousePosition?.y * 0.1}%`,
                        transform: `translate(-50%, -50%) scale(${1 + mousePosition?.x * 0.001})`
                    }}
                />
                <div
                    className="absolute w-64 h-64 rounded-full opacity-15 blur-2xl transition-all duration-700 ease-out"
                    style={{
                        background: 'linear-gradient(225deg, #6366F1 0%, #FF1B8D 100%)',
                        right: `${mousePosition?.x * 0.05}%`,
                        bottom: `${mousePosition?.y * 0.05}%`,
                        transform: `translate(50%, 50%) scale(${1 + mousePosition?.y * 0.001})`
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                                <Icon name="Zap" size={16} className="mr-2" />
                                Premium Martech Agency
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                <span className="block text-foreground">We don't just</span>
                                <span className="block text-gradient">create campaigns,</span>
                                <span className="block text-foreground">we architect</span>
                                <span className="block text-gradient">fame</span>
                            </h1>

                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                Transform your brand from unknown to unforgettable. Where creativity meets conversion, and every campaign is engineered for viral success.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact-strategy-session">
                                <Button
                                    variant="default"
                                    size="lg"
                                    iconName="Calendar"
                                    iconPosition="left"
                                    className="gradient-brand hover:gradient-brand-hover shadow-brand text-white font-semibold px-8 py-4 w-full sm:w-auto justify-center"
                                >
                                    Get Free Growth Audit
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Interactive Metrics Dashboard - Retained as 3D Visual */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative">
                            <div className="absolute inset-0 gradient-brand rounded-3xl blur-xl opacity-20"></div>
                            <div className="relative bg-surface/80 backdrop-blur-md rounded-3xl p-8 border border-border shadow-floating">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-foreground">Live Campaign Metrics</h3>
                                    <div className="flex items-center space-x-2 text-success">
                                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium">Live</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {realTimeMetrics?.map((metric, index) => (
                                        <div
                                            key={metric?.label}
                                            className={`bg-background/50 rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-pointer ${index % 2 === 0 ? 'hover:shadow-brand' : 'hover:shadow-card'
                                                }`}
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <Icon
                                                    name={metric?.icon}
                                                    size={20}
                                                    className="text-primary"
                                                />
                                                <span className="text-xs text-success font-medium bg-success/10 px-2 py-1 rounded-full">
                                                    {metric?.trend}
                                                </span>
                                            </div>
                                            <div className="text-2xl font-bold text-foreground mb-1">
                                                {metric?.value}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {metric?.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
                    <Icon name="ChevronDown" size={20} className="text-primary" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;